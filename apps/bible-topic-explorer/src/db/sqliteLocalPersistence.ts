import type { SQLiteDatabase } from 'expo-sqlite';
import type { HighlightTone, LocalPersistence, ReadingHistoryEntry, Reflection, SavedReference, VerseHighlight, VerseIdentity, VerseNote } from '../product/adapters';
import { defaultPreferences, type LocalPreferences, type ThemePreference } from '../product/preferences';

export class SQLiteLocalPersistence implements LocalPersistence {
  private ready: Promise<void> | null = null;
  constructor(private readonly db: SQLiteDatabase) {}

  private ensureReady(): Promise<void> {
    if (!this.ready) this.ready = this.db.execAsync(`
      CREATE TABLE IF NOT EXISTS app_saved_references (
        book_id TEXT NOT NULL, chapter INTEGER NOT NULL, verse INTEGER NOT NULL, saved_at TEXT NOT NULL,
        PRIMARY KEY (book_id, chapter, verse)
      );
      CREATE TABLE IF NOT EXISTS app_reading_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT, book_id TEXT NOT NULL, chapter INTEGER NOT NULL,
        verse INTEGER, opened_at TEXT NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_app_reading_history_opened ON app_reading_history(opened_at DESC);
      CREATE TABLE IF NOT EXISTS app_reflections (
        id TEXT PRIMARY KEY, body TEXT NOT NULL, updated_at TEXT NOT NULL,
        book_id TEXT, chapter INTEGER, verse INTEGER
      );
      CREATE TABLE IF NOT EXISTS app_verse_notes (
        translation_id TEXT NOT NULL DEFAULT 'rv1909', book_id TEXT NOT NULL,
        chapter INTEGER NOT NULL, source_verse_label TEXT NOT NULL, body TEXT NOT NULL,
        updated_at TEXT NOT NULL, PRIMARY KEY (translation_id, book_id, chapter, source_verse_label)
      );
      CREATE TABLE IF NOT EXISTS app_verse_highlights (
        translation_id TEXT NOT NULL DEFAULT 'rv1909', book_id TEXT NOT NULL,
        chapter INTEGER NOT NULL, source_verse_label TEXT NOT NULL,
        tone TEXT NOT NULL CHECK (tone IN ('rose','lavender','peach')),
        updated_at TEXT NOT NULL, PRIMARY KEY (translation_id, book_id, chapter, source_verse_label)
      );
      CREATE TABLE IF NOT EXISTS app_preferences (
        id INTEGER PRIMARY KEY CHECK (id = 1), theme TEXT NOT NULL, font_scale REAL NOT NULL,
        reminder_enabled INTEGER NOT NULL, reminder_time TEXT NOT NULL, onboarding_complete INTEGER NOT NULL
      );
    `);
    return this.ready;
  }

  async getPreferences(): Promise<LocalPreferences> {
    await this.ensureReady();
    const row = await this.db.getFirstAsync<{theme:string;font_scale:number;reminder_enabled:number;reminder_time:string;onboarding_complete:number}>(
      'SELECT theme, font_scale, reminder_enabled, reminder_time, onboarding_complete FROM app_preferences WHERE id = 1'
    );
    if (!row) return defaultPreferences;
    const theme: ThemePreference = row.theme === 'light' || row.theme === 'dark' ? row.theme : 'system';
    return { theme, fontScale: row.font_scale, reminderEnabled: row.reminder_enabled === 1, reminderTime: row.reminder_time, onboardingComplete: row.onboarding_complete === 1 };
  }

  async setPreferences(value: LocalPreferences): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync(
      `INSERT INTO app_preferences (id, theme, font_scale, reminder_enabled, reminder_time, onboarding_complete)
       VALUES (1, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET theme=excluded.theme, font_scale=excluded.font_scale,
       reminder_enabled=excluded.reminder_enabled, reminder_time=excluded.reminder_time,
       onboarding_complete=excluded.onboarding_complete`,
      value.theme, value.fontScale, value.reminderEnabled ? 1 : 0, value.reminderTime, value.onboardingComplete ? 1 : 0
    );
  }

  async listSavedReferences(): Promise<readonly SavedReference[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{book_id:string;chapter:number;verse:number;saved_at:string}>(
      'SELECT book_id, chapter, verse, saved_at FROM app_saved_references ORDER BY saved_at DESC'
    );
    return rows.map(row => ({ bookId: row.book_id, chapter: row.chapter, verse: row.verse, savedAt: row.saved_at }));
  }

  async saveReference(value: SavedReference): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync('INSERT OR REPLACE INTO app_saved_references (book_id, chapter, verse, saved_at) VALUES (?, ?, ?, ?)', value.bookId, value.chapter, value.verse, value.savedAt);
  }

  async removeSavedReference(value: Pick<SavedReference, 'bookId'|'chapter'|'verse'>): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync('DELETE FROM app_saved_references WHERE book_id = ? AND chapter = ? AND verse = ?', value.bookId, value.chapter, value.verse);
  }

  async listReadingHistory(): Promise<readonly ReadingHistoryEntry[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{book_id:string;chapter:number;verse:number|null;opened_at:string}>('SELECT book_id, chapter, verse, opened_at FROM app_reading_history ORDER BY opened_at DESC, id DESC LIMIT 50');
    return rows.map(row => ({ bookId: row.book_id, chapter: row.chapter, ...(row.verse == null ? {} : {verse: row.verse}), openedAt: row.opened_at }));
  }

  async recordReading(value: ReadingHistoryEntry): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync('INSERT INTO app_reading_history (book_id, chapter, verse, opened_at) VALUES (?, ?, ?, ?)', value.bookId, value.chapter, value.verse ?? null, value.openedAt);
  }

  async listReflections(): Promise<readonly Reflection[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{id:string;body:string;updated_at:string;book_id:string|null;chapter:number|null;verse:number|null}>('SELECT id, body, updated_at, book_id, chapter, verse FROM app_reflections ORDER BY updated_at DESC');
    return rows.map(row => ({ id: row.id, body: row.body, updatedAt: row.updated_at, ...(row.book_id != null && row.chapter != null && row.verse != null ? {reference:{bookId:row.book_id,chapter:row.chapter,verse:row.verse}} : {}) }));
  }

  async upsertReflection(value: Reflection): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync(
      `INSERT INTO app_reflections (id, body, updated_at, book_id, chapter, verse) VALUES (?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET body=excluded.body, updated_at=excluded.updated_at, book_id=excluded.book_id, chapter=excluded.chapter, verse=excluded.verse`,
      value.id, value.body, value.updatedAt, value.reference?.bookId ?? null, value.reference?.chapter ?? null, value.reference?.verse ?? null
    );
  }
  /** Additive SQLite tables preserve all existing bookmarks, history, reflections and preferences. */
  async listVerseNotes(): Promise<readonly VerseNote[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{translation_id:string;book_id:string;chapter:number;source_verse_label:string;body:string;updated_at:string}>(
      "SELECT translation_id,book_id,chapter,source_verse_label,body,updated_at FROM app_verse_notes WHERE translation_id='rv1909'"
    );
    return rows.map(r => ({translationId:'rv1909',bookId:r.book_id,chapter:r.chapter,sourceVerseLabel:r.source_verse_label,body:r.body,updatedAt:r.updated_at}));
  }

  async upsertVerseNote(note: VerseNote): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync(`INSERT INTO app_verse_notes (translation_id,book_id,chapter,source_verse_label,body,updated_at)
      VALUES (?,?,?,?,?,?) ON CONFLICT(translation_id,book_id,chapter,source_verse_label)
      DO UPDATE SET body=excluded.body,updated_at=excluded.updated_at`,
      'rv1909',note.bookId,note.chapter,note.sourceVerseLabel,note.body,note.updatedAt);
  }

  async deleteVerseNote(ref: VerseIdentity): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync("DELETE FROM app_verse_notes WHERE translation_id='rv1909' AND book_id=? AND chapter=? AND source_verse_label=?",ref.bookId,ref.chapter,ref.sourceVerseLabel);
  }

  async listHighlights(): Promise<readonly VerseHighlight[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{translation_id:string;book_id:string;chapter:number;source_verse_label:string;tone:string;updated_at:string}>(
      "SELECT translation_id,book_id,chapter,source_verse_label,tone,updated_at FROM app_verse_highlights WHERE translation_id='rv1909'"
    );
    return rows.map(r => ({translationId:'rv1909',bookId:r.book_id,chapter:r.chapter,sourceVerseLabel:r.source_verse_label,tone:(r.tone==='lavender'||r.tone==='peach'?r.tone:'rose') as HighlightTone,updatedAt:r.updated_at}));
  }

  async setHighlight(ref: VerseIdentity, tone: HighlightTone): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync(`INSERT INTO app_verse_highlights (translation_id,book_id,chapter,source_verse_label,tone,updated_at)
      VALUES (?,?,?,?,?,?) ON CONFLICT(translation_id,book_id,chapter,source_verse_label)
      DO UPDATE SET tone=excluded.tone,updated_at=excluded.updated_at`,
      'rv1909',ref.bookId,ref.chapter,ref.sourceVerseLabel,tone,new Date().toISOString());
  }

  async removeHighlight(ref: VerseIdentity): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync("DELETE FROM app_verse_highlights WHERE translation_id='rv1909' AND book_id=? AND chapter=? AND source_verse_label=?",ref.bookId,ref.chapter,ref.sourceVerseLabel);
  }

}

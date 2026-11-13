import type { SQLiteDatabase } from 'expo-sqlite';
import type { HighlightTone, LocalPersistence, ReadingHistoryEntry, Reflection, SavedReference, VerseHighlight, VerseIdentity, VerseNote } from '../product/adapters';
import { defaultPreferences, visibleTheme, type LocalPreferences } from '../product/preferences';

export class SQLiteLocalPersistence implements LocalPersistence {
  private ready: Promise<void> | null = null;
  constructor(private readonly db: SQLiteDatabase) {}

  private ensureReady(): Promise<void> {
    if (!this.ready) this.ready = this.db.execAsync(`
      CREATE TABLE IF NOT EXISTS app_saved_references (
        book_id TEXT NOT NULL, chapter INTEGER NOT NULL, verse INTEGER NOT NULL, saved_at TEXT NOT NULL,
        PRIMARY KEY (book_id, chapter, verse)
      );
      CREATE TABLE IF NOT EXISTS app_saved_reference_details (
        book_id TEXT NOT NULL, chapter INTEGER NOT NULL, verse INTEGER NOT NULL,
        title TEXT NOT NULL DEFAULT '', topic TEXT NOT NULL DEFAULT '',
        tone TEXT NOT NULL DEFAULT 'rose' CHECK(tone IN ('rose','lavender','peach')),
        updated_at TEXT NOT NULL, PRIMARY KEY (book_id,chapter,verse)
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
      CREATE TABLE IF NOT EXISTS app_reflection_titles (
        id TEXT PRIMARY KEY, title TEXT NOT NULL DEFAULT ''
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
      CREATE TABLE IF NOT EXISTS app_reminder_plan (
        id INTEGER PRIMARY KEY CHECK(id = 1), plan_id TEXT NOT NULL,
        title TEXT NOT NULL, updated_at TEXT NOT NULL
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
    // Migrate only the theme field; never reset or rewrite notes, marks, books or other preferences.
    const theme = visibleTheme(row.theme);
    if (row.theme !== theme) {
      await this.db.runAsync('UPDATE app_preferences SET theme = ? WHERE id = 1 AND theme = ?', theme, row.theme);
    }
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
      visibleTheme(value.theme), value.fontScale, value.reminderEnabled ? 1 : 0, value.reminderTime, value.onboardingComplete ? 1 : 0
    );
  }

  async listSavedReferences(): Promise<readonly SavedReference[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{book_id:string;book_name?:string|null;chapter:number;verse:number;saved_at:string;title?:string|null;topic?:string|null;tone?:string|null}>(
      'SELECT s.book_id,b.default_name_es AS book_name,s.chapter,s.verse,s.saved_at,d.title,d.topic,d.tone FROM app_saved_references s LEFT JOIN books b ON b.id=s.book_id LEFT JOIN app_saved_reference_details d ON d.book_id=s.book_id AND d.chapter=s.chapter AND d.verse=s.verse ORDER BY s.saved_at DESC'
    );
    return rows.map(row => ({ bookId: row.book_id, chapter: row.chapter, verse: row.verse, savedAt: row.saved_at,
      ...(row.book_name?{bookName:row.book_name}:{}),
      ...(row.title?{title:row.title}:{}),...(row.topic?{topic:row.topic}:{}),
      ...(row.tone==='rose'||row.tone==='lavender'||row.tone==='peach'?{tone:row.tone}:{}) }));
  }

  async saveReference(value: SavedReference): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync('INSERT OR REPLACE INTO app_saved_references (book_id, chapter, verse, saved_at) VALUES (?, ?, ?, ?)', value.bookId, value.chapter, value.verse, value.savedAt);
  }

  async removeSavedReference(value: Pick<SavedReference, 'bookId'|'chapter'|'verse'>): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync('DELETE FROM app_saved_references WHERE book_id = ? AND chapter = ? AND verse = ?', value.bookId, value.chapter, value.verse);
    await this.db.runAsync('DELETE FROM app_saved_reference_details WHERE book_id = ? AND chapter = ? AND verse = ?',value.bookId,value.chapter,value.verse);
  }

  async setSavedReferenceDetails(ref:Pick<SavedReference,'bookId'|'chapter'|'verse'>,title:string,topic:string,tone:HighlightTone):Promise<void>{
    await this.ensureReady();
    if(title.length>120||topic.length>80)throw new Error('Título o tema demasiado largo');
    await this.db.runAsync('INSERT INTO app_saved_reference_details(book_id,chapter,verse,title,topic,tone,updated_at) VALUES(?,?,?,?,?,?,?) ON CONFLICT(book_id,chapter,verse) DO UPDATE SET title=excluded.title,topic=excluded.topic,tone=excluded.tone,updated_at=excluded.updated_at',
      ref.bookId,ref.chapter,ref.verse,title.trim(),topic.trim(),tone,new Date().toISOString());
  }

  async listReadingHistory(): Promise<readonly ReadingHistoryEntry[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{book_id:string;book_name?:string|null;chapter:number;verse:number|null;opened_at:string}>(
      'SELECT h.book_id,b.default_name_es AS book_name,h.chapter,h.verse,h.opened_at FROM app_reading_history h LEFT JOIN books b ON b.id=h.book_id ORDER BY h.opened_at DESC, h.id DESC LIMIT 500');
    return rows.map(row => ({ bookId: row.book_id, ...(row.book_name?{bookName:row.book_name}:{}), chapter: row.chapter, ...(row.verse == null ? {} : {verse: row.verse}), openedAt: row.opened_at }));
  }

  async recordReading(value: ReadingHistoryEntry): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync('INSERT INTO app_reading_history (book_id, chapter, verse, opened_at) VALUES (?, ?, ?, ?)', value.bookId, value.chapter, value.verse ?? null, value.openedAt);
  }

  async listReflections(): Promise<readonly Reflection[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{id:string;body:string;updated_at:string;book_id:string|null;chapter:number|null;verse:number|null;title?:string|null}>(
      'SELECT r.id,r.body,r.updated_at,r.book_id,r.chapter,r.verse,t.title FROM app_reflections r LEFT JOIN app_reflection_titles t ON t.id=r.id ORDER BY r.updated_at DESC');
    return rows.map(row => ({ id: row.id, body: row.body, updatedAt: row.updated_at, ...(row.title?{title:row.title}:{}), ...(row.book_id != null && row.chapter != null && row.verse != null ? {reference:{bookId:row.book_id,chapter:row.chapter,verse:row.verse}} : {}) }));
  }

  async upsertReflection(value: Reflection): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync(
      `INSERT INTO app_reflections (id, body, updated_at, book_id, chapter, verse) VALUES (?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET body=excluded.body, updated_at=excluded.updated_at, book_id=excluded.book_id, chapter=excluded.chapter, verse=excluded.verse`,
      value.id, value.body, value.updatedAt, value.reference?.bookId ?? null, value.reference?.chapter ?? null, value.reference?.verse ?? null
    );
    if(value.title!==undefined) await this.db.runAsync('INSERT INTO app_reflection_titles(id,title) VALUES(?,?) ON CONFLICT(id) DO UPDATE SET title=excluded.title',value.id,value.title.trim());
  }
  async deleteReflection(id:string):Promise<void>{
    await this.ensureReady();
    await this.db.runAsync('DELETE FROM app_reflection_titles WHERE id=?',id);
    await this.db.runAsync('DELETE FROM app_reflections WHERE id=?',id);
  }
  async getReminderPlan():Promise<{planId:string;title:string}>{
    await this.ensureReady();
    const row=await this.db.getFirstAsync<{plan_id:string;title:string}>('SELECT plan_id,title FROM app_reminder_plan WHERE id=1');
    return {planId:row?.plan_id??'encuentro',title:row?.title??'Mi lectura bíblica'};
  }
  async setReminderPlan(planId:string,title:string):Promise<void>{
    await this.ensureReady();
    if(!/^[a-z0-9_-]{1,80}$/.test(planId)||title.length>90)throw new Error('Recordatorio inválido');
    await this.db.runAsync('INSERT INTO app_reminder_plan(id,plan_id,title,updated_at) VALUES(1,?,?,?) ON CONFLICT(id) DO UPDATE SET plan_id=excluded.plan_id,title=excluded.title,updated_at=excluded.updated_at',
      planId,title.trim()||'Mi lectura bíblica',new Date().toISOString());
  }
  /** Additive SQLite tables preserve all existing bookmarks, history, reflections and preferences. */
  async listVerseNotes(): Promise<readonly VerseNote[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{translation_id:string;book_id:string;chapter:number;source_verse_label:string;body:string;updated_at:string;book_name:string|null;book_order:number|null}>(
      "SELECT n.translation_id,n.book_id,n.chapter,n.source_verse_label,n.body,n.updated_at, b.default_name_es AS book_name, tb.order_index AS book_order FROM app_verse_notes n LEFT JOIN books b ON b.id=n.book_id LEFT JOIN translation_books tb ON tb.translation_id=n.translation_id AND tb.book_id=n.book_id WHERE n.translation_id='rv1909' ORDER BY tb.order_index, n.chapter, CAST(n.source_verse_label AS INTEGER), n.source_verse_label"
    );
    return rows.map(r => ({translationId:'rv1909',bookId:r.book_id,chapter:r.chapter,sourceVerseLabel:r.source_verse_label,bookName:r.book_name??r.book_id,bookOrder:r.book_order??999,body:r.body,updatedAt:r.updated_at}));
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
    const rows = await this.db.getAllAsync<{translation_id:string;book_id:string;chapter:number;source_verse_label:string;tone:string;updated_at:string;book_name:string|null;book_order:number|null}>(
      "SELECT n.translation_id,n.book_id,n.chapter,n.source_verse_label,n.tone,n.updated_at, b.default_name_es AS book_name, tb.order_index AS book_order FROM app_verse_highlights n LEFT JOIN books b ON b.id=n.book_id LEFT JOIN translation_books tb ON tb.translation_id=n.translation_id AND tb.book_id=n.book_id WHERE n.translation_id='rv1909' ORDER BY tb.order_index, n.chapter, CAST(n.source_verse_label AS INTEGER), n.source_verse_label"
    );
    return rows.map(r => ({translationId:'rv1909',bookId:r.book_id,chapter:r.chapter,sourceVerseLabel:r.source_verse_label,bookName:r.book_name??r.book_id,bookOrder:r.book_order??999,tone:(r.tone==='lavender'||r.tone==='peach'?r.tone:'rose') as HighlightTone,updatedAt:r.updated_at}));
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

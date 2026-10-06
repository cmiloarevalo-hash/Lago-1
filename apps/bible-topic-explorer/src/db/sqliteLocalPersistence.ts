import type { SQLiteDatabase } from 'expo-sqlite';
import type { LocalPersistence, ReadingHistoryEntry, Reflection, SavedReference } from '../product/adapters';
import { defaultPreferences, type LocalPreferences } from '../product/preferences';

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
    `);
    return this.ready;
  }

  // Preference durability is intentionally M3.7; keep the M3.1 boundary compatible without anticipating it.
  async getPreferences(): Promise<LocalPreferences> { return defaultPreferences; }
  async setPreferences(_value: LocalPreferences): Promise<void> {}

  async listSavedReferences(): Promise<readonly SavedReference[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{book_id:string;chapter:number;verse:number;saved_at:string}>(
      'SELECT book_id, chapter, verse, saved_at FROM app_saved_references ORDER BY saved_at DESC'
    );
    return rows.map(row => ({ bookId: row.book_id, chapter: row.chapter, verse: row.verse, savedAt: row.saved_at }));
  }

  async saveReference(value: SavedReference): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync(
      'INSERT OR REPLACE INTO app_saved_references (book_id, chapter, verse, saved_at) VALUES (?, ?, ?, ?)',
      value.bookId, value.chapter, value.verse, value.savedAt
    );
  }

  async removeSavedReference(value: Pick<SavedReference, 'bookId'|'chapter'|'verse'>): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync('DELETE FROM app_saved_references WHERE book_id = ? AND chapter = ? AND verse = ?', value.bookId, value.chapter, value.verse);
  }

  async listReadingHistory(): Promise<readonly ReadingHistoryEntry[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{book_id:string;chapter:number;verse:number|null;opened_at:string}>(
      'SELECT book_id, chapter, verse, opened_at FROM app_reading_history ORDER BY opened_at DESC, id DESC LIMIT 50'
    );
    return rows.map(row => ({ bookId: row.book_id, chapter: row.chapter, ...(row.verse == null ? {} : {verse: row.verse}), openedAt: row.opened_at }));
  }

  async recordReading(value: ReadingHistoryEntry): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync(
      'INSERT INTO app_reading_history (book_id, chapter, verse, opened_at) VALUES (?, ?, ?, ?)',
      value.bookId, value.chapter, value.verse ?? null, value.openedAt
    );
  }

  async listReflections(): Promise<readonly Reflection[]> {
    await this.ensureReady();
    const rows = await this.db.getAllAsync<{id:string;body:string;updated_at:string;book_id:string|null;chapter:number|null;verse:number|null}>(
      'SELECT id, body, updated_at, book_id, chapter, verse FROM app_reflections ORDER BY updated_at DESC'
    );
    return rows.map(row => ({
      id: row.id, body: row.body, updatedAt: row.updated_at,
      ...(row.book_id != null && row.chapter != null && row.verse != null ? {reference:{bookId:row.book_id,chapter:row.chapter,verse:row.verse}} : {})
    }));
  }

  async upsertReflection(value: Reflection): Promise<void> {
    await this.ensureReady();
    await this.db.runAsync(
      `INSERT INTO app_reflections (id, body, updated_at, book_id, chapter, verse) VALUES (?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET body=excluded.body, updated_at=excluded.updated_at,
       book_id=excluded.book_id, chapter=excluded.chapter, verse=excluded.verse`,
      value.id, value.body, value.updatedAt, value.reference?.bookId ?? null, value.reference?.chapter ?? null, value.reference?.verse ?? null
    );
  }
}

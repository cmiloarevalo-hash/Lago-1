import type { LocalPreferences } from './preferences';
import type { MatchType } from '../db/model';

export interface BibleVerse {
  translationId: 'rv1909';
  bookId: string;
  bookName: string;
  chapter: number;
  verse: number;
  sourceVerseLabel: string;
  text: string;
}

export interface BibleSearchHit extends BibleVerse {
  matchType: MatchType;
  explanation: string;
}

/** Read-only boundary over the authoritative bundled RV1909 SQLite corpus. */
export interface BibleRepository {
  getChapter(bookId: string, chapter: number): Promise<readonly BibleVerse[]>;
  getBookChapterCount(bookId: string): Promise<number>;
  searchLiteral(query: string, limit?: number): Promise<readonly BibleSearchHit[]>;
  searchTopic(topicId: string, limit?: number): Promise<readonly BibleSearchHit[]>;
}

export interface SavedReference {
  bookId: string;
  chapter: number;
  verse: number;
  savedAt: string;
}

export interface ReadingHistoryEntry {
  bookId: string;
  chapter: number;
  verse?: number;
  openedAt: string;
}

export interface Reflection {
  id: string;
  body: string;
  updatedAt: string;
  reference?: Pick<SavedReference, 'bookId' | 'chapter' | 'verse'>;
}

/** Device-local persistence boundary. Implementations must not require accounts or network access. */
export interface LocalPersistence {
  getPreferences(): Promise<LocalPreferences>;
  setPreferences(value: LocalPreferences): Promise<void>;
  listSavedReferences(): Promise<readonly SavedReference[]>;
  saveReference(value: SavedReference): Promise<void>;
  removeSavedReference(value: Pick<SavedReference, 'bookId' | 'chapter' | 'verse'>): Promise<void>;
  listReadingHistory(): Promise<readonly ReadingHistoryEntry[]>;
  recordReading(value: ReadingHistoryEntry): Promise<void>;
  listReflections(): Promise<readonly Reflection[]>;
  upsertReflection(value: Reflection): Promise<void>;
}

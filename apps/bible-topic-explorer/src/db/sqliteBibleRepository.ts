import type { SQLiteDatabase } from 'expo-sqlite';
import type { BibleRepository, BibleSearchHit, BibleVerse } from '../product/adapters';
import { RUNTIME_TRANSLATION_ID } from './model';

type ChapterRow = {
  bookId: string;
  bookName: string;
  chapter: number;
  verse: number | null;
  sourceVerseLabel: string;
  text: string;
};

/** Read-only adapter for the authoritative bundled RV1909 corpus. */
export class SQLiteBibleRepository implements BibleRepository {
  constructor(private readonly db: Pick<SQLiteDatabase, 'getAllAsync'>) {}

  async getChapter(bookId: string, chapter: number): Promise<readonly BibleVerse[]> {
    if (!Number.isInteger(chapter) || chapter < 1) return [];

    const rows = await this.db.getAllAsync<ChapterRow>(
      `SELECT v.book_id AS bookId,
              b.default_name_es AS bookName,
              v.chapter_num AS chapter,
              v.verse_start AS verse,
              v.source_verse_label AS sourceVerseLabel,
              v.display_text AS text
         FROM verses v
         JOIN books b ON b.id = v.book_id
        WHERE v.translation_id = ?
          AND (v.book_id = ? OR b.default_name_es = ?)
          AND v.chapter_num = ?
        ORDER BY v.id`,
      RUNTIME_TRANSLATION_ID,
      bookId,
      bookId,
      chapter,
    );

    return rows.map((row) => ({
      translationId: RUNTIME_TRANSLATION_ID,
      bookId: row.bookId,
      bookName: row.bookName,
      chapter: row.chapter,
      verse: row.verse ?? Number.parseInt(row.sourceVerseLabel, 10),
      sourceVerseLabel: row.sourceVerseLabel,
      text: row.text,
    }));
  }

  async searchLiteral(_query: string, _limit?: number): Promise<readonly BibleSearchHit[]> {
    throw new Error('M3.3 searchLiteral is not implemented');
  }

  async searchTopic(_topicId: string, _limit?: number): Promise<readonly BibleSearchHit[]> {
    throw new Error('M3.4 searchTopic is not implemented');
  }
}

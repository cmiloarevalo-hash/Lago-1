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

type LiteralRow = ChapterRow;

const DEFAULT_LITERAL_LIMIT = 50;
const MAX_LITERAL_LIMIT = 100;

function literalNeedle(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.length >= 2 && trimmed.startsWith('"') && trimmed.endsWith('"')) return trimmed.slice(1, -1).trim();
  return trimmed;
}

function literalLimit(limit?: number): number {
  if (limit === undefined) return DEFAULT_LITERAL_LIMIT;
  if (!Number.isFinite(limit)) return DEFAULT_LITERAL_LIMIT;
  return Math.max(1, Math.min(MAX_LITERAL_LIMIT, Math.trunc(limit)));
}

function escapeLike(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/%/g, '\\%').replace(/_/g, '\\_');
}

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

  async searchLiteral(query: string, limit?: number): Promise<readonly BibleSearchHit[]> {
    const needle = literalNeedle(query);
    if (!needle) return [];
    const rows = await this.db.getAllAsync<LiteralRow>(
      `SELECT v.book_id AS bookId,
              b.default_name_es AS bookName,
              v.chapter_num AS chapter,
              v.verse_start AS verse,
              v.source_verse_label AS sourceVerseLabel,
              v.display_text AS text
         FROM verses v
         JOIN books b ON b.id = v.book_id
         JOIN translation_books tb ON tb.translation_id = v.translation_id AND tb.book_id = v.book_id
        WHERE v.translation_id = ?
          AND lower(v.display_text) LIKE '%' || lower(?) || '%' ESCAPE '\\'
        ORDER BY tb.order_index, v.chapter_num, v.id
        LIMIT ?`,
      RUNTIME_TRANSLATION_ID,
      escapeLike(needle),
      literalLimit(limit),
    );
    return rows.map((row) => ({
      translationId: RUNTIME_TRANSLATION_ID,
      bookId: row.bookId,
      bookName: row.bookName,
      chapter: row.chapter,
      verse: row.verse ?? Number.parseInt(row.sourceVerseLabel, 10),
      sourceVerseLabel: row.sourceVerseLabel,
      text: row.text,
      matchType: 'literal_exact' as const,
      explanation: `Coincidencia literal en RV1909: “${needle}”.`,
    }));
  }

  async searchTopic(_topicId: string, _limit?: number): Promise<readonly BibleSearchHit[]> {
    throw new Error('M3.4 searchTopic is not implemented');
  }
}

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { describe, expect, it } from 'vitest';
import { DATABASE_NAME, RUNTIME_TRANSLATION_ID } from './model';

const REQUIRED_TABLES = [
  'books',
  'canon_profile_books',
  'canon_profiles',
  'source_metadata',
  'topic_definitions',
  'topic_terms',
  'translation_books',
  'translations',
  'verses',
  'versification_profiles',
].sort();

describe('I02 SQLite model', () => {
  it('creates all frozen MVP tables in real SQLite', () => {
    const sql = readFileSync(resolve(process.cwd(), 'data/schema.sql'), 'utf8');
    const db = new DatabaseSync(':memory:');
    db.exec(sql);

    const tables = db
      .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name")
      .all()
      .map((row) => String((row as { name: unknown }).name));

    expect(tables).toEqual(REQUIRED_TABLES);
    db.close();
  });

  it('keeps the frozen runtime database identity', () => {
    expect(DATABASE_NAME).toBe('bible-topic-explorer.db');
    expect(RUNTIME_TRANSLATION_ID).toBe('rv1909');
  });
});

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { describe, expect, it } from 'vitest';

const dbPath = resolve(process.cwd(), 'assets/data/bible-topic-explorer.db');
const manifest = JSON.parse(
  readFileSync(resolve(process.cwd(), 'data/source-manifest.json'), 'utf8'),
) as {
  release: string;
  sha256: string;
  expected_books: number;
  expected_verses_for_release: number;
};
const report = JSON.parse(
  readFileSync(resolve(process.cwd(), 'data/ingest-report.json'), 'utf8'),
) as {
  source_release: string;
  source_sha256: string;
  database_sha256: string;
  book_count: number;
  verse_count: number;
};

describe('I03 RV1909 ingestion', () => {
  it('pins provenance and release-specific corpus integrity', () => {
    expect(report.source_release).toBe(manifest.release);
    expect(report.source_sha256).toBe(manifest.sha256);
    expect(report.book_count).toBe(manifest.expected_books);
    expect(report.verse_count).toBe(manifest.expected_verses_for_release);
    expect(report.database_sha256).toMatch(/^[0-9a-f]{64}$/);
  });

  it('contains exactly the approved runtime coverage and no duplicate refs', () => {
    const db = new DatabaseSync(dbPath, { readOnly: true });
    const translationBooks = db
      .prepare("SELECT COUNT(*) AS count FROM translation_books WHERE translation_id='rv1909' AND present=1")
      .get() as { count: number };
    const verses = db.prepare('SELECT COUNT(*) AS count FROM verses').get() as { count: number };
    const distinctRefs = db
      .prepare('SELECT COUNT(DISTINCT source_ref) AS count FROM verses')
      .get() as { count: number };
    const integrity = db.prepare('PRAGMA integrity_check').get() as { integrity_check: string };

    expect(translationBooks.count).toBe(66);
    expect(verses.count).toBe(31084);
    expect(distinctRefs.count).toBe(31084);
    expect(integrity.integrity_check).toBe('ok');
    db.close();
  });

  it('preserves accented Spanish display text after markup removal', () => {
    const db = new DatabaseSync(dbPath, { readOnly: true });
    const row = db
      .prepare("SELECT display_text FROM verses WHERE source_ref='Gen.1.1'")
      .get() as { display_text: string };

    expect(row.display_text).toBe('EN el principio crió Dios los cielos y la tierra.');
    expect(row.display_text).not.toContain('<sup>');
    db.close();
  });

  it('stores explicit source/license metadata', () => {
    const db = new DatabaseSync(dbPath, { readOnly: true });
    const row = db
      .prepare("SELECT release, sha256, license_identifier, source_format FROM source_metadata WHERE id='rv1909-v2026-09-18'")
      .get() as {
        release: string;
        sha256: string;
        license_identifier: string;
        source_format: string;
      };

    expect(row).toMatchObject({
      release: 'v2026-09-18',
      sha256: manifest.sha256,
      license_identifier: 'CC0-1.0',
      source_format: 'aquifer_json_v1',
    });
    db.close();
  });
});

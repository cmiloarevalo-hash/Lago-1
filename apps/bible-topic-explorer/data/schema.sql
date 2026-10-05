PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS source_metadata (
  id TEXT PRIMARY KEY,
  provider TEXT NOT NULL,
  source_url TEXT NOT NULL,
  release TEXT NOT NULL,
  asset_name TEXT NOT NULL,
  sha256 TEXT NOT NULL,
  source_format TEXT NOT NULL,
  retrieved_at TEXT NOT NULL,
  license_identifier TEXT NOT NULL,
  license_url TEXT NOT NULL,
  attribution_text TEXT NOT NULL DEFAULT '',
  modification_notice TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS versification_profiles (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  source TEXT NOT NULL,
  version TEXT NOT NULL,
  mapping_status TEXT NOT NULL CHECK (mapping_status IN ('native','mapped','unknown'))
);

CREATE TABLE IF NOT EXISTS translations (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  abbreviation TEXT NOT NULL,
  language_tag TEXT NOT NULL,
  source_metadata_id TEXT NOT NULL REFERENCES source_metadata(id),
  versification_profile_id TEXT NOT NULL REFERENCES versification_profiles(id)
);

CREATE TABLE IF NOT EXISTS books (
  id TEXT PRIMARY KEY,
  osis_code TEXT NOT NULL UNIQUE,
  default_name_es TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS translation_books (
  translation_id TEXT NOT NULL REFERENCES translations(id),
  book_id TEXT NOT NULL REFERENCES books(id),
  source_book_code TEXT NOT NULL,
  source_name TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  present INTEGER NOT NULL CHECK (present IN (0,1)),
  source_chapter_count INTEGER NOT NULL CHECK (source_chapter_count >= 0),
  PRIMARY KEY (translation_id, book_id),
  UNIQUE (translation_id, order_index)
);

CREATE TABLE IF NOT EXISTS canon_profiles (
  id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  tradition_family TEXT NOT NULL,
  authority_url TEXT NOT NULL,
  version TEXT NOT NULL,
  scope_note TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS canon_profile_books (
  canon_profile_id TEXT NOT NULL REFERENCES canon_profiles(id),
  book_id TEXT NOT NULL REFERENCES books(id),
  order_index INTEGER NOT NULL,
  membership_kind TEXT NOT NULL,
  PRIMARY KEY (canon_profile_id, book_id)
);

CREATE TABLE IF NOT EXISTS verses (
  id INTEGER PRIMARY KEY,
  translation_id TEXT NOT NULL REFERENCES translations(id),
  book_id TEXT NOT NULL REFERENCES books(id),
  chapter_num INTEGER NOT NULL CHECK (chapter_num > 0),
  source_chapter TEXT NOT NULL,
  source_verse_label TEXT NOT NULL,
  verse_start INTEGER,
  verse_end INTEGER,
  segment TEXT,
  source_ref TEXT NOT NULL,
  display_text TEXT NOT NULL,
  UNIQUE (translation_id, book_id, source_chapter, source_verse_label)
);

CREATE INDEX IF NOT EXISTS idx_verses_ref
  ON verses (translation_id, book_id, chapter_num, verse_start, verse_end);

CREATE TABLE IF NOT EXISTS topic_definitions (
  id TEXT PRIMARY KEY,
  locale TEXT NOT NULL,
  label TEXT NOT NULL,
  version TEXT NOT NULL,
  literal_query TEXT NOT NULL,
  rationale TEXT NOT NULL,
  translation_scope TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS topic_terms (
  id INTEGER PRIMARY KEY,
  topic_id TEXT NOT NULL REFERENCES topic_definitions(id),
  term TEXT NOT NULL,
  normalized_term TEXT NOT NULL,
  match_type TEXT NOT NULL CHECK (match_type IN ('literal_exact','lexical_related_form','thematic_term','curated_reference')),
  weight_tier INTEGER NOT NULL CHECK (weight_tier BETWEEN 1 AND 4),
  rationale TEXT NOT NULL,
  enabled INTEGER NOT NULL DEFAULT 1 CHECK (enabled IN (0,1)),
  UNIQUE (topic_id, normalized_term, match_type)
);

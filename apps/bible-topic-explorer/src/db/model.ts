export const DATABASE_NAME = 'bible-topic-explorer.db';
export const RUNTIME_TRANSLATION_ID = 'rv1909';

export type MappingStatus = 'native' | 'mapped' | 'unknown';
export type MatchType =
  | 'literal_exact'
  | 'lexical_related_form'
  | 'thematic_term'
  | 'curated_reference';

export interface SourceMetadata {
  id: string;
  provider: string;
  sourceUrl: string;
  release: string;
  assetName: string;
  sha256: string;
  sourceFormat: string;
  retrievedAt: string;
  licenseIdentifier: string;
  licenseUrl: string;
  attributionText: string;
  modificationNotice: string;
}

export interface Translation {
  id: string;
  title: string;
  abbreviation: string;
  languageTag: string;
  sourceMetadataId: string;
  versificationProfileId: string;
}

export interface VerseReference {
  translationId: string;
  bookId: string;
  chapterNum: number;
  sourceVerseLabel: string;
}

export interface TopicDefinition {
  id: string;
  locale: string;
  label: string;
  version: string;
  literalQuery: string;
  rationale: string;
  translationScope: string;
}

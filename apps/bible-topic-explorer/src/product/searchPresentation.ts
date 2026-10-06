import type { BibleSearchHit } from './adapters';

export interface MatchTierSummary {
  literal: number;
  related: number;
  thematic: number;
  curated: number;
}

export function summarizeMatchTiers(hits: readonly Pick<BibleSearchHit, 'matchType'>[]): MatchTierSummary {
  return hits.reduce<MatchTierSummary>((summary, hit) => {
    if (hit.matchType === 'literal_exact') summary.literal += 1;
    else if (hit.matchType === 'lexical_related_form') summary.related += 1;
    else if (hit.matchType === 'thematic_term') summary.thematic += 1;
    else summary.curated += 1;
    return summary;
  }, { literal: 0, related: 0, thematic: 0, curated: 0 });
}

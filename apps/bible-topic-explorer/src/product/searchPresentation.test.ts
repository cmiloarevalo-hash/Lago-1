import { describe, expect, it } from 'vitest';
import { summarizeMatchTiers } from './searchPresentation';

describe('D04 search presentation', () => {
  it('keeps literal, related and thematic result counts separate', () => {
    const summary = summarizeMatchTiers([
      { matchType: 'literal_exact' },
      { matchType: 'lexical_related_form' },
      { matchType: 'lexical_related_form' },
      { matchType: 'thematic_term' },
      { matchType: 'curated_reference' },
    ] as never);
    expect(summary).toEqual({ literal: 1, related: 2, thematic: 1, curated: 1 });
  });
});

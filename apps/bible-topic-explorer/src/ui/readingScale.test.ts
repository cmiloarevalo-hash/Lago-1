import { describe, expect, it } from 'vitest';
import { clampReadingScale, scaledScriptureMetrics } from './readingScale';

describe('D08 reading scale', () => {
  it('applies the persisted reading preference without disabling system font scaling', () => {
    expect(scaledScriptureMetrics(1)).toEqual({ fontSize: 20, lineHeight: 32 });
    expect(scaledScriptureMetrics(1.6)).toEqual({ fontSize: 32, lineHeight: 51.2 });
  });

  it('clamps invalid or extreme local preferences', () => {
    expect(clampReadingScale(0.2)).toBe(0.8);
    expect(clampReadingScale(4)).toBe(1.6);
    expect(clampReadingScale(Number.NaN)).toBe(1);
  });
});

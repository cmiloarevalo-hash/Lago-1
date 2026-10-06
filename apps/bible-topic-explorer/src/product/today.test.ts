import { describe, expect, it } from 'vitest';
import { readingForDate } from './today';

describe('readingForDate', () => {
  it('is deterministic and returns an RV1909 reference', () => {
    const date = new Date(2026, 9, 6);
    const a = readingForDate(date);
    const b = readingForDate(date);
    expect(a).toEqual(b);
    expect(a.translationId).toBe('rv1909');
    expect(a.book.length).toBeGreaterThan(0);
    expect(a.chapter).toBeGreaterThan(0);
    expect(a.verse).toBeGreaterThan(0);
  });

  it('rotates by local calendar day without network state', () => {
    expect(readingForDate(new Date(2026, 9, 6))).not.toEqual(readingForDate(new Date(2026, 9, 7)));
  });
});

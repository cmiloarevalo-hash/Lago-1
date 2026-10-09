import { describe, expect, it } from 'vitest';
import { dailyReadings, localDayKey, readingForDate } from './today';

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


describe('RC02 daily-positive catalog',()=>{
  it('has nine uplifting categories and all references to sole RV1909',()=>{
    const categories = new Set<string>(dailyReadings.map(x=>x.category));
    for(const name of ['Esperanza','Paz','Amor','Fortaleza','Gratitud','Propósito','Amistad','Perdón','Consuelo'])expect(categories.has(name)).toBe(true);
    expect(dailyReadings.every(x=>x.chapter>0&&x.verse>0&&x.book.length>0)).toBe(true);
  });
  it('uses local calendar components, not UTC date',()=>{
    expect(localDayKey(new Date(2026,9,6))).toBe('2026-10-06');
  });
});

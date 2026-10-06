import { describe, expect, it } from 'vitest';
import { tabIcons, tabLabels, tabs } from './navigation';

describe('D03 navigation chrome contract', () => {
  it('keeps four functional route ids while exposing the accepted labels', () => {
    expect(tabs).toEqual(['today', 'search', 'bible', 'library']);
    expect(tabs.map(tab => tabLabels[tab])).toEqual(['Hoy', 'Explorar', 'Leer', 'Biblioteca']);
  });

  it('provides an icon token for every top-level destination', () => {
    expect(tabs.every(tab => tabIcons[tab].length > 0)).toBe(true);
  });
});

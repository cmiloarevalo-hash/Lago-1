import { describe, expect, it } from 'vitest';
import { goBack, initialNavigationState, navigate, tabIcons, tabLabels, tabs, type Route } from './navigation';

describe('navigation chrome contract', () => {
  it('keeps four functional route ids while exposing the accepted labels', () => {
    expect(tabs).toEqual(['today', 'search', 'bible', 'library']);
    expect(tabs.map(tab => tabLabels[tab])).toEqual(['Hoy', 'Explorar', 'Leer', 'Biblioteca']);
  });

  it('provides an icon token for every top-level destination', () => {
    expect(tabs.every(tab => tabIcons[tab].length > 0)).toBe(true);
  });
});

describe('R01 deterministic history', () => {
  it('records meaningful tab switches and dedupes reselection', () => {
    const explore: Route = { kind: 'tab', tab: 'search' };
    const moved = navigate(initialNavigationState(), explore);
    expect(moved.current).toEqual(explore);
    expect(moved.history).toEqual([{ kind: 'tab', tab: 'today' }]);
    expect(navigate(moved, explore)).toBe(moved);
  });

  it('returns settings and reader to their exact prior destination', () => {
    const explore = navigate(initialNavigationState(), { kind: 'tab', tab: 'search' });
    const settings = navigate(explore, { kind: 'settings', origin: 'search' });
    expect(goBack(settings)?.current).toEqual({ kind: 'tab', tab: 'search' });

    const reader = navigate(explore, { kind: 'reader', book: 'Juan', chapter: 3, verse: 16, origin: 'search' });
    expect(goBack(reader)?.current).toEqual({ kind: 'tab', tab: 'search' });
  });

  it('can preserve Bible chapter-picker context before opening a reader', () => {
    const bible = navigate(initialNavigationState(), { kind: 'tab', tab: 'bible', bibleBook: 'Génesis' });
    const reader = navigate(bible, { kind: 'reader', book: 'Génesis', chapter: 50, origin: 'bible' });
    expect(goBack(reader)?.current).toEqual({ kind: 'tab', tab: 'bible', bibleBook: 'Génesis' });
  });

  it('returns null at root so Android can ask for exit confirmation', () => {
    expect(goBack(initialNavigationState())).toBeNull();
  });
});


describe('R13 SoundCloud as secondary destination',()=>{
  it('opens real music destination from Hoy without a fifth tab or Spotify route',()=>{
    expect(tabs).toHaveLength(4);
    const from=initialNavigationState();const video=navigate(from,{kind:'soundcloud',origin:'today'});
    expect(video.current).toEqual({kind:'soundcloud',origin:'today'});
    expect(goBack(video)?.current).toEqual({kind:'tab',tab:'today'});
  });
});

export const tabs = ['today', 'search', 'bible', 'library'] as const;
export type TabId = (typeof tabs)[number];

export const tabLabels: Record<TabId, string> = {
  today: 'Hoy',
  search: 'Explorar',
  bible: 'Leer',
  library: 'Biblioteca',
};

export const tabIcons: Record<TabId, string> = {
  today: '◉',
  search: '⌕',
  bible: '▤',
  library: '▣',
};

export type Route =
  | { kind: 'tab'; tab: TabId; bibleBook?: string }
  | { kind: 'reader'; book: string; chapter: number; verse?: number; sourceVerseLabel?: string; verseEnd?: number; sourceVerseLabels?: readonly string[]; origin: TabId }
  | { kind: 'settings'; origin: TabId }
  | { kind: 'music'; origin: TabId }
  | { kind: 'guides'; origin: TabId; guideId?:string }
  | { kind: 'songs'; origin: TabId; songId?:string }
  | { kind: 'my-books'; origin: TabId; bookId?:string }
  | { kind: 'plans'; origin: TabId; planId?:string; day?:number }
  | { kind: 'pastoral'; origin: TabId }
  | { kind: 'games'; origin: TabId }
  | { kind: 'youtube'; origin: TabId };

export interface NavigationState {
  current: Route;
  history: readonly Route[];
}

const HISTORY_LIMIT = 24;

export function initialRoute(): Route {
  return { kind: 'tab', tab: 'today' };
}

export function initialNavigationState(): NavigationState {
  return { current: initialRoute(), history: [] };
}

export function routeEquals(a: Route, b: Route): boolean {
  if (a.kind !== b.kind) return false;
  if (a.kind === 'tab' && b.kind === 'tab') return a.tab === b.tab && a.bibleBook === b.bibleBook;
  if (a.kind === 'settings' && b.kind === 'settings') return a.origin === b.origin;
  if (a.kind === 'music' && b.kind === 'music') return a.origin === b.origin;
  if (a.kind === 'guides' && b.kind === 'guides') return a.origin === b.origin && a.guideId === b.guideId;
  if (a.kind === 'songs' && b.kind === 'songs') return a.origin === b.origin && a.songId === b.songId;
  if (a.kind === 'my-books' && b.kind === 'my-books') return a.origin === b.origin && a.bookId === b.bookId;
  if(a.kind==='plans'&&b.kind==='plans')return a.origin===b.origin&&a.planId===b.planId&&a.day===b.day;
  if(a.kind==='pastoral'&&b.kind==='pastoral')return a.origin===b.origin;
  if(a.kind==='games'&&b.kind==='games')return a.origin===b.origin;
  if(a.kind==='youtube'&&b.kind==='youtube')return a.origin===b.origin;
  if (a.kind === 'reader' && b.kind === 'reader') {
    return a.book === b.book && a.chapter === b.chapter && a.verse === b.verse && a.sourceVerseLabel === b.sourceVerseLabel && a.verseEnd === b.verseEnd && JSON.stringify(a.sourceVerseLabels) === JSON.stringify(b.sourceVerseLabels) && a.origin === b.origin;
  }
  return false;
}

export function navigate(state: NavigationState, next: Route, recordHistory = true): NavigationState {
  if (routeEquals(state.current, next)) return state;
  if (!recordHistory) return { ...state, current: next };
  const previous = state.history[state.history.length - 1];
  const history = previous && routeEquals(previous, state.current)
    ? state.history
    : [...state.history, state.current].slice(-HISTORY_LIMIT);
  return { current: next, history };
}

export function goBack(state: NavigationState): NavigationState | null {
  if (!state.history.length) return null;
  return {
    current: state.history[state.history.length - 1],
    history: state.history.slice(0, -1),
  };
}

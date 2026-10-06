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
  | { kind: 'tab'; tab: TabId }
  | { kind: 'reader'; book: string; chapter: number; verse?: number; origin: TabId }
  | { kind: 'settings'; origin: TabId };

export function initialRoute(): Route {
  return { kind: 'tab', tab: 'today' };
}

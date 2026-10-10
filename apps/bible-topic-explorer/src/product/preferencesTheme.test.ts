import {describe,it,expect} from 'vitest';
import {defaultPreferences,visibleTheme} from './preferences';
import {themes} from '../ui/theme';
describe('R13 visual selector and non-destructive historic preference migration',()=>{
 it('shows Natural by default and maps legacy persisted values deterministically',()=>{
  expect(defaultPreferences.theme).toBe('natural');
  expect(visibleTheme('lavender')).toBe('coral');
  expect(visibleTheme('sky')).toBe('marine');
  expect(visibleTheme('dark')).toBe('marine');
  expect(visibleTheme('contrast')).toBe('marine');
  expect(visibleTheme('unknown')).toBe('natural');
  for(const id of ['coral','natural','marine'] as const)expect(visibleTheme(visibleTheme(id))).toBe(id);
 });
 it('retains legacy visual tokens only for compatibility but new selector has exactly three choices',async()=>{
  expect(Object.keys(themes)).toEqual(['lavender','sky','dark','coral','natural','marine','contrast']);
  const {readFileSync}=await import('node:fs');
  const settings=readFileSync('src/ui/screens/SettingsScreen.tsx','utf8');
  const matches=settings.match(/\{id:'(?:coral|natural|marine)',label:/g)??[];
  expect(matches).toHaveLength(3);
  expect(settings).not.toMatch(/\{id:'(?:lavender|sky|dark|contrast)',label:/);
 });
});

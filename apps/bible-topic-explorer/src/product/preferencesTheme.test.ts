import {describe,it,expect} from 'vitest';
import {defaultPreferences} from './preferences';
import {themes} from '../ui/theme';
describe('RC02 three selectable persisted palettes',()=>{
 it('preserves three legacy themes alongside four user-approved styles',()=>{
  expect(defaultPreferences.theme).toBe('lavender');
  expect(Object.keys(themes)).toEqual(['lavender','sky','dark','coral','natural','marine','contrast']);
 });
});

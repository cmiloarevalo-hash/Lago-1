import {describe,it,expect} from 'vitest';
import {defaultPreferences} from './preferences';
import {themes} from '../ui/theme';
describe('RC02 three selectable persisted palettes',()=>{
 it('defaults to lavender and has exactly three theme choices',()=>{
  expect(defaultPreferences.theme).toBe('lavender');
  expect(Object.keys(themes)).toEqual(['lavender','sky','dark']);
 });
});

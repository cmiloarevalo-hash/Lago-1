import {describe,expect,it} from 'vitest';
import {drawerDestinations} from './secondaryMenu';
import {tabs} from './navigation';
describe('R13 integrated drawer real route contract',()=>{
 it('keeps the four existing tabs and no additional primary tab',()=>{
  expect(tabs).toEqual(['today','search','bible','library']);
  expect(drawerDestinations.filter(x=>x.kind==='tab').map(x=>x.id)).toEqual(tabs);
 });
 it('routes all real secondary modules, with no decorative future screens',()=>{
  expect(drawerDestinations.map(x=>x.id)).toEqual(['today','search','bible','library','plans','topics','pastoral','games','songs','youtube','my-books','spotify','settings']);
  expect(drawerDestinations.every(x=>x.available)).toBe(true);
  expect(new Set(drawerDestinations.map(x=>x.id)).size).toBe(13);
  expect(drawerDestinations.map(x=>x.kind)).not.toContain('future');
 });
});

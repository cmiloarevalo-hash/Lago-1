import {describe,expect,it} from 'vitest';
import {drawerDestinations} from './secondaryMenu';
import {tabs} from './navigation';
describe('R13 editorial drawer, Spotify removed',()=>{
 it('keeps four primary tabs distinct from secondary navigation',()=>{
  expect(tabs).toEqual(['today','search','bible','library']);
  expect(drawerDestinations.some(x=>['today','search','bible','library'].includes(x.id))).toBe(false);
 });
 it('groups exactly eight working destinations, with no Spotify or duplicate tabs',()=>{
  expect(drawerDestinations.map(x=>x.id)).toEqual(['plans','topics','pastoral','games','songs','youtube','my-books','settings']);
  expect(drawerDestinations.every(x=>x.available)).toBe(true);
  expect(new Set(drawerDestinations.map(x=>x.id)).size).toBe(8);
  expect(drawerDestinations.every(x=>x.symbol.length>0&&x.group.length>0)).toBe(true);
  expect(drawerDestinations.map(x=>x.id)).not.toContain('spotify');
 });
});

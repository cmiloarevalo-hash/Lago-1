import {describe,expect,it} from 'vitest';
import {drawerDestinations} from './secondaryMenu';
import {tabs} from './navigation';
describe('R13-A3 truthful hamburger menu',()=>{
 it('preserves exactly the existing four main tabs with destinations',()=>{
  expect(tabs).toEqual(['today','search','bible','library']);
  expect(drawerDestinations.filter(x=>x.kind==='tab').map(x=>x.id)).toEqual(['today','search','bible','library']);
 });
 it('exposes existing music/settings but marks unimplemented screens unavailable',()=>{
  expect(drawerDestinations.find(x=>x.id==='spotify')?.available).toBe(true);
  expect(drawerDestinations.find(x=>x.id==='settings')?.available).toBe(true);
  expect(drawerDestinations.filter(x=>x.kind==='future')).toHaveLength(4);
  expect(drawerDestinations.filter(x=>x.kind==='future').every(x=>!x.available)).toBe(true);
 });
});

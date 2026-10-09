import {describe,expect,it} from 'vitest';
import {filterSearchByTestament} from './searchFilters';
describe('RC02 H testament filters',()=>{
 const hits=[{bookName:'Salmos',verse:1},{bookName:'Juan',verse:16}];
 it('keeps canonical AT/NT categories distinct',()=>{
  expect(filterSearchByTestament(hits,'old')).toEqual([hits[0]]);
  expect(filterSearchByTestament(hits,'new')).toEqual([hits[1]]);
  expect(filterSearchByTestament(hits,'all')).toEqual(hits);
 });
});

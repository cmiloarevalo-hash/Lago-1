import {books} from './books';

export type TestamentFilter='all'|'old'|'new';

/** Pure client-side presentation filter; does not change the SQLite corpus or results rank. */
export function filterSearchByTestament<T extends {bookName:string}>(hits:readonly T[],filter:TestamentFilter):readonly T[]{
 if(filter==='all')return hits;
 return hits.filter(hit=>{
  const ix=books.indexOf(hit.bookName as (typeof books)[number]);
  return ix>=0&&(filter==='old'?ix<39:ix>=39);
 });
}

import {describe,expect,it} from 'vitest';
import {buildVerseLink,parseVerseLink,verseCopyText,verseShareText} from './verseSharing';
const verse={bookName:'1 Corinthians',chapter:13,sourceVerseLabel:'4',text:'Love is patient and is kind.'};
describe('verse sharing v1.10',()=>{
 it('round-trips accented canonical book labels and exact verse labels',()=>{
  expect(parseVerseLink(buildVerseLink(verse))).toEqual({book:'1 Corinthians',chapter:13,sourceVerseLabel:'4'});
  expect(parseVerseLink(buildVerseLink({...verse,sourceVerseLabel:'12-13'}))?.sourceVerseLabel).toBe('12-13');
 });
 it('rejects non-scripture URLs and malformed chapter',()=>{
  expect(parseVerseLink('https://example.com/leer?book=Juan&chapter=3&verse=16')).toBeNull();
  expect(parseVerseLink('pastoralbibleen://read?book=Juan&chapter=0&verse=16')).toBeNull();
  expect(parseVerseLink('pastoralbibleen://read?book=Juan&chapter=3')).toBeNull();
 });
 it('shares exact source text and a destination link, not generated commentary',()=>{
  expect(verseCopyText(verse)).toContain('Love is patient and is kind.');
  expect(verseShareText(verse)).toContain(buildVerseLink(verse));
  expect(verseShareText(verse)).toContain('World English Bible');
 });
});

import {describe,it,expect} from 'vitest';
import {verseMatchesTarget,nextHighlightTone,highlightColors} from './verseAnnotations';
describe('RC02 phone QA exact verse identity and toggle',()=>{
 it('uses exact source labels even for joined/lettered verses',()=>{
  const a={verse:12,sourceVerseLabel:'12a'},b={verse:12,sourceVerseLabel:'12b'};
  expect(verseMatchesTarget(a,{verse:12,sourceVerseLabel:'12a'})).toBe(true);
  expect(verseMatchesTarget(b,{verse:12,sourceVerseLabel:'12a'})).toBe(false);
  expect(verseMatchesTarget({verse:12,sourceVerseLabel:'12-13'},{verse:12,sourceVerseLabel:'12-13'})).toBe(true);
  expect(verseMatchesTarget(b,{verse:12})).toBe(true);
 });
 it('toggles same pressed color OFF and swaps different color without touching notes',()=>{
  expect(nextHighlightTone('rose','rose')).toBeNull();
  expect(nextHighlightTone('rose','lavender')).toBe('lavender');
  expect(nextHighlightTone(undefined,'peach')).toBe('peach');
 });
 it('gives rose a true independent pink fill and three distinct buttons',()=>{
  expect(highlightColors.rose.fill).toBe('#FCE1EA');
  expect(new Set(Object.values(highlightColors).map(x=>x.fill)).size).toBe(3);
  expect(highlightColors.rose.fill).not.toBe(highlightColors.lavender.fill);
 });
});

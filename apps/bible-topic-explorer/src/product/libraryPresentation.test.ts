import {describe,it,expect} from 'vitest';
import {highlightDisplayName,highlightToneNames,verseDisplayName} from './libraryPresentation';

describe('English edition — private library presentation localization',()=>{
 it('renders the canonical English book name and color without changing stable IDs',()=>{
  const item={translationId:'webp' as const,bookId:'Matt',bookName:'Matthew',bookOrder:39,chapter:6,sourceVerseLabel:'1',tone:'lavender' as const,updatedAt:'u'};
  expect(highlightDisplayName(item)).toBe('Matthew 6:1 · lavender');
  expect(item.bookId).toBe('Matt');
  expect(item.tone).toBe('lavender');
 });
 it('provides English names for all three persisted highlight colors',()=>{
  expect(highlightToneNames).toEqual({rose:'pink',lavender:'lavender',peach:'peach'});
  expect(verseDisplayName({bookId:'Matt',bookName:'Matthew',chapter:6,sourceVerseLabel:'1'})).toBe('Matthew 6:1');
 });
});

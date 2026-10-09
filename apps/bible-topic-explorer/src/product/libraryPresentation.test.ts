import {describe,it,expect} from 'vitest';
import {highlightDisplayName,highlightToneNames,verseDisplayName} from './libraryPresentation';
describe('RC02 Biblioteca presentation-only localization',()=>{
 it('renders the canonical Spanish name and color without mutating IDs',()=>{
  const item={translationId:'rv1909' as const,bookId:'Matt',bookName:'Mateo',bookOrder:39,chapter:6,sourceVerseLabel:'1',tone:'lavender' as const,updatedAt:'u'};
  expect(highlightDisplayName(item)).toBe('Mateo 6:1 · lavanda');
  expect(item.bookId).toBe('Matt');
  expect(item.tone).toBe('lavender');
 });
 it('covers all three persisted colors with Spanish user-facing names',()=>{
  expect(highlightToneNames).toEqual({rose:'rosa',lavender:'lavanda',peach:'durazno'});
  expect(verseDisplayName({bookId:'Matt',bookName:'Mateo',chapter:6,sourceVerseLabel:'1'})).toBe('Mateo 6:1');
 });
});

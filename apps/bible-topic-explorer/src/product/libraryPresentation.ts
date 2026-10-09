import type {HighlightTone,VerseHighlight,VerseNote} from './adapters';
/** UI labels only; SQLite persists stable canonical book IDs and English tone values. */
export const highlightToneNames:Record<HighlightTone,string>={
 rose:'rosa',lavender:'lavanda',peach:'durazno',
};
export function verseDisplayName(item:Pick<VerseHighlight|VerseNote,'bookId'|'bookName'|'chapter'|'sourceVerseLabel'>):string{
 return `${item.bookName?.trim()||item.bookId} ${item.chapter}:${item.sourceVerseLabel}`;
}
export function highlightDisplayName(item:VerseHighlight):string{
 return `${verseDisplayName(item)} · ${highlightToneNames[item.tone]}`;
}

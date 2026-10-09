import type {BibleVerse,HighlightTone} from './adapters';
/** Do not derive source identity from parseInt: '12a', '12b', '12-13' are distinct. */
export function verseMatchesTarget(verse:Pick<BibleVerse,'verse'|'sourceVerseLabel'>, target?:{verse?:number;sourceVerseLabel?:string}):boolean{
 if(target?.sourceVerseLabel!==undefined)return verse.sourceVerseLabel===target.sourceVerseLabel;
 return target?.verse!==undefined&&verse.verse===target.verse;
}
export const highlightColors={
 rose:{fill:'#FCE1EA',ink:'#66283A',border:'#AD4567'},
 lavender:{fill:'#E0E7FF',ink:'#282461',border:'#6453A7'},
 peach:{fill:'#FFE6CE',ink:'#673C1B',border:'#A46130'}
} as const satisfies Record<HighlightTone,{fill:string;ink:string;border:string}>;
/** Same tone removes, different tone replaces: neither operation deletes the note. */
export function nextHighlightTone(current:HighlightTone|undefined,pressed:HighlightTone):HighlightTone|null{
 return current===pressed?null:pressed;
}

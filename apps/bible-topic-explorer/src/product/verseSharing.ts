/** Scripture sharing: the original RV1909 text is never rewritten for sharing. */
export const verseLinkScheme = 'guiapastoralbiblia';
export interface SharedVerse {
  bookName: string;
  chapter: number;
  sourceVerseLabel: string;
  text: string;
}
export interface VerseLinkTarget {book: string;chapter: number;sourceVerseLabel: string;}
export function buildVerseLink(verse: Pick<SharedVerse,'bookName'|'chapter'|'sourceVerseLabel'>): string {
  const params = 'book='+encodeURIComponent(verse.bookName)+'&chapter='+verse.chapter+
    '&verse='+encodeURIComponent(verse.sourceVerseLabel);
  return verseLinkScheme+'://leer?'+params;
}
export function parseVerseLink(url: string): VerseLinkTarget | null {
  try {
    const link = new URL(url);
    if(link.protocol!==verseLinkScheme+':' || link.hostname!=='leer')return null;
    const book=link.searchParams.get('book')?.trim()??'';
    const chapter=Number(link.searchParams.get('chapter'));
    const sourceVerseLabel=link.searchParams.get('verse')?.trim()??'';
    if(!book||book.length>80||!Number.isSafeInteger(chapter)||chapter<1||chapter>200||!sourceVerseLabel||sourceVerseLabel.length>15)return null;
    return {book,chapter,sourceVerseLabel};
  }catch{return null;}
}
export function verseCopyText(verse:SharedVerse):string {
  return verse.text+'\n'+verse.bookName+' '+verse.chapter+':'+verse.sourceVerseLabel+' · Reina-Valera 1909';
}
/** An automatic install fallback requires a verified public HTTPS landing page, not a custom scheme alone. */
export function verseShareText(verse:SharedVerse):string {
  return verseCopyText(verse)+'\n\nAbrir en Guía pastoral - Biblia: '+buildVerseLink(verse);
}

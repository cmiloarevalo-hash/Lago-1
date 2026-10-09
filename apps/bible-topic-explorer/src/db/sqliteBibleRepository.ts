import type { SQLiteDatabase } from 'expo-sqlite';
import type { BibleRepository, BibleSearchHit, BibleVerse } from '../product/adapters';
import { resolveTopic } from '../product/topics';
import { RUNTIME_TRANSLATION_ID, type MatchType } from './model';
type ChapterRow={bookId:string;bookName:string;chapter:number;verse:number|null;sourceVerseLabel:string;text:string};
const DEFAULT_LIMIT=50;const MAX_LIMIT=100;
function boundedLimit(limit?:number){if(limit===undefined||!Number.isFinite(limit))return DEFAULT_LIMIT;return Math.max(1,Math.min(MAX_LIMIT,Math.trunc(limit)));}
function literalNeedle(raw:string){const t=raw.trim();return t.length>=2&&t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1).trim():t;}
function escapeLike(value:string){return value.replace(/\\/g,'\\\\').replace(/%/g,'\\%').replace(/_/g,'\\_');}
function fold(value:string){return value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function escapeRegex(value:string){return value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
function containsWholeTerm(text:string,term:string){const hay=fold(text);const needle=fold(term);return new RegExp(`(^|[^a-z0-9ñ])${escapeRegex(needle)}(?=$|[^a-z0-9ñ])`,'u').test(hay);}
function firstWholeTerm(text:string,terms:readonly string[]){return terms.find(term=>containsWholeTerm(text,term));}
/** Read-only adapter for the authoritative bundled RV1909 corpus. */
export class SQLiteBibleRepository implements BibleRepository{
 constructor(private readonly db:Pick<SQLiteDatabase,'getAllAsync'>){}
 async getChapter(bookId:string,chapter:number):Promise<readonly BibleVerse[]>{if(!Number.isInteger(chapter)||chapter<1)return[];const rows=await this.db.getAllAsync<ChapterRow>(`SELECT v.book_id AS bookId, b.default_name_es AS bookName, v.chapter_num AS chapter, v.verse_start AS verse, v.source_verse_label AS sourceVerseLabel, v.display_text AS text FROM verses v JOIN books b ON b.id=v.book_id WHERE v.translation_id=? AND (v.book_id=? OR b.default_name_es=?) AND v.chapter_num=? ORDER BY v.id`,RUNTIME_TRANSLATION_ID,bookId,bookId,chapter);return rows.map(row=>this.mapVerse(row));}
 async getBookChapterCount(bookId:string):Promise<number>{const rows=await this.db.getAllAsync<{chapterCount:number}>(`SELECT tb.source_chapter_count AS chapterCount FROM translation_books tb JOIN books b ON b.id=tb.book_id WHERE tb.translation_id=? AND (tb.book_id=? OR b.default_name_es=?) LIMIT 1`,RUNTIME_TRANSLATION_ID,bookId,bookId);return rows[0]?.chapterCount??0;}
 async searchLiteral(query:string,limit?:number):Promise<readonly BibleSearchHit[]>{const needle=literalNeedle(query);if(!needle)return[];const rows=await this.db.getAllAsync<ChapterRow>(`SELECT v.book_id AS bookId, b.default_name_es AS bookName, v.chapter_num AS chapter, v.verse_start AS verse, v.source_verse_label AS sourceVerseLabel, v.display_text AS text FROM verses v JOIN books b ON b.id=v.book_id JOIN translation_books tb ON tb.translation_id=v.translation_id AND tb.book_id=v.book_id WHERE v.translation_id=? AND lower(v.display_text) LIKE '%' || lower(?) || '%' ESCAPE '\\' ORDER BY tb.order_index, v.chapter_num, v.id LIMIT ?`,RUNTIME_TRANSLATION_ID,escapeLike(needle),boundedLimit(limit)*20);return rows.filter(row=>containsWholeTerm(row.text,needle)).slice(0,boundedLimit(limit)).map(row=>({...this.mapVerse(row),matchType:'literal_exact' as const,explanation:`Coincidencia literal completa en RV1909: “${needle}”.`}));}
 /** Streams only bounded SQLite rows per round trip. Searching the full corpus remains
  * deterministic, offline and READ ONLY; AbortSignal is checked between pages.
  * Lexical tier is scanned before thematic tier, preserving canonical order.
  */
 async searchTopic(topicId:string,limit?:number,signal?:AbortSignal):Promise<readonly BibleSearchHit[]>{
  const topic=resolveTopic(topicId);if(!topic)return[];
  const lexical=[topic.label,...topic.aliases];
  const thematic=[...topic.relatedTerms];
  const maxHits=boundedLimit(limit);
  const hits:BibleSearchHit[]=[];
  const seen=new Set<string>();
  const pageSize=128;
  for(const tier of ['lexical','thematic'] as const){
   const terms=[...new Set(tier==='lexical'?lexical:thematic)];
   if(!terms.length)continue;
   const clauses=terms.map(()=>`lower(v.display_text) LIKE '%' || lower(?) || '%' ESCAPE '\\'`).join(' OR ');
   const sql=`SELECT v.book_id AS bookId, b.default_name_es AS bookName,
    v.chapter_num AS chapter, v.verse_start AS verse,
    v.source_verse_label AS sourceVerseLabel, v.display_text AS text
    FROM verses v JOIN books b ON b.id=v.book_id
    JOIN translation_books tb ON tb.translation_id=v.translation_id AND tb.book_id=v.book_id
    WHERE v.translation_id=? AND (${clauses})
    ORDER BY tb.order_index, v.chapter_num, v.id LIMIT ? OFFSET ?`;
   for(let offset=0;!signal?.aborted;offset+=pageSize){
    const rows=await this.db.getAllAsync<ChapterRow>(sql,RUNTIME_TRANSLATION_ID,...terms.map(escapeLike),pageSize,offset);
    if(signal?.aborted)return[];
    for(const row of rows){
     const lexicalTerm=firstWholeTerm(row.text,lexical);
     const thematicTerm=lexicalTerm?undefined:firstWholeTerm(row.text,thematic);
     const term=tier==='lexical'?lexicalTerm:thematicTerm;
     if(!term)continue;
     const key=[row.bookId,row.chapter,row.sourceVerseLabel].join(':');
     if(seen.has(key))continue;
     seen.add(key);
     const matchType:MatchType=tier==='lexical'?'lexical_related_form':'thematic_term';
     hits.push({...this.mapVerse(row),matchType,explanation:matchType==='lexical_related_form'
      ?`Evidencia curada para “${topic.label}”: forma completa “${term}” en RV1909.`
      :`Evidencia temática curada para “${topic.label}”: término completo “${term}” en RV1909.`});
     if(hits.length>=maxHits)return hits;
    }
    if(rows.length<pageSize)break;
    // Give Back/tabs/render a chance to run during very frequent topics.
    await new Promise<void>(resolve=>setTimeout(resolve,0));
   }
   if(signal?.aborted)return[];
  }
  return hits;
 }

 private mapVerse(row:ChapterRow):BibleVerse{return{translationId:RUNTIME_TRANSLATION_ID,bookId:row.bookId,bookName:row.bookName,chapter:row.chapter,verse:row.verse??Number.parseInt(row.sourceVerseLabel,10),sourceVerseLabel:row.sourceVerseLabel,text:row.text};}
}

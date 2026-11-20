import {describe,expect,it} from 'vitest';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync,statSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {pastoralTopics as english,PASTORAL_GUIDE_TITLE as englishTitle} from './pastoralTopics.en';
import {pastoralTopics as spanish} from './pastoralTopics';
import {RUNTIME_TRANSLATION_ID,DATABASE_NAME} from '../db/model';
import {books,runtimeCoverage} from './books';
import {topicCatalog} from './topics';
import {conceptPreviews} from './conceptPreviews';
import {readingPlans} from './readingPlans';

describe('Independent WEBP English edition (work item #81)',()=>{
 it('has independently installable Android identity and exact version',()=>{
  const expo=JSON.parse(readFileSync('app.json','utf8')).expo;
  expect(expo.name).toBe('Bible – Pastoral Guide');
  expect(expo.version).toBe('1.20.01');
  expect(expo.android.versionCode).toBe(20);
  expect(expo.android.package).toBe('com.lago.bibletopicexplorer.en');
 });
 it('ships the verified 66-book, 31,103-verse English WEBP corpus',()=>{
  expect(RUNTIME_TRANSLATION_ID).toBe('webp');
  expect(DATABASE_NAME).toBe('bible-webp-en.db');
  expect(runtimeCoverage.translation).toBe('World English Bible');
  expect(books).toHaveLength(66);
  const filename='assets/data/bible-webp-en.db';
  expect(statSync(filename).size).toBe(6922240);
  expect(createHash('sha256').update(readFileSync(filename)).digest('hex')).toBe('b8fb975cd619ecdfd4572e7a5e9c3a12d980594d54d5945cfaeb7f6ae068ce57');
  const db=new DatabaseSync(filename,{readOnly:true});
  try{
   expect(db.prepare('SELECT COUNT(*) AS n FROM translation_books WHERE translation_id=?').get('webp')?.n).toBe(66);
   expect(db.prepare('SELECT COUNT(*) AS n FROM verses WHERE translation_id=?').get('webp')?.n).toBe(31103);
   expect(db.prepare('PRAGMA foreign_key_check').all()).toEqual([]);
   const meta=db.prepare('SELECT language_tag,title FROM translations WHERE id=?').get('webp');
   expect(meta).toMatchObject({language_tag:'en',title:'World English Bible'});
   for(const [book,chapter,verse,prefix] of [['Gen',1,'1','In the beginning'],['John',3,'16','For God so loved'],['Ps',23,'1','The LORD is my shepherd']] as const){
    const row=db.prepare('SELECT display_text AS text FROM verses WHERE translation_id=? AND book_id=? AND chapter_num=? AND source_verse_label=?').get('webp',book,chapter,verse) as {text:string}|undefined;
    expect(row?.text.includes(prefix),book+' '+chapter+':'+verse).toBe(true);
   }
   const license=db.prepare('SELECT license_identifier,license_url,source_url FROM source_metadata').get();
   expect(license).toMatchObject({license_identifier:'public-domain',license_url:'https://ebible.org/engwebp/copyright.htm'});
  }finally{db.close();}
 });
 it('preserves 16 chapters, 80 paragraphs, themes, and 84 navigable reading references',()=>{
  expect(englishTitle).toBe('Bible – Pastoral Guide');
  expect(english.map(p=>p.id)).toEqual(spanish.map(p=>p.id));
  expect(english.map(p=>p.themeId)).toEqual(spanish.map(p=>p.themeId));
  expect(english.map(p=>p.paragraphs.length)).toEqual(spanish.map(p=>p.paragraphs.length));
  expect(english).toHaveLength(16);
  expect(english.reduce((n,p)=>n+p.paragraphs.length,0)).toBe(80);
  const links=english.flatMap(p=>[...p.readingsOld,...p.readingsNew]);
  expect(links).toHaveLength(84);
  const db=new DatabaseSync('assets/data/bible-webp-en.db',{readOnly:true});
  try{
   const stmt=db.prepare('SELECT v.verse_start AS start,coalesce(v.verse_end,v.verse_start) AS end FROM verses v JOIN books b ON b.id=v.book_id WHERE v.translation_id=? AND b.default_name_es=? AND v.chapter_num=?');
   for(const ref of links){
    const rows=stmt.all('webp',ref.book,ref.chapter) as {start:number;end:number}[];
    expect(rows.length,ref.label+' / '+ref.book).toBeGreaterThan(0);
    for(let verse=ref.start;verse<=ref.end;verse++){
     expect(rows.some(r=>r.start<=verse&&r.end>=verse),ref.label+':'+verse).toBe(true);
    }
   }
  }finally{db.close();}
 });
 it('provides 100 English topic labels and valid English preview and plan references',()=>{
  expect(topicCatalog).toHaveLength(100);
  expect(new Set(topicCatalog.map(t=>t.id)).size).toBe(100);
  expect(new Set(topicCatalog.map(t=>t.family)).size).toBe(10);
  expect(topicCatalog.find(t=>t.id==='direccion')?.label).toBe('Guidance');
  expect(topicCatalog.every(t=>!/[¿¡]/.test(t.label+' '+t.family))).toBe(true);
  const references=[
   ...conceptPreviews.flatMap(p=>p.passages.map(x=>({book:x.book,chapter:x.chapter,start:x.start,end:x.end,label:x.reference}))),
   ...readingPlans.flatMap(p=>p.days.map(x=>({book:x.book,chapter:x.chapter,start:x.start,end:x.end,label:x.book+' '+x.chapter+':'+x.start})))
  ];
  expect(conceptPreviews.flatMap(p=>p.passages)).toHaveLength(46);
  expect(readingPlans.flatMap(p=>p.days)).toHaveLength(28);
  const db=new DatabaseSync('assets/data/bible-webp-en.db',{readOnly:true});
  try{
   const stmt=db.prepare('SELECT verse_start AS start,coalesce(verse_end,verse_start) AS end FROM verses WHERE translation_id=? AND book_id=(SELECT id FROM books WHERE default_name_es=?) AND chapter_num=?');
   for(const ref of references){
    const rows=stmt.all('webp',ref.book,ref.chapter) as {start:number;end:number}[];
    expect(rows.length,ref.label+' / '+ref.book).toBeGreaterThan(0);
    for(let n=ref.start;n<=ref.end;n++)expect(rows.some(r=>r.start<=n&&r.end>=n),ref.label+':'+n).toBe(true);
   }
  }finally{db.close();}
 });
});

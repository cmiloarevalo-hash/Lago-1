'use strict';
/* English Bible source-of-truth: public domain WEBP (66 books), eBible.org.
   Inputs: original SQLite schema + authoritative engwebp_vpl.txt.
   Deliberately creates a separate DB; never overwrites Spanish original.
   Re-run only with --replace to replace an existing derived output.
 */
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const assert=require('node:assert/strict');
const {DatabaseSync}=require('node:sqlite');
const app=path.resolve(__dirname,'..');
const root=path.join(app,'data','english-source');
const input=path.join(root,'vpl','engwebp_vpl.txt');
const archive=path.join(root,'engwebp_vpl.zip');
const usfm=path.join(root,'usfm');
const original=path.join(app,'assets','data','bible-topic-explorer.db');
const output=path.join(root,'bible-webp-en.qa.db');
const manifest=path.join(root,'CORPUS_WEB_EN_PROVENANCE.json');
const expectedZipHash='696e9d4b2856e6408dcd82e6f64ac254ab623d5bbeba5c8de9864bbe32d2d047';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
assert.equal(sha(archive),expectedZipHash,'unexpected eBible.org source zip hash');
if(fs.existsSync(output)&&!process.argv.includes('--replace'))throw Error('Output exists: use --replace deliberately');
const source=fs.readFileSync(input,'utf8').split(/\r?\n/).filter(Boolean);
const rows=source.map((line,i)=>{
  const m=line.match(/^([A-Z0-9]{3})\s+(\d+):([0-9]+(?:[-,][0-9]+)?[a-z]?)\s+(.*)$/);
  assert(m,'invalid VPL row '+(i+1)+' '+line.slice(0,100));
  return {code:m[1],chapter:Number(m[2]),label:m[3],text:m[4]};
});
assert(rows.length>=30000&&rows.length<31500,'unexpected verse count');
const codes=[...new Set(rows.map(x=>x.code))];
assert.equal(codes.length,66,'Bible must have exactly 66 books');
const files=fs.readdirSync(usfm).filter(x=>/\.usfm$/.test(x));
const names=new Map();
for(const filename of files){
 const c=fs.readFileSync(path.join(usfm,filename),'utf8');
 const id=c.match(/^\\id\s+(\S+)/m)?.[1];
 const title=c.match(/^\\toc2\s+([^\r\n]+)/m)?.[1]?.trim();
 if(id&&title)names.set(id,title);
}
const usfmAlias={'1JO':'1JN','2JO':'2JN','3JO':'3JN','EZE':'EZK','JAM':'JAS','JOE':'JOL','JOH':'JHN','MAR':'MRK','NAH':'NAM','PHI':'PHP','SOL':'SNG'};
for (const code of codes){const actual=usfmAlias[code]||code;assert(names.has(actual),'missing book name from USFM '+code+'/'+actual);names.set(code,names.get(actual));}
if(fs.existsSync(output))fs.unlinkSync(output);
fs.copyFileSync(original,output);
const db=new DatabaseSync(output);
db.exec('PRAGMA foreign_keys = OFF; PRAGMA journal_mode = DELETE; BEGIN IMMEDIATE');
try{
 const former=db.prepare('SELECT book_id,order_index FROM translation_books ORDER BY order_index').all();
 assert.equal(former.length,66,'existing source has unexpected book mapping');
 const bookIds=new Map();
 former.forEach((v,i)=>bookIds.set(codes[i],v.book_id));
 assert.equal(bookIds.get('GEN'),'Gen');assert.equal(bookIds.get('JOH'),'John');
 assert.equal(bookIds.get('REV'),'Rev');
 db.exec("DELETE FROM verses; DELETE FROM topic_terms; DELETE FROM topic_definitions;");
 db.prepare('UPDATE translations SET id=?, title=?, abbreviation=?, language_tag=?, source_metadata_id=?, versification_profile_id=? WHERE id=?').run('webp','World English Bible','WEBP','en','engwebp-v2026-10-30','engwebp_native_2026_10_30','rv1909');
 db.prepare('UPDATE versification_profiles SET id=?,name=?,source=?,version=? WHERE id=?').run('engwebp_native_2026_10_30','World English Bible WEBP - native','eBible.org','2026-10-30','rv1909_aquifer_native_v2026_09_18');
 db.prepare('DELETE FROM source_metadata').run();
 db.prepare('INSERT INTO source_metadata (id,provider,source_url,release,asset_name,sha256,source_format,retrieved_at,license_identifier,license_url,attribution_text,modification_notice) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)').run('engwebp-v2026-10-30','eBible.org','https://ebible.org/bible/details.php?id=engwebp','last-updated-2026-10-30','engwebp_vpl.zip',expectedZipHash,'BibleWorks-VPL','2026-11-20','public-domain','https://ebible.org/engwebp/copyright.htm','World English Bible (WEBP), eBible.org, public domain. 66-book edition.','Source eBible VPL plain verses; no modifications to biblical wording.');
 const tb=db.prepare('UPDATE translation_books SET translation_id=?,source_book_code=?,source_name=? WHERE book_id=?');
 const bn=db.prepare('UPDATE books SET default_name_es=? WHERE id=?');
 for(let i=0;i<codes.length;i++){let id=former[i].book_id;tb.run('webp',codes[i],names.get(codes[i]),id);bn.run(names.get(codes[i]),id);}
 const ins=db.prepare('INSERT INTO verses (id,translation_id,book_id,chapter_num,source_chapter,source_verse_label,verse_start,verse_end,segment,source_ref,display_text) VALUES (?,?,?,?,?,?,?,?,?,?,?)');
 const seen=new Set();
 let i=0;
 for(const r of rows){
  const book=bookIds.get(r.code);
  assert(book,'unknown source code: '+r.code);
  const ref=r.code+':'+r.chapter+':'+r.label;
  assert(!seen.has(ref),'duplicate source verse '+ref);
  seen.add(ref);
  const m=r.label.match(/^(\d+)(?:[-,](\d+))?([a-z]?)$/);
  assert(m,'unexpected WEB verse label: '+r.label);
  ins.run(++i,'webp',book,r.chapter,String(r.chapter),r.label,Number(m[1]),m[2]?Number(m[2]):null,m[3]||null,book+'.'+r.chapter+'.'+r.label,r.text);
 }
 db.exec('COMMIT');
} catch(e){db.exec('ROLLBACK');db.close();throw e;}
db.exec('PRAGMA foreign_keys=ON');
let violations=db.prepare('PRAGMA foreign_key_check').all();
assert.equal(violations.length,0,'foreign keys broken');
const count=db.prepare('SELECT COUNT(*) AS n FROM verses').get().n;
assert.equal(count,rows.length,'verse count differs');
const books=db.prepare('SELECT COUNT(*) AS n FROM translation_books').get().n;
assert.equal(books,66);
const version=db.prepare('SELECT id,title,abbreviation,language_tag FROM translations').get();
assert.equal(version.id,'webp');
for (const [book,chapter,verse,expected] of [
 ['Gen',1,1,'In the beginning'],
 ['John',3,16,'For God so loved'],
 ['Ps',23,1,'The LORD is my shepherd']
]){
 const s=db.prepare('SELECT display_text AS text FROM verses WHERE book_id=? AND chapter_num=? AND source_verse_label=?').get(book,chapter,String(verse));
 assert(s&&s.text.includes(expected),'reference mismatch '+book+' '+chapter+':'+verse+' actual '+(s&&s.text.slice(0,60)));
}
db.exec('VACUUM');
db.close();
const result={
 status:'ENGLISH_DB_QA_READY_NOT_INTEGRATED',
 source:'eBible.org World English Bible WEBP',
 source_archive:'https://ebible.org/Scriptures/engwebp_vpl.zip',
 source_zip_sha256:expectedZipHash,
 source_format:'BibleWorks VPL',
 license:'public-domain',
 license_url:'https://ebible.org/engwebp/copyright.htm',
 english_book_count:codes.length,
 english_verse_count:count,
 foreign_key_violations:violations.length,
 output_path:output,
 output_bytes:fs.statSync(output).size,
 output_sha256:sha(output),
 tested_references:['Genesis 1:1','John 3:16','Psalm 23:1'],
 note:'English DB separate; UI and 16 pastoral chapters still require translation; do not release as English APK yet'
};
fs.writeFileSync(manifest,JSON.stringify(result,null,2)+'\n','utf8');
console.log(JSON.stringify(result,null,2));

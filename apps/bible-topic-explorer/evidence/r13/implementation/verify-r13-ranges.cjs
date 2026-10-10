// R1.3 final source-only read-only corpus audit. Never mutates frozen RV1909.
const assert=require('node:assert/strict');
const {DatabaseSync}=require('node:sqlite');
const {readingPlans}=require('../../../src/product/readingPlans.ts');
const {pastoralTopics}=require('../../../src/product/pastoralTopics.ts');
const {createHash}=require('node:crypto');
const {readFileSync}=require('node:fs');
const path=require('node:path');
const file=path.resolve(__dirname,'../../../assets/data/bible-topic-explorer.db');
const hash=createHash('sha256').update(readFileSync(file)).digest('hex');
const db=new DatabaseSync(file,{readOnly:true});
const sql=db.prepare('SELECT v.source_verse_label AS label FROM verses v JOIN books b ON b.id=v.book_id WHERE v.translation_id=? AND b.default_name_es=? AND v.chapter_num=? AND v.verse_start BETWEEN ? AND ? ORDER BY v.id');
let checked=0,missing=[];
const check=(source,book,chapter,start,end)=>{
 const rows=sql.all('rv1909',book,chapter,start,end);
 const starts=rows.some(r=>r.label===String(start)||r.label.startsWith(start+'-'));
 const ends=rows.some(r=>r.label===String(end)||r.label.endsWith('-'+end));
 if(!rows.length||!starts||!ends)missing.push({source,book,chapter,start,end,actual:rows.map(x=>x.label).join(',')});
 checked++;
};
for(const p of readingPlans)for(const d of p.days)check(p.id+'-'+d.day,d.book,d.chapter,d.start,d.end);
for(const t of pastoralTopics)check(t.id,t.biblical.book,t.biblical.chapter,t.biblical.start,t.biblical.end);
db.close();
console.log(JSON.stringify({checked,hash,failures:missing},null,2));
assert.equal(missing.length,0,'Biblical range(s) not fully present in frozen corpus');
console.log('R13_36_RANGES_SOURCE_AUDIT_PASS');

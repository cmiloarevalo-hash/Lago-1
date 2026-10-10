// Read-only offline integrity audit. Does not rewrite the frozen 66-book RV1909 database.
const assert=require('node:assert/strict');
const {DatabaseSync}=require('node:sqlite');
const {createHash}=require('node:crypto');
const {readFileSync}=require('node:fs');
const {join,resolve}=require('node:path');
const {conceptPreviews,researchCorpusGitBlob}=require('../../../src/product/conceptPreviews.ts');
const project=resolve(__dirname,'../../..');
const file=join(project,'assets/data/bible-topic-explorer.db');
const db=new DatabaseSync(file,{readOnly:true});
const get=db.prepare('SELECT v.source_verse_label as sourceVerseLabel FROM verses v JOIN books b ON b.id=v.book_id WHERE v.translation_id=? AND b.default_name_es=? AND v.chapter_num=? AND v.verse_start BETWEEN ? AND ? ORDER BY v.id');
let checked=0;
for(const p of conceptPreviews)for(const r of p.passages){
 const labels=get.all('rv1909',r.book,r.chapter,r.start,r.end).map(x=>x.sourceVerseLabel);
 assert.deepEqual(labels,r.sourceVerseLabels,'RV1909 label mismatch '+p.topicId+' / '+r.reference);
 checked++;
}
assert.equal(checked,46);
db.close();
console.log('P2_READONLY_SQLITE_AUDIT PASS');
console.log('PREVIEW_TOPICS '+conceptPreviews.length);
console.log('EXACT_RANGE_LABELS '+checked);
console.log('FROZEN_DB_GIT_BLOB_EXPECTED '+researchCorpusGitBlob);
console.log('LOCAL_DB_SHA256 '+createHash('sha256').update(readFileSync(file)).digest('hex'));

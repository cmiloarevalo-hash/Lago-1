'use strict';
/** Builds the independent English edition from the preverified eBible.org WEBP corpus.
 * Only touches this checkout; does not alter the original Spanish SQLite asset.
 */
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const assert=require('node:assert/strict');
const {DatabaseSync}=require('node:sqlite');
const app=path.resolve(__dirname,'..');
const qa=path.join(app,'data','english-source','bible-webp-en.qa.db');
const output=path.join(app,'assets','data','bible-webp-en.db');
const sha=x=>crypto.createHash('sha256').update(fs.readFileSync(x)).digest('hex');
assert(fs.existsSync(qa),'Missing preverified WEBP QA database');
assert.equal(sha(qa),'b8fb975cd619ecdfd4572e7a5e9c3a12d980594d54d5945cfaeb7f6ae068ce57','The validated corpus was modified');
const db=new DatabaseSync(qa,{readOnly:true});
const books=db.prepare('SELECT b.id,b.default_name_es AS name FROM translation_books tb JOIN books b ON b.id=tb.book_id ORDER BY tb.order_index').all();
assert.equal(books.length,66,'Expected 66 books');
assert.equal(db.prepare('SELECT COUNT(*) AS n FROM verses WHERE translation_id=?').get('webp').n,31103);
assert.equal(db.prepare('PRAGMA foreign_key_check').all().length,0);
assert.equal(db.prepare('SELECT language_tag FROM translations WHERE id=?').get('webp').language_tag,'en');
db.close();
fs.copyFileSync(qa,output);
const edit=(rel,from,to)=>{
  const p=path.join(app,rel);
  const a=fs.readFileSync(p,'utf8');
  assert(a.includes(from),'Expected marker missing: '+rel+' :: '+from);
  fs.writeFileSync(p,a.replace(from,to),'utf8');
};
const appJson=path.join(app,'app.json');
const conf=JSON.parse(fs.readFileSync(appJson,'utf8'));
conf.expo.name='Bible – Pastoral Guide';
conf.expo.slug='bible-pastoral-guide-en';
conf.expo.scheme='pastoralbibleen';
conf.expo.version='1.20.01';
conf.expo.android.package='com.lago.bibletopicexplorer.en';
conf.expo.android.versionCode=20;
fs.writeFileSync(appJson,JSON.stringify(conf,null,2)+'\n','utf8');
edit('App.tsx',"require('./assets/data/bible-topic-explorer.db')","require('./assets/data/bible-webp-en.db')");
edit('src/db/model.ts',"'bible-topic-explorer.db'","'bible-webp-en.db'");
edit('src/db/model.ts',"'rv1909'","'webp'");
edit('src/product/books.ts',"export const books = ", "export const books = ");
const b=path.join(app,'src/product','books.ts');
const original=fs.readFileSync(b,'utf8');
const head='export const books = '+JSON.stringify(books.map(x=>x.name))+' as const;';
const rewritten=original.replace(/^export const books = .*? as const;/m,head)
  .replace(/translation:'Reina-Valera 1909'/,"translation:'World English Bible'")
  .replace(/abbreviation:'RV1909'/,"abbreviation:'WEBP'");
assert(rewritten!==original,'Book list was not updated');
fs.writeFileSync(b,rewritten,'utf8');
const screen=path.join(app,'src','ui','screens','PastoralScreen.tsx');
const ps=fs.readFileSync(screen,'utf8');
assert(ps.includes("from '../../product/pastoralTopics';"));
fs.writeFileSync(screen,ps.replace("from '../../product/pastoralTopics';","from '../../product/pastoralTopics.en';"),'utf8');
const searchRepo=path.join(app,'src','db','sqliteBibleRepository.ts');
let sr=fs.readFileSync(searchRepo,'utf8');
sr=sr.replaceAll('RV1909','WEBP').replace("toLocaleLowerCase('es')","toLocaleLowerCase('en')");
fs.writeFileSync(searchRepo,sr,'utf8');
const topic=path.join(app,'src','product','topics.ts');
fs.writeFileSync(topic,fs.readFileSync(topic,'utf8').replace("toLocaleLowerCase('es')","toLocaleLowerCase('en')"),'utf8');
console.log(JSON.stringify({edition:'Bible – Pastoral Guide',versionName:conf.expo.version,versionCode:conf.expo.android.versionCode,package:conf.expo.android.package,books:books.length,verses:31103,sqliteBytes:fs.statSync(output).size,sqliteSha256:sha(output)},null,2));

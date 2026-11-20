'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {DatabaseSync}=require('node:sqlite');
const app=path.resolve(__dirname,'..'),file=path.join(app,'src/product/conceptPreviews.ts');
const db=new DatabaseSync(path.join(app,'assets/data/bible-webp-en.db'),{readOnly:true});
const names=new Set(db.prepare('SELECT default_name_es AS name FROM books').all().map(x=>x.name));
let source=fs.readFileSync(file,'utf8');
let processed=0,modified=0;
source=source.replace(/"reference": "([^"]+)",\s*\n\s*"book": "([^"]+)",\s*\n\s*"chapter": (\d+),\s*\n\s*"start": (\d+),\s*\n\s*"end": (\d+)/g,(all,oldName,book,chapter,start,end)=>{
 processed++;
 assert(names.has(book),'Invalid English book '+book);
 const canonical=book+' '+chapter+':'+start+(Number(end)>Number(start)?'–'+end:'');
 if(!oldName.startsWith(canonical)){modified++;return all.replace('"reference": '+JSON.stringify(oldName),'"reference": '+JSON.stringify(canonical));}
 return all;
});
db.close();
assert.equal(processed,46,'Expected original 46 curated preview references');
fs.writeFileSync(file,source,'utf8');
console.log(JSON.stringify({checked:processed,normalized:modified,allEnglishBookNames:true}));

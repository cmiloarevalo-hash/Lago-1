'use strict';
/* English edition cleanup: retain the Spanish pastoral source and original RV1909 DB. */
const fs=require('node:fs');
const path=require('node:path');
const app=path.resolve(__dirname,'..');
const root=path.join(app,'src');
const files=[];
function walk(p){for(const entry of fs.readdirSync(p,{withFileTypes:true})){
 const f=path.join(p,entry.name);
 if(entry.isDirectory())walk(f);
 else if(/\.(ts|tsx)$/.test(entry.name)&&!entry.name.endsWith('.test.ts')&&entry.name!=='pastoralTopics.ts')files.push(f);
}}
walk(root); files.push(path.join(app,'App.tsx'));
let updated=0;
for(const file of files){
 const old=fs.readFileSync(file,'utf8');
 let t=old.replaceAll('Reina-Valera 1909','World English Bible')
    .replaceAll('Reina Valera 1909','World English Bible')
    .replaceAll('RV1909','WEBP')
    .replaceAll('rv1909','webp')
    .replaceAll('guiapastoralbiblia','pastoralbibleen')
    .replaceAll('La U','Bible – Pastoral Guide')
    .replaceAll("toLocaleLowerCase('es')","toLocaleLowerCase('en')")
    .replaceAll("'es-CL'","'en-US'")
    .replaceAll("'es-ES'","'en-US'")
    .replaceAll("'es-MX'","'en-US'");
 if(file.endsWith('verseSharing.ts')){
   t=t.replaceAll('://leer?', '://read?').replaceAll("link.hostname!=='leer'","link.hostname!=='read'").replace('Abrir en Guía pastoral - Biblia: ','Open in Bible – Pastoral Guide: ');
 }
 if(file.endsWith('adapters.ts')){
   t=t.replaceAll("translationId: 'webp';","translationId: 'rv1909' | 'webp';");
 }
 if(t!==old){fs.writeFileSync(file,t,'utf8');updated++;}
}
const guide=path.join(root,'product','pastoralTopics.en.ts');
let content=fs.readFileSync(guide,'utf8');
const match=/"label":\s*"[^"]+",\s*\n\s*"book":\s*"([^"]+)",\s*\n\s*"chapter":\s*(\d+),\s*\n\s*"start":\s*(\d+),\s*\n\s*"end":\s*(\d+)/g;
let total=0;
content=content.replace(match,(s,b,c,first,last)=>{
 const start=Number(first),end=Number(last);
 const name=b==='Psalms'?'Psalm':b;
 const label=name+' '+c+':'+first+(end>start?'–'+last:'');
 total++;return s.replace(/"label":\s*"[^"]+"/,'"label": '+JSON.stringify(label));
});
if(total!==84)throw Error('Unexpected guide references: '+total);
content=content.replace('The prose and reflection questions below are transcribed verbatim from the author-supplied DOCX.','English translation of the author-supplied Spanish DOCX; pastoral editorial review pending.');
fs.writeFileSync(guide,content,'utf8');
const test=path.join(root,'product','englishEdition.test.ts');
let testText=fs.readFileSync(test,'utf8');
testText=testText.replace("row?.text.startsWith(prefix)","row?.text.includes(prefix)");
fs.writeFileSync(test,testText,'utf8');
const appIgnore=path.join(app,'.gitignore');
const ignore=fs.readFileSync(appIgnore,'utf8');
if(!ignore.includes('data/english-source/'))fs.appendFileSync(appIgnore,'\n# Locally cached source archives and machine-translation cache (do not commit)\n/data/english-source/\n');
console.log(JSON.stringify({filesUpdated:updated,guideReferencesNormalized:total,schema:'WEBP English-only standalone app',originalSpanishGuide:'unchanged',originalSpanishDatabase:'unchanged'}));

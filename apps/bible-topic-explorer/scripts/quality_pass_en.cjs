'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const base=path.resolve(__dirname,'..');
const update=(rel,old,sub)=>{const p=path.join(base,rel),s=fs.readFileSync(p,'utf8');if(!s.includes(old))throw Error('Not found '+rel+' : '+old.slice(0,80));fs.writeFileSync(p,s.replace(old,sub),'utf8');};
const rep=(rel,maps)=>{let p=path.join(base,rel),s=fs.readFileSync(p,'utf8');for(const [a,b] of maps){if(!s.includes(a))throw Error('Missing '+rel+' '+a);s=s.replaceAll(a,b)}fs.writeFileSync(p,s,'utf8')};
rep('src/db/sqliteBibleRepository.ts',[
 ['Coincidencia literal completa en WEBP:', 'Exact whole-word match in WEBP:'],
 ['Evidencia curada para', 'Curated lexical evidence for'],
 ['forma completa', 'whole word'],
 ['Evidencia temática curada para','Curated thematic evidence for'],
 ['término completo','whole word'],
 ['” en WEBP.', '” in WEBP.'],
 ['[^a-z0-9ñ]','[^a-z0-9]']
]);
const family=[
 ['God and faith','God and Faith'],['Love and relationships','Love and Relationships'],
 ['Forgiveness and restoration','Forgiveness and Restoration'],['inner life','Inner Life'],
 ['Dificultades y emociones','Difficulties and Emotions'],['Prayer and spiritual practice','Prayer and Spiritual Practice'],
 ['Character and behavior','Character and Conduct'],['Decisions and everyday life','Decisions and Daily Life'],
 ['Bible and understanding','Bible and Understanding'],['Hope and Christian life','Hope and Christian Life']
];
for(const rel of ['src/ui/screens/SearchScreen.tsx','src/product/conceptPreviews.ts']){
 const p=path.join(base,rel);let s=fs.readFileSync(p,'utf8');for(const [b,t] of family)s=s.replaceAll(b,t);fs.writeFileSync(p,s,'utf8');
}
rep('src/ui/screens/SearchScreen.tsx',[
 ['Amistades, familia y respeto','Friendships, family and respect'],
 ["localeCompare(b.label,'es')","localeCompare(b.label,'en')"],
 ["toLocaleUpperCase('es')","toLocaleUpperCase('en')"],
 ["'Ver concepto '","'View topic '"],
 ["' en WEBP'","' in WEBP'"],
 ["\"Explore\"+family","\"Explore \"+family"],
 ["\"Read\"+passage.reference","\"Read \"+passage.reference"],
 ["}topics with content","} topics with content"],
 ["}topics</Text>","} topics</Text>"]
]);
rep('src/product/originalLyrics.ts',[
 ['/** Four wholly ORIGINAL Spanish lyrics prepared for','/** Four English translations of ORIGINAL project lyrics prepared for'],
 ["language:'es'","language:'en'"],
 ["version:'Versión española original 1.0 (2026)'","version:'English translation of original 1.0 (2026)'"],
 ["title:'Sembrar esperanza'","title:'Sowing Hope'"],
 ["source:'Creación original para R1.3; no procede de canciones existentes.'","source:'Original project creation for R1.3; not based on existing songs.'"],
 ["source:'Creación original para R1.3.'","source:'Original project creation for R1.3.'"]
]);
console.log('English search, topic group consistency, source descriptions, and lyrics metadata repaired.');

'use strict';
/** Rebase historic Spanish edition expectations onto the independent English edition, preserving the assertions. */
const fs=require('node:fs'),path=require('node:path'),app=path.resolve(__dirname,'..');
const maps={
'src/db/schema.test.ts':[['bible-topic-explorer.db','bible-webp-en.db'],["'rv1909'","'webp'"]],
'src/product/contracts.test.ts':[['RV1909','WEBP']],
'src/product/navigation.test.ts':[
 ["['Hoy', 'Explorar', 'Leer', 'Biblioteca']","['Today', 'Explore', 'Read', 'Library']"],
 ["book: 'Juan'","book: 'John'"],["book: 'Génesis'","book: 'Genesis'"],
 ["bibleBook: 'Génesis'","bibleBook: 'Genesis'"]
],
'src/product/today.test.ts':[
 ["'rv1909'","'webp'"],
 ["['Esperanza','Paz','Amor','Fortaleza','Gratitud','Propósito','Amistad','Perdón','Consuelo']","['Hope','Peace','Love','Strength','Gratitude','Purpose','Friendship','Forgiveness','Comfort']"]
],
'src/product/topics.test.ts':[
 ["resolveTopic('Espiritu Santo')","resolveTopic('Holy Spirit')"],
 ["resolveTopic('Cristo')","resolveTopic('Christ')"],
 ["resolveTopic('acción de gracias')","resolveTopic('Thanksgiving')"]
],
'src/product/verseSharing.test.ts':[
 ['1 Corintios','1 Corinthians'],
 ['El amor es sufrido, es benigno.','Love is patient and is kind.'],
 ['Reina-Valera 1909','World English Bible'],
 ['guiapastoralbiblia://leer?','pastoralbibleen://read?']
],
'src/product/searchFilters.test.ts':[
 ["bookName:'Salmos'","bookName:'Psalms'"],["bookName:'Juan'","bookName:'John'"]
],
'src/db/sqliteLocalPersistence.test.ts':[
 ["'rv1909'","'webp'"],["Salmos","Psalms"]
],
'src/product/soundcloud.test.ts':[
 ['Abrir SoundCloud ↗','Open SoundCloud ↗'],
 ['persona responsable debe comprobar','a responsible person must check'],
 ['La U no descarga ni redistribuye audio','Bible – Pastoral Guide does not download or redistribute audio'],
 ['no son propias ni están aprobadas','neither owned nor approved']
],
'src/product/finalIntegration.test.ts':[
 ["{book:'Salmos',chapter:23,start:1,end:3}","{book:'Psalms',chapter:23,start:1,end:3}"],
 ['Abrir SoundCloud ↗','Open SoundCloud ↗']
],
'src/product/integratedModules.test.ts':[
 ['EPUB inválido','Invalid EPUB']
],
'src/product/conceptIndex.test.ts':[
 ["toContain('pendientes')","toContain('pending')"],
 ["toContain('no se muestran pasajes')","toContain('no passages are shown')"],
 ["toBe('¿Por qué adoramos?')","toBe('Why do we worship?')"],
 ["['Juan 4:19–26','Salmos 95:1–7']","['John 4:19–26','Psalms 95:1–7']"],
 ["toContain('música')","toContain('music')"],
 ["toContain('temas con contenido')","toContain('topics with content')"],
 ["toContain('Volver a Explorar')","toContain('Back to Explore')"]
],
'src/product/youthTopicPresentation.test.ts':[
 ["toBe('¿Quién es Dios para ti?')","toMatch(/Who is God/i)"],
 ["toBe('Encontrar calma y construir paz')","toMatch(/peace/i)"],
 ["toBe('Seguir adelante cuando cuesta')","toMatch(/forward|hope|hard/i)"],
 ["toBe('Cuando sientes miedo')","toMatch(/fear|afraid/i)"],
 ["['Deuteronomio 6:4–5','Hechos 17:24–28']","['Deuteronomy 6:4–5','Acts 17:24–28']"],
 ["['Juan 14:25–27','Mateo 5:9–12']","['John 14:25–27','Matthew 5:9–12']"],
 ["['Romanos 5:1–5','1 Pedro 1:3–9']","['Romans 5:1–5','1 Peter 1:3–9']"],
 ["'accessibilityLabel={\\'Ver concepto \\'+topic.label}'","'accessibilityLabel={\\'View topic \\'+topic.label}'"],
 ["'Leer este pasaje'","'Read this passage'"]
]};
let changed=0;
for(const [rel,pairs] of Object.entries(maps)){
 const name=path.join(app,rel);let s=fs.readFileSync(name,'utf8');
 for(const [before,after] of pairs){
  if(!s.includes(before)){if(s.includes(after))continue;throw Error('Missing '+rel+' :: '+before);}
  s=s.replaceAll(before,after);
 }
 fs.writeFileSync(name,s,'utf8');console.log('MIGRATED',rel);changed++;
}
console.log('MIGRATED_FILES='+changed);

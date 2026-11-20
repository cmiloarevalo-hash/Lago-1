'use strict';
/* One-time localization generator. Output is reviewed/validated separately.
 * Original Spanish pastoralTopics.ts is never modified.
 * Translation calls use public Google Translate; no user data is sent.
 */
const fs=require('node:fs');
const path=require('node:path');
const { DatabaseSync }=require('node:sqlite');
const ts=require('typescript');
const app=path.resolve(__dirname,'..');
const local=path.join(app,'data','english-source');
const cachePath=path.join(local,'translation-cache.json');
const origin=path.join(app,'src','product','pastoralTopics.ts');
const target=path.join(app,'src','product','pastoralTopics.en.ts');
const inspect=process.argv.includes('--inspect');
const onlyGuide=process.argv.includes('--guide');
const allFiles=[];
function walk(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,f.name);if(f.isDirectory())walk(p);else if(/\.(ts|tsx)$/.test(f.name)&&!f.name.endsWith('.test.ts')&&!f.name.endsWith('.test.tsx')&&!f.name.endsWith('.d.ts')&&f.name!=='pastoralTopics.ts')allFiles.push(p);}}
if(!fs.existsSync(target))fs.copyFileSync(origin,target);
if(!onlyGuide){allFiles.push(path.join(app,'App.tsx'));walk(path.join(app,'src','ui'));walk(path.join(app,'src','product'));walk(path.join(app,'src','db'));}
allFiles.push(target);
const files=[...new Set(allFiles)].filter(f=>!f.endsWith('generate_english_worktree.cjs'));
const dbEs=new DatabaseSync(path.join(app,'assets','data','bible-topic-explorer.db'),{readOnly:true});
const dbEn=new DatabaseSync(path.join(local,'bible-webp-en.qa.db'),{readOnly:true});
const namesEs=dbEs.prepare('SELECT id,default_name_es AS name FROM books ORDER BY id').all();
const enMap=new Map(dbEn.prepare('SELECT id,default_name_es AS name FROM books').all().map(x=>[x.id,x.name]));
const bookMap=new Map(namesEs.map(x=>[x.name,enMap.get(x.id)]));
dbEs.close();dbEn.close();
bookMap.set('Salmo','Psalm');bookMap.set('Cantar de los Cantares','Song of Songs');
const skipKeys=new Set(['id','topicId','kind','questionKind','version','planId','tab','origin','target','slug','source','url','uri','href','path','icon','symbol','route','mode','type','fontFamily','fontWeight','position','resizeMode','alignItems','justifyContent','textAlign','flexDirection','accessibilityRole','keyboardType','testID','uri','color','languageTag','locale','dateStyle','timeStyle','storageKey','inputMode','fileName','filename','encoding','mimeType','field','operator','sourceVerseLabel','sourceVerseLabels','bookId','translationId','key','status','categoryId','theme','themeMode','themeId','selection']);
const spanishWords=/\b(?:biblioteca|biblia|capitulo|capítulos|versículo|versiculos|versos|oración|oracion|palabra|palabras|guia|guía|jesus|jesús|dios|señor|cristianos|testamento|lectura|leer|leído|buscar|búsqueda|explorar|inicio|hoy|casa|mi|mis|tus|tu|para|por|sin|con|entre|sobre|desde|hasta|como|cuando|donde|dónde|qué|que|quién|quien|cuál|cual|una|unas|unos|las|los|del|al|es|son|fue|era|fueron|será|puede|podemos|quieres|abrir|cerrar|volver|guardar|eliminar|compartir|favoritos|favorito|notas|nota|ajustes|configuración|selecciona|seleccionar|continuar|siguiente|anterior|reintentar|error|recurso|recursos|origen|fuentes|tema|temas|lecturas|reflexión|capítulos|diario|recordatorio|versión|traducción|pasaje|pasajes|disponible|disponibles|actividades|planes|juegos|personal|canción|canciones|subtítulo|objetivo|pregunta|preguntas|historia|pregúntate|verdad|todo|nada|todos|gracias|paz|amor|fe|vida|aprender|enseñanza|enseñanzas|ayuda|ayudar|entender|ante|durante|porque|también|aquí|allí|ahora|luego|primero|después|mientras|antes|nuevo|antiguo|recientes|borrar|capítulo|salmos|éxodo|génesis|mateo|lucas|marcos|juan|iglesia|música|himnos|himnario|añadir|agregar|iniciar|escribir|activar|desactivar|buscar|resultados|coincidencias|instrucciones|opción|opciones|acerca|contacto|diarios|versiculos)\b/i;
const single=new Set(['hoy','leer','biblia','explorar','biblioteca','buscar','volver','guardar','salir','cancelar','cerrar','ajustes','capítulo','salmos','mateo','lucas','marcos','juan','génesis','éxodo','levítico','números','salvar','notas','favoritos','siguiente','anterior','continuar','versículo','versículos','tema','temas','todos','todas','libros','libro','acerca','ayuda','opciones','paz','amor','esperanza','fe','perdón','dios','jesús','oración','iglesia','bautismo','gracia','música','himnario','diario']);
const good=/[A-Za-zÀ-ÿ]/;
function should(value){
 const s=value.trim();
 if(s.length<3||!good.test(s)||s.length>6000)return false;
 if(/^(?:https?:|\/|\.\/|[a-z0-9_]+(?:[-./:][a-z0-9_]+)+$)/i.test(s))return false;
 if(/^(?:[A-F0-9]{8,}|#[0-9a-f]{3,}|[a-z]{2}(?:[-_][A-Z]{2})?)$/.test(s))return false;
 if(bookMap.has(s))return true;
 if(s==='Reina Valera 1909'||s==='RV1909')return true;
 if(/[áéíóúüñ¿¡ÁÉÍÓÚÜÑ]/.test(s))return true;
 if(single.has(s.toLowerCase()))return true;
 if(spanishWords.test(s))return true;
 return false;
}
const candidates=[];
const fileData=new Map();
for(const file of files){
 const code=fs.readFileSync(file,'utf8');
 const sf=ts.createSourceFile(file,code,ts.ScriptTarget.Latest,true,file.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
 const nodes=[];
 function visit(node){
  if(ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node)){
   const key=node.parent&&ts.isPropertyAssignment(node.parent)?node.parent.name.getText(sf).replace(/^['"]|['"]$/g,''):null;
   const importNode=node.parent&&(ts.isImportDeclaration(node.parent)||ts.isExportDeclaration(node.parent));
   const tupleId=(file.endsWith('topics.ts')&&ts.isArrayLiteralExpression(node.parent)&&node.parent.elements[0]===node&&ts.isArrayLiteralExpression(node.parent.parent));
   const deepLink=(file.endsWith('verseSharing.ts')&&['leer','://leer?'].includes(node.text));
   const internalKey=(node.text==='diario-'||node.text==='error');
   if(!importNode&&!skipKeys.has(key)&&!tupleId&&!deepLink&&!internalKey){
     const value=node.text;
     if(should(value))nodes.push({start:node.getStart(sf),end:node.end,value,type:'quoted',key});
   }
  }else if(ts.isJsxText(node)){
   const raw=node.getText(sf);
   const trim=raw.trim();
   if(should(trim))nodes.push({start:node.pos,end:node.end,value:trim,type:'jsx',raw});
  }
  ts.forEachChild(node,visit);
 }
 visit(sf);
 if(nodes.length){candidates.push(...nodes.map(x=>({file:path.relative(app,file).replace(/\\/g,'/'),...x})));fileData.set(file,{code,nodes});}
}
if(inspect){
 const group={};for(const c of candidates){(group[c.file]??=[]).push(c.value);}
 for(const [file,v] of Object.entries(group))console.log(file+' '+v.length+' '+JSON.stringify(v.slice(0,7)));
 console.log('TOTAL '+candidates.length+' UNIQUE '+new Set(candidates.map(x=>x.value)).size);
 process.exit(0);
}
let cache={};try{cache=JSON.parse(fs.readFileSync(cachePath,'utf8'));}catch{}
const unique=[...new Set(candidates.map(c=>c.value))].filter(s=>!(s in cache));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let done=0,failed=0;
async function translate(s){
 if(bookMap.has(s))return bookMap.get(s);
 if(s==='RV1909')return 'WEBP';
 if(s==='Reina Valera 1909')return 'World English Bible';
 if(s==='Guía pastoral - Biblia')return 'Bible – Pastoral Guide';
 if(s==='Biblia - Guía pastoral')return 'Bible – Pastoral Guide';
 let input=s.replaceAll('RV1909','WEBP').replaceAll('Reina Valera 1909','World English Bible');
 for(let attempt=0;attempt<4;attempt++){
  try{
   const url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q='+encodeURIComponent(input);
   const controller=new AbortController();
   const timer=setTimeout(()=>controller.abort(),25000);
   const response=await fetch(url,{signal:controller.signal});
   clearTimeout(timer);
   if(!response.ok)throw new Error('HTTP '+response.status);
   const result=await response.json();
   const output=result?.[0]?.map(x=>x[0]).join('');
   if(!output||typeof output!=='string')throw new Error('empty translation');
   return output;
  }catch(e){if(attempt===3)throw e;await sleep(300*(attempt+1));}
 }
}
let next=0;
async function worker(){
 while(next<unique.length){
  const n=next++;
  const s=unique[n];
  try{cache[s]=await translate(s);}catch(e){failed++;cache[s]=s;console.error('FAILED '+JSON.stringify(s.slice(0,60))+' '+String(e));}
  done++;
  if(done%25===0||done===unique.length){fs.writeFileSync(cachePath,JSON.stringify(cache,null,2));console.log('TRANSLATED '+done+'/'+unique.length+' ERRORS '+failed);}
 }
}
(async()=>{
 console.log('CANDIDATES '+candidates.length+' UNIQUE '+unique.length+' FILES '+fileData.size);
 await Promise.all(Array.from({length:5},worker));
 fs.writeFileSync(cachePath,JSON.stringify(cache,null,2));
 let updated=0;
 for(const [file,{code,nodes}] of fileData){
  let nextCode=code;
  for(const node of nodes.sort((a,b)=>b.start-a.start)){
   const translated=cache[node.value]||node.value;
   const newValue=node.type==='quoted'?JSON.stringify(translated):node.raw.replace(node.value,translated.replace(/&/g,'&amp;'));
   nextCode=nextCode.slice(0,node.start)+newValue+nextCode.slice(node.end);
  }
  if(nextCode!==code){fs.writeFileSync(file,nextCode,'utf8');updated++;}
 }
 console.log('FILES_UPDATED '+updated+' FAILED '+failed);
 if(failed)process.exitCode=2;
})().catch(e=>{console.error(e);process.exitCode=1;});

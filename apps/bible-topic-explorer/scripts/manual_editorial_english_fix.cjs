'use strict';
/** Human-curated English wording for remaining short Spanish content, original proper song names preserved. */
const fs=require('node:fs'),path=require('node:path'),ts=require('typescript'),{execFileSync}=require('node:child_process');
const app=path.resolve(__dirname,'..'),repo=path.resolve(app,'../..');
function source(rel){return fs.readFileSync(path.join(app,rel),'utf8')}
function write(rel,s){fs.writeFileSync(path.join(app,rel),s,'utf8')}
function replace(rel,pairs){let s=source(rel);for(const [oldValue,newValue] of pairs){
 const beforeDouble=JSON.stringify(oldValue),afterDouble=JSON.stringify(newValue);
 const beforeSingle="'"+oldValue+"'",afterSingle="'"+newValue+"'";
 let n=0;
 if(s.includes(beforeDouble)){s=s.replaceAll(beforeDouble,afterDouble);n++}
 if(s.includes(beforeSingle)){s=s.replaceAll(beforeSingle,afterSingle);n++}
 if(!n)throw Error('Missing '+rel+' '+oldValue);
}write(rel,s)}
replace('src/product/pastoralActivities.ts',[
 ['Servicio','Service'],
 ['Ronda de nombres y gestos','Names and Gestures Circle'],
 ['Ninguno','None'],
 ['Cada persona dice su nombre y elige un gesto simple.','Each person says their name and chooses a simple gesture.'],
 ['Papel opcional','Optional paper'],
 ['Formar grupos de tres o cuatro.','Form groups of three or four.'],
 ['Dialogar y hallar tres gustos o intereses compartidos.','Discuss and find three shared interests.'],
 ['Mapa de esperanzas','Map of Hopes'],
 ['Tarjetas y marcadores','Cards and markers'],
 ['Dar espacio a metas concretas y posibles.','Make room for achievable, concrete goals.'],
 ['Papel y cinta','Paper and tape'],
 ['Formar equipos y entregar materiales iguales.','Form teams and distribute equal materials.'],
 ['Chain history','Chain Story'],
 ['Each person adds a phrase or says step.','Each person adds a sentence or chooses to pass.'],
 ['No narrar intimidad ajena ni convertir experiencias dolorosas en juego.','Do not share other people’s private experiences or make painful experiences into a game.'],
 ['Tarjetas','Cards'],
 ['Reconocer lenguaje de acogida.','Recognize welcoming language.'],
 ['Agree responsible and verify before publishing or contacting.','Assign responsibilities and verify consent before contact or publication.'],
 ['Each person observes what they say, what they don\'t say, and what questions they raise.','Each person notes what the passage says, what it does not say, and what questions it raises.'],
 ['Escucha de dos minutos','Two-Minute Listening'],
 ['Reloj','Clock or timer'],
 ['No usar relatos sensibles ni grabar conversaciones.','Do not use sensitive personal stories or record conversations.'],
 ['Camino de acuerdos','Path to Agreement'],
 ['Objetos de gratitud','Objects of Gratitude'],
 ['Objetos cotidianos opcionales','Optional everyday objects'],
 ['Expresar agradecimiento libremente.','Express gratitude freely.'],
 ['Evitar interpretaciones aisladas.','Avoid interpretations detached from context.'],
 ['Semillas de ideas','Seeds of Ideas'],
 ['Cadena de agradecimiento','Chain of Gratitude'],
 ['Visibilizar aportes observables.','Make visible the contributions we have observed.'],
 ['Evitar favoritismos y elogios de apariencia.','Avoid favoritism and comments about appearance.'],
 ['Fichas de figuras','Shape cards'],
 ['Red de servicio','Service Network'],
 ['Pizarra','Whiteboard'],
 ['Nombrar apoyo alternativo y verificar consentimientos.','Name alternate support and confirm consent.'],
 ['Observation break','Observation Pause'],
 ['Papel','Paper'],
 ['Tarea compartida','Shared Task'],
 ['Papel y marcadores','Paper and markers'],
 ['Asignar tareas considerando fortalezas y accesibilidad.','Assign tasks considering strengths and accessibility.'],
 ['No pedir pruebas de cumplimiento ni datos sensibles.','Do not demand evidence of participation or sensitive personal details.'],
 ['Each person writes down an idea of ​​community support.','Each person writes down an idea for community support.']
]);
const songFile='src/product/pastoralSongs.ts';
const old=execFileSync('git',['show','c06dc24b1dd0de0a4990653f2d2fe1b69c55f9b5:apps/bible-topic-explorer/src/product/pastoralSongs.ts'],{cwd:repo,encoding:'utf8'});
const current=source(songFile);
function get(sfString){const sf=ts.createSourceFile('songs.ts',sfString,ts.ScriptTarget.Latest,true);let entries;function visit(n){if(ts.isVariableDeclaration(n)&&n.name.getText(sf)==='entries')entries=n.initializer;ts.forEachChild(n,visit)}visit(sf);if(!ts.isArrayLiteralExpression(entries))throw Error('Missing entries');return entries.elements}
const oldEntries=get(old),newEntries=get(current);
if(oldEntries.length!==20||newEntries.length!==20)throw Error('Expected 20 original song names');
let songSrc=current;
const songReplacements=[];
for(let i=0;i<20;i++){
 const prior=oldEntries[i],now=newEntries[i];
 if(prior.elements[0].text!==now.elements[0].text)throw Error('Song ID mismatch '+i);
 const title=now.elements[1],from=title.getStart(),to=title.end;
 songReplacements.push({from,to,text:JSON.stringify(prior.elements[1].text)});
}
for(const x of songReplacements.sort((a,b)=>b.from-a.from))songSrc=songSrc.slice(0,x.from)+x.text+songSrc.slice(x.to);
write(songFile,songSrc);
replace(songFile,[
 ['Bienvenida','Welcome'],['Shipment','Sending Forth'],
 ['Apreciar asombro y gratitud.','Appreciate wonder and gratitude.'],
 ['Expresar gratitud compartida.','Express shared gratitude.'],
 ['Reconocer la posibilidad de cambiar.','Recognize the possibility of change.']
]);
replace('src/product/pastoralGames.ts',[
 ['Romanos 8','Romans 8'],['1 Corintios 13','1 Corinthians 13'],
 ['1 Corintios 13:1–13','1 Corinthians 13:1–13'],
 ['El Salmo 23 habla solamente de lugares tranquilos y no menciona peligro.','Psalm 23 speaks only of peaceful places and mentions no danger.']
]);
replace('src/product/today.ts',[
 ['Consuelo','Comfort'],['Fortaleza','Strength'],['Gratitud','Gratitude'],['Amistad','Friendship'],
 ['Sorry','Forgiveness'],['Considera el contexto de la perseverancia.','Consider the context of perseverance.']
]);
replace('src/product/verseSharing.ts',[
 ['Open in Pastoral Guide - Bible:','Open in Bible – Pastoral Guide:']
]);
let verse=source('src/product/verseSharing.ts');
verse=verse.replace('return verseCopyText(verse)+"Open in Bible – Pastoral Guide:"+buildVerseLink(verse);',
                   'return verseCopyText(verse)+"\nOpen in Bible – Pastoral Guide: "+buildVerseLink(verse);'.replace('"\n','"\\n'));
write('src/product/verseSharing.ts',verse);
let touched=0;
for(const f of fs.readdirSync(path.join(app,'src/ui/screens'))){if(!f.endsWith('.tsx'))continue;const rel='src/ui/screens/'+f;let s=source(rel);if(s.includes('The U')){write(rel,s.replaceAll('The U','Bible – Pastoral Guide'));touched++;}}
console.log(JSON.stringify({activities:20,songTitlesKeptOriginal:20,songMetadataEnglish:true,brandingScreensFixed:touched}));

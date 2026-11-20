'use strict';
/** Audit pass 2: exact strings retained from Spanish baseline, excluding proper song and playlist titles. */
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const app=path.resolve(__dirname,'..');
const fixes={
'src/product/conceptPreviews.ts':[
 ['No normalizar abusos','Do not normalize abuse'],
 ['No moralizar enfermedad o duelo','Do not blame people for illness or grief'],
 ['No imponer ayuno alimentario a menores','Do not impose food fasting on minors'],
 ['No coaccionar elecciones vocacionales','Do not pressure people into vocational decisions']
],
'src/product/music.ts':[
 ['Playlist recomendada','Recommended playlist'],
 ["category:'Alabanza'","category:'Praise'"],
 ["The musica cristiana blog","The Música Cristiana blog"],
 ["category:\"Youths\"","category:\"Youth\""]
],
'src/product/search.ts':[
 ["reference:'Referencia'","reference:'Reference'"],
 ["phrase:'Frase exacta'","phrase:'Exact phrase'"],
 ["word:'Texto literal'","word:'Literal text'"]
],
'src/product/uxCopy.ts':[['Referencia retirada de guardados.','Reference removed from saved items.']],
'src/product/personalBooks.ts':[['% estimado','% estimated'],["\"Chapter\"+(book.chapterIndex+1)","\"Chapter \"+(book.chapterIndex+1)"]],
'src/ui/screens/BibleScreen.tsx':[
 ['>Resaltar</Text>','>Highlight</Text>'],
 ['>Elige un color</Text>','>Choose a color</Text>'],
 ["'Destacar '+label","'Highlight '+label"],
 ["'Quitar referencia guardada'","'Remove saved reference'"]
],
'src/ui/screens/HymnalScreen.tsx':[
 ['Cancionero','Hymnal'],
 ['Pendientes de derechos','Pending rights clearance']
],
'src/ui/screens/PastoralGamesScreen.tsx':[
 ['Verdadero/falso','True / False'],
 ["'Verdadero'","'True'"],["'Falso'","'False'"],['Respuesta correcta','Correct answer']
],
'src/ui/screens/PersonalBooksScreen.tsx':[['Retomar ','Resume ']],
'src/ui/screens/SongsScreen.tsx':[
 ['» en Spotify ↗','" on Spotify ↗'],
 ['Ver ficha: ','View guide: ']
],
'src/ui/screens/YouTubeScreen.tsx':[['URL de playlist YouTube','YouTube playlist URL']],
'src/db/personalBookFiles.ts':[
 ['Conflicto local de nombre; vuelve a intentar.','A file with this local name already exists. Try again.'],
 ['Vista PDF incompatible.','Cannot preview this PDF format.']
]
};
let files=0,edits=0;
const out=[];
for(const [relative,changes] of Object.entries(fixes)){
 const file=path.join(app,relative);let data=fs.readFileSync(file,'utf8');
 for(const [before,after] of changes){
  assert(data.includes(before),'Expected source string missing: '+relative+' '+before);
  data=data.replaceAll(before,after);
 }
 out.push([file,data]);files++;edits+=changes.length;
}
for(const [file,data] of out)fs.writeFileSync(file,data,'utf8');
console.log('English copy completed: '+edits+' replacements in '+files+' files; no Spanish original modified.');

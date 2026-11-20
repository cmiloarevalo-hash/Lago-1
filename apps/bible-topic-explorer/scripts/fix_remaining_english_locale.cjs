'use strict';
/** #81: fix bilingual runtime surfaces found by AST audit, without touching Spanish source. */
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const app=path.resolve(__dirname,'..');
const edits={
'src/db/sqlitePersonalBooksRepository.ts':[['Progreso fuera de rango.','Progress is out of range.']],
'src/db/localBackup.ts':[['la-u-respaldo-','bible-pastoral-guide-backup-']],
'src/ui/illustrations/GroupIllustration.tsx':[['Dibujo original de cuatro personas conversando en grupo','Original illustration of four people talking together']],
'src/ui/primitives.tsx':[['Cargando…','Loading…']],
'src/ui/screens/ActivitiesScreen.tsx':[['} personas    ','} people    ']],
'src/ui/screens/BibleScreen.tsx':[
 ['No se pudo actualizar el guardado local.','Could not update the locally saved verse.'],
 ['Seguir escribiendo','Keep writing'],['Descartar','Discard'],
 ['Destacado eliminado.','Highlight removed.'],
 ['No se pudo actualizar el destacado.','Could not update the highlight.'],
 ['THE WORD · REINA-VALERA 1909','THE WORD · WORLD ENGLISH BIBLE'],
 ["tone==='rose'?'rosa':tone==='lavender'?'lavanda':'durazno'","tone==='rose'?'pink':tone==='lavender'?'lavender':'peach'"],
 ['Featured verse.','Verse highlighted.'],
 ["saveStatus.startsWith('No ')","/^(?:Could not|Unable|Failed|Error)/i.test(saveStatus)"]
],
'src/ui/screens/JournalScreen.tsx':[['Seguir escribiendo','Keep writing'],['Descartar','Discard']],
'src/ui/screens/MusicScreen.tsx':[['Fuente/curador:','Source / curator:']],
'src/ui/screens/SettingsScreen.tsx':[
 ['Coral · rosa y crema','Coral · pink and cream'],
 ['Natural · salvia y beige','Natural · sage and beige'],
 ['Marino · azul y dorado','Marine · blue and gold'],
 ['Cargando preferencias locales…','Loading local preferences…'],
 ['Preferencias guardadas en este dispositivo.','Preferences saved on this device.'],
 ['Apariencia','Appearance'],
 ['Preferencia:','Preference:'],
 [' de 7',' of 7'],
 ['cell phone time','Device time'],
 ['Elegir hora · ','Choose time · '],
 ['Activada','Active'],['Permiso denegado','Permission denied'],['Desactivada','Disabled'],
 ['Disable notice','Disable reading notification'],
 ['Estado','Status'],
 ['Completada','Completed'],['Pendiente','Pending'],
 ['Mark introduction as view','Mark introduction as viewed'],
 ['Respaldo manual y privado','Manual private backup'],
 ['Respaldo privado','Private backup'],
 ['Elegir carpeta','Choose folder'],
 ['Respaldo creado: ','Backup created: '],
 ['Privacidad y fuente','Privacy and source'],
 ['Cuenta','Account'],['No requerida','Not required'],['Datos de uso','Usage data'],['Locales','Stored locally'],
 ['World English Bible · BibleAquifer · public domain/CC0 of the package.','World English Bible (WEBP), eBible.org. Public-domain text. License: https://ebible.org/engwebp/copyright.htm.']
],
'src/ui/screens/TodayScreen.tsx':[['REINA VALERA 1909','WORLD ENGLISH BIBLE']],
'src/product/conceptPreviews.ts':[
 ['Miqueas denuncia desigualdad real','Micah denounces real inequality'],
 ['Miqueas pone el acento en la justicia y la bondad.','Micah emphasizes justice and kindness.'],
 ['Pablo invita a revisar nuestra manera de pensar y actuar.','Paul invites us to reflect on how we think and act.'],
 ['Pablo encourages us','Paul encourages us'],
 ['Pablo remembers that','Paul reminds us that']
],
'src/product/pastoralTopics.en.ts':[['Justicia y servicio a quienes lo necesitan','Justice and service to those in need']],
'src/ui/screens/HymnalScreen.tsx':[
 ['Letra pendiente de derechos','Lyrics pending rights clearance'],
 ['Guardada solo en este dispositivo','Saved on this device only']
],
'src/ui/screens/PastoralGamesScreen.tsx':[['Reiniciar juego','Restart game']],
'src/ui/screens/PersonalBooksScreen.tsx':[['Avance guardado en este dispositivo.','Reading progress saved on this device.']],
'src/ui/screens/SongsScreen.tsx':[['MOMENTO SUGERIDO ·','SUGGESTED MOMENT ·']],
'src/ui/screens/YouTubeScreen.tsx':[['No se pudo cargar la lista. Puedes abrirla en YouTube.','Could not load the list. You can open it on YouTube.']],
'src/product/personalBooks.ts':[
 ['Progreso anotado manualmente: ','Progress entered manually: '],
 ['Solo se admiten documentos PDF y EPUB.','Only PDF and EPUB documents are supported.']
],
'src/product/libraryPresentation.ts':[
 ["rose:'rosa',lavender:'lavanda',peach:'durazno'","rose:'pink',lavender:'lavender',peach:'peach'"]
]
};
const results=[],next=[];
for(const [rel,pairs] of Object.entries(edits)){
 const filename=path.join(app,rel),orig=fs.readFileSync(filename,'utf8');
 let code=orig;
 for(const [before,after] of pairs){
  if(!code.includes(before))throw Error('Missing audited value '+rel+' '+before);
  code=code.replaceAll(before,after);
 }
 assert.notEqual(code,orig,'No change '+rel);
 next.push([filename,code]);results.push({file:rel,changes:pairs.length});
}
for(const [file,code] of next)fs.writeFileSync(file,code,'utf8');
console.log(JSON.stringify({updatedFiles:results.length,totalCorrections:results.reduce((a,b)=>a+b.changes,0),results}));

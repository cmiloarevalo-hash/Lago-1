'use strict';
const fs=require('node:fs'),path=require('node:path');
const app=path.resolve(__dirname,'..');
const fixes={
'App.tsx':[['Rango no encontrado','Passage range not found'],['Do you really want to go out?','Are you sure you want to exit?'],['Go out','Exit']],
'src/ui/screens/PlansScreen.tsx':[
 ['Reiniciar avance de este plan','Reset this plan’s progress'],
 ['Reiniciar progreso','Reset progress'],['No se pudo reiniciar.','Could not reset progress.'],
 ['\'Evangelios\',\'Servicio\'','\'Gospels\',\'Service\''],
 ['DESTACADO','FEATURED'],['7 readings · Reina-Valera Bible 1909','7 readings · World English Bible'],
 ['Comenzar plan  →','Start plan →'],['{done}7 days','{done} / 7 days'],
 ["completed?', completado':', pendiente'","completed?', completed':', pending'"],
 ['{"Continue · day"+nextDay','{"Continue · day "+nextDay'],
 ['}>DAY {entry.day}OF 7 · READING','}>DAY {entry.day} OF 7 · READING'],
 ['title="free prayer"','title="Free prayer"'],
 ['{"Private note of the day"+entry.day}','{"Private note for day "+entry.day}'],
 ['{"Day"+d.day','{"Day "+d.day'],['{"Open day"+d.day','{"Open day "+d.day'],
 ['WEBP tickets are local.','WEBP readings are stored locally.']
],
'src/ui/screens/ActivitiesScreen.tsx':[
 ['label="personas"','label="people"'],['label="minutos"','label="minutes"'],
 ['label="edad sugerida"','label="suggested age"'],['label="minutos aprox."','label="approx. minutes"'],
 ['label="dynamic"','label="activities"'],['>Materiales</Text>','>Materials</Text>'],
 ['>to talk</Text>','>Discussion</Text>'],
 ["'Ocultar recomendaciones de cuidado'","'Hide accessibility guidance'"],
 ["'Ver recomendaciones de cuidado'","'Show accessibility guidance'"],
 ["'Ocultar indicaciones'","'Hide guidance'"],
 ["'Cuidado y accesibilidad'","'Care and accessibility'"],
 ["item.groupSize+' personas, '+item.minutes+' minutos'","item.groupSize+' people, '+item.minutes+' minutes'"],
 ['{"Open guide"+item.title','{"Open guide "+item.title'],
 ['{selected.safety}Participating is voluntary:','{selected.safety} Participating is voluntary:']
],
'src/ui/screens/BibleScreen.tsx':[
 ["Alert.alert('Descartar cambios'","Alert.alert('Discard changes'"],
 ["expandedNote?'Contraer':'Expandir'","expandedNote?'Collapse':'Expand'"],
 ['label="← Cambiar libro"','label="← Change book"'],
 ['selected\'','selected\'']
],
'src/ui/screens/JournalScreen.tsx':[['{"Year"+year}','{"Year "+year}']],
'src/ui/screens/LibraryScreen.tsx':[
 ["'Fecha desconocida'","'Unknown date'"],
 ["activity:'Actividad reciente'","activity:'Recent activity'"],
 ['label="Actividad reciente"','label="Recent activity"'],
 ['placeholder="Ej.: Esperanza"','placeholder="E.g. Hope"'],
 ['label="Save file"','label="Save details"'],['label="Organizar"','label="Organize"'],['label="Quitar"','label="Remove"']
]
};
let total=0;
for(const [rel,pairs] of Object.entries(fixes)){
 let file=path.join(app,rel),s=fs.readFileSync(file,'utf8'),done=0;
 for(const [from,to] of pairs){
  if(from===to)continue;
  if(s.includes(from)){s=s.replaceAll(from,to);done++;}
  else if(s.includes(to)){continue}
  else console.warn('REVIEW_REQUIRED',rel,from);
 }
 fs.writeFileSync(file,s,'utf8');console.log('FIXED',rel,done);total+=done;
}
console.log('STRINGS_FIXED',total);

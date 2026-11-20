'use strict';
const fs=require('node:fs'),path=require('node:path');
const app=path.resolve(__dirname,'..');
const changes={
'src/ui/screens/BibleScreen.tsx':[
 ['"Actions for"+canonicalName','"Actions for "+canonicalName'],
 ['"Read private note from"+canonicalName','"Read private note from "+canonicalName'],
 [' · seleccionado',' · selected'],[' · guardado',' · saved'],[' · destacado',' · highlighted']
],
'src/product/conceptPreviews.ts':[['Keep going when it costs','Keep going when it gets hard']],
'src/ui/accessibilityContract.test.ts':[
 ['require(\'./assets/data/bible-topic-explorer.db\')','require(\'./assets/data/bible-webp-en.db\')'],
 ["toContain('seleccionado')","toContain('selected')"]
],
'src/product/conceptIndex.test.ts':[
 ["toContain('Back to Explore')","toContain('Return to Explore')"]
],
'src/ui/nativeUxV11.test.ts':[
 ['Versículos guardados','Saved verses'],['Actividad reciente','Recent activity'],['Historial rápido','Quick history'],
 ["\"'Año '+year\"","'\"Year \"+year'"],
 ['Biblia - Guía pastoral Reina Valera 1909','Bible – Pastoral Guide'],
 ['"version": "1.11.6"','"version": "1.20.01"'],['"versionCode": 18','"versionCode": 20'],
 ['Una pausa para que la Palabra ilumine tu día.','A pause for the Word to illuminate your day.'],
 ['label="Guardar nota"','label="Save note"'],
 ['Descartar cambios','Discard changes'],
 ['Descartar reflexión','Discard reflection'],
 ['>Biblia - Guía pastoral</Text>','>Bible – Pastoral Guide</Text>'],
 ['>Reina Valera 1909</Text>','>World English Bible</Text>'],
 ['accessibilityLabel="Biblia - Guía pastoral Reina Valera 1909"','accessibilityLabel="Bible - Pastoral Guide World English Bible"'],
 ['accessibilityLabel="Abrir ajustes"','accessibilityLabel="Open settings"'],
 ['>Ajustes</Text></Pressable>','>Settings</Text></Pressable>']
],
'src/ui/ownerUxActivityAttribution.test.ts':[
 ['Cómo hacerlo','How to do it'],
 ['Uso responsable de las dinámicas','Care and accessibility'],
 ['Fuentes y contacto ↗','Sources and contact ↗'],
 ['Proyecto sin fines de lucro','Non-profit project']
],
'src/ui/r13NotesDrawerContract.test.ts':[
 ["expandedNote?'Contraer':'Expandir'","expandedNote?'Collapse':'Expand'"],
 ['label="Cerrar lectura"','label="Close reading"'],
 ["accessibilityLabel={'Acciones para '","accessibilityLabel={\"Actions for \""],
 ["Alert.alert('Eliminar nota privada'","Alert.alert(\"Delete private note\""],
 ['accessibilityLabel="Abrir menú de navegación"','accessibilityLabel="Open navigation menu"']
],
'src/ui/r13VisualReworkContract.test.ts':[
 ["introTitle='Planes de lectura'","const introTitle=\"Reading plans\""],
 ['Santa Sede','Holy See']
],
'src/db/sqliteBibleRepository.test.ts':[
 ['texto RV1909','English WEBP text'],
 ['rv1909','webp'],
 ['Porque de tal manera amó Dios...','For God so loved the world...'],
 ["'\"amó Dios\"'","'\"God so\"'"],
 ['Coincidencia literal','Exact whole-word match'],
 ['forma completa “amó”','whole word “loved”'],
 ['temática curada','thematic evidence'],
 ['Y llamó Dios a la luz Día...','He called the light Day...'],
 ['...a tu prójimo como a ti mismo','...your neighbor as yourself'],
 ['El enamorado llamó a otra persona','The beloved called another person'],
 ['El amor es paciente','Love is patient'],
 ['Con gran amor','With great love'],
 ['gran amor','great love'],
 ['mi prójimo','my neighbor'],
 ['llamó a su padre','called his father'],
 ["'amor'","'love'"],
 ['Salmos','Psalms'],['Génesis','Genesis'],['Juan','John'],['Lucas','Luke']
]
};
let touched=0;
for(const [file,pairs] of Object.entries(changes)){
 const p=path.join(app,file);let s=fs.readFileSync(p,'utf8'),n=0;
 for(const [before,after] of pairs){if(before===after)continue;if(s.includes(before)){s=s.replaceAll(before,after);n++;}else if(!s.includes(after))console.warn('MISSING',file,JSON.stringify(before));}
 if(n){fs.writeFileSync(p,s,'utf8');touched++;}
 console.log('REVIEWED',file,n);
}
console.log('FILES_MODIFIED',touched);

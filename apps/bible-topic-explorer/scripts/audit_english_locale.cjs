'use strict';
/* Review aid: detects likely Spanish user-visible runtime literals, excluding original language resources. */
const fs=require('fs'),path=require('path'),ts=require('typescript');
const app=path.resolve(__dirname,'..'),files=[];
function walk(p){for(const e of fs.readdirSync(path.join(app,p),{withFileTypes:true})){const r=path.join(p,e.name);if(e.isDirectory())walk(r);else if(/\.(tsx?|jsx?)$/.test(e.name)&&!e.name.includes('.test.')&&!/pastoralTopics\.ts$/.test(e.name)&&!e.name.endsWith('.d.ts'))files.push(r);}}
files.push('App.tsx');['src/db','src/ui','src/product'].forEach(walk);
const spanishStrong=/\b(?:respaldo|progreso|rango|cargando|guardadas|preferencias|apariencia|salvia|crema|rosa|dorado|marino|elegir|carpeta|creado|privacidad|fuente|curador|cuenta|requerida|datos|locales|activada|desactivada|denegado|completada|pendiente|estado|personas|destacado|eliminado|actualizar|escribiendo|descartar|reiniciar|siguiente|anterior|guardar|borrar|volver|abrir|cerrar|compartir|enviar|falla|ocurrio|ocurrió|lectura|lecturas|biblia|versiculo|versículos|salmos|génesis|reina|valera|guía|pastoral|justicia|servicio|quienes|necesitan|miqueas|pablo|pueblo|oración|oraciones|sobre|propósito|esperanza|amigos|algunos|evangelios|reflexión|resumen|ayuda|ayudar|copiar|documento|instrucciones|cuidado|conversando|dibujo|original|cuatro|jovenes|jóvenes|manera|pensar|actuar|acento|bondad|perdón|selecciona|consejo|sugerencia|sugerido|terminado|día|dias|días|título|tarea|sección|acerca|dejar|búsqueda|detalles|gratitud|iniciar|añadir|agregar|cambiar|fuentes|contacto|notificacion|bienvenida|cancelar|pendiente|proyecto|transcripcion|traduccion)\b/gi;
const esStops=/\b(?:el|la|los|las|de|del|al|en|y|un|una|por|para|con|sin|se|es|está|fue|que|esta|este|tu|mi|su|nos|ya|como|muy|más|desde|hasta|mientras|cuando|donde|quién|esto|tú|yo|le|les)\b/gi;
const enStops=/\b(?:the|to|a|and|of|for|on|in|is|are|you|your|not|with|this|that|from|can|will|have|it|be|our|we|what|when|where|which|as|at|by|or|please|about)\b/gi;
const ignoredFiles=/pastoralSongs\.ts$|originalLyrics\.ts$/;
const skipKeys=new Set(['id','type','value','name','bookId','translationId','kind','source','uri','sourceUrl','fontFamily','mode','position','testID','family','theme','slug','path','asset','status','route','key','icon','languageTag','locale','sourceVerseLabel']);
const suspicious=[];
for(const rel of files){const raw=fs.readFileSync(path.join(app,rel),'utf8'),sf=ts.createSourceFile(rel,raw,99,true,rel.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
 function visit(n){
  if(ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)||ts.isJsxText(n)){
   const v=ts.isJsxText(n)?n.getText(sf).trim():n.text;
   const key=n.parent&&ts.isPropertyAssignment(n.parent)?n.parent.name.getText(sf).replace(/^['"]|['"]$/g,''):null;
   if(v&&v.length>2&&v.length<5000&&!skipKeys.has(key)&&!/^https?:\/\//.test(v)&&!/^([a-z]+[-:_]\w+|#[0-9a-f]{3,8}|\d+|[a-z]+\.[a-z]+)$/.test(v)){
    const es=(v.match(esStops)||[]).length;const en=(v.match(enStops)||[]).length;const strong=(v.match(spanishStrong)||[]).filter(w=>!['pastoral','original','biblia','reina','valera'].includes(w.toLowerCase())).length;
    const accents=/[¿¡áéíóúñü]/i.test(v)&&!(/^\w+\s*[\u00c0-\u024f]/.test(v)&&/\b(?:Arévalo|Espíritu|Señor|Alabaré|Aquí|Cristo)\b/i.test(v));
    if(!ignoredFiles.test(rel)&&(strong>0||es>=2&&en<es/2||accents)){const lc=sf.getLineAndCharacterOfPosition(n.pos);suspicious.push({file:rel.replace(/\\/g,'/'),line:lc.line+1,strong,es,en,s:v.slice(0,190)});}
   }
  }
  ts.forEachChild(n,visit);
 }
 visit(sf);
}
suspicious.sort((a,b)=>b.strong-a.strong||b.es-a.es);
console.log(JSON.stringify({files:files.length,hitCount:suspicious.length,hits:suspicious},null,2));

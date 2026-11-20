'use strict';
/** Localizes canonical English topic vocabulary while preserving all original stable topic IDs. */
const fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const app=path.resolve(__dirname,'..');
const file=path.join(app,'src/product/topics.ts');
const raw=fs.readFileSync(file,'utf8');
const sf=ts.createSourceFile(file,raw,ts.ScriptTarget.Latest,true);
let decl;
function visit(node){if(ts.isVariableDeclaration(node)&&node.name.getText(sf)==='rows')decl=node;ts.forEachChild(node,visit);}visit(sf);
if(!decl||!ts.isArrayLiteralExpression(decl.initializer))throw Error('Missing topic tuples');
const entries=decl.initializer.elements.map(row=>{
 if(!ts.isArrayLiteralExpression(row)||row.elements.length!==5)throw Error('Invalid row');
 const get=(n)=>{if(!ts.isStringLiteral(n))throw Error('Expected literal '+n.getText(sf));return n.text;};
 const [id,label,group,a,t]=row.elements;
 if(!ts.isArrayLiteralExpression(a)||!ts.isArrayLiteralExpression(t))throw Error('Nonstatic synonyms');
 return [get(id),get(label),get(group),a.elements.map(get),t.elements.map(get)];
});
const canonical=new Map(Object.entries({
'dios':'God','jesus':'Jesus','espiritu-santo':'Holy Spirit','fe':'Faith','confianza':'Trust','gracia':'Grace','salvacion':'Salvation','evangelio':'Gospel','reino-de-dios':'Kingdom of God','voluntad-de-dios':'God’s Will',
'amor':'Love','amistad':'Friendship','familia':'Family','matrimonio':'Marriage','hijos':'Children','projimo':'Neighbor','comunidad':'Community','unidad':'Unity','reconciliacion':'Reconciliation','servicio':'Service',
'perdon':'Forgiveness','misericordia':'Mercy','arrepentimiento':'Repentance','pecado':'Sin','tentacion':'Temptation','culpa':'Guilt','restauracion':'Restoration','confesion':'Confession','obediencia':'Obedience','santidad':'Holiness',
'paz':'Peace','esperanza':'Hope','gozo':'Joy','gratitud':'Gratitude','paciencia':'Patience','humildad':'Humility','sabiduria':'Wisdom','valentia':'Courage','contentamiento':'Contentment','dominio-propio':'Self-control',
'miedo':'Fear','ansiedad':'Anxiety','tristeza':'Sadness','soledad':'Loneliness','enojo':'Anger','sufrimiento':'Suffering','duelo':'Grief','desanimo':'Discouragement','preocupacion':'Worry','cansancio':'Fatigue',
'oracion':'Prayer','alabanza':'Praise','adoracion':'Worship','ayuno':'Fasting','meditacion':'Meditation','lectura-biblica':'Bible Reading','escucha':'Listening','peticion':'Petition','intercesion':'Intercession','accion-de-gracias':'Thanksgiving',
'honestidad':'Honesty','generosidad':'Generosity','justicia':'Justice','compasion':'Compassion','bondad':'Kindness','fidelidad':'Faithfulness','responsabilidad':'Responsibility','trabajo':'Work','descanso':'Rest','disciplina':'Discipline',
'decisiones':'Decisions','proposito':'Purpose','direccion':'Guidance','dinero':'Money','trabajo-y-vocacion':'Work and Vocation','estudios':'Studies','tiempo':'Time','salud':'Health','sexualidad':'Sexuality','conflictos':'Conflicts',
'creacion':'Creation','pacto':'Covenant','ley':'Law','profecia':'Prophecy','parabolas':'Parables','milagros':'Miracles','resurreccion':'Resurrection','cruz':'Cross','mandamientos':'Commandments','promesas':'Promises',
'vida-eterna':'Eternal Life','muerte':'Death','juicio':'Judgment','cielo':'Heaven','mision':'Mission','discipulado':'Discipleship','testimonio':'Testimony','iglesia':'Church','dones':'Gifts','fruto-del-espiritu':'Fruit of the Spirit'
}));
if(entries.length!==100||canonical.size!==100)throw Error('Must preserve 100 topics: '+entries.length+' '+canonical.size);
const groups={
'Dios y fe':'God and Faith','Amor y relaciones':'Love and Relationships','Perdón y restauración':'Forgiveness and Restoration',
'Vida interior':'Inner Life','Dificultades y emociones':'Difficulties and Emotions','Oración y práctica espiritual':'Prayer and Spiritual Practice',
'Carácter y conducta':'Character and Conduct','Decisiones y vida cotidiana':'Decisions and Daily Life',
'Biblia y comprensión':'Bible and Understanding','Esperanza y vida cristiana':'Hope and Christian Life',
'God and faith':'God and Faith','Love and relationships':'Love and Relationships','Forgiveness and restoration':'Forgiveness and Restoration',
'inner life':'Inner Life','Difficulties and emotions':'Difficulties and Emotions','Prayer and spiritual practice':'Prayer and Spiritual Practice',
'Character and behavior':'Character and Conduct','Decisions and everyday life':'Decisions and Daily Life','Bible and understanding':'Bible and Understanding','Hope and Christian life':'Hope and Christian Life'
};
let cache={};const cachePath=path.join(app,'data','english-source','topic-translations-cache.json');
try{cache=JSON.parse(fs.readFileSync(cachePath,'utf8'))}catch{}
const terms=[...new Set(entries.flatMap(row=>[...row[3],...row[4]]))].filter(Boolean);
let idx=0,done=0,failed=0;
async function translate(v){
 for(let tries=0;tries<3;tries++){
  try{
   const url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q='+encodeURIComponent(v);
   const r=await fetch(url);if(!r.ok)throw Error(String(r.status));
   const out=(await r.json())[0].map(x=>x[0]).join('').trim();
   if(!out)throw Error('Empty');
   return out;
  }catch(e){if(tries===2)throw e;await new Promise(res=>setTimeout(res,tries*350+350));}
 }
}
async function worker(){while(idx<terms.length){const v=terms[idx++];if(v in cache)continue;try{cache[v]=await translate(v)}catch(e){cache[v]=v;failed++;console.error('UNTRANSLATED',v,String(e))}if(++done%30===0)console.log('TOPIC_TERMS '+done+'/'+terms.length)}}
(async()=>{
 await Promise.all(Array.from({length:5},worker));
 fs.writeFileSync(cachePath,JSON.stringify(cache,null,2));
 const mapped=entries.map(([id,label,group,aliases,related])=>{
  if(!canonical.has(id))throw Error('Unmapped ID '+id);
  if(!groups[group])throw Error('Unmapped family '+group);
  const norm=x=>cache[x]||x;
  return [id,canonical.get(id),groups[group],aliases.map(norm),related.map(norm)];
 });
 const out=raw.slice(0,decl.initializer.getStart(sf))+JSON.stringify(mapped,null,2)+raw.slice(decl.initializer.end);
 fs.writeFileSync(file,out,'utf8');
 console.log(JSON.stringify({topicCount:mapped.length,families:new Set(mapped.map(x=>x[2])).size,originalIdsPreserved:true,synonymsTranslated:terms.length,failed},null,2));
 if(failed)process.exitCode=2;
})().catch(e=>{console.error(e);process.exitCode=1});

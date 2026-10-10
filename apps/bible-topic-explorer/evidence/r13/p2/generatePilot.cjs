// P2 reproducible pilot, built exclusively from R13 approved research; no Bible text.
const {execFileSync}=require('node:child_process');
const {writeFileSync}=require('node:fs');
const path='ee194e4b500e08bc1c9a04b9d88b45c09c675931:apps/bible-topic-explorer/evidence/r13/research/CATALOGO_100_TEMAS.csv';
const csv=execFileSync('git',['show',path],{encoding:'utf8'});
function parseCsv(s){let rows=[],row=[],field='',quoted=false;
 for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(quoted&&s[i+1]==='"'){field+='"';i++;}else quoted=!quoted;}else if(c===','&&!quoted){row.push(field);field='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&s[i+1]==='\n')i++;row.push(field);if(row.some(Boolean))rows.push(row);row=[];field='';}else field+=c;}
 if(field||row.length){row.push(field);rows.push(row);}let [head,...data]=rows;return data.map(r=>Object.fromEntries(head.map((h,i)=>[h,r[i]??''])));}
const all=parseCsv(csv);
if(all.length!==100||new Set(all.map(r=>r.topicId)).size!==100)throw Error('Catalog coverage changed');
const sample=all.filter(r=>r.statusEditorial==='REVISADO_CONTEXTO_MUESTRA'||r.topicId==='esperanza');
if(sample.length!==23)throw Error('Expected 22 samples plus Esperanza: '+sample.length);
const ref=(label,sourceVerseLabels,motive)=>{const m=label.match(/^(.*) (\d+):(\d+)[–-](\d+)$/u);if(!m)throw Error('Bad range '+label);
 const start=+m[3],end=+m[4],labels=sourceVerseLabels.split(';').filter(Boolean);
 if(!labels.length||start>end)throw Error('Missing source labels for '+label);
 return {reference:label,book:m[1],chapter:+m[2],start,end,sourceVerseLabel:labels[0],sourceVerseLabels:labels,rationale:motive};
};
const out=sample.map(r=>({topicId:r.topicId,family:r.categoria,subtopic:r.subtema,synopsis:r.sinopsisOriginal,status:r.statusEditorial==='REVISADO_CONTEXTO_MUESTRA'?'EN_REVISION':'PROPUESTO',pastoralCaution:r.reservaPastoral,existenceChecked:r.statusExistencia==='VERIFICADA',passages:[ref(r.ref1,r.sourceVerseLabels1,r.motivo1),ref(r.ref2,r.sourceVerseLabels2,r.motivo2)]}));
const header=[
'/** P2: 22 initial context samples + Esperanza (candidate only); NONE human-approved.',
' * Original Spanish summaries and references from R13 research, not Bible text.',
' * The 100 canonical IDs remain exclusively in topics.ts. */',
"export type TopicEditorialStatus = 'PROPUESTO' | 'EN_REVISION' | 'VALIDADO';",
'export interface ConceptPassage {reference:string;book:string;chapter:number;start:number;end:number;sourceVerseLabel:string;sourceVerseLabels:readonly string[];rationale:string;}',
'export interface ConceptPreview {topicId:string;family:string;subtopic:string;synopsis:string;status:TopicEditorialStatus;pastoralCaution:string;existenceChecked:boolean;passages:readonly ConceptPassage[];}',
"export const researchSource = 'evidence/r13-content-research-2026-10-09/apps/bible-topic-explorer/evidence/r13/research/CATALOGO_100_TEMAS.csv';",
"export const researchCorpusGitBlob = 'def02a2ca0684d6b4d8491c7f12d06e910d76519';",
''].join('\n');
writeFileSync('apps/bible-topic-explorer/src/product/conceptPreviews.ts',header+'export const conceptPreviews:readonly ConceptPreview[] = '+JSON.stringify(out,null,2)+';\nexport const previewByTopicId = new Map(conceptPreviews.map(row=>[row.topicId,row]));\n','utf8');
console.log(JSON.stringify({total:all.length,previews:out.length,sampled:out.filter(x=>x.status==='EN_REVISION').length,proposed:out.filter(x=>x.status==='PROPUESTO').length,passages:out.length*2}));

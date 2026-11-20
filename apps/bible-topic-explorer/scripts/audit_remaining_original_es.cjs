'use strict';
/** Compare exact user-visible strings of the original Spanish baseline with the English edition. */
const fs=require('node:fs'),path=require('node:path'),ts=require('typescript'),{execFileSync}=require('child_process');
const app=path.resolve(__dirname,'..'),repo=path.resolve(app,'../..'),base='896b72978b6eb4ad807007d33753a511ccf861ef',files=[];
function walk(p){for(const e of fs.readdirSync(path.join(app,p),{withFileTypes:true})){let r=path.join(p,e.name);if(e.isDirectory())walk(r);else if(/\.tsx?$/.test(e.name)&&!e.name.includes('.test.')&&!/pastoralTopics(\.en)?\.ts$/.test(e.name)&&!e.name.endsWith('.d.ts'))files.push(r)}}
files.push('App.tsx');['src/product','src/ui','src/db'].forEach(walk);
const ignore=new Set(['id','kind','type','name','key','version','source','status','url','path','theme','bookId','translationId','topicId','groupId','sourceVerseLabel','languageTag','color','mode','route','fontFamily','uri','icon','slug']);
const collect=(rel,code)=>{const sf=ts.createSourceFile(rel,code,99,true,rel.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS),list=[];function visit(n){if(ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)||ts.isJsxText(n)){
 const v=ts.isJsxText(n)?n.getText(sf).trim():n.text;
 const key=n.parent&&ts.isPropertyAssignment(n.parent)?n.parent.name.getText(sf).replace(/^['"]|['"]$/g,''):null;
 if(v&&v.length>=7&&v.length<=250&&!ignore.has(key)&&!/^https?:|^file:|^#|^\\d+\\s*$/.test(v)&&/[\p{L}]/u.test(v))list.push({line:sf.getLineAndCharacterOfPosition(n.pos).line+1,s:v});
}ts.forEachChild(n,visit)}visit(sf);return list;};
const hits=[];for(const rel of files){let original;try{original=execFileSync('git',['show',base+':apps/bible-topic-explorer/'+rel.replace(/\\/g,'/')],{cwd:repo,encoding:'utf8',stdio:['ignore','pipe','ignore']});}catch{continue;}
 const es=new Set(collect(rel,original).map(x=>x.s));const en=collect(rel,fs.readFileSync(path.join(app,rel),'utf8'));
 for(const x of en)if(es.has(x.s))hits.push({file:rel.replace(/\\/g,'/'),line:x.line,text:x.s.slice(0,170)});
}
console.log(JSON.stringify({files:files.length,unchangedStrings:hits.length,hits},null,2));

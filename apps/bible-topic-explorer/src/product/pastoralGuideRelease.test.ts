import {describe,expect,it} from 'vitest';
import {DatabaseSync} from 'node:sqlite';
import {pastoralTopics,PASTORAL_GUIDE_VERSION} from './pastoralTopics';
import {drawerDestinations} from './secondaryMenu';
import {readFileSync} from 'node:fs';

describe('Guía pastoral — edición autoral definitiva v1.30',()=>{
 it('preserva 16 capítulos distribuidos entre cuatro temas y todas sus preguntas',()=>{
  expect(PASTORAL_GUIDE_VERSION).toBe('1.30');
  expect(pastoralTopics).toHaveLength(16);
  expect(pastoralTopics.map(p=>p.number)).toEqual(Array.from({length:16},(_,i)=>i+1));
  expect(pastoralTopics.map(p=>p.themeId)).toEqual([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]);
  expect(pastoralTopics[0].title).toBe('¿Qué es la Biblia y de dónde viene?');
  expect(pastoralTopics[15].title).toBe('Vivir lo aprendido: amar con hechos');
  expect(pastoralTopics.every(p=>p.paragraphs.length>=4&&p.question.length>=15)).toBe(true);
  expect(pastoralTopics.reduce((n,p)=>n+p.paragraphs.length,0)).toBe(80);
 });
 it('enlaza las 84 referencias originales a capítulos de RV1909 local y conserva las unidades',()=>{
  const links=pastoralTopics.flatMap(p=>[...p.readingsOld,...p.readingsNew]);
  expect(links).toHaveLength(84);
  const db=new DatabaseSync('assets/data/bible-topic-explorer.db',{readOnly:true});
  try{
   const query=db.prepare(`SELECT v.verse_start AS vstart,v.verse_end AS vend,v.source_verse_label AS verseLabel
    FROM verses v JOIN books b ON v.book_id=b.id
    WHERE v.translation_id='rv1909' AND b.default_name_es=? AND v.chapter_num=?`);
   for(const link of links){
    const rows=query.all(link.book,link.chapter) as {vstart:number|null;vend:number|null;verseLabel:string}[];
    expect(rows.length,`Falta capítulo: ${link.label}`).toBeGreaterThan(0);
    for(let n=link.start;n<=link.end;n++){
     expect(rows.some(r=>(r.vstart??Number.parseInt(r.verseLabel,10))<=n&&(r.vend??r.vstart??Number.parseInt(r.verseLabel,10))>=n),`Falta versículo: ${link.label} — ${n}`).toBe(true);
    }
   }
  }finally{db.close();}
 });
 it('mantiene fuera de navegación visible juegos y SoundCloud, conservando módulos internos',()=>{
  expect(drawerDestinations.map(x=>x.id)).toEqual(['plans','topics','pastoral','my-books','settings']);
  const app=readFileSync('App.tsx','utf8');
  const today=readFileSync('src/ui/screens/TodayScreen.tsx','utf8');
  expect(app).not.toContain('onPlay={()=>navigate(');
  expect(app).not.toContain('onOpenSoundCloud={()=>');
  expect(today).not.toContain("title:'SoundCloud'");
 });
});

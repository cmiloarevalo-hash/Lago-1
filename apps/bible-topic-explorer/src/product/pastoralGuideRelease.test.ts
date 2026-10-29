import {describe,expect,it} from 'vitest';
import {readFileSync} from 'node:fs';
import {pastoralTopics,PASTORAL_GUIDE_VERSION} from './pastoralTopics';
import {drawerDestinations} from './secondaryMenu';

describe('Guía pastoral 1.0.1: lectura juvenil fiel y accesos ocultos',()=>{
 it('conserva el texto original completo, en orden y dividido en cuatro temas',()=>{
  expect(PASTORAL_GUIDE_VERSION).toBe('1.0.1 · 28-10-2026');
  expect(pastoralTopics).toHaveLength(16);
  expect(pastoralTopics[0].title).toBe('¿Qué es la Biblia y de dónde viene?');
  expect(pastoralTopics[15].title).toBe('Vivir lo aprendido: amar con hechos');
  expect(pastoralTopics[0].paragraphs[0]).toContain('La Biblia no fue escrita de una sola vez.');
  expect(pastoralTopics[6].paragraphs[0]).toContain('Getsemaní');
  expect(pastoralTopics[7].paragraphs.join(' ')).toContain('Padre Nuestro');
  expect(pastoralTopics[15].paragraphs.join(' ')).toContain('invita a seguir aprendiendo');
  expect(pastoralTopics.every(x=>x.readingsOld.length>=1 && x.readingsNew.length>=1)).toBe(true);
  expect(pastoralTopics.every(x=>x.paragraphs.join(' ').length>450)).toBe(true);
  expect(new Set(pastoralTopics.map(x=>x.id)).size).toBe(16);
 });
 it('mantiene preguntas de introspección y debate y referencias locales navegables',()=>{
  for(const [i,chapter] of pastoralTopics.entries()){
   expect(chapter.questionKind).toBe(i%4<2?'introspection':'debate');
   for(const ref of [...chapter.readingsOld,...chapter.readingsNew]){
    expect(ref.book.length).toBeGreaterThan(2);
    expect(ref.chapter).toBeGreaterThan(0);
    expect(ref.start).toBeGreaterThan(0);
    expect(ref.end).toBeGreaterThanOrEqual(ref.start);
   }
  }
 });
 it('oculta juegos y SoundCloud sin eliminar sus módulos internos',()=>{
  expect(drawerDestinations.map(item=>item.id)).toEqual(['plans','topics','pastoral','guides','my-books','settings']);
  const app=readFileSync('App.tsx','utf8');
  const today=readFileSync('src/ui/screens/TodayScreen.tsx','utf8');
  const activity=readFileSync('src/ui/screens/ActivitiesScreen.tsx','utf8');
  expect(app).not.toContain('onPlay={()=>navigate(');
  expect(app).not.toContain('onOpenSoundCloud={()=>');
  expect(today).not.toContain("title:'SoundCloud'");
  expect(activity).toContain('{onPlay?<Pressable');
  expect(app).toContain("route.kind==='games'?");
  expect(app).toContain("route.kind==='soundcloud'?");
 });
});

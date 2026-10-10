import {describe,expect,it} from 'vitest';
import JSZip from 'jszip';
import {activityGuides,activityCategories} from './pastoralActivities';
import {songGuides,officialSpotifyTitleSearch,songMoments} from './pastoralSongs';
import {validatePersonalBook,validReadingProgress,bookProgressLabel} from './personalBooks';
import {parsePrivateEpubBase64} from './epubText';
import {drawerDestinations} from './secondaryMenu';
import {initialNavigationState,navigate,goBack,tabs} from './navigation';

describe('R1.3 P3 and P4 actual content / copyright guardrails',()=>{
 it('offers 20 unique usable offline facilitators, not video games',()=>{
  expect(activityGuides).toHaveLength(20);expect(new Set(activityGuides.map(g=>g.id)).size).toBe(20);
  expect(activityCategories.length).toBeGreaterThanOrEqual(5);
  for(const g of activityGuides){expect(g.steps).toHaveLength(3);expect(g.goal.length).toBeGreaterThan(12);expect(g.safety.length).toBeGreaterThan(18);expect(g.minutes).toBeGreaterThan(5);}
 });
 it('offers 20 distinct song-title guides and no media/lyrics, linking only to official Spotify search',()=>{
  expect(songGuides).toHaveLength(20);expect(new Set(songGuides.map(s=>s.id)).size).toBe(20);
  expect(songMoments).toHaveLength(4);
  for(const song of songGuides){
   expect(song.groupPrompt.length).toBeGreaterThan(15);
   const url=new URL(officialSpotifyTitleSearch(song.title));
   expect(url.origin).toBe('https://open.spotify.com');
   expect(url.pathname).toMatch(/^\/search\//);
   expect(decodeURIComponent(url.pathname.slice(8))).toBe(song.title);
  }
  expect(officialSpotifyTitleSearch('  Mi universo ')).toContain('Mi%20universo');
 });
});
describe('R1.3 private documents safety and real nested Back state',()=>{
 it('accepts only PDF/EPUB, rejects paths and oversize, supports manual progress',()=>{
  expect(validatePersonalBook('lectura.pdf',2048)).toEqual({format:'pdf',safeName:'lectura.pdf',bytes:2048});
  expect(validatePersonalBook('carpeta\\libro.epub',2048).safeName).toBe('libro.epub');
  expect(()=>validatePersonalBook('doc.pdf.exe',2048)).toThrow();
  expect(()=>validatePersonalBook('libro.epub',26*1024*1024)).toThrow();
  expect(()=>validatePersonalBook('doc.pdf',101*1024*1024)).toThrow();
  expect(()=>validatePersonalBook('doc.pdf',0)).toThrow();
  expect(validReadingProgress(0)).toBe(true);expect(validReadingProgress(100)).toBe(true);
  expect(validReadingProgress(-1)).toBe(false);expect(validReadingProgress(99.5)).toBe(false);
  expect(bookProgressLabel({format:'pdf',progress:30,chapterIndex:0})).toContain('manualmente');
 });
 it('navigates every drawer leaf and preserves original four-tab navigation with Back',()=>{
  expect(tabs).toEqual(['today','search','bible','library']);
  for(const kind of ['guides','songs','my-books'] as const){
   let state=navigate(initialNavigationState(),{kind,origin:'today'});
   state=navigate(state,{kind,origin:'today',...(kind==='guides'?{guideId:'ronda-nombres'}:kind==='songs'?{songId:'alabare'}:{bookId:'local-book'})} as Parameters<typeof navigate>[1]);
   expect(goBack(state)?.current).toEqual({kind,origin:'today'});
   expect(goBack(goBack(state)!)?.current).toEqual({kind:'tab',tab:'today'});
  }
  expect(drawerDestinations.filter(x=>x.kind!=='tab')).toHaveLength(6);
 });
 it('uses truly private additive SQLite data, never UPDATE/DELETE bookmarks or notes',async()=>{
  const source=await import('node:fs');
  const fs=source.readFileSync('src/db/sqlitePersonalBooksRepository.ts','utf8');
  expect(fs).toContain('CREATE TABLE IF NOT EXISTS app_personal_books');
  expect(fs).not.toContain('DROP TABLE');
  expect(fs).not.toMatch(/DELETE\s+FROM/i);
  expect(fs).not.toMatch(/UPDATE\s+app_verse/i);
  const disk=source.readFileSync('src/db/personalBookFiles.ts','utf8');
  expect(disk).toContain('Paths.document');
  expect(disk).toContain('copyToCacheDirectory:true');
  expect(disk).not.toContain('fetch(');
 });
});
describe('R1.3 personal EPUB text-only, safe local parser',()=>{
 it('extracts chapter in spine order, strips executable and remote elements',async()=>{
  const zip=new JSZip();
  zip.file('META-INF/container.xml','<container><rootfiles><rootfile full-path="OPS/content.opf"/></rootfiles></container>');
  zip.file('OPS/content.opf','<package><manifest><item id="a" href="a.xhtml" media-type="application/xhtml+xml"/><item id="b" href="b.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="a"/><itemref idref="b"/></spine></package>');
  zip.file('OPS/a.xhtml','<html><head><title>Primero</title></head><body><h1>Hola &amp; luz</h1><script>alert("red")</script><p>Una frase.</p><iframe src="http://bad.test"></iframe></body></html>');
  zip.file('OPS/b.xhtml','<html><body><p>Segundo capítulo.</p></body></html>');
  const chapters=await parsePrivateEpubBase64(await zip.generateAsync({type:'base64'}));
  expect(chapters).toHaveLength(2);expect(chapters[0].title).toBe('Primero');
  expect(chapters[0].text).toContain('Hola & luz');expect(chapters[0].text).not.toContain('alert');expect(chapters[0].text).not.toContain('bad.test');
  expect(chapters[1].text).toContain('Segundo capítulo');
 });
 it('rejects invalid EPUB before exposing an empty reader',async()=>{
  const z=new JSZip();z.file('missing.txt','oops');
  await expect(parsePrivateEpubBase64(await z.generateAsync({type:'base64'}))).rejects.toThrow('EPUB inválido');
 });
});

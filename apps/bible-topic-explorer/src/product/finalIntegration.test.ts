import {describe,expect,it} from 'vitest';
import {readFileSync} from 'node:fs';
import {themes,minimumTouchTarget} from '../ui/theme';
import {defaultPreferences} from './preferences';
import {readingPlans} from './readingPlans';
import {pastoralTopics} from './pastoralTopics';
import {originalLyrics} from './originalLyrics';
import {songGuides} from './pastoralSongs';
import {triviaQuestions,trueFalseQuestions,sequenceGame} from './pastoralGames';
import {youtubeEmbedUrl,youtubePlaylistId,youtubePlaylistStatus} from './youtube';
import {tabs,goBack,initialNavigationState,navigate} from './navigation';
import {drawerDestinations} from './secondaryMenu';
describe('R1.3 final integrated plan contracts',()=>{
 it('preserves classic themes, four NEW light/contrast themes, and existing user default',()=>{
  expect(Object.keys(themes)).toEqual(['lavender','sky','dark','coral','natural','marine','contrast']);
  expect(defaultPreferences.theme).toBe('lavender');
  expect(themes.marine.background).toBe('#F8FAFC');
  expect(themes.marine.onPrimary).toBe('#FFFFFF');
  expect(themes.contrast.text).toBe('#000000');
  expect(minimumTouchTarget).toBe(48);
  for(const id of ['coral','natural','marine','contrast'] as const){const t=themes[id];expect(t.background).toMatch(/^#/);expect(t.surface).toBe('#FFFFFF');expect(t.focusRing).toMatch(/^#/);expect(t.onPrimary).toMatch(/^#/);}
 });
 it('has exactly four plans and 28 original but NOT human-approved sessions',()=>{
  expect(readingPlans).toHaveLength(4);
  expect(new Set(readingPlans.map(p=>p.id)).size).toBe(4);
  for(const p of readingPlans){expect(p.days).toHaveLength(7);expect(p.days.map(d=>d.day)).toEqual([1,2,3,4,5,6,7]);
   for(const d of p.days){expect(d.end).toBeGreaterThanOrEqual(d.start);expect(d.reflection.length).toBeGreaterThan(45);expect(d.prayer.length).toBeGreaterThan(18);expect(d.action.length).toBeGreaterThan(12);expect(d.editorial).toBe('EN_REVISION');}
  }
 });
 it('has eight full pastoral expansions with relevant source metadata at end, not endorsed',()=>{
  expect(pastoralTopics).toHaveLength(8);
  for(const p of pastoralTopics){expect(p.steps).toHaveLength(3);expect(p.adults.length).toBeGreaterThan(20);expect(p.roles.length).toBeGreaterThan(35);expect(p.safeguarding.length).toBeGreaterThan(35);expect(p.prayer.length).toBeGreaterThan(15);expect(p.sources.length).toBeGreaterThan(0);
   for(const s of p.sources){expect(s.sourceUrl).toMatch(/^https:\/\//);expect(s.applicableSection.length).toBeGreaterThan(4);expect(s.reuseBasis).toBe('ORIGINAL_SINTESIS');expect(s.checkedAt).toBe('2026-10-10');}
  }
 });
 it('makes three playable mechanisms distinct and references explicit',()=>{
  expect(triviaQuestions.length).toBeGreaterThanOrEqual(5);
  expect(trueFalseQuestions.length).toBeGreaterThanOrEqual(5);
  expect(triviaQuestions.every(q=>q.correct>=0&&q.correct<3)).toBe(true);
  expect(trueFalseQuestions.every(q=>typeof q.correct==='boolean')).toBe(true);
  expect(sequenceGame).toMatchObject({book:'Salmos',chapter:23,start:1,end:3});
 });
 it('distinguishes original draft lyrics, personal offline editor, and 20 pending copyrighted titles',()=>{
  expect(originalLyrics).toHaveLength(4);
  expect(songGuides).toHaveLength(20);
  expect(new Set(originalLyrics.map(l=>l.id)).size).toBe(4);
  expect(originalLyrics.every(l=>l.lyrics.split('\n').length>=12&&l.rights==='ORIGINAL_PROYECTO'&&l.editorial==='EN_REVISION')).toBe(true);
  expect(originalLyrics.some(l=>songGuides.some(s=>s.title===l.title))).toBe(false);
  const lyricsDb=readFileSync('src/db/sqlitePersonalLyricsRepository.ts','utf8');
  expect(lyricsDb).toContain('app_personal_lyrics');expect(lyricsDb).not.toContain('DROP TABLE');
  expect(lyricsDb).not.toContain('fetch(');
 });
 it('rejects untrusted YouTube URLs and uses visible official embed with controls, no autoplay',()=>{
  expect(youtubePlaylistStatus).toBe('PENDIENTE_PLAYLIST');
  expect(youtubePlaylistId('https://youtube.com/playlist?list=PL1234567890ABCDEFG')).toBe('PL1234567890ABCDEFG');
  expect(youtubePlaylistId('https://evil.example/playlist?list=PL1234567890ABCDEFG')).toBeNull();
  expect(youtubePlaylistId('http://www.youtube.com/playlist?list=PL1234567890ABCDEFG')).toBeNull();
  expect(youtubePlaylistId('https://youtube.com/playlist?list=%3Ciframe%3E')).toBeNull();
  const url=youtubeEmbedUrl('PL1234567890ABCDEFG');expect(url).toContain('autoplay=0');expect(url).toContain('controls=1');
  const screen=readFileSync('src/ui/screens/YouTubeScreen.tsx','utf8');expect(screen).toContain('<WebView');expect(screen).toContain('video:{height:245,minHeight:200');expect(screen).not.toContain('injectedJavaScript');
 });
 it('keeps original four tabs and nested Back for all five new modules',()=>{
  expect(tabs).toEqual(['today','search','bible','library']);
  for(const kind of ['plans','pastoral','games','youtube'] as const){
   const state=navigate(initialNavigationState(),{kind,origin:'today'});
   expect(goBack(state)?.current).toEqual({kind:'tab',tab:'today'});
  }
  let state=navigate(initialNavigationState(),{kind:'plans',origin:'today'});
  state=navigate(state,{kind:'plans',origin:'today',planId:'amor'});
  state=navigate(state,{kind:'plans',origin:'today',planId:'amor',day:3});
  expect(goBack(state)?.current).toMatchObject({kind:'plans',planId:'amor'});
  expect(drawerDestinations.filter(x=>x.kind==='tab')).toHaveLength(4);
  expect(drawerDestinations.some(x=>x.kind==='pastoral')).toBe(true);
 });
 it('protects reset and persistence in additive tables without destructive note migration',()=>{
  const sql=readFileSync('src/db/sqlitePlanRepository.ts','utf8');
  expect(sql).toContain('CREATE TABLE IF NOT EXISTS app_plan_days');
  expect(sql).toContain('UPDATE app_plan_days SET done=0');
  expect(sql).not.toContain('DROP TABLE');
  expect(sql).not.toMatch(/DELETE FROM/i);
  const prefs=readFileSync('src/db/sqliteLocalPersistence.ts','utf8');expect(prefs).toContain("'marine'");
 });
});

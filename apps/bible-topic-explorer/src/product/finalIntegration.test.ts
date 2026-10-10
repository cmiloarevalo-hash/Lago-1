import {describe,expect,it} from 'vitest';
import {readFileSync} from 'node:fs';
import {themes,minimumTouchTarget} from '../ui/theme';
import {defaultPreferences} from './preferences';
import {readingPlans} from './readingPlans';
import {pastoralTopics} from './pastoralTopics';
import {originalLyrics} from './originalLyrics';
import {songGuides} from './pastoralSongs';
import {triviaQuestions,trueFalseQuestions,sequenceGame} from './pastoralGames';
import {soundcloudEmbedUrl,soundcloudTrackUrl} from './soundcloud';
import {tabs,goBack,initialNavigationState,navigate} from './navigation';
import {drawerDestinations} from './secondaryMenu';
describe('R1.3 final integrated plan contracts',()=>{
 it('preserves historic tokens internally and migrates to three visible light themes',()=>{
  expect(Object.keys(themes)).toEqual(['lavender','sky','dark','coral','natural','marine','contrast']);
  expect(defaultPreferences.theme).toBe('natural');
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
 it('allows only real SoundCloud HTTPS track/set URLs and embeds with user action',()=>{
  const track='https://soundcloud.com/artist-name/song-name';
  expect(soundcloudTrackUrl(track)).toBe(track);
  expect(soundcloudTrackUrl('http://soundcloud.com/artist/song')).toBeNull();
  expect(soundcloudTrackUrl('https://evil.example/artist/song')).toBeNull();
  expect(soundcloudTrackUrl('https://soundcloud.com/artist/%2Fetc')).toBeNull();
  const url=soundcloudEmbedUrl(track);
  expect(url).toContain('w.soundcloud.com/player/');
  expect(url).toContain('auto_play=false');
  const screen=readFileSync('src/ui/screens/SoundCloudScreen.tsx','utf8');
  expect(screen).toContain('<WebView');
  expect(screen).toContain('mediaPlaybackRequiresUserAction');
  expect(screen).not.toContain('injectedJavaScript');
 });
 it('keeps original four tabs and nested Back for all five new modules',()=>{
  expect(tabs).toEqual(['today','search','bible','library']);
  for(const kind of ['plans','pastoral','games','soundcloud'] as const){
   const state=navigate(initialNavigationState(),{kind,origin:'today'});
   expect(goBack(state)?.current).toEqual({kind:'tab',tab:'today'});
  }
  let state=navigate(initialNavigationState(),{kind:'plans',origin:'today'});
  state=navigate(state,{kind:'plans',origin:'today',planId:'amor'});
  state=navigate(state,{kind:'plans',origin:'today',planId:'amor',day:3});
  expect(goBack(state)?.current).toMatchObject({kind:'plans',planId:'amor'});
  expect(drawerDestinations).toHaveLength(7);expect(drawerDestinations.map(x=>x.id)).not.toContain('spotify');
  expect(drawerDestinations.some(x=>x.kind==='pastoral')).toBe(true);
 });
 it('protects reset and persistence in additive tables without destructive note migration',()=>{
  const sql=readFileSync('src/db/sqlitePlanRepository.ts','utf8');
  expect(sql).toContain('CREATE TABLE IF NOT EXISTS app_plan_days');
  expect(sql).toContain('UPDATE app_plan_days SET done=0');
  expect(sql).not.toContain('DROP TABLE');
  expect(sql).not.toMatch(/DELETE FROM/i);
  const prefs=readFileSync('src/db/sqliteLocalPersistence.ts','utf8');expect(prefs).toContain('visibleTheme(row.theme)');
 });
});

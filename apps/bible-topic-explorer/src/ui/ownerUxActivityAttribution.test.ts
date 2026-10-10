import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {activityGuides} from '../product/pastoralActivities';
import {pastoralTopics} from '../product/pastoralTopics';
import {goBack,initialNavigationState,navigate,tabs} from '../product/navigation';
const text=(p:string)=>readFileSync(p,'utf8');
describe('Owner UX — clear pastoral guides and lawful source attribution',()=>{
 it('keeps 20 real activities and shows actual participant counts, minutes and steps with original human illustration',()=>{
  expect(activityGuides).toHaveLength(20);
  expect(activityGuides.every(a=>/^\d+–\d+$/.test(a.groupSize)&&a.minutes>0&&a.steps.length===3)).toBe(true);
  const screen=text('src/ui/screens/ActivitiesScreen.tsx');
  expect(screen).toContain('GroupIllustration');
  expect(screen).toContain('selected.groupSize');
  expect(screen).toContain('selected.minutes');
  expect(screen).toContain('Cómo hacerlo');
  expect(screen).not.toContain('kind="info"');
  expect(screen).toContain('showCare');
  expect(text('src/ui/illustrations/GroupIllustration.tsx')).toContain('Original geometric illustration');
 });
 it('declares prototype and AI-supported work at landing, offers linked bibliography in menu footer',()=>{
  const today=text('src/ui/screens/TodayScreen.tsx');
  const app=text('App.tsx');
  const sources=text('src/ui/screens/AboutSourcesScreen.tsx');
  expect(today).toContain('Prototipo con apoyo de IA y estudios');
  expect(app).toContain('Bibliografía y fuentes ↗');
  expect(sources).toContain('Linking.openURL');
  expect(sources).toContain('Unsplash License');
  expect(sources).toContain('no constituyen una publicación doctrinal aprobada');
  expect(pastoralTopics).toHaveLength(8);
  expect(sources).not.toContain('copyrighted full text');
 });
 it('returns from sources exactly to invoking tab and keeps four tabs',()=>{
  expect(tabs).toEqual(['today','search','bible','library']);
  const state=navigate(initialNavigationState(),{kind:'about',origin:'today'});
  expect(goBack(state)?.current).toEqual({kind:'tab',tab:'today'});
 });
 it('hides deep blue status banners and keeps consent details on request, not omitted',()=>{
  const activity=text('src/ui/screens/ActivitiesScreen.tsx');
  const explore=text('src/ui/screens/SearchScreen.tsx');
  expect(activity).not.toContain('StatusBanner');
  expect(explore).not.toContain('StatusBanner');
  expect(activity).toContain('selected.safety');
  expect(explore).toContain('infoOpen&&preview?.pastoralCaution');
 });
});

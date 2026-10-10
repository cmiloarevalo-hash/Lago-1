import {describe,expect,it} from 'vitest';
import {readFileSync,statSync} from 'node:fs';
import {pastoralTopics} from '../product/pastoralTopics';
import {SOUNDCLOUD_HOME,soundcloudCollections} from '../product/soundcloud';
import {tabs} from '../product/navigation';
const load=(p:string)=>readFileSync(p,'utf8');
describe('R13 focal editorial visual rework: contracts, not Android QA',()=>{
 it('bundles six distinct themed offline photographic treatments with credited sources',()=>{
  const generated=['coral','natural','marine'].flatMap(theme=>['landscape','book'].map(kind=>`assets/editorial/${kind}-${theme}.png`));
  expect(generated).toHaveLength(6);
  for(const f of generated)expect(statSync(f).size).toBeGreaterThan(50_000);
  const art=load('src/ui/editorialArt.ts');
  for(const f of generated)expect(art).toContain(f.slice('assets/editorial/'.length));
  const license=load('assets/editorial/PHOTO_LICENSES.md');
  expect(license).toContain('unsplash.com/license');
  expect(license).toContain('Jordan Moore');
  expect(license).toContain('Sixteen Miles Out');
 });
 it('defines high-contrast 3-theme editorial accents and original botanical overlays',()=>{
  const art=load('src/ui/editorialArt.ts');
  for(const theme of ['coral','natural','marine']){
   const leaf='assets/editorial/botanical-'+theme+'.png';
   expect(statSync(leaf).size).toBeGreaterThan(10_000);
   expect(art).toContain(leaf.slice('assets/editorial/'.length));
  }
  const theme=load('src/ui/theme.ts');
  expect(theme).toContain("primary:'#C72D5F'");
  expect(theme).toContain("primary:'#50683A'");
  expect(theme).toContain("primary:'#103D69'");
  const reader=load('src/ui/screens/BibleScreen.tsx');
  expect(reader).toContain('backgroundColor:theme.selectionBg');
  const plans=load('src/ui/screens/PlansScreen.tsx');
  expect(plans).toContain('source={art.botanical}');
  expect(plans).toContain("introTitle='Planes de lectura'");
  const today=load('src/ui/screens/TodayScreen.tsx');
  expect(today).toContain("appearance==='coral'");
  expect(today).toContain('longVerse');
 });
 it('keeps bibliographic sources short, linked and correctly year-identified with 48dp targets',()=>{
  const screen=load('src/ui/screens/PastoralScreen.tsx');
  expect(screen).toContain("USCCB · Renewing the Vision · 1997");
  expect(screen).toContain("UNICEF · Formación Kit Adolescente · 2018");
  expect(screen).toContain("Santa Sede · Protección de menores · 2019");
  expect(screen).toContain('sourceUrl');
  expect(screen).toContain('minHeight:minimumTouchTarget');
  expect(screen).toContain('fontSize:13.5');
  expect(screen).not.toContain('src.sourceUrl}</Text>');
  expect(pastoralTopics).toHaveLength(8);
 });
 it('keeps SoundCloud as an honest external-only link, hides the removed player',()=>{
  const screen=load('src/ui/screens/SoundCloudScreen.tsx');
  expect(SOUNDCLOUD_HOME).toBe('https://soundcloud.com');
  expect(soundcloudCollections).toHaveLength(3);
  expect(screen).toContain("backgroundColor:'#FF5500'");
  expect(screen).toContain('Linking.openURL(url)');
  expect(screen).not.toContain('<WebView');
  expect(screen).not.toContain('TextInput');
  expect(load('App.tsx')).not.toContain('YouTubeScreen');
  expect(tabs).toEqual(['today','search','bible','library']);
 });

});

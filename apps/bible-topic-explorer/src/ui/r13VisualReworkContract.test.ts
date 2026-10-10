import {describe,expect,it} from 'vitest';
import {readFileSync,statSync} from 'node:fs';
import {pastoralTopics} from '../product/pastoralTopics';
import {soundcloudTrackUrl} from '../product/soundcloud';
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
 it('keeps user-requested SoundCloud player honest and orange, hides video route',()=>{
  const screen=load('src/ui/screens/SoundCloudScreen.tsx');
  expect(soundcloudTrackUrl('https://soundcloud.com/artist/track')).not.toBeNull();
  expect(screen).toContain("backgroundColor:'#FF5500'");
  expect(screen).toContain('mediaPlaybackRequiresUserAction');
  expect(screen).toContain('reproductor oficial');
  expect(load('App.tsx')).not.toContain('YouTubeScreen');
  expect(tabs).toEqual(['today','search','bible','library']);
 });
});

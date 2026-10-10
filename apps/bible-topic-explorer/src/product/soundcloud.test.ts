import {describe,expect,it} from 'vitest';
import {readFileSync} from 'node:fs';
import {SOUNDCLOUD_HOME,soundcloudCollections} from './soundcloud';

describe('SoundCloud external-only — Owner fix',()=>{
 it('opens official SoundCloud and three real outside playlists by https URL',()=>{
  expect(SOUNDCLOUD_HOME).toBe('https://soundcloud.com');
  expect(soundcloudCollections.map(x=>x.id)).toEqual(['ninos','estudio','pastoral']);
  for(const entry of soundcloudCollections){
   expect(new URL(entry.url).protocol).toBe('https:');
   expect(new URL(entry.url).hostname).toBe('soundcloud.com');
   expect(new URL(entry.url).pathname).toContain('/sets/');
  }
  expect(new Set(soundcloudCollections.map(x=>x.url)).size).toBe(3);
 });
 it('has only direct-open links, no HTTP input/WebView/embedded audio',()=>{
  const s=readFileSync('src/ui/screens/SoundCloudScreen.tsx','utf8');
  expect(s).toContain('Linking.openURL(url)');
  expect(s).toContain('label="Abrir SoundCloud ↗"');
  expect(s).toContain('soundcloudCollections.map');
  expect(s).not.toContain('<WebView');
  expect(s).not.toContain('TextInput');
  expect(s).not.toContain('soundcloudEmbedUrl');
  expect(s).not.toContain('Cargar reproductor');
  expect(s).not.toContain('Enlace de SoundCloud');
  expect(s).not.toContain('HTTP');
 });
 it('does not claim external songs are licensed or approved, requires adult review for minors',()=>{
  const s=readFileSync('src/ui/screens/SoundCloudScreen.tsx','utf8');
  expect(s).toContain('persona responsable debe comprobar');
  expect(s).toContain('La U no descarga ni redistribuye audio');
  expect(s).toContain('no son propias ni están aprobadas');
 });
});

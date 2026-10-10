import {describe,expect,it} from 'vitest';
import {soundcloudTrackUrl,soundcloudEmbedUrl} from './soundcloud';
describe('Owner SoundCloud official embed only',()=>{
 it('accepts tracks and playlists on exact soundcloud.com HTTPS',()=>{
  expect(soundcloudTrackUrl('https://soundcloud.com/artist/song?si=tracking')).toBe('https://soundcloud.com/artist/song');
  expect(soundcloudTrackUrl('https://www.soundcloud.com/artist/sets/list-name')).toBe('https://soundcloud.com/artist/sets/list-name');
 });
 it('rejects unapproved host, insecure URL and unsupported routes',()=>{
  for(const x of ['http://soundcloud.com/a/b','https://soundcloud.com.evil.test/a/b','https://soundcloud.com/a/%2Fsecret','javascript:alert(1)','https://soundcloud.com/discover/sets','https://soundcloud.com/a','https://evil.example/track'])expect(soundcloudTrackUrl(x)).toBeNull();
 });
 it('uses official orange iframe URL and forbids autoplay',()=>{
  const url=soundcloudEmbedUrl('https://soundcloud.com/artist/song');
  expect(url).toMatch(/^https:\/\/w\.soundcloud\.com\/player\/\?/);
  expect(url).toContain('color=%23ff5500');
  expect(url).toContain('auto_play=false');
  expect(url).toContain('url=https%3A%2F%2Fsoundcloud.com%2Fartist%2Fsong');
 });
});

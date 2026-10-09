import {describe,it,expect} from 'vitest';
import {musicCategories,isSpotifyPlaylistUrl} from './music';
describe('RC02 Spotify v1 external-only links',()=>{
 it('has five stable categories with explicit public playlist HTTPS URLs',()=>{
  expect(musicCategories).toHaveLength(6);
  expect(new Set(musicCategories.map(x=>x.category)).size).toBe(5);
  expect(musicCategories.every(x=>isSpotifyPlaylistUrl(x.url))).toBe(true);
  expect(musicCategories[0].url).toBe('https://open.spotify.com/playlist/25HDm6Qx8mZoJWWdgFLz62');
 });
 it('rejects arbitrary web/Spotify embeds and insecure routes',()=>{
  expect(isSpotifyPlaylistUrl('https://open.spotify.com/embed/playlist/4Q44PJN7jSUd2JInNXTY3X')).toBe(false);
  expect(isSpotifyPlaylistUrl('javascript:alert(1)')).toBe(false);
 });
});

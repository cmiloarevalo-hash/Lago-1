from pathlib import Path
R=Path(__file__).resolve().parents[3]
def edit(rel,func):
 p=R/rel;s=p.read_text(encoding='utf-8');n=func(s);assert n!=s,rel;p.write_text(n,encoding='utf-8',newline='\n');print('UPDATED',rel)
def replace(s,a,b):
 assert a in s,a[:90]
 return s.replace(a,b)
def menu(s):
 s=replace(s,"['plans','topics','pastoral','games','songs','youtube','my-books','settings']","['plans','topics','pastoral','games','soundcloud','my-books','settings']")
 s=replace(s,"exactly eight working destinations","seven working destinations")
 s=replace(s,"toBe(8)","toBe(7)")
 s=replace(s,"not.toContain('spotify');","not.toContain('spotify');\n  expect(drawerDestinations.map(x=>x.id)).not.toContain('songs');\n  expect(drawerDestinations.map(x=>x.id)).not.toContain('youtube');")
 return s
edit('src/product/secondaryMenu.test.ts',menu)
def nav(s):
 return s.replace('R13 YouTube as secondary destination','R13 SoundCloud as secondary destination').replace('opens real video destination','opens real music destination').replace("kind:'youtube'","kind:'soundcloud'")
edit('src/product/navigation.test.ts',nav)
def contract(s):
 return replace(s,"kind:'youtube',origin:'today'","kind:'soundcloud',origin:'today'")
edit('src/ui/r13NotesDrawerContract.test.ts',contract)
def integration(s):
 s=replace(s,"import {youtubeEmbedUrl,youtubePlaylistId,youtubePlaylistStatus} from './youtube';","import {soundcloudEmbedUrl,soundcloudTrackUrl} from './soundcloud';")
 a=s.index(" it('rejects untrusted YouTube")
 b=s.index(" it('keeps original four tabs",a)
 s=s[:a]+""" it('allows only real SoundCloud HTTPS track/set URLs and embeds with user action',()=>{
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
""" +s[b:]
 s=replace(s,"'youtube'","'soundcloud'")
 s=replace(s,"toHaveLength(8);expect(drawerDestinations.map","toHaveLength(7);expect(drawerDestinations.map")
 return s
edit('src/product/finalIntegration.test.ts',integration)
def visual(s):
 s=replace(s,"import {youtubePlaylistStatus} from '../product/youtube';","import {soundcloudTrackUrl} from '../product/soundcloud';")
 a=s.index(" it('replaces visible technical YouTube")
 s=s[:a]+""" it('keeps user-requested SoundCloud player honest and orange, hides video route',()=>{
  const screen=load('src/ui/screens/SoundCloudScreen.tsx');
  expect(soundcloudTrackUrl('https://soundcloud.com/artist/track')).not.toBeNull();
  expect(screen).toContain('backgroundColor:\'#FF5500\'');
  expect(screen).toContain('mediaPlaybackRequiresUserAction');
  expect(screen).toContain('reproductor oficial');
  expect(load('App.tsx')).not.toContain('YouTubeScreen');
  expect(tabs).toEqual(['today','search','bible','library']);
 });
});
"""
 return s
edit('src/ui/r13VisualReworkContract.test.ts',visual)
def concept(s):
 s=replace(s,"expect(initialTopicUiState).toEqual({mode:'words',scrollY:0});","expect(initialTopicUiState).toEqual({mode:'topics',scrollY:0,selectedLetter:'A'});")
 a=s.index(" it('keeps literal search code")
 s=s[:a]+""" it('shows only canonical topics and hides literal-search UI, preserving scroll on Back',()=>{
  const src=readFileSync(resolve(process.cwd(),'src/ui/screens/SearchScreen.tsx'),'utf8');
  const app=readFileSync(resolve(process.cwd(),'App.tsx'),'utf8');
  const bible=readFileSync(resolve(process.cwd(),'src/ui/screens/BibleScreen.tsx'),'utf8');
  expect(src).not.toContain('Palabras · búsqueda literal');
  expect(src).not.toContain('Buscar texto literal');
  expect(src).not.toContain('searchLiteral(');
  expect(src).toContain('ⓘ');
  expect(src).toContain('listScrollY');
  expect(src).toContain('scrollTo');
  expect(src).toContain('sourceVerseLabels');
  expect(app).toContain('onTopicUiChange={setTopicUi}');
  expect(bible).toContain('focusMatchesVerse(verse,reader)');
  expect(bible).toContain('Volver a Explorar');
 });
});
"""
 return s
edit('src/product/conceptIndex.test.ts',concept)

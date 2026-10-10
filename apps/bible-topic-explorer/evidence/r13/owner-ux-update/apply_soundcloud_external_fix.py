from pathlib import Path
root=Path('C:/R13/apps/bible-topic-explorer')
p=root/'src/product/finalIntegration.test.ts'
s=p.read_text(encoding='utf-8')
s=s.replace("import {soundcloudEmbedUrl,soundcloudTrackUrl} from './soundcloud';","import {SOUNDCLOUD_HOME,soundcloudCollections} from './soundcloud';")
start=s.index(" it('allows only real SoundCloud HTTPS track/set URLs")
end=s.index(" it('keeps original four tabs", start)
s=s[:start]+""" it('opens SoundCloud externally only, with checked outbound playlists',()=>{
  expect(SOUNDCLOUD_HOME).toBe('https://soundcloud.com');
  expect(soundcloudCollections).toHaveLength(3);
  const screen=readFileSync('src/ui/screens/SoundCloudScreen.tsx','utf8');
  expect(screen).toContain('Linking.openURL(url)');
  expect(screen).toContain('Abrir SoundCloud ↗');
  expect(screen).not.toContain('<WebView');
  expect(screen).not.toContain('TextInput');
  expect(screen).not.toContain('Cargar reproductor');
 });
"""+s[end:]
p.write_text(s,encoding='utf-8',newline='\n')
p=root/'src/ui/r13VisualReworkContract.test.ts'
s=p.read_text(encoding='utf-8')
s=s.replace("import {soundcloudTrackUrl} from '../product/soundcloud';","import {SOUNDCLOUD_HOME,soundcloudCollections} from '../product/soundcloud';")
start=s.index(" it('keeps user-requested SoundCloud player")
end=s.index("\n});",start)
s=s[:start]+""" it('keeps SoundCloud as an honest external-only link, hides the removed player',()=>{
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
"""+s[end:]
p.write_text(s,encoding='utf-8',newline='\n')
p=root/'src/ui/screens/AboutSourcesScreen.tsx'
s=p.read_text(encoding='utf-8')
s=s.replace("SoundCloud utiliza enlaces y el reproductor de su propia plataforma; La U no aloja ni redistribuye música.","SoundCloud se abre en su aplicación o sitio web; La U no aloja, reproduce ni redistribuye música. Las listas sugeridas pertenecen a terceros y deben revisarse antes de usarse con menores.")
p.write_text(s,encoding='utf-8',newline='\n')
print('UPDATED 3 files')

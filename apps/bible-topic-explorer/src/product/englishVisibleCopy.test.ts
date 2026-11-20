import {describe,expect,it} from 'vitest';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';

const scope=[
 'App.tsx',
 'src/ui/screens/SettingsScreen.tsx',
 'src/ui/screens/BibleScreen.tsx',
 'src/ui/screens/TodayScreen.tsx',
 'src/ui/screens/ActivitiesScreen.tsx',
 'src/ui/screens/JournalScreen.tsx',
 'src/ui/screens/PastoralGamesScreen.tsx',
 'src/ui/screens/PersonalBooksScreen.tsx',
 'src/ui/screens/HymnalScreen.tsx',
 'src/ui/screens/SongsScreen.tsx',
 'src/ui/screens/MusicScreen.tsx',
 'src/ui/screens/YouTubeScreen.tsx',
 'src/ui/illustrations/GroupIllustration.tsx',
 'src/ui/primitives.tsx',
 'src/product/conceptPreviews.ts',
 'src/product/pastoralTopics.en.ts',
 'src/product/libraryPresentation.ts',
 'src/product/personalBooks.ts',
 'src/product/music.ts',
 'src/product/search.ts',
 'src/product/uxCopy.ts',
 'src/db/personalBookFiles.ts',
 'src/db/localBackup.ts',
 'src/db/sqlitePersonalBooksRepository.ts'
];
const suspicious=/\b(?:Reina[- ]Valera|Progreso fuera|Dibujo original|personas\s+◷|Destacado eliminado|No se pudo|Fuente\/curador|Privacidad y fuente|Respaldo|Cargando preferencias|Preferencias guardadas|Apariencia|Elegir carpeta|Elegir hora|Permiso denegado|Activada|Desactivada|Completada|Pendiente|Respaldo privado|Respaldo creado|Cuenta|No requerida|Datos de uso|Locales|Miqueas|Pablo|Justicia y servicio|Seguir escribiendo|Descartar|Guardada solo|Letra pendiente|Reiniciar juego|MOMENTO SUGERIDO|Solo se admiten|Avance guardado|No normalizar|No moralizar|No imponer|No coaccionar|Playlist recomendada|category:'Alabanza'|Referencia retirada|Frase exacta|Texto literal|Resaltar|Elige un color|Destacar |Quitar referencia guardada|Cancionero|Verdadero|Falso|Respuesta correcta|Retomar |Ver ficha|URL de playlist|Conflicto local de nombre|Vista PDF incompatible|Editar|% estimado)\b/i;

describe('English 1.20.01 static runtime copy (#81)',()=>{
 it('does not regress to Spanish interface labels or Spanish Bible branding',()=>{
  for(const rel of scope){
   const source=readFileSync(join(process.cwd(),rel),'utf8');
   expect(source,rel).not.toMatch(suspicious);
  }
 });
 it('keeps English pastoral chapter 10 heading and official WEB attribution',()=>{
  const guide=readFileSync('src/product/pastoralTopics.en.ts','utf8');
  const settings=readFileSync('src/ui/screens/SettingsScreen.tsx','utf8');
  expect(guide).toContain('"title": "Justice and service to those in need"');
  expect(settings).toContain('https://ebible.org/engwebp/copyright.htm');
  expect(settings).not.toContain('Reina Valera 1909');
 });
 it('uses clear English pastoral theme headings and accessible reading links',()=>{
  const screen=readFileSync('src/ui/screens/PastoralScreen.tsx','utf8');
  expect(screen).toContain('>THEME {themeId}');
  expect(screen).not.toContain('>ISSUE {themeId}');
  expect(screen).toContain('"Chapter "+item.number');
  expect(screen).toContain('"Read WEBP "+ref.label');
  expect(screen).toContain('"TO DISCUSS"');
 });
});

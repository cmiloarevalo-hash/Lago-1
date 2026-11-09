import {describe,expect,it,vi} from 'vitest';
import {readFileSync} from 'node:fs';
import {SQLiteLocalPersistence} from '../db/sqliteLocalPersistence';
const read=(path:string)=>readFileSync(path,'utf8');
describe('v1.11 Android-native UX from approved v1.10 content',()=>{
 it('uses true native Android text selection, without intercepting long-press with custom actions',()=>{
  const screen=read('src/ui/screens/BibleScreen.tsx');
  expect(screen).toContain('<Text selectable selectionColor=');
  expect(screen).toContain('onPress={()=>openVerseMenu(verse)}');
  expect(screen).not.toContain('onLongPress={()=>openVerseMenu(verse)}');
  expect(screen).not.toContain('showSoftInputOnFocus={false}');
  expect(screen).toContain('minWidth:48,minHeight:48');
  expect(screen).toContain('keyboardDismissMode="on-drag"');
 });
 it('keeps personal collections on separate local views, diary out of Biblioteca',()=>{
  const library=read('src/ui/screens/LibraryScreen.tsx');
  expect(library).toContain("type Page='home'|'saved'|'notes'|'activity'");
  expect(library).toContain('Versículos guardados');
  expect(library).toContain('Actividad reciente');
  expect(library).toContain('Historial rápido');
  expect(library).not.toContain('LIBRARY_REFLECTION_ID');
  const journal=read('src/ui/screens/JournalScreen.tsx');
  expect(journal).toContain("const PREVIOUS='library-private-reflection'");
  expect(journal).toContain("'Año '+year");
 });
 it('keeps the same pastoral material by branching from v1.10 rather than rejected v1.10.1',()=>{
  expect(read('src/product/pastoralTopics.ts')).toContain('El camino de Jesús');
  const config=read('app.json');
  expect(config).toContain('Biblia Reina-Valera 1909 - Guía Pastoral');
  expect(config).toContain('"softwareKeyboardLayoutMode": "resize"');
  expect(config).toContain('"version": "1.11.2"');
  expect(config).toContain('"versionCode": 14');
 });
 it('adds SQLite metadata without destructive changes to corpus or earlier user notes',async()=>{
  const db={
   execAsync:vi.fn().mockResolvedValue(undefined),
   runAsync:vi.fn().mockResolvedValue({}),
   getAllAsync:vi.fn().mockResolvedValue([]),
   getFirstAsync:vi.fn().mockResolvedValue(null)
  };
  const repo=new SQLiteLocalPersistence(db as never);
  await repo.setSavedReferenceDetails({bookId:'John',chapter:3,verse:16},'Mi fe','Esperanza','lavender');
  await repo.setReminderPlan('encuentro','Leer cada mañana');
  await repo.upsertReflection({id:'diario-123',title:'Mi diario',body:'Un día',updatedAt:'2026-11-09T00:00:00.000Z'});
  const ddl=String(db.execAsync.mock.calls[0][0]);
  for(const name of ['app_saved_reference_details','app_reflection_titles','app_reminder_plan'])expect(ddl).toContain(name);
  expect(ddl).not.toContain('DROP TABLE');
  expect(db.runAsync.mock.calls.some(([sql])=>String(sql).includes('app_reminder_plan'))).toBe(true);
 });
 it('uses operating system share and email link; does not enable account tracking or marketing',()=>{
  expect(read('src/ui/screens/BibleScreen.tsx')).toContain('Share.share(');
  expect(read('src/ui/screens/AboutSourcesScreen.tsx')).toContain('mailto:apkcristianas@gmail.com');
  expect(read('src/product/reminders.ts')).toContain('requestPermission');
  expect(read('src/ui/screens/SettingsScreen.tsx')).toContain('DateTimePickerAndroid.open');
  expect(read('src/ui/screens/SettingsScreen.tsx')).not.toContain('<StatusBanner theme={theme} kind="warning">Notificación local best-effort');
 });
 it('raises the Android modal editor above the system keyboard',()=>{
  const bible=read('src/ui/screens/BibleScreen.tsx');
  expect(bible).toContain('<KeyboardAvoidingView behavior="padding" style={styles.modalBackdrop}>');
  expect(read('app.json')).toContain('"softwareKeyboardLayoutMode": "resize"');
 });
 it('keeps Guardar nota permanently above the editor and protects unsaved text',()=>{
  const bible=read('src/ui/screens/BibleScreen.tsx');
  const save=bible.indexOf('<Action label="Guardar nota"');
  const editor=bible.indexOf('{verseAction?<ScrollView');
  expect(save).toBeGreaterThan(0);
  expect(save).toBeLessThan(editor);
  expect(bible).toContain('Alert.alert(\'Descartar cambios\'');
  expect(bible).toContain('onRequestClose={closeVerseMenu}');
  expect(bible).toContain('editingNote?<View style={styles.editingHeaderActions}');
 });
 it('exposes saved verse action directly, before tab-specific note/highlight content',()=>{
  const bible=read('src/ui/screens/BibleScreen.tsx');
  const guard=bible.indexOf('theme={theme} variant="secondary" onPress={()=>{if(activeVerse)void toggleSaved');
  const scroll=bible.indexOf('{verseAction?<ScrollView');
  expect(guard).toBeGreaterThan(0);
  expect(guard).toBeLessThan(scroll);
 });
 it('intercepts Android Back on a nested Biblioteca page before global navigation',()=>{
  const library=read('src/ui/screens/LibraryScreen.tsx');
  expect(library).toContain('BackHandler.addEventListener');
  expect(library).toContain("if(page==='home')return");
  expect(library).toContain("go('home');return true");
 });
 it('keeps diary form and Save visible above unrelated content while editing',()=>{
  const journal=read('src/ui/screens/JournalScreen.tsx');
  expect(journal).toContain('BackHandler.addEventListener');
  expect(journal).toContain('{editing?<View style={styles.editorActions}>');
  expect(journal).toContain('{!editing?<>');
  expect(journal).toContain('Descartar reflexión');
  const app=read('App.tsx');
  expect(app).toContain('>Biblia RV1909</Text>');
  expect(app).toContain("drawerBrand:{fontFamily:'serif',fontSize:27");
  expect(app).toContain('accessibilityLabel="Abrir ajustes"');
  expect(app).not.toContain('>Ajustes</Text></Pressable>');
 });
});

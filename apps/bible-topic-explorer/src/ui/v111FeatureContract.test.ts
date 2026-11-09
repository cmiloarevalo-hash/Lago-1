import {describe,it,expect,vi} from 'vitest';
import {readFileSync} from 'node:fs';
import {SQLiteLocalPersistence} from '../db/sqliteLocalPersistence';
const read=(path:string)=>readFileSync(path,'utf8');
describe('v1.10.1 owner acceptance — Bible reading and local personal data',()=>{
 it('provides exact Android text selection and keeps selection menu separate from keyboard dialogs',()=>{
  const reader=read('src/ui/screens/BibleScreen.tsx');
  expect(reader).toContain('onSelectionChange=');
  expect(reader).toContain('verse.text.slice(selection.start,selection.end)');
  expect(reader).toContain('Clipboard.setStringAsync(selectedText)');
  expect(reader).not.toContain('Clipboard.setStringAsync(verseCopyText');
  expect(reader).toContain('showSoftInputOnFocus={false}');
  expect(reader).toContain('selectionToolbar');
  expect(reader).toContain("behavior={Platform.OS==='ios'?'padding':'height'}");
  expect(read('app.json')).toContain('"softwareKeyboardLayoutMode": "resize"');
 });
 it('keeps source Bible data unchanged while adding optional local metadata tables',async()=>{
  const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync:vi.fn().mockResolvedValue({}),
   getAllAsync:vi.fn().mockResolvedValue([]),getFirstAsync:vi.fn().mockResolvedValue(null)};
  const p=new SQLiteLocalPersistence(db as never);
  await p.setSavedReferenceDetails({bookId:'John',chapter:3,verse:16},'Mi esperanza','Fe','lavender');
  await p.setReminderDetails({planId:'encuentro',title:'Leer la Biblia'});
  await p.upsertReflection({id:'journal-test',title:'Mi diario',body:'Aprendí algo',updatedAt:new Date().toISOString()});
  const ddl=String(db.execAsync.mock.calls[0][0]);
  for(const table of ['app_saved_reference_details','app_reflection_titles','app_reminder_details'])expect(ddl).toContain(table);
  expect(ddl).not.toContain('DROP TABLE');
  expect(db.runAsync.mock.calls.some(([sql])=>String(sql).includes('app_saved_reference_details'))).toBe(true);
  expect(db.runAsync.mock.calls.some(([sql])=>String(sql).includes('app_reminder_details'))).toBe(true);
 });
 it('offers dedicated bookmarks, reading chronology and annual reflection journal',()=>{
  const library=read('src/ui/screens/LibraryScreen.tsx');
  expect(library).not.toContain('LIBRARY_REFLECTION_ID');
  expect(library).toContain('onOpenSaved');
  expect(library).toContain('onOpenActivity');
  expect(library).toContain('Historial rápido');
  expect(read('src/ui/screens/RecentActivityScreen.tsx')).toContain("toLocaleTimeString('es-CL'");
  expect(read('src/ui/screens/ReflectionJournalScreen.tsx')).toContain('Reflexiones del año');
  expect(read('src/ui/screens/SavedVersesScreen.tsx')).toContain('Guardar nombre, tema y color');
 });
 it('renames the app and removes promotional offline badges and the fixed yellow warning',()=>{
  expect(read('app.json')).toContain('Biblia Reina-Valera 1909 - Guía Pastoral');
  expect(read('App.tsx')).not.toContain('RV1909 · sin conexión');
  expect(read('src/ui/screens/SettingsScreen.tsx')).not.toContain('kind="warning">Notificación local best-effort');
  expect(read('src/ui/screens/AboutSourcesScreen.tsx')).toContain('mailto:apkcristianas@gmail.com');
 });
});

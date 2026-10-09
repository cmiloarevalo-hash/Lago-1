import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {describe,expect,it} from 'vitest';
const read=(path:string)=>readFileSync(resolve(process.cwd(),path),'utf8');
const reader=read('src/ui/screens/BibleScreen.tsx');
const app=read('App.tsx');

describe('R13 I13-A1 discrete note-only reader',()=>{
 it('opens a distinct read-only modal from the 48dp bubble and never saves by viewing',()=>{
  expect(reader).toContain('onPress={()=>openNoteReader(verse)}');
  expect(reader).toContain('const openNoteReader=(verse:BibleVerse)');
  expect(reader).toContain('width:minimumTouchTarget,height:minimumTouchTarget');
  expect(reader).toContain('visible={readingNote!==null}');
  const modal=reader.split('visible={readingNote!==null}')[1].split('visible={activeVerse!==null}')[0];
  expect(modal).toContain("noteFor(readingNote)?.body");
  expect(modal).toContain("label={expandedNote?'Contraer':'Expandir'}");
  expect(modal).toContain('label="Cerrar lectura"');
  expect(modal).not.toContain('chooseHighlight(');
  expect(modal).not.toContain('deleteNote(');
 });
});
describe('R13 I13-A2 separate options, long notes and compact highlights',()=>{
 it('uses long press for options and separate accessible short-press fallback',()=>{
  expect(reader).toContain('onLongPress={()=>openVerseMenu(verse)}');
  expect(reader).toContain("accessibilityLabel={'Abrir opciones de '");
  expect(reader).toContain("onPress={()=>setQuickVerseKey(");
 });
 it('protects deletion and cancel, uses actual text editor and existing persistence',()=>{
  expect(reader).toContain("Alert.alert('Eliminar nota privada'");
  expect(reader).toContain("void deleteNote();");
  expect(reader).toContain("setNoteDraft(noteFor(activeVerse)?.body??'')");
  expect(reader).toContain('minHeight:220');
  expect(reader).toContain('multiline autoFocus');
  expect(reader).toContain('persistence.upsertVerseNote');
 });
 it('has 3 compact 48dp colour targets and a reversible tone',()=>{
  expect(reader).toContain("(['rose','lavender','peach'] as const)");
  expect(reader).toContain('width:minimumTouchTarget,height:minimumTouchTarget');
  expect(reader).toContain('nextHighlightTone(');
  expect(reader).toContain('accessibilityState={{selected}}');
 });
});
describe('R13 I13-A3 truthful drawer stays secondary',()=>{
 it('has a close/Back path, disabled future routes and does not add a tab',()=>{
  expect(app).toContain('accessibilityLabel="Abrir menú de navegación"');
  expect(app).toContain('onRequestClose={()=>setDrawerOpen(false)}');
  expect(app).toContain('disabled={!item.available}');
  expect(app).toContain("kind:'tab',tab:item.tab");
  expect(app).toContain("kind:'music',origin:activeTab");
 });
});

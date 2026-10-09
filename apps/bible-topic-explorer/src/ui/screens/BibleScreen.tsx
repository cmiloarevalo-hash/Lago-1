import { useEffect, useMemo, useRef, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteBibleRepository } from '../../db/sqliteBibleRepository';
import { SQLiteLocalPersistence } from '../../db/sqliteLocalPersistence';
import type { BibleVerse, SavedReference, VerseHighlight, VerseNote, HighlightTone } from '../../product/adapters';
import { books, runtimeCoverage } from '../../product/books';
import {highlightColors,nextHighlightTone,verseMatchesTarget} from '../../product/verseAnnotations';
import { uxCopy } from '../../product/uxCopy';
import { scaledScriptureMetrics } from '../readingScale';
import type { Theme } from '../theme';
import { minimumTouchTarget, radius, spacing, type as typography } from '../theme';
import { Action, Body, ChoiceChip, Metadata, Screen, ScreenTitle, Section, SettingRow, StatusBanner } from '../primitives';

const oldTestament = books.slice(0, 39); const newTestament = books.slice(39);
export function BibleScreen({ theme, reader, readingScale = 1, initialBook, onBookContextChange, onOpenReader }: { theme: Theme; reader?: { book: string; chapter: number; verse?: number; sourceVerseLabel?: string }; readingScale?: number; initialBook?: string; onBookContextChange?: (book?: string) => void; onOpenReader: (book: string, chapter: number, verse?: number, recordHistory?: boolean) => void }) {
  const db = useSQLiteContext(); const repository = useMemo(() => new SQLiteBibleRepository(db), [db]); const persistence = useMemo(() => new SQLiteLocalPersistence(db), [db]);
  const [verses, setVerses] = useState<readonly BibleVerse[]>([]); const [chapterCount, setChapterCount] = useState(0); const [loading, setLoading] = useState(false); const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<readonly SavedReference[]>([]); const [saveStatus, setSaveStatus] = useState('');
  const [verseNotes,setVerseNotes]=useState<readonly VerseNote[]>([]); const [highlights,setHighlights]=useState<readonly VerseHighlight[]>([]);
  const [activeVerse,setActiveVerse]=useState<BibleVerse|null>(null); const [editingNote,setEditingNote]=useState(false); const [noteDraft,setNoteDraft]=useState('');
  const [selectedBook, setSelectedBook] = useState<string | undefined>(initialBook); const [pickerChapterCount, setPickerChapterCount] = useState(0); const [pickerLoading, setPickerLoading] = useState(false); const [pickerError, setPickerError] = useState(false); const scriptureMetrics = scaledScriptureMetrics(readingScale);
  useEffect(() => { if (!reader && initialBook && initialBook !== selectedBook) void chooseBook(initialBook, false); }, [initialBook, reader]);
  useEffect(() => { let active = true; if (!reader) { setVerses([]); setChapterCount(0); setError(null); return () => { active = false; }; } setLoading(true); setError(null); void Promise.all([repository.getChapter(reader.book, reader.chapter), repository.getBookChapterCount(reader.book), persistence.listSavedReferences(),persistence.listVerseNotes(),persistence.listHighlights()]).then(([rows, count, refs, notes, marks]) => { if (active) { setVerses(rows); setChapterCount(count); setSaved(refs); setVerseNotes(notes); setHighlights(marks); } }).catch(() => { if (active) { setVerses([]); setChapterCount(0); setError('No se pudo leer este capítulo desde el corpus local.'); } }).finally(() => { if (active) setLoading(false); }); return () => { active = false; }; }, [reader?.book, reader?.chapter, repository, persistence]);
  const scrollRef=useRef<ScrollView>(null);
  const [scriptureY,setScriptureY]=useState(0);
  const [verseOffset,setVerseOffset]=useState<{key:string;y:number}|null>(null);
  const targetKey=reader?[reader.book,reader.chapter,reader.sourceVerseLabel??reader.verse??''].join('|'):'';
  useEffect(()=>{setVerseOffset(null);},[targetKey]);
  useEffect(()=>{
   if(!reader||(reader.verse===undefined&&reader.sourceVerseLabel===undefined)||!verses.length||!verseOffset||verseOffset.key!==targetKey)return;
   const frame=requestAnimationFrame(()=>scrollRef.current?.scrollTo({y:Math.max(0,scriptureY+verseOffset.y-100),animated:false}));
   return()=>cancelAnimationFrame(frame);
  },[reader?.book,reader?.chapter,reader?.verse,reader?.sourceVerseLabel,verses,verseOffset,scriptureY,targetKey]);
  const chooseBook = async (book: string, publishContext = true) => { setSelectedBook(book); if (publishContext) onBookContextChange?.(book); setPickerLoading(true); setPickerError(false); try { setPickerChapterCount(await repository.getBookChapterCount(book)); } catch { setPickerChapterCount(0); setPickerError(true); } finally { setPickerLoading(false); } };
  const toggleSaved = async (verse: BibleVerse) => { const ref = { bookId: verse.bookId, chapter: verse.chapter, verse: verse.verse }; const exists = saved.some(item => item.bookId === ref.bookId && item.chapter === ref.chapter && item.verse === ref.verse); try { if (exists) await persistence.removeSavedReference(ref); else await persistence.saveReference({ ...ref, savedAt: new Date().toISOString() }); setSaved(await persistence.listSavedReferences()); setSaveStatus(exists ? uxCopy.removedReference : uxCopy.savedReference); } catch { setSaveStatus('No se pudo actualizar el guardado local.'); } };

  const identity=(verse:BibleVerse)=>({translationId:'rv1909' as const,bookId:verse.bookId,chapter:verse.chapter,sourceVerseLabel:verse.sourceVerseLabel});
  const noteFor=(verse:BibleVerse)=>verseNotes.find(n=>n.bookId===verse.bookId&&n.chapter===verse.chapter&&n.sourceVerseLabel===verse.sourceVerseLabel);
  const highlightFor=(verse:BibleVerse)=>highlights.find(n=>n.bookId===verse.bookId&&n.chapter===verse.chapter&&n.sourceVerseLabel===verse.sourceVerseLabel);
  const openVerseMenu=(verse:BibleVerse)=>{setActiveVerse(verse);setNoteDraft(noteFor(verse)?.body??'');setEditingNote(false);};
  const saveNote=async()=>{if(!activeVerse)return;try{const body=noteDraft.trim();if(body)await persistence.upsertVerseNote({...identity(activeVerse),body,updatedAt:new Date().toISOString()});else await persistence.deleteVerseNote(identity(activeVerse));setVerseNotes(await persistence.listVerseNotes());setSaveStatus(body?'Nota privada guardada.':'Nota eliminada.');setActiveVerse(null);setEditingNote(false);}catch{setSaveStatus('No se pudo guardar la nota local.');}};
  const deleteNote=async()=>{if(!activeVerse)return;try{await persistence.deleteVerseNote(identity(activeVerse));setVerseNotes(await persistence.listVerseNotes());setActiveVerse(null);setSaveStatus('Nota eliminada.');}catch{setSaveStatus('No se pudo eliminar la nota.');}};
  const chooseHighlight=async(tone:HighlightTone)=>{if(!activeVerse)return;const next=nextHighlightTone(highlightFor(activeVerse)?.tone,tone);try{if(next)await persistence.setHighlight(identity(activeVerse),next);else await persistence.removeHighlight(identity(activeVerse));setHighlights(await persistence.listHighlights());setSaveStatus(next?'Versículo destacado.':'Destacado eliminado.');}catch{setSaveStatus('No se pudo actualizar el destacado.');}};

  if (reader) { const canonicalName = verses[0]?.bookName ?? reader.book; const ref = canonicalName + ' ' + reader.chapter + (reader.verse ? ':' + reader.verse : ''); const atFirstChapter = reader.chapter <= 1; const atLastChapter = chapterCount > 0 && reader.chapter >= chapterCount;
    return <Screen theme={theme}><ScrollView ref={scrollRef} contentContainerStyle={styles.readerStack}><View style={styles.readerHeader}><Metadata theme={theme}>RV1909 · SIN CONEXIÓN · {chapterCount ? chapterCount + ' capítulos' : 'corpus local'}</Metadata><ScreenTitle theme={theme}>{ref}</ScreenTitle><Body theme={theme} muted>Toca un versículo para guardar, anotar o destacar desde un menú privado.</Body></View>
      {saveStatus ? <StatusBanner theme={theme} kind={saveStatus.startsWith('No ') ? 'error' : 'success'}>{saveStatus}</StatusBanner> : null}{loading ? <StatusBanner theme={theme} kind="info">Cargando capítulo local…</StatusBanner> : null}{error ? <StatusBanner theme={theme} kind="error">{error}</StatusBanner> : null}{!loading && !error && verses.length === 0 ? <StatusBanner theme={theme} kind="info">No hay versículos para este capítulo.</StatusBanner> : null}
      {!loading && !error && verses.length ? <View style={styles.scripture} onLayout={event=>setScriptureY(event.nativeEvent.layout.y)}>{verses.map(verse => {
        const selected=verseMatchesTarget(verse,reader);
        const isSaved=saved.some(item=>item.bookId===verse.bookId&&item.chapter===verse.chapter&&item.verse===verse.verse);
        const note=noteFor(verse);const mark=highlightFor(verse);
        const tone=mark?highlightColors[mark.tone]:null;
        return <View key={[verse.bookId,verse.chapter,verse.sourceVerseLabel].join('-')}
          onLayout={selected?event=>{const y=event.nativeEvent.layout.y;setVerseOffset(prev=>prev?.key===targetKey&&prev.y===y?prev:{key:targetKey,y});}:undefined}
          style={[styles.verseFrame,selected&&{borderLeftColor:theme.selectionBorder,borderLeftWidth:5},isSaved&&{borderRightColor:theme.amber},tone&&{backgroundColor:tone.fill,borderLeftColor:tone.border}]}>
          <Pressable accessibilityRole="button" accessibilityLabel={'Opciones de versículo. '+canonicalName+' '+verse.chapter+':'+verse.sourceVerseLabel+'. '+verse.text}
            accessibilityState={{ selected }} onPress={()=>openVerseMenu(verse)}
            style={({pressed})=>[styles.verse,pressed&&{opacity:0.75}]}>
            <Text style={[typography.label,{color:tone?tone.ink:selected?theme.primaryText:isSaved?theme.amber:theme.secondary}]}>
              {verse.sourceVerseLabel}{selected?' · seleccionado':''}{isSaved?' · guardado':''}{mark?' · destacado':''}
            </Text>
            <Text style={[typography.scripture,scriptureMetrics,{color:tone?tone.ink:theme.text}]}>{verse.text}</Text>
          </Pressable>
          {note?<Pressable accessibilityRole="button" accessibilityLabel={'Ver nota privada de '+canonicalName+' '+verse.chapter+':'+verse.sourceVerseLabel}
            accessibilityHint="Abre el texto completo y permite editar esta nota." onPress={()=>openVerseMenu(verse)}
            style={[styles.noteMarker,{backgroundColor:theme.surface,borderColor:theme.selectionBorder}]}>
            <Text style={[typography.label,{color:theme.primaryText}]}>📝 Ver nota</Text>
          </Pressable>:null}
        </View>;
      })}</View> : null}

      <Modal visible={activeVerse!==null} transparent animationType="fade" onRequestClose={()=>{setActiveVerse(null);setEditingNote(false);}}><View style={styles.modalBackdrop}><View style={[styles.modalPanel,{backgroundColor:theme.surface,borderColor:theme.border}]} accessibilityViewIsModal><Text accessibilityRole="header" style={[typography.subhead,{color:theme.text}]}>{activeVerse?activeVerse.bookName+' '+activeVerse.chapter+':'+activeVerse.sourceVerseLabel:''} · RV1909</Text>
        {editingNote?<><TextInput accessibilityLabel="Nota privada del versículo" multiline autoFocus placeholder="Tu nota personal…" placeholderTextColor={theme.secondary} value={noteDraft} onChangeText={setNoteDraft} style={[styles.noteInput,{color:theme.text,borderColor:theme.border,backgroundColor:theme.background}]}/><Action label="Guardar nota" theme={theme} onPress={()=>{void saveNote();}}/><Action label="Cancelar edición" variant="tertiary" theme={theme} onPress={()=>setEditingNote(false)}/></>:<>
          <Body theme={theme} muted>Notas y colores se guardan sólo en este dispositivo.</Body>
          {activeVerse&&noteFor(activeVerse)?<View style={[styles.savedNote,{borderColor:theme.border,backgroundColor:theme.surfaceSoft}]} accessibilityLabel="Nota privada completa"><Text style={[typography.label,{color:theme.primaryText}]}>📝 Tu nota privada</Text><Text style={[typography.body,{color:theme.text}]}>{noteFor(activeVerse)?.body}</Text></View>:null}
          <Action label={activeVerse&&saved.some(r=>r.bookId===activeVerse.bookId&&r.chapter===activeVerse.chapter&&r.verse===activeVerse.verse)?'Quitar de guardados':'Guardar referencia'} theme={theme} variant="secondary" onPress={()=>{if(activeVerse)void toggleSaved(activeVerse);setActiveVerse(null);}}/>
          <Action label={activeVerse&&noteFor(activeVerse)?'Editar nota':'Agregar nota'} theme={theme} onPress={()=>setEditingNote(true)}/>
          {activeVerse&&noteFor(activeVerse)?<Action label="Eliminar nota" variant="tertiary" theme={theme} onPress={()=>{void deleteNote();}}/>:null}
          <View style={styles.readerActions}>{(['rose','lavender','peach'] as const).map(tone=>{const colors=highlightColors[tone];const label=tone==='rose'?'rosa':tone==='lavender'?'lavanda':'durazno';const selected=activeVerse?highlightFor(activeVerse)?.tone===tone:false;return <Pressable key={tone} accessibilityRole="button"
            accessibilityLabel={'Destacar '+label} accessibilityState={{selected}} accessibilityHint={selected?'Toca de nuevo para quitar este color.':'Toca para destacar; reemplaza otro color.'}
            onPress={()=>{void chooseHighlight(tone);}}
            style={({pressed})=>[styles.toneButton,{backgroundColor:colors.fill,borderColor:selected?colors.border:theme.border,borderWidth:selected?3:1},pressed&&{opacity:0.8}]}>
            <Text style={[typography.label,{color:colors.ink}]}>{selected?'✓ ':''}Destacar {label}</Text>
          </Pressable>;})}</View>
        </>}
        <Action label="Cerrar opciones" variant="tertiary" theme={theme} onPress={()=>{setActiveVerse(null);setEditingNote(false);}}/>
      </View></View></Modal>
      <Section theme={theme} title="Navegar por el capítulo"><View style={styles.readerActions}><Action label="Capítulo anterior" variant="secondary" disabled={atFirstChapter} theme={theme} onPress={() => onOpenReader(reader.book, Math.max(1, reader.chapter - 1), undefined, false)} /><Action label="Capítulo siguiente" variant="secondary" disabled={atLastChapter} theme={theme} onPress={() => onOpenReader(reader.book, reader.chapter + 1, undefined, false)} /></View></Section><Metadata theme={theme}>{runtimeCoverage.translation} · 66 libros · corpus local · sin conexión requerida</Metadata></ScrollView></Screen>;
  }
  if (selectedBook) return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><Action label="← Cambiar libro" variant="tertiary" theme={theme} onPress={() => { setSelectedBook(undefined); onBookContextChange?.(undefined); setPickerChapterCount(0); setPickerError(false); }} /><View style={styles.readerHeader}><Metadata theme={theme}>LEER · RV1909</Metadata><ScreenTitle theme={theme}>{selectedBook}</ScreenTitle><Body theme={theme} muted>Elige un capítulo para abrir el texto.</Body></View>{pickerLoading ? <StatusBanner theme={theme} kind="info">Cargando capítulos disponibles…</StatusBanner> : null}{pickerError ? <StatusBanner theme={theme} kind="error">No se pudo leer la metadata local de capítulos.</StatusBanner> : null}{!pickerLoading && !pickerError && pickerChapterCount > 0 ? <View style={styles.chapterGrid}>{Array.from({ length: pickerChapterCount }, (_, index) => index + 1).map(chapter => <ChoiceChip key={chapter} label={String(chapter)} theme={theme} selected={false} onPress={() => onOpenReader(selectedBook, chapter)} />)}</View> : null}</ScrollView></Screen>;
  return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><View style={[styles.readerHeader, styles.bookIntro]}><View style={[styles.bookAccent, { backgroundColor: theme.sky }]}/><ScreenTitle theme={theme}>Leer</ScreenTitle><Body theme={theme} muted>{runtimeCoverage.translation} · {runtimeCoverage.books} libros sin conexión. Orden canónico AT/NT.</Body></View><Section theme={theme} title="Antiguo Testamento">{oldTestament.map(book => <SettingRow key={book} theme={theme} label={book} value="Capítulos →" onPress={() => { void chooseBook(book); }} />)}</Section><Section theme={theme} title="Nuevo Testamento">{newTestament.map(book => <SettingRow key={book} theme={theme} label={book} value="Capítulos →" onPress={() => { void chooseBook(book); }} />)}</Section></ScrollView></Screen>;
}
const styles = StyleSheet.create({ stack: { gap: spacing.md, paddingBottom: spacing.xxl }, readerStack: { gap: spacing.lg, paddingBottom: spacing.xxl }, readerHeader: { gap: spacing.xs }, bookIntro: { paddingBottom: spacing.sm }, bookAccent: { width: 36, height: 4, borderRadius: radius.xs }, chapterGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }, scripture: { gap: 2 }, verseFrame:{minHeight:minimumTouchTarget,borderLeftWidth:4,borderRightWidth:3,borderLeftColor:'transparent',borderRightColor:'transparent',borderRadius:radius.sm},
 verse:{minHeight:minimumTouchTarget,paddingHorizontal:spacing.md,paddingVertical:spacing.sm,gap:spacing.xs},
 noteMarker:{minHeight:minimumTouchTarget,alignSelf:'flex-start',borderWidth:1,borderRadius:radius.sm,paddingHorizontal:spacing.md,justifyContent:'center',marginHorizontal:spacing.md,marginBottom:spacing.sm},
 toneButton:{minHeight:minimumTouchTarget,borderRadius:radius.sm,paddingHorizontal:spacing.md,paddingVertical:spacing.md,justifyContent:'center',alignItems:'center'},savedNote:{borderWidth:1,borderRadius:radius.sm,padding:spacing.md,gap:spacing.sm}, readerActions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }, modalBackdrop:{flex:1,justifyContent:'center',backgroundColor:'rgba(0,0,0,0.55)',padding:spacing.md},modalPanel:{borderWidth:1,borderRadius:radius.lg,padding:spacing.lg,gap:spacing.sm,maxHeight:'90%'},noteInput:{borderWidth:1,borderRadius:radius.sm,minHeight:116,textAlignVertical:'top',padding:spacing.sm,fontSize:17} });

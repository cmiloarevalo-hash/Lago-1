import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, Share, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteBibleRepository } from '../../db/sqliteBibleRepository';
import { SQLiteLocalPersistence } from '../../db/sqliteLocalPersistence';
import type { BibleVerse, SavedReference, VerseHighlight, VerseNote, HighlightTone } from '../../product/adapters';
import { books, runtimeCoverage } from '../../product/books';
import {highlightColors,nextHighlightTone,verseMatchesTarget} from '../../product/verseAnnotations';
import {focusMatchesVerse,isFirstFocusedVerse} from '../../product/conceptIndex';
import { uxCopy } from '../../product/uxCopy';
import {verseCopyText,verseShareText} from '../../product/verseSharing';
import { scaledScriptureMetrics } from '../readingScale';
import type { Theme } from '../theme';
import { minimumTouchTarget, radius, spacing, type as typography } from '../theme';
import { Action, Body, ChoiceChip, Metadata, Screen, ScreenTitle, Section, SettingRow, StatusBanner } from '../primitives';

const oldTestament = books.slice(0, 39); const newTestament = books.slice(39);
export function BibleScreen({ theme, reader, readingScale = 1, initialBook, onBookContextChange, onOpenReader, onBack }: { theme: Theme; reader?: { book: string; chapter: number; verse?: number; sourceVerseLabel?: string; verseEnd?: number; sourceVerseLabels?: readonly string[] }; readingScale?: number; initialBook?: string; onBookContextChange?: (book?: string) => void; onOpenReader: (book: string, chapter: number, verse?: number, recordHistory?: boolean) => void; onBack?:()=>void }) {
  const db = useSQLiteContext(); const repository = useMemo(() => new SQLiteBibleRepository(db), [db]); const persistence = useMemo(() => new SQLiteLocalPersistence(db), [db]);
  const [verses, setVerses] = useState<readonly BibleVerse[]>([]); const [chapterCount, setChapterCount] = useState(0); const [loading, setLoading] = useState(false); const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<readonly SavedReference[]>([]); const [saveStatus, setSaveStatus] = useState('');
  const [verseNotes,setVerseNotes]=useState<readonly VerseNote[]>([]); const [highlights,setHighlights]=useState<readonly VerseHighlight[]>([]);
  const [activeVerse,setActiveVerse]=useState<BibleVerse|null>(null); const [verseAction,setVerseAction]=useState<'note'|'highlight'|null>(null); const [editingNote,setEditingNote]=useState(false); const [noteDraft,setNoteDraft]=useState('');
  const [readingNote,setReadingNote]=useState<BibleVerse|null>(null); const [expandedNote,setExpandedNote]=useState(false);
  const [quickVerseKey,setQuickVerseKey]=useState<string|null>(null);
  const [selectedBook, setSelectedBook] = useState<string | undefined>(initialBook); const [pickerChapterCount, setPickerChapterCount] = useState(0); const [pickerLoading, setPickerLoading] = useState(false); const [pickerError, setPickerError] = useState(false); const scriptureMetrics = scaledScriptureMetrics(readingScale);
  useEffect(() => { if (!reader && initialBook && initialBook !== selectedBook) void chooseBook(initialBook, false); }, [initialBook, reader]);
  useEffect(() => { let active = true; if (!reader) { setVerses([]); setChapterCount(0); setError(null); return () => { active = false; }; } setLoading(true); setError(null); void Promise.all([repository.getChapter(reader.book, reader.chapter), repository.getBookChapterCount(reader.book), persistence.listSavedReferences(),persistence.listVerseNotes(),persistence.listHighlights()]).then(([rows, count, refs, notes, marks]) => { if (active) { setVerses(rows); setChapterCount(count); setSaved(refs); setVerseNotes(notes); setHighlights(marks); } }).catch(() => { if (active) { setVerses([]); setChapterCount(0); setError('No se pudo leer este capítulo desde el corpus local.'); } }).finally(() => { if (active) setLoading(false); }); return () => { active = false; }; }, [reader?.book, reader?.chapter, repository, persistence]);
  const scrollRef=useRef<ScrollView>(null);
  const [scriptureY,setScriptureY]=useState(0);
  const [verseOffset,setVerseOffset]=useState<{key:string;y:number}|null>(null);
  const targetKey=reader?[reader.book,reader.chapter,reader.sourceVerseLabel??reader.verse??'',reader.verseEnd??'',(reader.sourceVerseLabels??[]).join(',')].join('|'):'';
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
  const openVerseMenu=(verse:BibleVerse)=>{setReadingNote(null);setActiveVerse(verse);setVerseAction(null);setNoteDraft(noteFor(verse)?.body??'');setEditingNote(false);};
  const openNoteReader=(verse:BibleVerse)=>{if(!noteFor(verse))return;setActiveVerse(null);setReadingNote(verse);setExpandedNote(false);};
  const closeNoteReader=()=>{setReadingNote(null);setExpandedNote(false);};
  const editFromNoteReader=()=>{if(!readingNote)return;const verse=readingNote;closeNoteReader();openVerseMenu(verse);setVerseAction('note');setEditingNote(true);};
  const confirmDeleteNote=()=>{if(!activeVerse)return;Alert.alert('Eliminar nota privada','¿Eliminar esta nota de forma permanente? El destacado no se eliminará.',[
    {text:'Cancelar',style:'cancel'},{text:'Eliminar nota',style:'destructive',onPress:()=>{void deleteNote();}}
  ]);};
  const saveNote=async()=>{if(!activeVerse)return;try{const body=noteDraft.trim();if(body)await persistence.upsertVerseNote({...identity(activeVerse),body,updatedAt:new Date().toISOString()});else await persistence.deleteVerseNote(identity(activeVerse));setVerseNotes(await persistence.listVerseNotes());setSaveStatus(body?'Nota privada guardada.':'Nota eliminada.');setActiveVerse(null);setEditingNote(false);}catch{setSaveStatus('No se pudo guardar la nota local.');}};
  const deleteNote=async()=>{if(!activeVerse)return;try{await persistence.deleteVerseNote(identity(activeVerse));setVerseNotes(await persistence.listVerseNotes());setActiveVerse(null);setSaveStatus('Nota eliminada.');}catch{setSaveStatus('No se pudo eliminar la nota.');}};
  const chooseHighlight=async(tone:HighlightTone)=>{if(!activeVerse)return;const next=nextHighlightTone(highlightFor(activeVerse)?.tone,tone);try{if(next)await persistence.setHighlight(identity(activeVerse),next);else await persistence.removeHighlight(identity(activeVerse));setHighlights(await persistence.listHighlights());setSaveStatus(next?'Versículo destacado.':'Destacado eliminado.');}catch{setSaveStatus('No se pudo actualizar el destacado.');}};

  const copySelectedVerse=async()=>{if(!activeVerse)return;try{await Clipboard.setStringAsync(verseCopyText(activeVerse));setSaveStatus('Versículo copiado al portapapeles.');setActiveVerse(null);}catch{setSaveStatus('No se pudo copiar el versículo.');}};
  const shareSelectedVerse=async()=>{if(!activeVerse)return;try{await Share.share({title:activeVerse.bookName+' '+activeVerse.chapter+':'+activeVerse.sourceVerseLabel,message:verseShareText(activeVerse)});setActiveVerse(null);}catch{setSaveStatus('No fue posible abrir las opciones para compartir.');}};

  if (reader) { const canonicalName = verses[0]?.bookName ?? reader.book; const ref = canonicalName + ' ' + reader.chapter + (reader.verse ? ':' + reader.verse + (reader.verseEnd&&reader.verseEnd>reader.verse?'–'+reader.verseEnd:'') : ''); const atFirstChapter = reader.chapter <= 1; const atLastChapter = chapterCount > 0 && reader.chapter >= chapterCount;
    return <Screen theme={theme}><ScrollView ref={scrollRef} contentContainerStyle={styles.readerStack}>{onBack?<Action label="← Volver a Explorar" variant="secondary" theme={theme} onPress={onBack}/>:null}<View style={styles.readerHeader}>
  <Metadata theme={theme}>LA PALABRA · REINA-VALERA 1909</Metadata>
  <Text accessibilityRole="header" style={[styles.chapterTitle,{color:theme.text}]}>{canonicalName} {reader.chapter}</Text>
  <View style={[styles.readerUnderline,{backgroundColor:theme.primary}]}/>
  {reader.sourceVerseLabels?.length?<Text style={[styles.rangeHint,{color:theme.secondary}]}>Pasaje enfocado: {ref} · {reader.sourceVerseLabels.length} versículos de contexto señalados</Text>:null}
 </View>
      {saveStatus ? <StatusBanner theme={theme} kind={saveStatus.startsWith('No ') ? 'error' : 'success'}>{saveStatus}</StatusBanner> : null}{loading ? <StatusBanner theme={theme} kind="info">Cargando capítulo local…</StatusBanner> : null}{error ? <StatusBanner theme={theme} kind="error">{error}</StatusBanner> : null}{!loading && !error && verses.length === 0 ? <StatusBanner theme={theme} kind="info">No hay versículos para este capítulo.</StatusBanner> : null}
      {!loading && !error && verses.length ? <View style={styles.scripture} onLayout={event=>setScriptureY(event.nativeEvent.layout.y)}>{verses.map(verse => {
        const selected=reader.sourceVerseLabels?.length?focusMatchesVerse(verse,reader):verseMatchesTarget(verse,reader);
        const isSaved=saved.some(item=>item.bookId===verse.bookId&&item.chapter===verse.chapter&&item.verse===verse.verse);
        const note=noteFor(verse);const mark=highlightFor(verse);const verseKey=[verse.bookId,verse.chapter,verse.sourceVerseLabel].join(':');
        const tone=mark?highlightColors[mark.tone]:null;
        return <View key={[verse.bookId,verse.chapter,verse.sourceVerseLabel].join('-')}
          onLayout={selected&&isFirstFocusedVerse(verse,reader)?event=>{const y=event.nativeEvent.layout.y;setVerseOffset(prev=>prev?.key===targetKey&&prev.y===y?prev:{key:targetKey,y});}:undefined}
          style={[styles.verseFrame,selected&&{borderLeftColor:theme.selectionBorder,borderLeftWidth:5,backgroundColor:theme.selectionBg},isSaved&&{borderRightColor:theme.amber},tone&&{backgroundColor:tone.fill,borderLeftColor:tone.border}]}>
          <Pressable accessibilityRole="button" accessibilityLabel={'Opciones de versículo. '+canonicalName+' '+verse.chapter+':'+verse.sourceVerseLabel+'. '+verse.text+(selected?' · seleccionado':'')+(isSaved?' · guardado':'')+(mark?' · destacado':'')}
            accessibilityState={{ selected }} accessibilityHint="Mantén pulsado para abrir las opciones; toca una vez para mostrar el botón Opciones."
            onPress={()=>setQuickVerseKey(current=>current===verseKey?null:verseKey)} onLongPress={()=>openVerseMenu(verse)} delayLongPress={420}
            style={({pressed})=>[styles.verse,pressed&&{opacity:0.75}]}>
            <Text style={[styles.verseNumber,{color:tone?tone.ink:theme.primaryText}]}>{verse.sourceVerseLabel}</Text>
            <Text style={[typography.scripture,scriptureMetrics,styles.verseText,{color:tone?tone.ink:theme.text,fontFamily:'serif'}]}>{verse.text}</Text>
          </Pressable>
          <View style={styles.verseTools}>
            {note?<Pressable accessibilityRole="button" accessibilityLabel={'Leer nota privada de '+canonicalName+' '+verse.chapter+':'+verse.sourceVerseLabel}
              accessibilityHint="Abre solamente la lectura de la nota. Hay un botón separado para editar."
              onPress={()=>openNoteReader(verse)} style={styles.noteBubbleTarget}>
              <View accessibilityElementsHidden style={[styles.noteBubble,{backgroundColor:theme.selectionBorder}]}><Text style={styles.noteBubbleGlyph}>•</Text></View>
            </Pressable>:null}
            {quickVerseKey===verseKey?<Pressable accessibilityRole="button" accessibilityLabel={'Abrir opciones de '+canonicalName+' '+verse.chapter+':'+verse.sourceVerseLabel}
              onPress={()=>openVerseMenu(verse)} style={[styles.inlineOptions,{borderColor:theme.border,backgroundColor:theme.surface}]}>
              <Text style={[typography.label,{color:theme.primaryText}]}>⋯ Opciones</Text>
            </Pressable>:null}
          </View>
        </View>;
      })}</View> : null}

      <Modal visible={readingNote!==null} transparent animationType="fade" onRequestClose={closeNoteReader}>
        <View style={styles.modalBackdrop}>
          <View style={[styles.noteReadingPanel,expandedNote&&styles.noteReadingExpanded,{backgroundColor:theme.surface,borderColor:theme.border}]} accessibilityViewIsModal>
            <Text accessibilityRole="header" style={[typography.subhead,{color:theme.text}]}>
              Nota privada · {readingNote?readingNote.bookName+' '+readingNote.chapter+':'+readingNote.sourceVerseLabel:''}
            </Text>
            <ScrollView style={styles.noteReadingScroll} contentContainerStyle={styles.noteReadingContent} accessibilityLabel="Contenido completo de la nota privada">
              <Text style={[typography.body,{color:theme.text}]}>{readingNote?noteFor(readingNote)?.body??'':''}</Text>
            </ScrollView>
            <View style={styles.noteReadingActions}>
              <Action label={expandedNote?'Contraer':'Expandir'} variant="secondary" theme={theme} onPress={()=>setExpandedNote(x=>!x)}/>
              <Action label="Editar ✎" theme={theme} onPress={editFromNoteReader}/>
            </View>
            <Action label="Cerrar lectura" variant="tertiary" theme={theme} onPress={closeNoteReader}/>
          </View>
        </View>
      </Modal>
      <Modal visible={activeVerse!==null} transparent animationType="slide" onRequestClose={()=>{setActiveVerse(null);setEditingNote(false);}}>
        <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':undefined} style={styles.modalBackdrop}>
          <Pressable accessibilityRole="button" accessibilityLabel="Cerrar opciones tocando fuera" style={styles.sheetDismiss} onPress={()=>{setActiveVerse(null);setEditingNote(false);}}/>
          <View style={[styles.modalPanel,{backgroundColor:theme.surface,borderColor:theme.border}]} accessibilityViewIsModal>
            <Text accessibilityRole="header" style={[typography.subhead,{color:theme.text}]}>
              {activeVerse?activeVerse.bookName+' '+activeVerse.chapter+':'+activeVerse.sourceVerseLabel:''} · RV1909
            </Text>
            <View style={styles.verseActionBar}>
              <Pressable accessibilityRole="button" accessibilityLabel="Copiar versículo" onPress={()=>{void copySelectedVerse();}}
                style={[styles.sheetAction,{backgroundColor:theme.surfaceSoft,borderColor:theme.border}]}>
                <Text style={[styles.sheetActionText,{color:theme.primaryText}]}>Copiar</Text>
              </Pressable>
              <Pressable accessibilityRole="button" accessibilityLabel="Agregar o editar nota" accessibilityState={{selected:verseAction==='note'}}
                onPress={()=>{setVerseAction('note');setEditingNote(false);}}
                style={[styles.sheetAction,{backgroundColor:verseAction==='note'?theme.selectionBg:theme.surfaceSoft,borderColor:theme.border}]}>
                <Text style={[styles.sheetActionText,{color:theme.primaryText}]}>Nota</Text>
              </Pressable>
              <Pressable accessibilityRole="button" accessibilityLabel="Resaltar con color" accessibilityState={{selected:verseAction==='highlight'}}
                onPress={()=>{setVerseAction('highlight');setEditingNote(false);}}
                style={[styles.sheetAction,{backgroundColor:verseAction==='highlight'?theme.selectionBg:theme.surfaceSoft,borderColor:theme.border}]}>
                <Text style={[styles.sheetActionText,{color:theme.primaryText}]}>Resaltar</Text>
              </Pressable>
              <Pressable accessibilityRole="button" accessibilityLabel="Compartir versículo" onPress={()=>{void shareSelectedVerse();}}
                style={[styles.sheetAction,{backgroundColor:theme.surfaceSoft,borderColor:theme.border}]}>
                <Text style={[styles.sheetActionText,{color:theme.primaryText}]}>Compartir</Text>
              </Pressable>
            </View>
            {verseAction?<ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.optionsContent}>
              {verseAction==='note'?<>
                {editingNote?<View style={styles.editorSection}>
                  <Text style={[typography.label,{color:theme.primaryText}]}>Tu nota privada</Text>
                  <TextInput accessibilityLabel="Nota privada del versículo" multiline autoFocus
                    placeholder="Escribe tu nota personal…" placeholderTextColor={theme.secondary}
                    value={noteDraft} onChangeText={setNoteDraft}
                    style={[styles.noteInput,{color:theme.text,borderColor:theme.border,backgroundColor:theme.background}]}/>
                  <Action label="Guardar nota" theme={theme} onPress={()=>{void saveNote();}}/>
                  <Action label="Cancelar edición" variant="tertiary" theme={theme} onPress={()=>{if(activeVerse)setNoteDraft(noteFor(activeVerse)?.body??'');setEditingNote(false);}}/>
                </View>:<>
                  {activeVerse&&noteFor(activeVerse)?<View style={[styles.savedNote,{borderColor:theme.border,backgroundColor:theme.surfaceSoft}]} accessibilityLabel="Nota privada completa">
                    <ScrollView style={styles.savedNoteScroll} nestedScrollEnabled>
                      <Text style={[typography.body,{color:theme.text}]}>{noteFor(activeVerse)?.body}</Text>
                    </ScrollView>
                  </View>:<Body theme={theme} muted>Este versículo todavía no tiene nota privada.</Body>}
                  <View style={styles.compactActions}>
                    <Action label={activeVerse&&noteFor(activeVerse)?'✎ Editar nota':'✎ Agregar nota'} theme={theme} onPress={()=>setEditingNote(true)}/>
                    {activeVerse&&noteFor(activeVerse)?<Action label="▤ Eliminar" variant="tertiary" theme={theme} onPress={confirmDeleteNote}/>:null}
                  </View>
                </>}
              </>:null}
              {verseAction==='highlight'?<>
                <Text style={[typography.label,{color:theme.primaryText}]}>Elige un color</Text>
                <View style={styles.colorActions}>{(['rose','lavender','peach'] as const).map(tone=>{
                  const colors=highlightColors[tone];const label=tone==='rose'?'rosa':tone==='lavender'?'lavanda':'durazno';
                  const selected=activeVerse?highlightFor(activeVerse)?.tone===tone:false;
                  return <Pressable key={tone} accessibilityRole="button" accessibilityLabel={'Destacar '+label}
                    accessibilityState={{selected}} accessibilityHint={selected?'Pulsa para quitar este color.':'Pulsa para aplicar este color.'}
                    onPress={()=>{void chooseHighlight(tone);}}
                    style={({pressed})=>[styles.colorTouch,pressed&&{opacity:0.8}]}>
                    <View accessibilityElementsHidden style={[styles.colorDot,{backgroundColor:colors.fill,borderColor:selected?colors.border:theme.border,borderWidth:selected?3:1}]}>
                      {selected?<Text style={{color:colors.ink,fontWeight:'700'}}>✓</Text>:null}
                    </View>
                  </Pressable>;
                })}</View>
              </>:null}
              <Action label={activeVerse&&saved.some(r=>r.bookId===activeVerse.bookId&&r.chapter===activeVerse.chapter&&r.verse===activeVerse.verse)?'Quitar referencia guardada':'Guardar referencia'}
                theme={theme} variant="tertiary" onPress={()=>{if(activeVerse)void toggleSaved(activeVerse);setActiveVerse(null);}}/>
            </ScrollView>:null}
            <Action label="Cerrar opciones" variant="tertiary" theme={theme} onPress={()=>{setActiveVerse(null);setEditingNote(false);}}/>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <Section theme={theme} title="Navegar por el capítulo"><View style={styles.readerActions}><Action label="Capítulo anterior" variant="secondary" disabled={atFirstChapter} theme={theme} onPress={() => onOpenReader(reader.book, Math.max(1, reader.chapter - 1), undefined, false)} /><Action label="Capítulo siguiente" variant="secondary" disabled={atLastChapter} theme={theme} onPress={() => onOpenReader(reader.book, reader.chapter + 1, undefined, false)} /></View></Section><Metadata theme={theme}>{runtimeCoverage.translation} · 66 libros · corpus local · sin conexión requerida</Metadata></ScrollView></Screen>;
  }
  if (selectedBook) return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><Action label="← Cambiar libro" variant="tertiary" theme={theme} onPress={() => { setSelectedBook(undefined); onBookContextChange?.(undefined); setPickerChapterCount(0); setPickerError(false); }} /><View style={styles.readerHeader}><Metadata theme={theme}>LEER · RV1909</Metadata><ScreenTitle theme={theme}>{selectedBook}</ScreenTitle><Body theme={theme} muted>Elige un capítulo para abrir el texto.</Body></View>{pickerLoading ? <StatusBanner theme={theme} kind="info">Cargando capítulos disponibles…</StatusBanner> : null}{pickerError ? <StatusBanner theme={theme} kind="error">No se pudo leer la metadata local de capítulos.</StatusBanner> : null}{!pickerLoading && !pickerError && pickerChapterCount > 0 ? <View style={styles.chapterGrid}>{Array.from({ length: pickerChapterCount }, (_, index) => index + 1).map(chapter => <ChoiceChip key={chapter} label={String(chapter)} theme={theme} selected={false} onPress={() => onOpenReader(selectedBook, chapter)} />)}</View> : null}</ScrollView></Screen>;
  return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><View style={[styles.readerHeader, styles.bookIntro]}><View style={[styles.bookAccent, { backgroundColor: theme.sky }]}/><ScreenTitle theme={theme}>Leer</ScreenTitle><Body theme={theme} muted>{runtimeCoverage.translation} · {runtimeCoverage.books} libros sin conexión. Orden canónico AT/NT.</Body></View><Section theme={theme} title="Antiguo Testamento">{oldTestament.map(book => <SettingRow key={book} theme={theme} label={book} value="Capítulos →" onPress={() => { void chooseBook(book); }} />)}</Section><Section theme={theme} title="Nuevo Testamento">{newTestament.map(book => <SettingRow key={book} theme={theme} label={book} value="Capítulos →" onPress={() => { void chooseBook(book); }} />)}</Section></ScrollView></Screen>;
}
const styles = StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:spacing.xxl},
 readerStack:{gap:spacing.xl,paddingBottom:spacing.xxxl},
 readerHeader:{gap:spacing.sm,alignItems:'center',paddingTop:spacing.xl,paddingBottom:spacing.xxl},
 chapterTitle:{fontFamily:'serif',fontSize:33,lineHeight:42,fontWeight:'700',textAlign:'center'},
 readerUnderline:{height:3,width:57,borderRadius:999,opacity:.94},rangeHint:{fontSize:13,lineHeight:20,textAlign:'center'},
 bookIntro:{paddingBottom:spacing.sm},
 bookAccent:{width:36,height:4,borderRadius:radius.xs},
 chapterGrid:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm},
 scripture:{gap:10,paddingHorizontal:3},
 verseFrame:{minHeight:minimumTouchTarget,borderLeftWidth:3,borderRightWidth:2,borderLeftColor:'transparent',borderRightColor:'transparent',borderRadius:radius.md,paddingVertical:6},
 verse:{minHeight:minimumTouchTarget,paddingHorizontal:spacing.sm,paddingVertical:spacing.xs,flexDirection:'row',alignItems:'flex-start',gap:spacing.md},
 verseNumber:{fontSize:15,lineHeight:29,fontWeight:'700',minWidth:25,textAlign:'center'},verseText:{flex:1},
 verseTools:{flexDirection:'row',flexWrap:'wrap',alignItems:'center',paddingHorizontal:spacing.sm,gap:spacing.sm},
 noteBubbleTarget:{width:minimumTouchTarget,height:minimumTouchTarget,alignItems:'center',justifyContent:'center'},
 noteBubble:{width:14,height:14,borderRadius:7,opacity:0.52,alignItems:'center',justifyContent:'center'},
 noteBubbleGlyph:{color:'#FFFFFF',fontSize:10,lineHeight:13},
 inlineOptions:{minHeight:minimumTouchTarget,borderWidth:1,borderRadius:radius.sm,paddingHorizontal:spacing.md,justifyContent:'center'},
 readerActions:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm},
 modalBackdrop:{flex:1,justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,0.18)',padding:0},
 sheetDismiss:{flex:1},
 modalPanel:{maxHeight:'58%',borderWidth:1,borderTopLeftRadius:radius.lg,borderTopRightRadius:radius.lg,padding:spacing.md,gap:spacing.sm},
 verseActionBar:{flexDirection:'row',flexWrap:'wrap',gap:4,justifyContent:'space-between'},
 sheetAction:{minHeight:minimumTouchTarget,flexGrow:1,flexBasis:'22%',alignItems:'center',justifyContent:'center',borderRadius:radius.sm,borderWidth:.7,paddingHorizontal:3},
 sheetActionText:{fontSize:12,fontWeight:'700'},
 optionsContent:{gap:spacing.sm,paddingBottom:spacing.sm},
 editorSection:{gap:spacing.md},
 noteInput:{borderWidth:1,borderRadius:radius.sm,minHeight:116,maxHeight:190,textAlignVertical:'top',padding:spacing.md,fontSize:17,lineHeight:26},
 savedNote:{borderWidth:1,borderRadius:radius.sm,padding:spacing.md},
 savedNoteScroll:{maxHeight:230},
 compactActions:{flexDirection:'row',flexWrap:'wrap',alignItems:'center',gap:spacing.sm},
 colorActions:{flexDirection:'row',gap:spacing.lg,alignItems:'center'},
 colorTouch:{width:minimumTouchTarget,height:minimumTouchTarget,alignItems:'center',justifyContent:'center'},
 colorDot:{width:29,height:29,borderRadius:15,alignItems:'center',justifyContent:'center'},
 noteReadingPanel:{minHeight:220,maxHeight:'56%',borderWidth:1,borderRadius:radius.lg,padding:spacing.lg,gap:spacing.md},
 noteReadingExpanded:{height:'88%',maxHeight:'88%'},
 noteReadingScroll:{flexShrink:1},
 noteReadingContent:{paddingVertical:spacing.sm},
 noteReadingActions:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm}
});

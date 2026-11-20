import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, Share, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteBibleRepository } from '../../db/sqliteBibleRepository';
import { SQLiteLocalPersistence } from '../../db/sqliteLocalPersistence';
import type { BibleVerse, SavedReference, VerseHighlight, VerseNote, HighlightTone } from '../../product/adapters';
import { books, runtimeCoverage } from '../../product/books';
import {highlightColors,nextHighlightTone,verseMatchesTarget} from '../../product/verseAnnotations';
import {focusMatchesVerse,isFirstFocusedVerse} from '../../product/conceptIndex';
import { uxCopy } from '../../product/uxCopy';
import {verseShareText} from '../../product/verseSharing';
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
  const [selectedBook, setSelectedBook] = useState<string | undefined>(initialBook); const [pickerChapterCount, setPickerChapterCount] = useState(0); const [pickerLoading, setPickerLoading] = useState(false); const [pickerError, setPickerError] = useState(false); const scriptureMetrics = scaledScriptureMetrics(readingScale);
  useEffect(() => { if (!reader && initialBook && initialBook !== selectedBook) void chooseBook(initialBook, false); }, [initialBook, reader]);
  useEffect(() => { let active = true; if (!reader) { setVerses([]); setChapterCount(0); setError(null); return () => { active = false; }; } setLoading(true); setError(null); void Promise.all([repository.getChapter(reader.book, reader.chapter), repository.getBookChapterCount(reader.book), persistence.listSavedReferences(),persistence.listVerseNotes(),persistence.listHighlights()]).then(([rows, count, refs, notes, marks]) => { if (active) { setVerses(rows); setChapterCount(count); setSaved(refs); setVerseNotes(notes); setHighlights(marks); } }).catch(() => { if (active) { setVerses([]); setChapterCount(0); setError("This chapter could not be read from the local corpus."); } }).finally(() => { if (active) setLoading(false); }); return () => { active = false; }; }, [reader?.book, reader?.chapter, repository, persistence]);
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
  const toggleSaved = async (verse: BibleVerse) => { const ref = { bookId: verse.bookId, chapter: verse.chapter, verse: verse.verse }; const exists = saved.some(item => item.bookId === ref.bookId && item.chapter === ref.chapter && item.verse === ref.verse); try { if (exists) await persistence.removeSavedReference(ref); else await persistence.saveReference({ ...ref, savedAt: new Date().toISOString() }); setSaved(await persistence.listSavedReferences()); setSaveStatus(exists ? uxCopy.removedReference : uxCopy.savedReference); } catch { setSaveStatus('Could not update the locally saved verse.'); } };

  const identity=(verse:BibleVerse)=>({translationId:'webp' as const,bookId:verse.bookId,chapter:verse.chapter,sourceVerseLabel:verse.sourceVerseLabel});
  const noteFor=(verse:BibleVerse)=>verseNotes.find(n=>n.bookId===verse.bookId&&n.chapter===verse.chapter&&n.sourceVerseLabel===verse.sourceVerseLabel);
  const highlightFor=(verse:BibleVerse)=>highlights.find(n=>n.bookId===verse.bookId&&n.chapter===verse.chapter&&n.sourceVerseLabel===verse.sourceVerseLabel);
  const openVerseMenu=(verse:BibleVerse)=>{setReadingNote(null);setActiveVerse(verse);setVerseAction(null);setNoteDraft(noteFor(verse)?.body??'');setEditingNote(false);};
  const closeVerseMenu=()=>{
    const previous=activeVerse?noteFor(activeVerse)?.body??'':'';
    if(editingNote&&activeVerse&&noteDraft!==previous){
      Alert.alert('Discard changes',"Your note has unsaved changes. Do you want to discard them?",[
        {text:'Keep writing',style:'cancel'},
        {text:'Discard',style:'destructive',onPress:()=>{setActiveVerse(null);setEditingNote(false);}}
      ]);
      return;
    }
    setActiveVerse(null);setEditingNote(false);
  };
  const openNoteReader=(verse:BibleVerse)=>{if(!noteFor(verse))return;setActiveVerse(null);setReadingNote(verse);setExpandedNote(false);};
  const closeNoteReader=()=>{setReadingNote(null);setExpandedNote(false);};
  const editFromNoteReader=()=>{if(!readingNote)return;const verse=readingNote;closeNoteReader();openVerseMenu(verse);setVerseAction('note');setEditingNote(true);};
  const confirmDeleteNote=()=>{if(!activeVerse)return;Alert.alert("Delete private note","Delete this note permanently? The highlight will not be removed.",[
    {text:"Cancel",style:'cancel'},{text:"Delete note",style:'destructive',onPress:()=>{void deleteNote();}}
  ]);};
  const saveNote=async()=>{if(!activeVerse)return;try{const body=noteDraft.trim();if(body)await persistence.upsertVerseNote({...identity(activeVerse),body,updatedAt:new Date().toISOString()});else await persistence.deleteVerseNote(identity(activeVerse));setVerseNotes(await persistence.listVerseNotes());setSaveStatus(body?"Private note saved.":"Note deleted.");setActiveVerse(null);setEditingNote(false);}catch{setSaveStatus("Could not save local note.");}};
  const deleteNote=async()=>{if(!activeVerse)return;try{await persistence.deleteVerseNote(identity(activeVerse));setVerseNotes(await persistence.listVerseNotes());setActiveVerse(null);setSaveStatus("Note deleted.");}catch{setSaveStatus("Could not delete note.");}};
  const chooseHighlight=async(tone:HighlightTone)=>{if(!activeVerse)return;const next=nextHighlightTone(highlightFor(activeVerse)?.tone,tone);try{if(next)await persistence.setHighlight(identity(activeVerse),next);else await persistence.removeHighlight(identity(activeVerse));setHighlights(await persistence.listHighlights());setSaveStatus(next?"Verse highlighted.":'Highlight removed.');}catch{setSaveStatus('Could not update the highlight.');}};

  const shareSelectedVerse=async()=>{if(!activeVerse)return;try{await Share.share({title:activeVerse.bookName+' '+activeVerse.chapter+':'+activeVerse.sourceVerseLabel,message:verseShareText(activeVerse)});setActiveVerse(null);}catch{setSaveStatus("Unable to open sharing options.");}};

  if (reader) { const canonicalName = verses[0]?.bookName ?? reader.book; const ref = canonicalName + ' ' + reader.chapter + (reader.sourceVerseLabel||reader.verse ? ':' + (reader.sourceVerseLabel??reader.verse) + (reader.verseEnd&&reader.verse&&reader.verseEnd>reader.verse?'–'+reader.verseEnd:'') : ''); const atFirstChapter = reader.chapter <= 1; const atLastChapter = chapterCount > 0 && reader.chapter >= chapterCount;
    return <Screen theme={theme}><ScrollView ref={scrollRef} keyboardShouldPersistTaps="always" contentContainerStyle={styles.readerStack}>{onBack?<Action label="← Return to Explore" variant="secondary" theme={theme} onPress={onBack}/>:null}<View style={styles.readerHeader}>
  <Metadata theme={theme}>THE WORD · WORLD ENGLISH BIBLE</Metadata>
  <Text accessibilityRole="header" style={[styles.chapterTitle,{color:theme.text}]}>{canonicalName} {reader.chapter}</Text>
  <View style={[styles.readerUnderline,{backgroundColor:theme.primary}]}/>
  {reader.sourceVerseLabels?.length?<Text style={[styles.rangeHint,{color:theme.secondary}]}>Focused passage: {ref} · {reader.sourceVerseLabels.length}noted context verses</Text>:null}
 </View>
      {saveStatus ? <StatusBanner theme={theme} kind={/^(?:Could not|Unable|Failed|Error)/i.test(saveStatus) ? 'error' : 'success'}>{saveStatus}</StatusBanner> : null}{loading ? <StatusBanner theme={theme} kind="info">Loading local chapter…</StatusBanner> : null}{error ? <StatusBanner theme={theme} kind="error">{error}</StatusBanner> : null}{!loading && !error && verses.length === 0 ? <StatusBanner theme={theme} kind="info">There are no verses for this chapter.</StatusBanner> : null}
      {!loading && !error && verses.length ? <View style={styles.scripture} onLayout={event=>setScriptureY(event.nativeEvent.layout.y)}>{verses.map(verse => {
        const selected=reader.sourceVerseLabels?.length?focusMatchesVerse(verse,reader):verseMatchesTarget(verse,reader);
        const isSaved=saved.some(item=>item.bookId===verse.bookId&&item.chapter===verse.chapter&&item.verse===verse.verse);
        const note=noteFor(verse);const mark=highlightFor(verse);
        const tone=mark?highlightColors[mark.tone]:null;
        return <View key={[verse.bookId,verse.chapter,verse.sourceVerseLabel].join('-')}
          onLayout={selected&&isFirstFocusedVerse(verse,reader)?event=>{const y=event.nativeEvent.layout.y;setVerseOffset(prev=>prev?.key===targetKey&&prev.y===y?prev:{key:targetKey,y});}:undefined}
          style={[styles.verseFrame,selected&&{borderLeftColor:theme.selectionBorder,borderLeftWidth:5,backgroundColor:theme.selectionBg},isSaved&&{borderRightColor:theme.amber},tone&&{backgroundColor:tone.fill,borderLeftColor:tone.border}]}>
          <View style={styles.verse}>
            <Pressable accessibilityRole="button"
              accessibilityLabel={"Actions for "+canonicalName+' '+verse.chapter+':'+verse.sourceVerseLabel+(selected?' · selected':'')+(isSaved?' · saved':'')+(mark?' · highlighted':'')}
              accessibilityHint="Open notes, highlight, share or save. Long press the text on the right to select words with Android."
              accessibilityState={{ selected }}
              onPress={()=>openVerseMenu(verse)} style={[styles.verseNumberAction,{backgroundColor:theme.surfaceSoft,borderColor:theme.border}]}>
              <Text style={[styles.verseNumber,{color:tone?tone.ink:theme.primaryText}]}>{verse.sourceVerseLabel}</Text>
              <Text style={[styles.verseMore,{color:theme.secondary}]}>⋮</Text>
            </Pressable>
            <Text selectable selectionColor={theme.selectionBorder}
              accessibilityLabel={canonicalName+' '+verse.chapter+':'+verse.sourceVerseLabel+'. '+verse.text}
              style={[typography.scripture,scriptureMetrics,styles.verseText,{color:tone?tone.ink:theme.text,fontFamily:'serif'}]}>
              {verse.text}
            </Text>
          </View>
          <View style={styles.verseTools}>
            {note?<Pressable accessibilityRole="button" accessibilityLabel={"Read private note from "+canonicalName+' '+verse.chapter+':'+verse.sourceVerseLabel}
              accessibilityHint="Open only the reading of the note. There is a separate button for editing."
              onPress={()=>openNoteReader(verse)} style={styles.noteBubbleTarget}>
              <View accessibilityElementsHidden style={[styles.noteBubble,{backgroundColor:theme.selectionBorder}]}><Text style={styles.noteBubbleGlyph}>•</Text></View>
            </Pressable>:null}
          </View>
        </View>;
      })}</View> : null}

      <Modal visible={readingNote!==null} transparent animationType="fade" onRequestClose={closeNoteReader}>
        <View style={styles.modalBackdrop}>
          <View style={[styles.noteReadingPanel,expandedNote&&styles.noteReadingExpanded,{backgroundColor:theme.surface,borderColor:theme.border}]} accessibilityViewIsModal>
            <Text accessibilityRole="header" style={[typography.subhead,{color:theme.text}]}>Private note · {readingNote?readingNote.bookName+' '+readingNote.chapter+':'+readingNote.sourceVerseLabel:''}
            </Text>
            <ScrollView style={styles.noteReadingScroll} contentContainerStyle={styles.noteReadingContent} accessibilityLabel="Complete content of the private note">
              <Text style={[typography.body,{color:theme.text}]}>{readingNote?noteFor(readingNote)?.body??'':''}</Text>
            </ScrollView>
            <View style={styles.noteReadingActions}>
              <Action label={expandedNote?'Collapse':'Expand'} variant="secondary" theme={theme} onPress={()=>setExpandedNote(x=>!x)}/>
              <Action label="Editar ✎" theme={theme} onPress={editFromNoteReader}/>
            </View>
            <Action label="Close reading" variant="tertiary" theme={theme} onPress={closeNoteReader}/>
          </View>
        </View>
      </Modal>
      <Modal visible={activeVerse!==null} transparent animationType="slide" onRequestClose={closeVerseMenu}>
        <KeyboardAvoidingView behavior="padding" style={styles.modalBackdrop}>
          <Pressable accessibilityRole="button" accessibilityLabel="Close options by tapping outside" style={styles.sheetDismiss} onPress={closeVerseMenu}/>
          <View style={[styles.modalPanel,editingNote&&styles.editingPanel,{backgroundColor:theme.surface,borderColor:theme.border}]} accessibilityViewIsModal>
            <Text accessibilityRole="header" style={[typography.subhead,{color:theme.text}]}>
              {activeVerse?activeVerse.bookName+' '+activeVerse.chapter+':'+activeVerse.sourceVerseLabel:''} · WEBP
            </Text>
            {editingNote?<View style={styles.editingHeaderActions}>
              <Action label="Save note" theme={theme} onPress={()=>{void saveNote();}}/>
              <Action label="Cancel edit" variant="tertiary" theme={theme} onPress={()=>{if(activeVerse)setNoteDraft(noteFor(activeVerse)?.body??'');setEditingNote(false);}}/>
            </View>:<>
              <Text style={[typography.metadata,{color:theme.secondary}]}>To copy a word or phrase, touch and hold the Bible text and use Android bookmarks.</Text>
            <View style={styles.verseActionBar}>
              <Pressable accessibilityRole="button" accessibilityLabel="Add or edit note" accessibilityState={{selected:verseAction==='note'}}
                onPress={()=>{setVerseAction('note');setEditingNote(false);}}
                style={[styles.sheetAction,{backgroundColor:verseAction==='note'?theme.selectionBg:theme.surfaceSoft,borderColor:theme.border}]}>
                <Text style={[styles.sheetActionText,{color:theme.primaryText}]}>Note</Text>
              </Pressable>
              <Pressable accessibilityRole="button" accessibilityLabel="Highlight with color" accessibilityState={{selected:verseAction==='highlight'}}
                onPress={()=>{setVerseAction('highlight');setEditingNote(false);}}
                style={[styles.sheetAction,{backgroundColor:verseAction==='highlight'?theme.selectionBg:theme.surfaceSoft,borderColor:theme.border}]}>
                <Text style={[styles.sheetActionText,{color:theme.primaryText}]}>Resaltar</Text>
              </Pressable>
              <Pressable accessibilityRole="button" accessibilityLabel="Share verse" onPress={()=>{void shareSelectedVerse();}}
                style={[styles.sheetAction,{backgroundColor:theme.surfaceSoft,borderColor:theme.border}]}>
                <Text style={[styles.sheetActionText,{color:theme.primaryText}]}>Share</Text>
              </Pressable>
            </View>
            <Action label={activeVerse&&saved.some(r=>r.bookId===activeVerse.bookId&&r.chapter===activeVerse.chapter&&r.verse===activeVerse.verse)?'Quitar referencia guardada':"Save reference"}
              theme={theme} variant="secondary" onPress={()=>{if(activeVerse)void toggleSaved(activeVerse);setActiveVerse(null);}}/>
            </>}
            {verseAction?<ScrollView keyboardShouldPersistTaps="always" keyboardDismissMode="on-drag" contentContainerStyle={styles.optionsContent}>
              {verseAction==='note'?<>
                {editingNote?<View style={styles.editorSection}>
                  <Text style={[typography.label,{color:theme.primaryText}]}>Your private note</Text>
                  <TextInput accessibilityLabel="Private Verse Note" multiline autoFocus
                    placeholder="Write your personal note…" placeholderTextColor={theme.secondary}
                    value={noteDraft} onChangeText={setNoteDraft}
                    style={[styles.noteInput,{color:theme.text,borderColor:theme.border,backgroundColor:theme.background}]}/>
                </View>:<>
                  {activeVerse&&noteFor(activeVerse)?<View style={[styles.savedNote,{borderColor:theme.border,backgroundColor:theme.surfaceSoft}]} accessibilityLabel="Complete private note">
                    <ScrollView style={styles.savedNoteScroll} nestedScrollEnabled>
                      <Text style={[typography.body,{color:theme.text}]}>{noteFor(activeVerse)?.body}</Text>
                    </ScrollView>
                  </View>:<Body theme={theme} muted>This verse does not yet have a private note.</Body>}
                  <View style={styles.compactActions}>
                    <Action label={activeVerse&&noteFor(activeVerse)?"✎ Edit note":"✎ Add note"} theme={theme} onPress={()=>setEditingNote(true)}/>
                    {activeVerse&&noteFor(activeVerse)?<Action label="▤ Delete" variant="tertiary" theme={theme} onPress={confirmDeleteNote}/>:null}
                  </View>
                </>}
              </>:null}
              {verseAction==='highlight'?<>
                <Text style={[typography.label,{color:theme.primaryText}]}>Elige un color</Text>
                <View style={styles.colorActions}>{(['rose','lavender','peach'] as const).map(tone=>{
                  const colors=highlightColors[tone];const label=tone==='rose'?'pink':tone==='lavender'?'lavender':'peach';
                  const selected=activeVerse?highlightFor(activeVerse)?.tone===tone:false;
                  return <Pressable key={tone} accessibilityRole="button" accessibilityLabel={'Destacar '+label}
                    accessibilityState={{selected}} accessibilityHint={selected?"Click to remove this color.":"Press to apply this color."}
                    onPress={()=>{void chooseHighlight(tone);}}
                    style={({pressed})=>[styles.colorTouch,pressed&&{opacity:0.8}]}>
                    <View accessibilityElementsHidden style={[styles.colorDot,{backgroundColor:colors.fill,borderColor:selected?colors.border:theme.border,borderWidth:selected?3:1}]}>
                      {selected?<Text style={{color:colors.ink,fontWeight:'700'}}>✓</Text>:null}
                    </View>
                  </Pressable>;
                })}</View>
              </>:null}
            </ScrollView>:null}
            {!editingNote?<Action label="Close options" variant="tertiary" theme={theme} onPress={closeVerseMenu}/>:null}
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <Section theme={theme} title="Browse the chapter"><View style={styles.readerActions}><Action label="Previous chapter" variant="secondary" disabled={atFirstChapter} theme={theme} onPress={() => onOpenReader(reader.book, Math.max(1, reader.chapter - 1), undefined, false)} /><Action label="Next chapter" variant="secondary" disabled={atLastChapter} theme={theme} onPress={() => onOpenReader(reader.book, reader.chapter + 1, undefined, false)} /></View></Section><Metadata theme={theme}>{runtimeCoverage.translation}· 66 books · biblical reading</Metadata></ScrollView></Screen>;
  }
  if (selectedBook) return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><Action label="← Change book" variant="tertiary" theme={theme} onPress={() => { setSelectedBook(undefined); onBookContextChange?.(undefined); setPickerChapterCount(0); setPickerError(false); }} /><View style={styles.readerHeader}><Metadata theme={theme}>READ WEBP</Metadata><ScreenTitle theme={theme}>{selectedBook}</ScreenTitle><Body theme={theme} muted>Choose a chapter to open the text.</Body></View>{pickerLoading ? <StatusBanner theme={theme} kind="info">Loading available chapters…</StatusBanner> : null}{pickerError ? <StatusBanner theme={theme} kind="error">Could not read local chapter metadata.</StatusBanner> : null}{!pickerLoading && !pickerError && pickerChapterCount > 0 ? <View style={styles.chapterGrid}>{Array.from({ length: pickerChapterCount }, (_, index) => index + 1).map(chapter => <ChoiceChip key={chapter} label={String(chapter)} theme={theme} selected={false} onPress={() => onOpenReader(selectedBook, chapter)} />)}</View> : null}</ScrollView></Screen>;
  return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><View style={[styles.readerHeader, styles.bookIntro]}><View style={[styles.bookAccent, { backgroundColor: theme.sky }]}/><ScreenTitle theme={theme}>Read</ScreenTitle><Body theme={theme} muted>{runtimeCoverage.translation} · {runtimeCoverage.books}books · AT/NT canonical order.</Body></View><Section theme={theme} title="Old Testament">{oldTestament.map(book => <SettingRow key={book} theme={theme} label={book} value="Chapters →" onPress={() => { void chooseBook(book); }} />)}</Section><Section theme={theme} title="New Testament">{newTestament.map(book => <SettingRow key={book} theme={theme} label={book} value="Chapters →" onPress={() => { void chooseBook(book); }} />)}</Section></ScrollView></Screen>;
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
 verse:{minHeight:minimumTouchTarget,paddingHorizontal:spacing.sm,paddingVertical:spacing.sm,flexDirection:'row',alignItems:'flex-start',gap:spacing.sm},
 verseNumberAction:{minWidth:48,minHeight:48,borderWidth:.7,borderRadius:radius.sm,alignItems:'center',justifyContent:'center',paddingVertical:2},
 verseMore:{fontSize:17,lineHeight:19,fontWeight:'700'},
 verseNumber:{fontSize:15,lineHeight:29,fontWeight:'700',minWidth:25,textAlign:'center'},verseText:{flex:1},
 verseTools:{flexDirection:'row',flexWrap:'wrap',alignItems:'center',paddingHorizontal:spacing.sm,gap:spacing.sm},
 noteBubbleTarget:{width:minimumTouchTarget,height:minimumTouchTarget,alignItems:'center',justifyContent:'center'},
 noteBubble:{width:14,height:14,borderRadius:7,opacity:0.52,alignItems:'center',justifyContent:'center'},
 noteBubbleGlyph:{color:'#FFFFFF',fontSize:10,lineHeight:13},
 inlineOptions:{minHeight:minimumTouchTarget,borderWidth:1,borderRadius:radius.sm,paddingHorizontal:spacing.md,justifyContent:'center'},
 readerActions:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm},
 modalBackdrop:{flex:1,justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,0.18)',padding:0},
 sheetDismiss:{flex:1},
 modalPanel:{maxHeight:'70%',borderWidth:1,borderTopLeftRadius:radius.lg,borderTopRightRadius:radius.lg,padding:spacing.md,gap:spacing.sm},
 editingPanel:{maxHeight:'87%',minHeight:260},
 editingHeaderActions:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs,alignItems:'center'},
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

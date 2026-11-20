import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {Alert,BackHandler,KeyboardAvoidingView,Platform,ScrollView,StyleSheet,Text,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteLocalPersistence} from '../../db/sqliteLocalPersistence';
import type {HighlightTone,ReadingHistoryEntry,SavedReference,VerseNote} from '../../product/adapters';
import {verseDisplayName} from '../../product/libraryPresentation';
import {Action,Body,Field,Metadata,Screen,ScreenTitle,Section,SettingRow,StatusBanner,ChoiceChip} from '../primitives';
import {spacing,type Theme} from '../theme';

type Page='home'|'saved'|'notes'|'activity';
const tones:ReadonlyArray<{id:HighlightTone;name:string;color:string}>=[
 {id:'rose',name:'Rosa',color:'#F2B6CE'},
 {id:'lavender',name:'Lavanda',color:'#C6B3E7'},
 {id:'peach',name:'Durazno',color:'#E9B68D'}
];
function labelOf(r:{bookId:string;bookName?:string;chapter:number;verse?:number}){
 return (r.bookName??r.bookId)+' '+r.chapter+(r.verse?':'+r.verse:'');
}
function localDate(iso:string){
 const d=new Date(iso);
 return Number.isNaN(d.getTime())?'Fecha desconocida':d.toLocaleDateString('en-US',{day:'numeric',month:'long',year:'numeric'});
}
function localTime(iso:string){
 const d=new Date(iso);
 return Number.isNaN(d.getTime())?"Time not available":d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:false});
}
export function LibraryScreen({theme,onOpenReader,restoreY=0,onScrollY=()=>{}}:{
 theme:Theme;onOpenReader:(book:string,chapter:number,verse?:number,sourceVerseLabel?:string)=>void;
 restoreY?:number;onScrollY?:(y:number)=>void;
}){
 const scroll=useRef<ScrollView>(null),restored=useRef(restoreY<=0);
 const db=useSQLiteContext(),persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);
 const [page,setPage]=useState<Page>('home');
 const [saved,setSaved]=useState<readonly SavedReference[]>([]),[notes,setNotes]=useState<readonly VerseNote[]>([]);
 const [history,setHistory]=useState<readonly ReadingHistoryEntry[]>([]),[error,setError]=useState('');
 const [editing,setEditing]=useState<SavedReference|null>(null),[title,setTitle]=useState(''),[topic,setTopic]=useState('');
 const [tone,setTone]=useState<HighlightTone>('rose'),[notice,setNotice]=useState('');
 const refresh=useCallback(()=>{void Promise.all([persistence.listSavedReferences(),persistence.listVerseNotes(),persistence.listReadingHistory()])
  .then(([refs,verseNotes,entries])=>{setSaved(refs);setNotes(verseNotes);setHistory(entries);setError('');})
  .catch(()=>setError("Your reading data could not be loaded."));},[persistence]);
 useEffect(()=>{refresh();},[refresh]);
 const go=(target:Page)=>{setPage(target);setEditing(null);setNotice('');scroll.current?.scrollTo({y:0,animated:false});};
 useEffect(()=>{
   if(page==='home')return;
   const subscription=BackHandler.addEventListener('hardwareBackPress',()=>{go('home');return true;});
   return()=>subscription.remove();
 },[page]);
 const edit=(ref:SavedReference)=>{setEditing(ref);setTitle(ref.title??'');setTopic(ref.topic??'');setTone(ref.tone??'rose');setNotice('');};
 const saveDetails=async()=>{
  if(!editing)return;
  try{await persistence.setSavedReferenceDetails(editing,title,topic,tone);setEditing(null);setNotice("Verse tab saved.");refresh();}
  catch{setNotice("The record could not be saved.");}
 };
 const remove=(ref:SavedReference)=>Alert.alert("Remove verse","Remove this verse from Saved? Your notes and highlights will remain.",[
  {text:"Cancel",style:'cancel'},
  {text:'Quitar',style:'destructive',onPress:()=>{void persistence.removeSavedReference(ref).then(refresh).catch(()=>setNotice("The verse could not be removed."));}}
 ]);
 const quick=history.slice(0,4);
 const pageTitle:Record<Page,string>={home:"Library",saved:"Saved verses",notes:"Bible notes",activity:'Actividad reciente'};
 return <Screen theme={theme}><KeyboardAvoidingView style={styles.flex} behavior={Platform.OS==='ios'?'padding':'height'}>
  <ScrollView ref={scroll} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag"
   contentContainerStyle={styles.stack} scrollEventThrottle={120}
   onScroll={e=>{if(page==='home'&&restored.current)onScrollY(e.nativeEvent.contentOffset.y);}}
   onContentSizeChange={()=>{if(page==='home'&&!restored.current){scroll.current?.scrollTo({y:restoreY,animated:false});restored.current=true;}}}>
   {page!=='home'?<Action label="← Return to Library" variant="tertiary" theme={theme} onPress={()=>go('home')}/>:null}
   <View style={styles.intro}><ScreenTitle theme={theme}>{pageTitle[page]}</ScreenTitle>
    <Body theme={theme} muted>{page==='home'?"Your readings and memories, each one in its place.":page==='saved'?"Name, theme, and color each verse you saved.":page==='notes'?"Find the notes written next to your passages.":"Chapters and verses consulted, with the date and time of your cell phone."}</Body>
   </View>
   {error?<StatusBanner theme={theme} kind="error">{error}</StatusBanner>:null}
   {notice?<Body theme={theme}>{notice}</Body>:null}
   {page==='home'?<>
    <Section theme={theme} title="Continue where you left off">
     {history[0]?<View style={[styles.feature,{backgroundColor:theme.surface,borderColor:theme.border}]}>
      <Text style={[styles.featureLabel,{color:theme.primaryText}]}>LAST READING</Text>
      <Text style={[styles.featureTitle,{color:theme.text}]}>{labelOf(history[0])}</Text>
      <Action theme={theme} label="Continue reading →" onPress={()=>onOpenReader(history[0].bookId,history[0].chapter,history[0].verse)}/>
     </View>:<Body theme={theme} muted>Open a chapter of the Bible and you can pick it up here.</Body>}
    </Section>
    <Section theme={theme} title="my library">
     <SettingRow theme={theme} label="Saved verses" value={saved.length+' →'} hint="Your favorites by name, theme and color" onPress={()=>go('saved')}/>
     <SettingRow theme={theme} label="Bible notes" value={notes.length+' →'} hint="Annotations linked to a verse" onPress={()=>go('notes')}/>
     <SettingRow theme={theme} label="Actividad reciente" value={history.length+' →'} hint="Days, chapters and reading hours" onPress={()=>go('activity')}/>
    </Section>
    <Section theme={theme} title="Quick history">
     {quick.length?quick.map((item,index)=><SettingRow key={item.openedAt+':'+index}
       theme={theme} label={labelOf(item)} value={localTime(item.openedAt)+' →'}
       onPress={()=>onOpenReader(item.bookId,item.chapter,item.verse)}/>):
      <Body theme={theme} muted>Your latest readings will appear here.</Body>}
     {history.length>4?<Action theme={theme} variant="tertiary" label="View all history" onPress={()=>go('activity')}/>:null}
    </Section>
   </>:null}
   {page==='saved'?<Section theme={theme} title={"My saved ·"+saved.length}>
    {saved.length===0?<Body theme={theme} muted>From a verse, tap its number and choose Save Reference.</Body>:null}
    {editing?<View style={[styles.editPanel,{backgroundColor:theme.surfaceSoft,borderColor:theme.border}]}>
     <Text style={[styles.featureTitle,{color:theme.text}]}>{labelOf(editing)}</Text>
     <Field theme={theme} label="Verse name" value={title} onChangeText={setTitle}
       maxLength={120} placeholder="Ex: My promise of hope"/>
     <Field theme={theme} label="personal topic" value={topic} onChangeText={setTopic}
       maxLength={80} placeholder="Ej.: Esperanza"/>
     <Metadata theme={theme}>Color to find it quickly</Metadata>
     <View style={styles.tones}>{tones.map(t=><ChoiceChip key={t.id} theme={theme} label={t.name}
       selected={tone===t.id} onPress={()=>setTone(t.id)}/>)}</View>
     <Action theme={theme} label="Save file" onPress={()=>{void saveDetails();}}/>
     <Action theme={theme} variant="tertiary" label="Cancel" onPress={()=>setEditing(null)}/>
    </View>:null}
    {saved.map(ref=><View key={ref.bookId+':'+ref.chapter+':'+ref.verse} style={[styles.entry,
     {backgroundColor:theme.surface,borderColor:theme.border,borderLeftColor:tones.find(t=>t.id===(ref.tone??'rose'))?.color??theme.primary}]}>
      <Text selectable style={[styles.itemTitle,{color:theme.text}]}>{ref.title||labelOf(ref)}</Text>
      <Metadata theme={theme}>{labelOf(ref)}{ref.topic?' · '+ref.topic:''}</Metadata>
      <View style={styles.inlineActions}>
       <Action theme={theme} variant="secondary" label="Read" onPress={()=>onOpenReader(ref.bookId,ref.chapter,ref.verse)}/>
       <Action theme={theme} variant="tertiary" label="Organizar" onPress={()=>edit(ref)}/>
       <Action theme={theme} variant="tertiary" label="Quitar" onPress={()=>remove(ref)}/>
      </View>
    </View>)}
   </Section>:null}
   {page==='notes'?<Section theme={theme} title={"Notes per verse ·"+notes.length}>
    {notes.length===0?<Body theme={theme} muted>To write a note, open a chapter and tap a verse number.</Body>:null}
    {notes.map(ref=><View key={ref.bookId+':'+ref.chapter+':'+ref.sourceVerseLabel}
       style={[styles.noteCard,{backgroundColor:theme.surface,borderColor:theme.border}]}>
       <Text style={[styles.itemTitle,{color:theme.text}]}>{verseDisplayName(ref)}</Text>
       <Text selectable style={[styles.notePreview,{color:theme.text}]}>{ref.body}</Text>
       <Action theme={theme} variant="secondary" label="Open verse" onPress={()=>onOpenReader(ref.bookId,ref.chapter,Number.parseInt(ref.sourceVerseLabel,10),ref.sourceVerseLabel)}/>
      </View>)}
   </Section>:null}
   {page==='activity'?<Section theme={theme} title={"Recorded readings ·"+history.length}>
    {history.length===0?<Body theme={theme} muted>Your history will appear when you open chapters.</Body>:null}
    {history.map((item,index)=>{
     const day=localDate(item.openedAt);
     const last=index>0?history[index-1]:undefined;
     const sectionStart=!last||localDate(last.openedAt)!==day;
     const chapterStart=sectionStart||last?.bookId!==item.bookId||last.chapter!==item.chapter;
     return <View key={item.openedAt+':'+index} style={styles.timeline}>
       {sectionStart?<Text accessibilityRole="header" style={[styles.dateHeader,{color:theme.text}]}>{day}</Text>:null}
       {chapterStart?<Text style={[styles.chapterLabel,{color:theme.primaryText}]}>{(item.bookName??item.bookId)+' '+item.chapter}</Text>:null}
       <SettingRow theme={theme} label={item.verse?"Verse"+item.verse:"Full chapter"}
         value={localTime(item.openedAt)+' →'} onPress={()=>onOpenReader(item.bookId,item.chapter,item.verse)}/>
      </View>;
    })}
   </Section>:null}
  </ScrollView>
 </KeyboardAvoidingView></Screen>;
}
const styles=StyleSheet.create({
 flex:{flex:1},stack:{gap:spacing.md,paddingBottom:80},intro:{gap:5},feature:{borderWidth:1,borderRadius:18,padding:15,gap:10},
 featureLabel:{fontSize:11,fontWeight:'800',letterSpacing:1.2},featureTitle:{fontFamily:'serif',fontSize:22,fontWeight:'700'},
 entry:{borderWidth:1,borderLeftWidth:6,borderRadius:14,padding:13,gap:8,marginBottom:8},
 editPanel:{borderWidth:1,borderRadius:16,padding:14,gap:12,marginBottom:12},
 tones:{flexDirection:'row',flexWrap:'wrap',gap:7},inlineActions:{flexDirection:'row',flexWrap:'wrap',gap:6},
 itemTitle:{fontFamily:'serif',fontSize:18,fontWeight:'700'},noteCard:{borderRadius:15,borderWidth:.7,padding:13,gap:9,marginBottom:8},
 notePreview:{fontSize:16,lineHeight:24},timeline:{gap:4},dateHeader:{fontFamily:'serif',fontSize:21,fontWeight:'700',marginTop:14},
 chapterLabel:{fontSize:15,fontWeight:'700',marginTop:8}
});

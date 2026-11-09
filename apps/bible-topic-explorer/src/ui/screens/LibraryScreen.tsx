import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {ScrollView,StyleSheet,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteLocalPersistence} from '../../db/sqliteLocalPersistence';
import type {ReadingHistoryEntry,SavedReference,VerseNote} from '../../product/adapters';
import {verseDisplayName} from '../../product/libraryPresentation';
import type {Theme} from '../theme';
import {spacing} from '../theme';
import {Action,Body,Card,Metadata,Screen,ScreenTitle,Section,SettingRow,StatusBanner} from '../primitives';

function readingLabel(item:Pick<ReadingHistoryEntry,'bookId'|'chapter'|'verse'|'bookName'>){
 return (item.bookName??item.bookId)+' '+item.chapter+(item.verse?':'+item.verse:'');
}
export function LibraryScreen({theme,onOpenReader,onOpenSaved,onOpenActivity,restoreY=0,onScrollY=()=>{}}:{
 theme:Theme;onOpenReader:(book:string,chapter:number,verse?:number,sourceVerseLabel?:string)=>void;
 onOpenSaved:()=>void;onOpenActivity:()=>void;restoreY?:number;onScrollY?:(y:number)=>void;
}){
 const scrollRef=useRef<ScrollView>(null),restored=useRef(restoreY<=0);
 const db=useSQLiteContext(),persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);
 const [saved,setSaved]=useState<readonly SavedReference[]>([]),[history,setHistory]=useState<readonly ReadingHistoryEntry[]>([]);
 const [notes,setNotes]=useState<readonly VerseNote[]>([]),[error,setError]=useState('');
 const refresh=useCallback(()=>{void Promise.all([persistence.listSavedReferences(),persistence.listReadingHistory(),persistence.listVerseNotes()])
  .then(([refs,entries,verseNotes])=>{setSaved(refs);setHistory(entries);setNotes(verseNotes);setError('');})
  .catch(()=>setError('No se pudo cargar la biblioteca local.'));},[persistence]);
 useEffect(()=>refresh(),[refresh]);
 const recent=history.slice(0,4);
 const latest=history[0];
 return <Screen theme={theme}><ScrollView ref={scrollRef} contentContainerStyle={styles.stack} scrollEventThrottle={80}
  onScroll={e=>{if(restored.current)onScrollY(e.nativeEvent.contentOffset.y);}}
  onContentSizeChange={()=>{if(!restored.current){scrollRef.current?.scrollTo({y:restoreY,animated:false});restored.current=true;}}}>
  <View style={styles.intro}><ScreenTitle theme={theme}>Biblioteca</ScreenTitle>
   <Body theme={theme} muted>Versículos, anotaciones y lecturas guardadas en tu teléfono.</Body></View>
  {error?<StatusBanner kind="error" theme={theme}>{error}</StatusBanner>:null}
  <Section theme={theme} title="Continuar leyendo">
   {latest?<Card theme={theme} featured label={'Última lectura '+readingLabel(latest)}>
    <Metadata theme={theme}>ÚLTIMA LECTURA</Metadata>
    <Body theme={theme}>{readingLabel(latest)}</Body>
    <Action theme={theme} label="Continuar capítulo" onPress={()=>onOpenReader(latest.bookId,latest.chapter,latest.verse)}/>
   </Card>:<Body theme={theme} muted>Tu última lectura aparecerá aquí.</Body>}
  </Section>
  <Section theme={theme} title="Guardados" description="Organiza tus versículos con nombre, tema y color.">
   <Body theme={theme}>{saved.length} versículos guardados</Body>
   <Action theme={theme} label="Abrir mis versículos guardados →" onPress={onOpenSaved}/>
  </Section>
  <Section theme={theme} title="Actividad reciente" description="Consulta capítulos, versículos, fecha y hora local de cada lectura.">
   <Body theme={theme}>{new Set(history.map(h=>h.bookId+':'+h.chapter)).size} capítulos consultados</Body>
   <Action theme={theme} variant="secondary" label="Abrir historial de actividad →" onPress={onOpenActivity}/>
  </Section>
  <Section theme={theme} title="Notas por versículo" description="Tus anotaciones bíblicas privadas.">
   {notes.length?notes.slice(0,8).map(n=><SettingRow key={n.bookId+':'+n.chapter+':'+n.sourceVerseLabel}
     theme={theme} label={verseDisplayName(n)} value="Leer →"
     onPress={()=>onOpenReader(n.bookId,n.chapter,Number.parseInt(n.sourceVerseLabel,10),n.sourceVerseLabel)}/>):
    <Body theme={theme} muted>Agrega una nota desde el menú de un versículo.</Body>}
  </Section>
  <Section theme={theme} title="Historial rápido" description="Tus cuatro últimas lecturas.">
   {recent.length?recent.map((r,i)=><SettingRow key={r.openedAt+':'+i} theme={theme}
    label={readingLabel(r)} value="Abrir →" onPress={()=>onOpenReader(r.bookId,r.chapter,r.verse)}/>):
    <Body theme={theme} muted>Sin lecturas recientes.</Body>}
   {history.length>4?<Action theme={theme} label="Ver todo el historial →" variant="tertiary" onPress={onOpenActivity}/>:null}
  </Section>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},intro:{gap:spacing.xs}});

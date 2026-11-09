import {useEffect,useMemo,useState} from 'react';
import {ScrollView,StyleSheet,Text,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteLocalPersistence} from '../../db/sqliteLocalPersistence';
import type {ReadingHistoryEntry} from '../../product/adapters';
import {Action,Body,Metadata,Screen,ScreenTitle,Section} from '../primitives';
import {spacing,type Theme} from '../theme';

function localDate(iso:string){const d=new Date(iso);return Number.isNaN(d.getTime())?'Fecha no disponible':d.toLocaleDateString('es-CL',{day:'numeric',month:'long',year:'numeric'});}
function localTime(iso:string){const d=new Date(iso);return Number.isNaN(d.getTime())?'Hora no disponible':d.toLocaleTimeString('es-CL',{hour:'2-digit',minute:'2-digit',hour12:false});}
export function RecentActivityScreen({theme,onBack,onOpenReader}:{theme:Theme;onBack:()=>void;onOpenReader:(book:string,chapter:number,verse?:number)=>void}){
 const db=useSQLiteContext(),persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);
 const [items,setItems]=useState<readonly ReadingHistoryEntry[]>([]),[error,setError]=useState('');
 useEffect(()=>{let live=true;void persistence.listReadingHistory().then(v=>{if(live)setItems(v);}).catch(()=>{if(live)setError('No se pudo obtener el historial.');});return()=>{live=false;};},[persistence]);
 const groups=useMemo(()=>{
  const dates=new Map<string,{label:string;chapters:Map<string,ReadingHistoryEntry[]>}>();
  for(const r of items){
   const key=localDate(r.openedAt);
   if(!dates.has(key))dates.set(key,{label:key,chapters:new Map()});
   const day=dates.get(key)!;
   const chapter=(r.bookName??r.bookId)+' '+r.chapter;
   if(!day.chapters.has(chapter))day.chapters.set(chapter,[]);
   day.chapters.get(chapter)!.push(r);
  }
  return Array.from(dates.values()).map(d=>({label:d.label,chapters:Array.from(d.chapters.entries())}));
 },[items]);
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action label="← Volver a Biblioteca" variant="tertiary" theme={theme} onPress={onBack}/>
  <ScreenTitle theme={theme}>Actividad reciente</ScreenTitle>
  <Body theme={theme} muted>Historial de capítulos y versículos por día, con la hora local de tu celular. Se conserva en este dispositivo.</Body>
  {error?<Body theme={theme}>{error}</Body>:null}
  {!items.length?<Body theme={theme} muted>Cuando abras versículos y capítulos, aparecerán aquí.</Body>:null}
  {groups.map(group=><Section key={group.label} theme={theme} title={group.label}>
   {group.chapters.map(([chapter,entries])=><View key={chapter} style={[styles.chapter,{backgroundColor:theme.surface,borderColor:theme.border}]}>
    <Text selectable style={[styles.chapterName,{color:theme.text}]}>{chapter}</Text>
    {entries.map((entry,i)=><View key={entry.openedAt+':'+i} style={styles.entry}>
     <Metadata theme={theme}>{localTime(entry.openedAt)} · {entry.verse?'Versículo '+entry.verse:'Capítulo completo'}</Metadata>
     <Action label="Abrir lectura" variant="tertiary" theme={theme}
       onPress={()=>onOpenReader(entry.bookId,entry.chapter,entry.verse)}/>
    </View>)}
   </View>)}
  </Section>)}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:65},chapter:{borderWidth:.8,borderRadius:14,padding:12,gap:8},chapterName:{fontSize:18,fontFamily:'serif',fontWeight:'700'},entry:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:6,borderTopWidth:0,paddingVertical:3}});

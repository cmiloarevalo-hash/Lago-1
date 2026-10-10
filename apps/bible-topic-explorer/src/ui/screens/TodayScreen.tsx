import {useEffect,useMemo,useState} from 'react';
import {AppState,ScrollView,StyleSheet,Text,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteBibleRepository} from '../../db/sqliteBibleRepository';
import type {BibleVerse} from '../../product/adapters';
import {localDayKey,readingForDate} from '../../product/today';
import {scaledScriptureMetrics} from '../readingScale';
import {Action,Body,Card,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {radius,spacing,type as typography,type Theme} from '../theme';
export function TodayScreen({theme,readingScale=1,onOpenMusic,onOpenPlans,onOpenReader}:{
 theme:Theme;readingScale?:number;onOpenMusic:()=>void;onOpenPlans?:()=>void;onOpenReader:(book:string,chapter:number,verse?:number)=>void
}){
 const db=useSQLiteContext(),repo=useMemo(()=>new SQLiteBibleRepository(db),[db]);
 const [dayKey,setDayKey]=useState(()=>localDayKey(new Date()));
 const reading=useMemo(()=>readingForDate(new Date(Number(dayKey.slice(0,4)),Number(dayKey.slice(5,7))-1,Number(dayKey.slice(8,10)))),[dayKey]);
 const [verse,setVerse]=useState<BibleVerse|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState(false);
 useEffect(()=>{const update=()=>setDayKey(localDayKey(new Date()));const event=AppState.addEventListener('change',state=>{if(state==='active')update();});const id=setInterval(update,60000);return()=>{event.remove();clearInterval(id);};},[]);
 useEffect(()=>{let active=true;setLoading(true);setError(false);void repo.getChapter(reading.book,reading.chapter).then(rows=>{if(active)setVerse(rows.find(v=>v.verse===reading.verse||v.sourceVerseLabel===String(reading.verse))??null);}).catch(()=>{if(active){setVerse(null);setError(true);}}).finally(()=>{if(active)setLoading(false);});return()=>{active=false;};},[repo,reading.book,reading.chapter,reading.verse]);
 const ref=(verse?.bookName??reading.book)+' '+reading.chapter+':'+reading.verse;
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <View style={styles.hero}>
   <View style={[styles.sky,{backgroundColor:theme.raised}]}>
    <View style={[styles.sun,{backgroundColor:theme.amber}]}/><View style={[styles.hillBack,{backgroundColor:theme.border}]}/><View style={[styles.hillFront,{backgroundColor:theme.selectionBg}]}/>
   </View>
   <View style={styles.heroText}><Text style={[typography.display,{color:theme.text,fontFamily:'serif'}]}>Tu lectura puede comenzar aquí.</Text>
    <Body theme={theme} muted>Una pausa para escuchar la Palabra de Dios, sin conexión.</Body>
   </View>
  </View>
  <Card theme={theme} featured label={'Versículo de hoy '+ref}>
   <Metadata theme={theme}>☀ VERSÍCULO DEL DÍA · RV1909 · {reading.category.toUpperCase()}</Metadata>
   <Subhead theme={theme}>{ref}</Subhead>
   {loading?<StatusBanner theme={theme} kind="info">Leyendo la Biblia local…</StatusBanner>:null}
   {error?<StatusBanner theme={theme} kind="error">Lectura local no disponible.</StatusBanner>:null}
   {!loading&&!error&&verse?<Text style={[typography.scripture,scaledScriptureMetrics(readingScale),{color:theme.text,fontFamily:'serif'}]}>{verse.text}</Text>:null}
   {!loading&&!error&&!verse?<StatusBanner theme={theme} kind="info">Sin referencia local para hoy.</StatusBanner>:null}
   <Body theme={theme} muted>{reading.prompt}</Body>
   <Action theme={theme} label={'Continuar lectura · '+ref+' →'} onPress={()=>onOpenReader(reading.book,reading.chapter,reading.verse)}/>
  </Card>
  <Section theme={theme} title="Un camino a tu ritmo">
   <View style={styles.quick}>
    <Card theme={theme}><Subhead theme={theme}>✦ Planes de 7 días</Subhead><Body theme={theme} muted>28 encuentros con RV1909, progreso local y reflexión original.</Body>
     {onOpenPlans?<Action theme={theme} label="Ver planes de lectura" onPress={onOpenPlans}/>:null}
    </Card>
    <Card theme={theme}><Subhead theme={theme}>♫ Música opcional</Subhead><Body theme={theme} muted>Vídeo visible en YouTube o enlace externo; tu Biblia no depende de ellos.</Body>
     <Action theme={theme} variant="secondary" label="Explorar música" onPress={onOpenMusic}/>
    </Card>
   </View>
  </Section>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.lg,paddingBottom:spacing.xxl},hero:{gap:spacing.sm},sky:{height:144,borderRadius:radius.lg,overflow:'hidden',position:'relative'},sun:{position:'absolute',right:84,top:16,width:25,height:25,borderRadius:20,opacity:.65},hillBack:{position:'absolute',bottom:-70,left:-80,width:330,height:150,borderRadius:150,transform:[{rotate:'-12deg'}]},hillFront:{position:'absolute',bottom:-95,right:-60,width:400,height:160,borderRadius:160,transform:[{rotate:'11deg'}]},heroText:{gap:spacing.sm,paddingVertical:spacing.xs},quick:{gap:spacing.md}});

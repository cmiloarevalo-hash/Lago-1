import {useEffect,useMemo,useState} from 'react';
import {AppState,ImageBackground,Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteBibleRepository} from '../../db/sqliteBibleRepository';
import type {BibleVerse} from '../../product/adapters';
import type {VisibleTheme} from '../../product/preferences';
import {localDayKey,readingForDate} from '../../product/today';
import {scaledScriptureMetrics} from '../readingScale';
import {editorialArt} from '../editorialArt';
import {Action,Body,Card,Metadata,Screen,StatusBanner} from '../primitives';
import {radius,spacing,type as typography,type Theme} from '../theme';
type Props={theme:Theme;appearance:VisibleTheme;readingScale?:number;onOpenYouTube:()=>void;onOpenPlans:()=>void;onOpenReader:(book:string,chapter:number,verse?:number)=>void;onOpenExplore:()=>void;onOpenLibrary:()=>void};
export function TodayScreen({theme,appearance,readingScale=1,onOpenYouTube,onOpenPlans,onOpenReader,onOpenExplore,onOpenLibrary}:Props){
 const db=useSQLiteContext(),repo=useMemo(()=>new SQLiteBibleRepository(db),[db]);
 const [dayKey,setDayKey]=useState(()=>localDayKey(new Date()));
 const reading=useMemo(()=>readingForDate(new Date(Number(dayKey.slice(0,4)),Number(dayKey.slice(5,7))-1,Number(dayKey.slice(8,10)))),[dayKey]);
 const [verse,setVerse]=useState<BibleVerse|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState(false);
 useEffect(()=>{const update=()=>setDayKey(localDayKey(new Date()));const sub=AppState.addEventListener('change',s=>{if(s==='active')update();});const timer=setInterval(update,60000);return()=>{sub.remove();clearInterval(timer);};},[]);
 useEffect(()=>{let live=true;setLoading(true);setError(false);void repo.getChapter(reading.book,reading.chapter).then(rows=>{if(live)setVerse(rows.find(v=>v.verse===reading.verse||v.sourceVerseLabel===String(reading.verse))??null);}).catch(()=>{if(live){setVerse(null);setError(true);}}).finally(()=>{if(live)setLoading(false);});return()=>{live=false;};},[repo,reading.book,reading.chapter,reading.verse]);
 const ref=(verse?.bookName??reading.book)+' '+reading.chapter+':'+reading.verse;
 const art=editorialArt(appearance);
 const quick=[{key:'planes',icon:'▤',title:'Planes',description:'A tu ritmo',tint:'#FCEEF1',onPress:onOpenPlans},{key:'buscar',icon:'⌕',title:'Explorar',description:'Palabras y temas',tint:'#E9F3FB',onPress:onOpenExplore},{key:'musica',icon:'♫',title:'YouTube',description:'Vídeo visible',tint:'#E7F0E9',onPress:onOpenYouTube},{key:'favoritos',icon:'♡',title:'Biblioteca',description:'Tus guardados',tint:'#FFF0D8',onPress:onOpenLibrary}];
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <ImageBackground accessibilityIgnoresInvertColors source={art.landscape} resizeMode="cover" imageStyle={styles.heroImage} style={styles.hero}>
   <View style={styles.heroScrim}/>
   <View style={styles.heroCopy}>
    <Text style={[styles.kicker,{color:theme.primaryText}]}>LA U · UN MOMENTO PARA TI</Text>
    <Text accessibilityRole="header" style={[styles.heroTitle,{color:theme.text}]}>Qué bueno que estás aquí.</Text>
    <Text style={[styles.heroSubtitle,{color:theme.secondary}]}>Una pausa para que la Palabra ilumine tu día.</Text>
   </View>
  </ImageBackground>
  <View style={styles.overlap}>
   <Card theme={theme} featured label={'Versículo de hoy '+ref}>
    <View style={styles.verseTop}><Text style={[styles.tinyKicker,{color:theme.primaryText}]}>☀  VERSÍCULO DEL DÍA</Text><Metadata theme={theme}>{ref} · RV1909</Metadata></View>
    <View style={styles.verseReading}>
     {loading?<Body theme={theme} muted>Consultando la Biblia local…</Body>:null}
     {error?<StatusBanner theme={theme} kind="error">Lectura local no disponible.</StatusBanner>:null}
     {!loading&&!error&&verse?<Text style={[styles.verse,{color:theme.text},scaledScriptureMetrics(readingScale)]}>“{verse.text}”</Text>:null}
     {!loading&&!error&&!verse?<Body theme={theme} muted>No se encontró este pasaje en el corpus local.</Body>:null}
     <Text style={[styles.verseIcon,{color:theme.primaryText}]} accessibilityElementsHidden>✧</Text>
    </View>
    <ImageBackground source={art.landscape} resizeMode="cover" imageStyle={styles.inlineArt} style={styles.inlineScene}>
     <View style={styles.sceneOverlay}/>
     <Action theme={theme} label={'Continuar lectura  →'} onPress={()=>onOpenReader(reading.book,reading.chapter,reading.verse)}/>
    </ImageBackground>
   </Card>
  </View>
  <View style={styles.quickRow}>{quick.map(item=><Pressable key={item.key} accessibilityRole="button" accessibilityLabel={item.title+' · '+item.description} onPress={item.onPress} style={({pressed})=>[styles.quickTile,{backgroundColor:item.tint,opacity:pressed?.8:1}]}>
   <Text style={[styles.quickIcon,{color:item.key==='musica'?'#256844':item.key==='buscar'?'#246694':item.key==='favoritos'?'#A36A1B':theme.primaryText}]}>{item.icon}</Text>
   <Text style={styles.quickLabel}>{item.title}</Text>
  </Pressable>)}</View>
  <View style={styles.sectionTitle}><Text style={[styles.sectionHeading,{color:theme.text}]}>Para ti hoy</Text><Text style={[typography.metadata,{color:theme.secondary}]}>Acompaña tu camino</Text></View>
  <Pressable accessibilityRole="button" accessibilityLabel="Comenzar un plan de lectura" onPress={onOpenPlans} style={[styles.recommendation,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <View style={[styles.recoSymbol,{backgroundColor:theme.selectionBg}]}><Text style={[styles.recoIcon,{color:theme.primaryText}]}>❧</Text></View><View style={styles.recoCopy}><Text style={[styles.recoTitle,{color:theme.text}]}>Un camino de siete días</Text><Text style={[typography.metadata,{color:theme.secondary}]}>Lecturas y reflexiones con progreso local.</Text></View><Text style={[styles.arrow,{color:theme.primaryText}]}>›</Text>
  </Pressable>
  <Pressable accessibilityRole="button" accessibilityLabel="Explorar pasajes y temas" onPress={onOpenExplore} style={[styles.recommendation,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <View style={[styles.recoSymbol,{backgroundColor:theme.surfaceSoft}]}><Text style={[styles.recoIcon,{color:theme.primaryText}]}>☼</Text></View><View style={styles.recoCopy}><Text style={[styles.recoTitle,{color:theme.text}]}>Encuentra tu próximo pasaje</Text><Text style={[typography.metadata,{color:theme.secondary}]}>100 temas y búsqueda literal separados.</Text></View><Text style={[styles.arrow,{color:theme.primaryText}]}>›</Text>
  </Pressable>
  <Metadata theme={theme}>La lectura RV1909 y tus notas funcionan sin conexión.</Metadata>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:spacing.xxxl+12},
 hero:{height:238,borderRadius:radius.lg,overflow:'hidden',justifyContent:'flex-start'},
 heroImage:{borderRadius:radius.lg},heroScrim:{...StyleSheet.absoluteFill,backgroundColor:'rgba(255,249,241,0.21)'},
 heroCopy:{paddingHorizontal:22,paddingTop:20,maxWidth:330,gap:7},
 kicker:{fontSize:11,fontWeight:'800',letterSpacing:1.35},
 heroTitle:{fontSize:31,lineHeight:36,fontFamily:'serif',fontWeight:'700',maxWidth:260},
 heroSubtitle:{fontSize:15,lineHeight:21,maxWidth:254},
 overlap:{marginTop:-65,marginHorizontal:8},
 verseTop:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',gap:6,alignItems:'center'},
 tinyKicker:{fontSize:12,fontWeight:'700',letterSpacing:.4},
 verseReading:{flexDirection:'row',alignItems:'flex-start',gap:6,paddingTop:10,paddingBottom:2},
 verse:{fontFamily:'serif',fontStyle:'italic',fontSize:21,lineHeight:32,flex:1},
 verseIcon:{fontSize:24,paddingTop:10},
 inlineScene:{height:146,borderRadius:radius.lg,overflow:'hidden',justifyContent:'flex-end',padding:14},
 inlineArt:{borderRadius:radius.lg},sceneOverlay:{...StyleSheet.absoluteFill,backgroundColor:'rgba(34,35,35,0.15)'},
 quickRow:{flexDirection:'row',gap:8,justifyContent:'space-between'},
 quickTile:{flex:1,minHeight:90,borderRadius:18,alignItems:'center',justifyContent:'center',padding:5,gap:5},
 quickIcon:{fontSize:27,lineHeight:32},quickLabel:{fontSize:12,fontWeight:'700',color:'#26323A',textAlign:'center'},
 sectionTitle:{flexDirection:'row',flexWrap:'wrap',alignItems:'baseline',justifyContent:'space-between',gap:6,marginTop:10},
 sectionHeading:{fontFamily:'serif',fontSize:24,fontWeight:'700'},
 recommendation:{minHeight:84,borderWidth:.7,borderRadius:20,flexDirection:'row',alignItems:'center',gap:12,padding:12,elevation:2},
 recoSymbol:{height:58,width:58,borderRadius:16,alignItems:'center',justifyContent:'center'},recoIcon:{fontSize:30},
 recoCopy:{flex:1,gap:4},recoTitle:{fontFamily:'serif',fontSize:17,fontWeight:'700'},arrow:{fontSize:26}
});

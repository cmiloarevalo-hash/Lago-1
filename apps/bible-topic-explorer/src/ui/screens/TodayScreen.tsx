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
type Props={theme:Theme;appearance:VisibleTheme;readingScale?:number;onOpenSoundCloud:()=>void;onOpenAbout:()=>void;onOpenPlans:()=>void;onOpenReader:(book:string,chapter:number,verse?:number)=>void;onOpenExplore:()=>void;onOpenLibrary:()=>void};
export function TodayScreen({theme,appearance,readingScale=1,onOpenSoundCloud,onOpenAbout,onOpenPlans,onOpenReader,onOpenExplore,onOpenLibrary}:Props){
 const db=useSQLiteContext(),repo=useMemo(()=>new SQLiteBibleRepository(db),[db]);
 const [dayKey,setDayKey]=useState(()=>localDayKey(new Date()));
 const reading=useMemo(()=>readingForDate(new Date(Number(dayKey.slice(0,4)),Number(dayKey.slice(5,7))-1,Number(dayKey.slice(8,10)))),[dayKey]);
 const [verse,setVerse]=useState<BibleVerse|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState(false);
 useEffect(()=>{const update=()=>setDayKey(localDayKey(new Date()));const sub=AppState.addEventListener('change',s=>{if(s==='active')update();});const timer=setInterval(update,60000);return()=>{sub.remove();clearInterval(timer);};},[]);
 useEffect(()=>{let live=true;setLoading(true);setError(false);void repo.getChapter(reading.book,reading.chapter).then(rows=>{if(live)setVerse(rows.find(v=>v.verse===reading.verse||v.sourceVerseLabel===String(reading.verse))??null);}).catch(()=>{if(live){setVerse(null);setError(true);}}).finally(()=>{if(live)setLoading(false);});return()=>{live=false;};},[repo,reading.book,reading.chapter,reading.verse]);
 const ref=(verse?.bookName??reading.book)+' '+reading.chapter+':'+reading.verse;
 const art=editorialArt(appearance);
 const tiles=appearance==='coral'?['#FCE3EB','#E5EEF9','#E6F0E8','#FCEDD5']:appearance==='natural'?['#EFE8D9','#E6EFF7','#DCECDD','#F4E6CA']:['#DEEAF6','#E6F0F9','#E7F1EC','#F7E9D3'];
 const quick=[{key:'planes',icon:'▣',title:'Planes',description:'A tu ritmo',tint:tiles[0],onPress:onOpenPlans},{key:'buscar',icon:'⌕',title:'Explorar',description:'100 temas',tint:tiles[1],onPress:onOpenExplore},{key:'musica',icon:'♫',title:'SoundCloud',description:'Música oficial',tint:tiles[2],onPress:onOpenSoundCloud},{key:'favoritos',icon:'♥',title:'Biblioteca',description:'Tus guardados',tint:tiles[3],onPress:onOpenLibrary}];
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Pressable accessibilityRole="link" accessibilityLabel="Prototipo creado con apoyo de IA y estudios. Ver bibliografía y créditos." onPress={onOpenAbout} style={styles.prototypeNote}>
   <Text style={[styles.prototypeText,{color:theme.secondary}]}>ⓘ  Prototipo con apoyo de IA y estudios</Text>
   <Text style={[styles.prototypeLink,{color:theme.primaryText}]}>Fuentes ↗</Text>
  </Pressable>
  <ImageBackground accessibilityIgnoresInvertColors source={art.landscape} resizeMode="cover" imageStyle={styles.heroImage} style={[styles.hero,{borderColor:theme.border}]}>
   <View style={[styles.heroScrim,{backgroundColor:appearance==='coral'?'rgba(255,248,247,.13)':appearance==='natural'?'rgba(245,242,224,.09)':'rgba(235,242,249,.08)'}]}/>
   <View style={styles.heroCopy}>
    <Text style={[styles.kicker,{color:theme.primaryText}]}>LA U · UN MOMENTO PARA TI</Text>
    <Text accessibilityRole="header" style={[styles.heroTitle,{color:theme.text}]}>Qué bueno que estás aquí.</Text>
    <Text style={[styles.heroSubtitle,{color:theme.text}]}>Una pausa para que la Palabra ilumine tu día.</Text>
   </View>
  </ImageBackground>
  <View style={[styles.overlap,{shadowColor:theme.primary}]}>
   <Card theme={theme} featured label={'Versículo de hoy '+ref}>
    <View style={styles.verseTop}><Text style={[styles.tinyKicker,{color:theme.primaryText}]}>☀  VERSÍCULO DEL DÍA</Text><Metadata theme={theme}>{ref} · RV1909</Metadata></View>
    <View style={styles.verseReading}>
     {loading?<Body theme={theme} muted>Consultando la Biblia local…</Body>:null}
     {error?<StatusBanner theme={theme} kind="error">Lectura local no disponible.</StatusBanner>:null}
     {!loading&&!error&&verse?<Text style={[styles.verse,{color:theme.text},scaledScriptureMetrics(readingScale),verse.text.length>140&&readingScale<=1.05?styles.longVerse:null]}>“{verse.text}”</Text>:null}
     {!loading&&!error&&!verse?<Body theme={theme} muted>No se encontró este pasaje en el corpus local.</Body>:null}
     <Text style={[styles.verseIcon,{color:theme.primaryText}]} accessibilityElementsHidden>♡</Text>
    </View>
    <ImageBackground source={art.landscape} resizeMode="cover" imageStyle={styles.inlineArt} style={styles.inlineScene}>
     <View style={[styles.sceneOverlay,{backgroundColor:'rgba(20,26,32,0.12)'}]}/>
     <Action theme={theme} label={'Continuar lectura  →'} onPress={()=>onOpenReader(reading.book,reading.chapter,reading.verse)}/>
    </ImageBackground>
   </Card>
  </View>
  <View style={styles.quickRow}>{quick.map(item=><Pressable key={item.key} accessibilityRole="button" accessibilityLabel={item.title+' · '+item.description} onPress={item.onPress} style={({pressed})=>[styles.quickTile,{backgroundColor:item.tint,borderColor:appearance==='marine'?'#D2DDE8':appearance==='natural'?'#D1D8C3':'#EBD3DB',opacity:pressed?.8:1}]}>
   <Text style={[styles.quickIcon,{color:item.key==='musica'?'#E35B12':item.key==='buscar'?'#235C88':item.key==='favoritos'?'#9B721C':theme.primaryText}]}>{item.icon}</Text>
   <Text style={styles.quickLabel}>{item.title}</Text>
  </Pressable>)}</View>
  <View style={styles.sectionTitle}><Text style={[styles.sectionHeading,{color:theme.text}]}>Para ti hoy</Text><Text style={[typography.metadata,{color:theme.secondary}]}>Acompaña tu camino</Text></View>
  <Pressable accessibilityRole="button" accessibilityLabel="Comenzar un plan de lectura" onPress={onOpenPlans} style={[styles.recommendation,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <View style={[styles.recoSymbol,{backgroundColor:theme.selectionBg}]}><Text style={[styles.recoIcon,{color:theme.primaryText}]}>❧</Text></View><View style={styles.recoCopy}><Text style={[styles.recoTitle,{color:theme.text}]}>Un camino de siete días</Text><Text style={[typography.metadata,{color:theme.secondary}]}>Lecturas y reflexiones con progreso local.</Text></View><Text style={[styles.arrow,{color:theme.primaryText}]}>›</Text>
  </Pressable>
  <Pressable accessibilityRole="button" accessibilityLabel="Explorar pasajes y temas" onPress={onOpenExplore} style={[styles.recommendation,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <View style={[styles.recoSymbol,{backgroundColor:theme.surfaceSoft}]}><Text style={[styles.recoIcon,{color:theme.primaryText}]}>☼</Text></View><View style={styles.recoCopy}><Text style={[styles.recoTitle,{color:theme.text}]}>Encuentra tu próximo pasaje</Text><Text style={[typography.metadata,{color:theme.secondary}]}>100 temas para explorar la Palabra.</Text></View><Text style={[styles.arrow,{color:theme.primaryText}]}>›</Text>
  </Pressable>
  <Metadata theme={theme}>La lectura RV1909 y tus notas funcionan sin conexión.</Metadata>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:spacing.xxxl+12},
 prototypeNote:{minHeight:48,paddingHorizontal:2,flexDirection:'row',alignItems:'center',flexWrap:'wrap',justifyContent:'space-between',gap:6},
 prototypeText:{fontSize:12,lineHeight:18},prototypeLink:{fontSize:12,fontWeight:'700'},
 hero:{height:214,borderRadius:radius.lg,borderWidth:.6,overflow:'hidden',justifyContent:'flex-start'},
 heroImage:{borderRadius:radius.lg},heroScrim:{...StyleSheet.absoluteFill,backgroundColor:'rgba(255,249,241,0.21)'},
 heroCopy:{paddingHorizontal:19,paddingTop:18,maxWidth:290,gap:7},
 kicker:{fontSize:11,fontWeight:'800',letterSpacing:1.35},
 heroTitle:{fontSize:30,lineHeight:35,fontFamily:'serif',fontWeight:'700',maxWidth:255},
 heroSubtitle:{fontSize:14,lineHeight:20,maxWidth:238,fontWeight:'500',alignSelf:'flex-start',backgroundColor:'rgba(255,251,247,.68)',borderRadius:10,paddingHorizontal:5,paddingVertical:2},
 overlap:{marginTop:-54,marginHorizontal:5,elevation:5,shadowOffset:{width:0,height:5},shadowOpacity:.12,shadowRadius:12},
 verseTop:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',gap:6,alignItems:'center'},
 tinyKicker:{fontSize:12,fontWeight:'700',letterSpacing:.4},
 verseReading:{flexDirection:'row',alignItems:'flex-start',gap:5,paddingTop:6,paddingBottom:0},
 verse:{fontFamily:'serif',fontStyle:'italic',fontSize:20,lineHeight:30,flex:1},longVerse:{fontSize:18,lineHeight:27},
 verseIcon:{fontSize:24,paddingTop:10},
 inlineScene:{height:110,borderRadius:radius.lg,overflow:'hidden',justifyContent:'flex-end',padding:11},
 inlineArt:{borderRadius:radius.lg},sceneOverlay:{...StyleSheet.absoluteFill,backgroundColor:'rgba(34,35,35,0.15)'},
 quickRow:{flexDirection:'row',gap:8,justifyContent:'space-between'},
 quickTile:{flex:1,minHeight:80,borderWidth:.7,borderRadius:18,alignItems:'center',justifyContent:'center',padding:4,gap:4},
 quickIcon:{fontSize:26,lineHeight:31},quickLabel:{fontSize:12,fontWeight:'700',color:'#26323A',textAlign:'center'},
 sectionTitle:{flexDirection:'row',flexWrap:'wrap',alignItems:'baseline',justifyContent:'space-between',gap:6,marginTop:10},
 sectionHeading:{fontFamily:'serif',fontSize:24,fontWeight:'700'},
 recommendation:{minHeight:76,borderWidth:.7,borderRadius:18,flexDirection:'row',alignItems:'center',gap:12,padding:11,elevation:3,shadowColor:'#273441',shadowOffset:{width:0,height:3},shadowOpacity:.10,shadowRadius:6},
 recoSymbol:{height:58,width:58,borderRadius:16,alignItems:'center',justifyContent:'center'},recoIcon:{fontSize:30},
 recoCopy:{flex:1,gap:4},recoTitle:{fontFamily:'serif',fontSize:17,fontWeight:'700'},arrow:{fontSize:26}
});

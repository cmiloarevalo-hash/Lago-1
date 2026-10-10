import {useRef,useState} from 'react';
import {Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {activityCategories,activityGuides,type ActivityCategory} from '../../product/pastoralActivities';
import {GroupIllustration} from '../illustrations/GroupIllustration';
import {Action,Body,ChoiceChip,Metadata,Screen,ScreenTitle} from '../primitives';
import {minimumTouchTarget,spacing,type Theme} from '../theme';

function ActivityMetric({icon,value,label,theme}:{icon:string;value:string;label:string;theme:Theme}){
 return <View style={[styles.metric,{backgroundColor:theme.surfaceSoft}]}>
  <Text accessibilityElementsHidden style={[styles.metricIcon,{color:theme.primaryText}]}>{icon}</Text>
  <Text style={[styles.metricValue,{color:theme.text}]}>{value}</Text>
  <Text style={[styles.metricLabel,{color:theme.secondary}]}>{label}</Text>
 </View>;
}
export function ActivitiesScreen({theme,guideId,onSelect,onBack,onPlay,restoreY=0,onScrollY=()=>{}}:{theme:Theme;guideId?:string;onSelect:(id:string)=>void;onBack:()=>void;onPlay?:()=>void;restoreY?:number;onScrollY?:(y:number)=>void}){
 const [category,setCategory]=useState<ActivityCategory|'Todas'>('Todas');
 const [showCare,setShowCare]=useState(false);
 const selected=activityGuides.find(x=>x.id===guideId);
 const scrollRef=useRef<ScrollView>(null);
 const restored=useRef(!!selected||restoreY===0);
 const y=useRef(restoreY);
 const filtered=activityGuides.filter(x=>category==='Todas'||x.category===category);
 const goTo=(id:string)=>{onScrollY(y.current);onSelect(id);};
 return <Screen theme={theme}><ScrollView ref={scrollRef} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.stack}
  scrollEventThrottle={64} onScroll={e=>{if(!selected&&restored.current){y.current=e.nativeEvent.contentOffset.y;onScrollY(y.current);}}}
  onContentSizeChange={()=>{if(!restored.current&&!selected){scrollRef.current?.scrollTo({y:restoreY,animated:false});restored.current=true;}}}>
  <Action theme={theme} variant="tertiary" label={selected?'← Volver a dinámicas':'← Volver al menú'} onPress={onBack}/>
  {selected?<View style={styles.detail}>
   <Text style={[styles.title,{color:theme.text}]} accessibilityRole="header">{selected.title}</Text>
   <Text style={[styles.intro,{color:theme.secondary}]}>{selected.goal}</Text>
   <View style={styles.metrics}>
    <ActivityMetric icon="👥" value={selected.groupSize} label="personas" theme={theme}/>
    <ActivityMetric icon="◷" value={String(selected.minutes)} label="minutos" theme={theme}/>
    <ActivityMetric icon="✦" value="12+" label="edad sugerida" theme={theme}/>
   </View>
   <GroupIllustration/>
   <View style={styles.chapter}>
    <Text style={[styles.subhead,{color:theme.text}]}>Cómo hacerlo</Text>
    {selected.steps.map((step,i)=><View key={i} style={styles.step}>
      <View style={styles.index}><Text style={styles.indexText}>{i+1}</Text></View>
      <View style={{flex:1}}><Text style={[styles.stepCopy,{color:theme.text}]}>{step}</Text></View>
     </View>)}
   </View>
   <View style={[styles.tinySection,{backgroundColor:theme.surface,borderColor:theme.border}]}>
    <View style={styles.noteLine}><Text style={styles.noteIcon}>▣</Text><Text style={[styles.noteTitle,{color:theme.text}]}>Materiales</Text></View>
    <Body theme={theme}>{selected.materials}</Body>
   </View>
   <View style={[styles.tinySection,{backgroundColor:theme.surface,borderColor:theme.border}]}>
    <View style={styles.noteLine}><Text style={styles.noteIcon}>☼</Text><Text style={[styles.noteTitle,{color:theme.text}]}>Para conversar</Text></View>
    <Body theme={theme}>{selected.debrief}</Body>
   </View>
   <Pressable accessibilityRole="button" accessibilityLabel={showCare?'Ocultar recomendaciones de cuidado':'Ver recomendaciones de cuidado'} accessibilityState={{expanded:showCare}}
    onPress={()=>setShowCare(v=>!v)} style={styles.careButton}>
     <Text style={[styles.careLink,{color:theme.primaryText}]}>ⓘ  {showCare?'Ocultar indicaciones':'Cuidado y accesibilidad'}  {showCare?'⌃':'⌄'}</Text>
   </Pressable>
   {showCare?<View style={[styles.carePanel,{backgroundColor:theme.surfaceSoft}]}>
    <Body theme={theme}>{selected.safety} Participar es voluntario: permite respuesta escrita, sentada o por voz. Con menores, dos adultos responsables y protocolos locales de protección.</Body>
   </View>:null}
  </View>:<>
   <ScreenTitle theme={theme}>Dinámicas pastorales</ScreenTitle>
   <Body theme={theme} muted>Encuentros sencillos para reunir, compartir y aprender.</Body>
   <View style={styles.introArt}><GroupIllustration/></View>
   <View style={styles.summary}>
    <ActivityMetric icon="👥" value="20" label="dinámicas" theme={theme}/>
    <ActivityMetric icon="◷" value="10–25" label="minutos aprox." theme={theme}/>
    <ActivityMetric icon="✦" value="12+" label="edad sugerida" theme={theme}/>
   </View>
   {onPlay?<Pressable accessibilityRole="button" accessibilityLabel="Jugar trivia, verdadero/falso y ordenar versículos" onPress={onPlay} style={[styles.gameRow,{backgroundColor:theme.surface,borderColor:theme.border}]}>
    <Text style={[styles.gameIcon,{color:theme.primaryText}]}>◇</Text><View style={{flex:1}}><Text style={[styles.rowTitle,{color:theme.text}]}>Juegos bíblicos</Text><Text style={[styles.rowSubtitle,{color:theme.secondary}]}>Trivia · Verdadero/Falso · Ordenar versículos</Text></View><Text style={[styles.arrow,{color:theme.primaryText}]}>›</Text>
   </Pressable>:null}
   <Text style={[styles.subhead,{color:theme.text}]}>Elige una dinámica</Text>
   <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>{(['Todas',...activityCategories] as const).map(c=><ChoiceChip key={c} theme={theme} label={c} selected={category===c} onPress={()=>setCategory(c)}/>)}</ScrollView>
   <View style={styles.list}>{filtered.map((item,i)=><Pressable key={item.id} accessibilityRole="button" accessibilityLabel={'Abrir guía '+item.title+', '+item.groupSize+' personas, '+item.minutes+' minutos'} onPress={()=>goTo(item.id)}
    style={({pressed})=>[styles.listRow,{backgroundColor:pressed?theme.surfaceSoft:theme.surface,borderColor:theme.border}]}>
     <View style={[styles.listIndex,{backgroundColor:theme.selectionBg}]}><Text style={[styles.listIndexText,{color:theme.primaryText}]}>{i+1}</Text></View>
     <View style={styles.listCopy}><Text style={[styles.rowTitle,{color:theme.text}]}>{item.title}</Text><Text style={[styles.rowSubtitle,{color:theme.secondary}]}>{item.goal}</Text>
      <Text style={[styles.rowNumbers,{color:theme.primaryText}]}>👥 {item.groupSize} personas    ◷ {item.minutes} min</Text>
     </View><Text style={[styles.arrow,{color:theme.primaryText}]}>›</Text>
    </Pressable>)}</View>
   <Pressable accessibilityRole="button" accessibilityLabel={showCare?'Ocultar información de prototipo':'Información de prototipo'} onPress={()=>setShowCare(x=>!x)} style={styles.careButton}><Text style={[styles.careLink,{color:theme.secondary}]}>ⓘ  {showCare?'Ocultar información':'Guías en revisión editorial'}</Text></Pressable>
   {showCare?<Body theme={theme} muted>Estas propuestas originales son un prototipo para orientar facilitadores, no sustituyen formación ni protocolos de protección y todavía requieren revisión humana.</Body>:null}
  </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:48},
 title:{fontSize:30,lineHeight:37,fontFamily:'serif',fontWeight:'700'},
 intro:{fontSize:16,lineHeight:24},introArt:{marginVertical:1},
 detail:{gap:spacing.md},metrics:{flexDirection:'row',gap:8},
 metric:{flex:1,minWidth:0,minHeight:95,borderRadius:14,alignItems:'center',justifyContent:'center',padding:6,gap:2},
 metricIcon:{fontSize:23,lineHeight:27,fontWeight:'700'},
 metricValue:{fontSize:18,fontWeight:'800'},
 metricLabel:{fontSize:11,textAlign:'center'},
 chapter:{gap:12,marginVertical:4},subhead:{fontSize:23,fontFamily:'serif',fontWeight:'700',marginTop:8},
 step:{flexDirection:'row',alignItems:'flex-start',gap:11,minHeight:52},
 index:{width:38,height:38,borderRadius:19,backgroundColor:'#FDE1C1',justifyContent:'center',alignItems:'center'},
 indexText:{fontSize:18,color:'#B95119',fontWeight:'800'},
 stepCopy:{fontSize:16,lineHeight:24,paddingTop:5},
 tinySection:{padding:16,borderRadius:17,borderWidth:.6,gap:6},
 noteLine:{flexDirection:'row',alignItems:'center',gap:9},
 noteIcon:{fontSize:22,color:'#27678D'},noteTitle:{fontSize:18,fontFamily:'serif',fontWeight:'700'},
 careButton:{minHeight:minimumTouchTarget,justifyContent:'center'},
 careLink:{fontSize:13,fontWeight:'600'},
 carePanel:{padding:12,borderRadius:13},
 summary:{flexDirection:'row',gap:8},
 gameRow:{flexDirection:'row',alignItems:'center',gap:12,padding:15,borderWidth:.6,borderRadius:18,minHeight:80},
 gameIcon:{fontSize:28},
 filters:{gap:7,paddingVertical:4,paddingRight:20},
 list:{gap:9},
 listRow:{flexDirection:'row',gap:11,borderWidth:.7,borderRadius:17,padding:13,alignItems:'center',minHeight:92},
 listIndex:{height:41,width:41,borderRadius:21,alignItems:'center',justifyContent:'center'},
 listIndexText:{fontWeight:'800',fontSize:19},
 listCopy:{flex:1,gap:4},
 rowTitle:{fontSize:18,fontFamily:'serif',fontWeight:'700'},
 rowSubtitle:{fontSize:13,lineHeight:19},rowNumbers:{fontSize:12,fontWeight:'700'},
 arrow:{fontSize:24}
});

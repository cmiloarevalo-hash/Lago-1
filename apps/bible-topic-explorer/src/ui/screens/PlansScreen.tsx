import {useCallback,useEffect,useMemo,useState} from 'react';
import {Alert,Image,ImageBackground,Pressable,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {readingPlans,planById} from '../../product/readingPlans';
import {SQLitePlanRepository} from '../../db/sqlitePlanRepository';
import type {VisibleTheme} from '../../product/preferences';
import {editorialArt} from '../editorialArt';
import {Action,Body,Card,ChoiceChip,Metadata,Screen,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,type Theme} from '../theme';
type Props={theme:Theme;appearance:VisibleTheme;planId?:string;day?:number;onSelect:(id:string,day?:number)=>void;onBack:()=>void;onRead:(book:string,chapter:number,start:number,end:number)=>void};
export function PlansScreen({theme,appearance,planId,day,onSelect,onBack,onRead}:Props){
 const db=useSQLiteContext(),repo=useMemo(()=>new SQLitePlanRepository(db),[db]);
 const [filter,setFilter]=useState('Todos'),[rows,setRows]=useState<readonly {day:number;done:boolean;note:string}[]>([]);
 const [note,setNote]=useState(''),[error,setError]=useState(''),[saving,setSaving]=useState(false);
 const plan=planById(planId??''),entry=plan?.days.find(d=>d.day===day);
 const art=editorialArt(appearance);
 const refresh=useCallback(()=>{if(!planId){setRows([]);return;}void repo.list(planId).then(setRows).catch(()=>setError('No fue posible leer el avance local.'));},[repo,planId]);
 useEffect(()=>{refresh();},[refresh]);
 useEffect(()=>{setNote(rows.find(r=>r.day===day)?.note??'');},[day,rows]);
 const done=rows.filter(r=>r.done).length;
 const nextDay=plan?.days.find(d=>!rows.some(r=>r.day===d.day&&r.done))?.day??7;
 const save=async(complete?:boolean)=>{if(!plan||!entry||saving)return;setSaving(true);setError('');try{await repo.save(plan.id,entry.day,complete??Boolean(rows.find(r=>r.day===entry.day)?.done),note);refresh();}catch{setError('No se pudo guardar. Las notas anteriores permanecen intactas.');}finally{setSaving(false);}};
 const reset=()=>{if(!plan)return;Alert.alert('Reiniciar avance de este plan','Solo se quitarán las marcas de progreso; tus notas privadas se conservarán.',[{text:'Cancelar',style:'cancel'},{text:'Reiniciar progreso',style:'destructive',onPress:()=>{void repo.resetProgress(plan.id).then(refresh).catch(()=>setError('No se pudo reiniciar.'));}}]);};
 const introTitle='Planes de lectura';
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack} keyboardShouldPersistTaps="handled">
  <Action theme={theme} variant="tertiary" label={entry?'← Volver al plan':plan?'← Todos los planes':'← Volver'} onPress={onBack}/>
  <View style={styles.header}><Text accessibilityRole="header" style={[styles.pageTitle,{color:theme.text}]}>{introTitle}</Text><Metadata theme={theme}>Un encuentro con la Palabra · RV1909</Metadata></View>
  {error?<StatusBanner theme={theme} kind="error">{error}</StatusBanner>:null}
  {!plan?<><View style={styles.filterRow}>{['Todos','Evangelios','Servicio','Reflexión','Oración'].map(v=><ChoiceChip key={v} theme={theme} label={v} selected={filter===v} onPress={()=>setFilter(v)}/>)}</View>
   {readingPlans.filter(p=>filter==='Todos'||p.theme===filter).map((p,index)=><View key={p.id} style={[styles.planCard,{backgroundColor:theme.surface,borderColor:theme.border}]}>
    <ImageBackground source={art.book} resizeMode="cover" style={styles.planImage} imageStyle={styles.topCorners}>
     <Image source={art.botanical} accessibilityIgnoresInvertColors style={styles.bookLeaves}/><View style={[styles.highlightPill,{backgroundColor:'rgba(255,255,255,0.91)'}]}><Text style={[styles.pillText,{color:theme.primaryText}]}>{index===0?'✦ DESTACADO':'✧ 7 DÍAS'}</Text></View>
    </ImageBackground>
    <View style={styles.planText}><Text style={[styles.planTitle,{color:theme.text}]}>{p.title}</Text><Body theme={theme} muted>{p.intro}</Body>
     <Text style={[styles.caption,{color:theme.secondary}]}>7 lecturas · texto original en revisión editorial</Text>
     <Action theme={theme} label={'Comenzar plan  →'} onPress={()=>onSelect(p.id)}/>
    </View>
   </View>)}
  </>:<>
   <ImageBackground source={art.book} resizeMode="cover" style={[styles.selectedHero,{borderColor:theme.border}]} imageStyle={styles.roundImage}>
    <View style={styles.heroTint}/><Image source={art.botanical} accessibilityIgnoresInvertColors style={styles.selectedLeaves}/>
    <View style={styles.selectedHeroText}><Text style={[styles.heroKicker,{color:theme.primaryText}]}>PLAN DE SIETE DÍAS</Text><Text style={[styles.selectedTitle,{color:theme.text}]}>{plan.title}</Text></View>
   </ImageBackground>
   <View style={[styles.progressPanel,{backgroundColor:theme.surface,borderColor:theme.border,shadowColor:theme.primary}]}>
    <View style={styles.progressHeading}><Text style={[styles.captionStrong,{color:theme.text}]}>Tu progreso</Text><Text style={[styles.caption,{color:theme.secondary}]}>{done} de 7 días</Text></View>
    <View accessibilityRole="progressbar" accessibilityValue={{min:0,max:7,now:done}} style={[styles.progressTrack,{backgroundColor:theme.raised}]}><View style={[styles.progressFill,{width:(done/7*100)+'%' as `${number}%`,backgroundColor:theme.primary}]}/></View>
    <View style={styles.dayDots}>{plan.days.map(d=>{const completed=rows.some(r=>r.day===d.day&&r.done);const current=day===d.day||!day&&d.day===nextDay;return <Pressable key={d.day} accessibilityRole="button" accessibilityLabel={'Día '+d.day+(completed?', completado':', pendiente')} accessibilityState={{selected:current}} onPress={()=>onSelect(plan.id,d.day)} style={styles.dotCell}>
      <View style={[styles.dot,{backgroundColor:completed?theme.primary:current?theme.selectionBg:theme.surface,borderColor:current?theme.primary:completed?theme.primary:theme.border}]}><Text style={{color:completed?theme.onPrimary:theme.primaryText,fontWeight:'700'}}>{completed?'✓':current?'●':''}</Text></View><Text style={[styles.dayLabel,{color:theme.secondary}]}>{d.day}</Text>
     </Pressable>;})}</View>
    <Action theme={theme} label={'Continuar · día '+nextDay+'  →'} onPress={()=>onSelect(plan.id,nextDay)}/>
   </View>
   {entry?<View style={styles.entryStack}>
    <View style={[styles.dayReading,{backgroundColor:theme.surface,borderColor:theme.border}]}>
     <Text style={[styles.miniKicker,{color:theme.primaryText}]}>DÍA {entry.day} DE 7 · LECTURA</Text>
     <Text style={[styles.dayTitle,{color:theme.text}]}>{entry.title}</Text>
     <Text style={[styles.caption,{color:theme.secondary}]}>{entry.book} {entry.chapter}:{entry.start}–{entry.end} · RV1909</Text>
     <Action theme={theme} label="Leer pasaje en contexto →" onPress={()=>onRead(entry.book,entry.chapter,entry.start,entry.end)}/>
    </View>
    <Section theme={theme} title="Reflexión"><Body theme={theme}>{entry.reflection}</Body></Section>
    <Section theme={theme} title="Oración libre"><Body theme={theme}>{entry.prayer}</Body></Section>
    <Section theme={theme} title="Un paso para hoy"><Body theme={theme}>{entry.action}</Body></Section>
    <View style={[styles.notesPanel,{backgroundColor:theme.surfaceSoft}]}>
     <Text style={[styles.dayTitle,{color:theme.text}]}>Mis notas privadas</Text>
     <TextInput multiline value={note} onChangeText={setNote} maxLength={5000} placeholder="Escribe lo que quieras conservar…" placeholderTextColor={theme.secondary} accessibilityLabel={'Nota privada del día '+entry.day} style={[styles.noteInput,{color:theme.text,backgroundColor:theme.surface,borderColor:theme.border}]}/>
     <Action theme={theme} label="Guardar mi nota" loading={saving} onPress={()=>{void save();}}/>
     <Action theme={theme} variant="secondary" label={rows.some(r=>r.day===entry.day&&r.done)?'Marcar como pendiente':'Marcar día completado ✓'} loading={saving} onPress={()=>{void save(!rows.some(r=>r.day===entry.day&&r.done));}}/>
    </View>
   </View>:<><View style={styles.sectionHeader}><Text style={[styles.dayTitle,{color:theme.text}]}>Tus siete lecturas</Text><Metadata theme={theme}>Elige un día</Metadata></View>
     <View style={[styles.daysList,{backgroundColor:theme.surface,borderColor:theme.border}]}>{plan.days.map(d=>{const completed=rows.some(r=>r.day===d.day&&r.done);const current=d.day===nextDay;return <Pressable key={d.day} accessibilityRole="button" accessibilityLabel={'Abrir día '+d.day+', '+d.title} onPress={()=>onSelect(plan.id,d.day)} style={({pressed})=>[styles.dayRow,{backgroundColor:current?theme.selectionBg:pressed?theme.surfaceSoft:'transparent'}]}>
      <View style={[styles.dayCircle,{borderColor:theme.border,backgroundColor:completed?theme.primary:theme.surface}]}><Text style={{color:completed?theme.onPrimary:theme.primaryText}}>{completed?'✓':current?'◎':'○'}</Text></View>
      <View style={styles.dayCopy}><Text style={[styles.dayRowTitle,{color:theme.text}]}>Día {d.day} · {d.title}</Text><Text style={[styles.caption,{color:theme.secondary}]}>{d.book} {d.chapter}:{d.start}–{d.end}</Text></View>
      <Text style={[styles.arrow,{color:theme.primaryText}]}>›</Text>
     </Pressable>;})}</View>
     <Action theme={theme} variant="tertiary" label="Reiniciar progreso (sin borrar notas)" onPress={reset}/>
   </>}
   <Metadata theme={theme}>Los pasajes RV1909 son locales. Las reflexiones están pendientes de revisión pastoral.</Metadata>
  </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:16,paddingBottom:38},header:{gap:5},pageTitle:{fontFamily:'serif',fontSize:25,lineHeight:33,fontWeight:'700'},
 filterRow:{flexDirection:'row',flexWrap:'wrap',gap:6},planCard:{borderRadius:22,borderWidth:.7,overflow:'hidden',elevation:5,shadowColor:'#263341',shadowOffset:{width:0,height:5},shadowOpacity:.12,shadowRadius:12},
 planImage:{height:195,padding:14,overflow:'hidden'},topCorners:{borderTopLeftRadius:21,borderTopRightRadius:21},bookLeaves:{position:'absolute',width:124,height:193,right:-25,top:-10,opacity:.82},
 highlightPill:{alignSelf:'flex-start',borderRadius:999,paddingVertical:8,paddingHorizontal:13},pillText:{fontSize:12,fontWeight:'800',letterSpacing:.5},
 planText:{padding:17,gap:12},planTitle:{fontFamily:'serif',fontSize:25,lineHeight:32,fontWeight:'700'},caption:{fontSize:13,lineHeight:19},captionStrong:{fontSize:16,fontWeight:'700'},
 selectedHero:{height:197,borderRadius:20,borderWidth:.6,justifyContent:'flex-end',overflow:'hidden',elevation:4},roundImage:{borderRadius:20},selectedLeaves:{position:'absolute',width:150,height:197,right:-27,bottom:-8,opacity:.84},
 heroTint:{...StyleSheet.absoluteFill,backgroundColor:'rgba(255,249,240,.13)'},selectedHeroText:{padding:17,gap:6,maxWidth:'85%'},
 heroKicker:{fontSize:12,letterSpacing:1,fontWeight:'800'},selectedTitle:{fontFamily:'serif',fontSize:26,lineHeight:33,fontWeight:'700'},
 progressPanel:{borderWidth:.7,borderRadius:20,padding:14,gap:12,elevation:4,shadowOpacity:.12,shadowRadius:10,shadowOffset:{width:0,height:4}},progressHeading:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
 progressTrack:{height:10,borderRadius:8,overflow:'hidden'},progressFill:{height:10,borderRadius:8},
 dayDots:{flexDirection:'row',justifyContent:'space-between'},dotCell:{minHeight:48,flex:1,alignItems:'center',gap:3},
 dot:{width:31,height:31,borderRadius:16,borderWidth:1.7,alignItems:'center',justifyContent:'center'},dayLabel:{fontSize:12},
 entryStack:{gap:18},dayReading:{gap:11,borderWidth:1,borderRadius:20,padding:16},miniKicker:{fontSize:12,fontWeight:'800',letterSpacing:.8},
 dayTitle:{fontFamily:'serif',fontSize:21,lineHeight:27,fontWeight:'700'},notesPanel:{padding:15,borderRadius:20,gap:12},
 noteInput:{borderWidth:1,borderRadius:14,minHeight:138,fontSize:17,lineHeight:25,padding:13,textAlignVertical:'top'},
 sectionHeader:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:5},
 daysList:{borderWidth:1,borderRadius:20,padding:6,gap:2},dayRow:{minHeight:66,borderRadius:15,flexDirection:'row',alignItems:'center',gap:12,padding:8},
 dayCircle:{width:34,height:34,borderRadius:18,borderWidth:1,alignItems:'center',justifyContent:'center'},dayCopy:{flex:1,gap:4},
 dayRowTitle:{fontFamily:'serif',fontSize:16,fontWeight:'700'},arrow:{fontSize:27}
});

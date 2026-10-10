import {useEffect,useMemo,useRef,useState} from 'react';
import {BackHandler,Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {normalizeTopicText,topicCatalog} from '../../product/topics';
import {availablePreview,conceptFamilies,conceptPreviewStats,familyTopics,initialTopicUiState,reviewMessage,topicReviewStatus,type TopicUiState} from '../../product/conceptIndex';
import type {Theme} from '../theme';
import {minimumTouchTarget,spacing} from '../theme';
import {Action,Body,ChoiceChip,Metadata,Screen,ScreenTitle,Section} from '../primitives';

const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const familyGlyphs:Record<string,string>={
 'Dios y fe':'✦','Amor y relaciones':'♡','Perdón y restauración':'❧',
 'Vida interior':'☼','Dificultades y emociones':'◇','Oración y práctica espiritual':'✧',
 'Carácter y conducta':'♧','Decisiones y vida cotidiana':'➜','Biblia y comprensión':'▤',
 'Esperanza y vida cristiana':'✺'
};
const topicGlyphs:Record<string,string>={
 dios:'✦',jesus:'✧',confianza:'◇',amor:'♡',amistad:'♡',familia:'⌂',
 perdon:'❧',paz:'☼',esperanza:'✺',miedo:'◇',ansiedad:'◌',tristeza:'☁',
 soledad:'☾',oracion:'✧',gozo:'☀',paciencia:'◷',decisiones:'➜'
};
const iconFor=(family:string,topicId?:string)=>topicId&&topicGlyphs[topicId]||familyGlyphs[family]||'✦';
const familyLead:Record<string,string>={
 'Dios y fe':'Preguntas sobre creer y confiar',
 'Amor y relaciones':'Amistades, familia y respeto',
 'Perdón y restauración':'Aprender de los errores',
 'Vida interior':'Calma, alegría y esperanza',
 'Dificultades y emociones':'Lo que sentimos también importa',
 'Oración y práctica espiritual':'Espacios para conectar con Dios',
 'Carácter y conducta':'Decisiones que se notan',
 'Decisiones y vida cotidiana':'Lo que vivimos cada día',
 'Biblia y comprensión':'Descubre las historias bíblicas',
 'Esperanza y vida cristiana':'Caminar con fe y esperanza'
};
type OpenReader=(book:string,chapter:number,verse?:number,recordHistory?:boolean,sourceVerseLabel?:string,verseEnd?:number,sourceVerseLabels?:readonly string[])=>void;

export function SearchScreen({theme,onOpenReader,topicUi=initialTopicUiState,onTopicUiChange=()=>{}}:{theme:Theme;onOpenReader:OpenReader;topicUi?:TopicUiState;onTopicUiChange?:(state:TopicUiState)=>void}){
 const [infoOpen,setInfoOpen]=useState(false);
 const scrollRef=useRef<ScrollView>(null);
 const y=useRef(topicUi.scrollY);
 const restore=useRef(topicUi.scrollY>0);
 const restoring=useRef(false);
 const selectedLetter=topicUi.selectedLetter??'A';
 const selectedTopic=useMemo(()=>topicCatalog.find(t=>t.id===topicUi.topicId),[topicUi.topicId]);
 const preview=selectedTopic?availablePreview(selectedTopic.id):undefined;
 const letterTopics=useMemo(()=>topicCatalog.filter(t=>normalizeTopicText(t.label).charAt(0).toUpperCase()===selectedLetter).sort((a,b)=>a.label.localeCompare(b.label,'es')),[selectedLetter]);
 const familyList=useMemo(()=>topicUi.family==='__all__'?letterTopics:topicUi.family?familyTopics(topicUi.family):[],[topicUi.family,letterTopics]);
 const scrollTo=(target:number)=>{
  restoring.current=true;
  scrollRef.current?.scrollTo({y:Math.max(0,target),animated:false});
  requestAnimationFrame(()=>{restoring.current=false;});
 };
 const changeState=(next:TopicUiState)=>{
  y.current=next.scrollY;
  restore.current=next.scrollY>0;
  onTopicUiChange(next);
  requestAnimationFrame(()=>scrollTo(next.scrollY));
 };
 const backTopics=()=>{
  if(topicUi.topicId){changeState({...topicUi,topicId:undefined,scrollY:topicUi.listScrollY??0});return;}
  if(topicUi.family){changeState({...topicUi,family:undefined,topicId:undefined,scrollY:0,listScrollY:0});return;}
 };
 useEffect(()=>{
  const sub=BackHandler.addEventListener('hardwareBackPress',()=>{
   if(topicUi.topicId||topicUi.family){backTopics();return true;}
   return false;
  });
  return()=>sub.remove();
 },[topicUi]);
 useEffect(()=>{
  if(topicUi.scrollY<=0)return;
  restore.current=true;
  const timer=setTimeout(()=>{if(restore.current){scrollTo(topicUi.scrollY);restore.current=false;}},180);
  return()=>clearTimeout(timer);
 },[topicUi.family,topicUi.topicId]);
 const openPassage=(passage:NonNullable<typeof preview>['passages'][number])=>{
  onTopicUiChange({...topicUi,mode:'topics',scrollY:y.current});
  onOpenReader(passage.book,passage.chapter,passage.start,true,passage.sourceVerseLabel,passage.end,passage.sourceVerseLabels);
 };
 return <Screen theme={theme}><ScrollView ref={scrollRef} keyboardShouldPersistTaps="handled"
  contentContainerStyle={styles.stack} scrollEventThrottle={32}
  onScroll={e=>{if(!restoring.current)y.current=e.nativeEvent.contentOffset.y;}}
  onContentSizeChange={()=>{if(restore.current&&topicUi.scrollY>0){scrollTo(topicUi.scrollY);restore.current=false;}}}>
  <View style={styles.intro}><View style={[styles.accent,{backgroundColor:theme.sky}]}/>
   <ScreenTitle theme={theme}>Explorar temas</ScreenTitle>
   <Body theme={theme} muted>Elige lo que te interesa o te preocupa. Encuentra una idea y léela en la Biblia.</Body>
  </View>
  <View style={[styles.infoRow,{borderColor:theme.border}]}>
   <Text style={[styles.count,{color:theme.secondary}]}>{conceptPreviewStats.canonicalTopics} temas · Biblia RV1909</Text>
   <Pressable accessibilityRole="button" accessibilityLabel={infoOpen?'Ocultar información sobre las fichas':'Información sobre las fichas'}
    accessibilityState={{expanded:infoOpen}} onPress={()=>setInfoOpen(v=>!v)}
    style={[styles.infoButton,{borderColor:theme.border,backgroundColor:theme.surfaceSoft}]}>
    <Text style={[styles.infoSymbol,{color:theme.primaryText}]}>ⓘ</Text>
   </Pressable>
  </View>
  {infoOpen?<View style={[styles.infoPanel,{backgroundColor:theme.surfaceSoft}]}>
   <Text style={[styles.infoCopy,{color:theme.text}]}>Las explicaciones son una propuesta y están en revisión. Los pasajes bíblicos se pueden leer en RV1909.</Text>
  </View>:null}
  {topicUi.family?<Action theme={theme} variant="tertiary" label={selectedTopic?'← Volver a los temas':'← Volver a familias'} onPress={backTopics}/>:null}
  {!topicUi.family?<Section theme={theme} title="Elige una familia">
   <View style={styles.familyRows}>{conceptFamilies.map(family=><Pressable key={family}
    accessibilityRole="button" accessibilityLabel={'Explorar '+family} onPress={()=>changeState({...topicUi,mode:'topics',family,topicId:undefined,scrollY:0,listScrollY:0})}
    style={({pressed})=>[styles.row,{backgroundColor:pressed?theme.surfaceSoft:theme.surface,borderColor:theme.border}]}>
    <View style={[styles.iconCircle,{backgroundColor:theme.selectionBg}]}><Text accessibilityElementsHidden style={[styles.icon,{color:theme.primaryText}]}>{iconFor(family)}</Text></View>
    <View style={styles.rowCopy}>
     <Text style={[styles.rowTitle,{color:theme.text}]}>{family}</Text>
     <Text style={[styles.rowDesc,{color:theme.secondary}]}>{familyLead[family]??'Explora este tema'}</Text>
     <Text style={[styles.rowCount,{color:theme.primaryText}]}>{familyTopics(family).length} temas</Text>
    </View><Text accessibilityElementsHidden style={[styles.arrow,{color:theme.primaryText}]}>›</Text>
   </Pressable>)}</View>
   <Action theme={theme} variant="tertiary" label="Ver los 100 temas A–Z" onPress={()=>changeState({...topicUi,mode:'topics',family:'__all__',topicId:undefined,scrollY:0,listScrollY:0})}/>
  </Section>:null}
  {topicUi.family&&!selectedTopic?<Section theme={theme} title={topicUi.family==='__all__'?'Índice A–Z':topicUi.family} description="Toca el tema que quieras descubrir.">
   {topicUi.family==='__all__'?<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.letters}>
    {letters.map(letter=><ChoiceChip key={letter} label={letter} theme={theme} selected={selectedLetter===letter} onPress={()=>changeState({...topicUi,selectedLetter:letter,scrollY:0})}/>)}
   </ScrollView>:null}
   <View style={styles.topicList}>{familyList.map(topic=>{
    const itemPreview=availablePreview(topic.id);
    return <Pressable key={topic.id} accessibilityRole="button" accessibilityLabel={'Ver concepto '+topic.label}
     onPress={()=>changeState({...topicUi,topicId:topic.id,listScrollY:y.current,scrollY:0})}
     style={({pressed})=>[styles.topicRow,{borderColor:theme.border,backgroundColor:pressed?theme.surfaceSoft:theme.surface}]}>
     <View style={[styles.topicIconCircle,{backgroundColor:theme.selectionBg}]}><Text accessibilityElementsHidden style={[styles.topicIcon,{color:theme.primaryText}]}>{iconFor(topic.family,topic.id)}</Text></View>
     <View style={styles.rowCopy}>
      <Text style={[styles.topicTitle,{color:theme.text}]}>{topic.label.charAt(0).toLocaleUpperCase('es')+topic.label.slice(1)}</Text>
      <Text style={[styles.topicSubtitle,{color:theme.secondary}]}>{itemPreview?.subtopic??'Un tema para descubrir'}</Text>
     </View>
     <Text accessibilityElementsHidden style={[styles.arrow,{color:theme.primaryText}]}>›</Text>
    </Pressable>;
   })}</View>
   {!familyList.length?<Body theme={theme} muted>No hay temas para esta letra.</Body>:null}
  </Section>:null}
  {selectedTopic?<Section theme={theme} title={selectedTopic.label.charAt(0).toLocaleUpperCase('es')+selectedTopic.label.slice(1)}>
   <View style={[styles.featured,{backgroundColor:theme.surface,borderColor:theme.border}]}>
    <View style={styles.topicDetailHeader}>
     <View style={[styles.detailIcon,{backgroundColor:theme.selectionBg}]}><Text accessibilityElementsHidden style={[styles.detailIconText,{color:theme.primaryText}]}>{iconFor(selectedTopic.family,selectedTopic.id)}</Text></View>
     <Text style={[styles.familyTag,{color:theme.primaryText}]}>{selectedTopic.family}</Text>
    </View>
    <Text style={[styles.detailHeading,{color:theme.text}]}>{preview?.subtopic??'Algo nuevo por descubrir'}</Text>
    {preview?<Text style={[styles.detailSynopsis,{color:theme.text}]}>{preview.synopsis}</Text>:
     <Text style={[styles.detailSynopsis,{color:theme.secondary}]}>Todavía estamos preparando una explicación sencilla para este tema. Puedes explorar los otros temas mientras tanto.</Text>}
    {infoOpen?<><Metadata theme={theme}>ESTADO EDITORIAL · {topicReviewStatus(selectedTopic.id)}</Metadata><Body theme={theme} muted>{reviewMessage(selectedTopic.id)}</Body></>:null}
    {infoOpen&&preview?.pastoralCaution?<Text style={[styles.editorialFootnote,{color:theme.secondary}]}>ⓘ  Cuidado contextual: {preview.pastoralCaution}</Text>:null}
   </View>
   {preview?<Section theme={theme} title="Léelo en la Biblia">
    <Text style={[styles.passagesIntro,{color:theme.secondary}]}>Dos pasajes para leer y pensar a tu ritmo.</Text>
    {preview.passages.map(passage=><View key={passage.reference} style={[styles.passageCard,{backgroundColor:theme.surface,borderColor:theme.border}]}>
     <View style={styles.passageHead}><View style={[styles.bookIcon,{backgroundColor:theme.surfaceSoft}]}><Text style={[styles.bookGlyph,{color:theme.primaryText}]}>▤</Text></View>
      <Text style={[styles.reference,{color:theme.text}]}>{passage.reference} · RV1909</Text></View>
     <Text style={[styles.passageReason,{color:theme.secondary}]}>{passage.rationale}</Text>
     <Pressable accessibilityRole="button" accessibilityLabel={'Leer '+passage.reference+' en RV1909'} onPress={()=>openPassage(passage)}
      style={[styles.readAction,{borderTopColor:theme.border}]}>
      <Text style={[styles.readText,{color:theme.primaryText}]}>Leer este pasaje</Text><Text style={[styles.readArrow,{color:theme.primaryText}]}>›</Text>
     </Pressable>
    </View>)}
   </Section>:<Body theme={theme} muted>Los pasajes de este tema todavía se están preparando.</Body>}
  </Section>:null}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:spacing.xxl},intro:{gap:spacing.xs},
 accent:{width:36,height:4,borderRadius:4},infoRow:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottomWidth:.7,paddingBottom:5},
 count:{fontSize:12.5,fontWeight:'600'},infoButton:{height:48,width:48,borderWidth:.7,borderRadius:24,alignItems:'center',justifyContent:'center'},
 infoSymbol:{fontSize:24,fontWeight:'700'},infoPanel:{padding:12,borderRadius:13},
 infoCopy:{fontSize:14,lineHeight:21},familyRows:{gap:spacing.sm},topicList:{gap:spacing.sm},
 letters:{gap:spacing.sm,paddingVertical:spacing.sm,paddingRight:spacing.md},
 row:{flexDirection:'row',gap:12,alignItems:'center',minHeight:88,borderWidth:.7,borderRadius:17,paddingHorizontal:12,paddingVertical:11},
 iconCircle:{width:50,height:50,borderRadius:16,alignItems:'center',justifyContent:'center'},
 icon:{fontSize:28},rowCopy:{flex:1,gap:3},rowTitle:{fontFamily:'serif',fontSize:18,fontWeight:'700',lineHeight:23},
 rowDesc:{fontSize:13,lineHeight:18},rowCount:{fontSize:11.5,fontWeight:'700'},
 arrow:{fontSize:26,lineHeight:30},
 topicRow:{flexDirection:'row',gap:11,alignItems:'center',minHeight:72,borderWidth:.7,borderRadius:16,paddingHorizontal:11,paddingVertical:10},
 topicIconCircle:{width:45,height:45,borderRadius:15,justifyContent:'center',alignItems:'center'},
 topicIcon:{fontSize:24},topicTitle:{fontSize:17,fontWeight:'700',lineHeight:22},
 topicSubtitle:{fontSize:13,lineHeight:18},
 featured:{padding:16,borderWidth:.7,borderRadius:20,gap:12},
 topicDetailHeader:{flexDirection:'row',alignItems:'center',gap:11},
 detailIcon:{height:44,width:44,borderRadius:14,alignItems:'center',justifyContent:'center'},
 detailIconText:{fontSize:27},familyTag:{fontSize:12.5,fontWeight:'700',flex:1},
 detailHeading:{fontSize:22,lineHeight:28,fontFamily:'serif',fontWeight:'700'},
 detailSynopsis:{fontSize:15.5,lineHeight:24},
 editorialFootnote:{fontSize:12,lineHeight:18},
 passagesIntro:{fontSize:13.5,lineHeight:20},
 passageCard:{borderWidth:.7,borderRadius:17,paddingHorizontal:14,paddingTop:12,paddingBottom:3,gap:9,marginBottom:10},
 passageHead:{flexDirection:'row',alignItems:'center',gap:9},
 bookIcon:{width:34,height:34,borderRadius:10,alignItems:'center',justifyContent:'center'},
 bookGlyph:{fontSize:19},reference:{fontSize:16,fontWeight:'700',flex:1,lineHeight:22},
 passageReason:{fontSize:13.5,lineHeight:20},
 readAction:{borderTopWidth:.6,minHeight:minimumTouchTarget,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
 readText:{fontSize:14,fontWeight:'700'},readArrow:{fontSize:24}
});

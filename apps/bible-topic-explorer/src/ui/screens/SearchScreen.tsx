import {useEffect,useMemo,useRef,useState} from 'react';
import {BackHandler,Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {normalizeTopicText,topicCatalog} from '../../product/topics';
import {availablePreview,conceptFamilies,conceptPreviewStats,familyTopics,initialTopicUiState,reviewMessage,topicReviewStatus,type TopicUiState} from '../../product/conceptIndex';
import type {Theme} from '../theme';
import {spacing} from '../theme';
import {Action,Body,Card,ChoiceChip,Metadata,Screen,ScreenTitle,Section,Subhead} from '../primitives';

const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
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
  const t=setTimeout(()=>{if(restore.current){scrollTo(topicUi.scrollY);restore.current=false;}},180);
  return()=>clearTimeout(t);
 },[topicUi.family,topicUi.topicId]);
 const openPassage=(passage:NonNullable<typeof preview>['passages'][number])=>{
  onTopicUiChange({...topicUi,mode:'topics',scrollY:y.current});
  onOpenReader(passage.book,passage.chapter,passage.start,true,passage.sourceVerseLabel,passage.end,passage.sourceVerseLabels);
 };
 return <Screen theme={theme}><ScrollView ref={scrollRef} keyboardShouldPersistTaps="handled"
  contentContainerStyle={styles.stack} scrollEventThrottle={32}
  onScroll={e=>{if(!restoring.current)y.current=e.nativeEvent.contentOffset.y;}}
  onContentSizeChange={()=>{if(restore.current&&topicUi.scrollY>0){scrollTo(topicUi.scrollY);restore.current=false;}}}>
  <View style={styles.intro}><View style={[styles.accent,{backgroundColor:theme.sky}]}/><ScreenTitle theme={theme}>Explorar temas</ScreenTitle>
   <Body theme={theme} muted>Encuentra un tema y descubre pasajes para leer en la Biblia RV1909.</Body>
  </View>
  <Section theme={theme} title="Temas bíblicos">
   <View style={styles.infoLine}>
    <Metadata theme={theme}>{conceptPreviewStats.canonicalTopics} temas · {conceptFamilies.length} familias</Metadata>
    <Pressable accessibilityRole="button" accessibilityLabel={infoOpen?'Ocultar información sobre las fichas':'Información sobre las fichas'}
     accessibilityState={{expanded:infoOpen}} onPress={()=>setInfoOpen(v=>!v)}
     style={[styles.infoButton,{borderColor:theme.selectionBorder,backgroundColor:theme.infoBg}]}>
     <Text style={[styles.infoSymbol,{color:theme.infoText}]}>ⓘ</Text>
    </Pressable>
   </View>
   {infoOpen?<View style={[styles.infoPanel,{backgroundColor:theme.infoBg}]}>
    <Body theme={theme}>Las fichas y sus referencias aún están pendientes de aprobación editorial humana. Puedes leer los pasajes disponibles en el texto local RV1909.</Body>
   </View>:null}
  </Section>
  {topicUi.family?<Action theme={theme} variant="secondary" label={selectedTopic?'← Volver a los temas':'← Volver a familias'} onPress={backTopics}/>:null}
  {!topicUi.family?<Section theme={theme} title="Elige una familia">
   <View style={styles.familyRows}>{conceptFamilies.map(family=><Card theme={theme} key={family}>
    <Subhead theme={theme}>{family}</Subhead><Metadata theme={theme}>{familyTopics(family).length} temas</Metadata>
    <Action theme={theme} variant="secondary" label={'Explorar '+family} onPress={()=>changeState({...topicUi,mode:'topics',family,topicId:undefined,scrollY:0,listScrollY:0})}/>
   </Card>)}</View>
   <Action theme={theme} variant="tertiary" label="Ver los 100 temas A–Z" onPress={()=>changeState({...topicUi,mode:'topics',family:'__all__',topicId:undefined,scrollY:0,listScrollY:0})}/>
  </Section>:null}
  {topicUi.family&&!selectedTopic?<Section theme={theme} title={topicUi.family==='__all__'?'Índice A–Z':topicUi.family} description="Selecciona un tema.">
   {topicUi.family==='__all__'?<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.letters}>{letters.map(letter=><ChoiceChip key={letter} label={letter} theme={theme} selected={selectedLetter===letter} onPress={()=>changeState({...topicUi,selectedLetter:letter,scrollY:0})}/>)}</ScrollView>:null}
   <View style={styles.topicList}>{familyList.map(topic=><Card theme={theme} key={topic.id}>
    <Subhead theme={theme}>{topic.label}</Subhead>
    <Metadata theme={theme}>{availablePreview(topic.id)?.subtopic??'Por desarrollar'}</Metadata>
    <Action theme={theme} variant="secondary" label={'Ver concepto '+topic.label} onPress={()=>changeState({...topicUi,topicId:topic.id,listScrollY:y.current,scrollY:0})}/>
   </Card>)}</View>
   {!familyList.length?<Body theme={theme} muted>No hay temas para esta letra.</Body>:null}
  </Section>:null}
  {selectedTopic?<Section theme={theme} title={selectedTopic.label}>
   <Card theme={theme} featured label={'Tema conceptual: '+selectedTopic.label}>
    <Metadata theme={theme}>FAMILIA · {selectedTopic.family}</Metadata>
    <Subhead theme={theme}>{preview?.subtopic??'Subtema por desarrollar'}</Subhead>
    {preview?<Body theme={theme}>{preview.synopsis}</Body>:<Body theme={theme} muted>Este tema existe en el índice, pero su ficha contextual todavía no se ha publicado.</Body>}
    {infoOpen?<><Metadata theme={theme}>ESTADO EDITORIAL · {topicReviewStatus(selectedTopic.id)}</Metadata><Body theme={theme} muted>{reviewMessage(selectedTopic.id)}</Body></>:null}
    {infoOpen&&preview?.pastoralCaution?<Text style={[styles.editorialFootnote,{color:theme.secondary}]}>ⓘ  Cuidado contextual: {preview.pastoralCaution}</Text>:null}
   </Card>
   {preview?<Section theme={theme} title="Referencias propuestas">
    {preview.passages.map(passage=><Card theme={theme} key={passage.reference}>
     <Subhead theme={theme}>{passage.reference}</Subhead>
     <Body theme={theme}>{passage.rationale}</Body>
     <Action theme={theme} label={'Leer '+passage.reference+' en RV1909'} onPress={()=>openPassage(passage)}/>
    </Card>)}
   </Section>:<Body theme={theme} muted>Los pasajes de este tema se están preparando; permanece disponible en el índice.</Body>}
  </Section>:null}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:spacing.xxl},intro:{gap:spacing.xs},
 accent:{width:36,height:4,borderRadius:4},infoLine:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
 infoButton:{height:48,width:48,borderWidth:1,borderRadius:24,alignItems:'center',justifyContent:'center'},
 infoSymbol:{fontSize:24,fontWeight:'700'},editorialFootnote:{fontSize:12,lineHeight:18},infoPanel:{padding:12,borderRadius:14},
 familyRows:{gap:spacing.sm},topicList:{gap:spacing.sm},letters:{gap:spacing.sm,paddingVertical:spacing.sm,paddingRight:spacing.md}
});

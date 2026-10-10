import {useEffect, useMemo, useRef, useState} from 'react';
import {BackHandler, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteBibleRepository} from '../../db/sqliteBibleRepository';
import type {BibleSearchHit} from '../../product/adapters';
import {filterSearchByTestament, type TestamentFilter} from '../../product/searchFilters';
import {classifyQuery, intentLabels, parseReference} from '../../product/search';
import {summarizeMatchTiers} from '../../product/searchPresentation';
import {normalizeTopicText, topicCatalog} from '../../product/topics';
import {availablePreview, conceptFamilies, conceptPreviewStats, familyTopics, initialTopicUiState, reviewMessage, topicReviewStatus, type TopicUiState} from '../../product/conceptIndex';
import {uxCopy} from '../../product/uxCopy';
import type {Theme} from '../theme';
import {radius, spacing, type as typography} from '../theme';
import {Action, Body, Card, ChoiceChip, ContextualTip, Field, Metadata, ResultRow, Screen, ScreenTitle, Section, StatusBanner, Subhead} from '../primitives';

const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const matchLabel={literal_exact:'Literal',lexical_related_form:'Forma relacionada',thematic_term:'Temático',curated_reference:'Referencia curada'} as const;
type OpenReader=(book:string,chapter:number,verse?:number,recordHistory?:boolean,sourceVerseLabel?:string,verseEnd?:number,sourceVerseLabels?:readonly string[])=>void;
export function SearchScreen({theme,onOpenReader,topicUi=initialTopicUiState,onTopicUiChange=()=>{}}:{theme:Theme;onOpenReader:OpenReader;topicUi?:TopicUiState;onTopicUiChange?:(state:TopicUiState)=>void}) {
 const db=useSQLiteContext();
 const [query,setQuery]=useState('');
 const [results,setResults]=useState<readonly BibleSearchHit[]>([]);
 const [searched,setSearched]=useState(false);
 const [loading,setLoading]=useState(false);
 const [error,setError]=useState(false);
 const [showExploreTip,setShowExploreTip]=useState(true);
 const [testamentFilter,setTestamentFilter]=useState<TestamentFilter>('all');
 const [selectedLetter,setSelectedLetter]=useState('A');
 const scrollRef=useRef<ScrollView>(null);
 const scrollY=useRef(topicUi.scrollY);
 const restorationPending=useRef(topicUi.scrollY>0);
 const selectedTopic=useMemo(()=>topicCatalog.find(topic=>topic.id===topicUi.topicId),[topicUi.topicId]);
 const preview=selectedTopic?availablePreview(selectedTopic.id):undefined;
 const changeState=(next:TopicUiState)=>{
   scrollY.current=next.scrollY;
   restorationPending.current=false;
   onTopicUiChange(next);
   requestAnimationFrame(()=>scrollRef.current?.scrollTo({y:next.scrollY,animated:false}));
 };
 const backTopics=()=>{
   if(topicUi.topicId){changeState({...topicUi,topicId:undefined,scrollY:0});return;}
   if(topicUi.family){changeState({...topicUi,family:undefined,scrollY:0});return;}
   changeState({...topicUi,mode:'words',scrollY:0});
 };
 useEffect(()=>{
   const sub=BackHandler.addEventListener('hardwareBackPress',()=>{
     if(topicUi.mode==='topics'){backTopics();return true;}
     return false;
   });
   return()=>sub.remove();
 },[topicUi]);
 const letterTopics=useMemo(()=>topicCatalog.filter(topic=>normalizeTopicText(topic.label).charAt(0).toUpperCase()===selectedLetter).sort((a,b)=>a.label.localeCompare(b.label,'es')),[selectedLetter]);
 const familyList=useMemo(()=>topicUi.family==='__all__'?letterTopics:topicUi.family?familyTopics(topicUi.family):[],[topicUi.family,letterTopics]);
 const intent=query.trim()?classifyQuery(query):null;
 const parsed=intent==='reference'?parseReference(query):null;
 const searchable=intent==='word'||intent==='phrase';
 const filteredResults=useMemo(()=>filterSearchByTestament(results,testamentFilter),[results,testamentFilter]);
 const summary=useMemo(()=>summarizeMatchTiers(filteredResults),[filteredResults]);
 const clearResults=()=>{setLoading(false);setResults([]);setSearched(false);setError(false);};
 const runLiteral=async()=>{
   if(!searchable||loading)return;
   setLoading(true);setError(false);
   try{setResults(await new SQLiteBibleRepository(db).searchLiteral(query));setSearched(true);}
   catch{setResults([]);setSearched(true);setError(true);}
   finally{setLoading(false);}
 };
 const openPassage=(passage:NonNullable<typeof preview>['passages'][number])=>{
   onTopicUiChange({...topicUi,scrollY:scrollY.current});
   // Correct sourceVerseLabel is retained for split/combined RV1909 rows.
   onOpenReader(passage.book,passage.chapter,passage.start,true,passage.sourceVerseLabel,passage.end,passage.sourceVerseLabels);
 };
 return <Screen theme={theme}>
   <ScrollView ref={scrollRef} contentContainerStyle={styles.stack} keyboardShouldPersistTaps="handled"
     scrollEventThrottle={80} onScroll={e=>{scrollY.current=e.nativeEvent.contentOffset.y;}}
     onContentSizeChange={()=>{if(restorationPending.current){scrollRef.current?.scrollTo({y:topicUi.scrollY,animated:false});restorationPending.current=false;}}}>
     <View style={styles.intro}><View style={[styles.accent,{backgroundColor:theme.sky}]}/><ScreenTitle theme={theme}>Explorar</ScreenTitle>
       <Body theme={theme} muted>Dos caminos distintos: palabras presentes en RV1909 o conceptos con pasajes propuestos.</Body>
     </View>
     <View style={styles.modeButtons}>
       <ChoiceChip theme={theme} label="Palabras · búsqueda literal" selected={topicUi.mode==='words'} onPress={()=>changeState({mode:'words',scrollY:0})}/>
       <ChoiceChip theme={theme} label="Temas · índice conceptual" selected={topicUi.mode==='topics'} onPress={()=>changeState({mode:'topics',scrollY:0})}/>
     </View>
     {topicUi.mode==='words'?<>
       <Section theme={theme} title="Palabras en RV1909" description="Busca la palabra/frase exacta. No equivale a un estudio conceptual ni activa automáticamente un tema.">
         <Field theme={theme} label="Texto o referencia" hint="Juan 3:16 · amor · “no temas”" placeholder="Palabra, frase o referencia" value={query}
           returnKeyType="search" onChangeText={value=>{setQuery(value);clearResults();}} onSubmitEditing={()=>{void runLiteral();}}/>
         {intent?<View style={styles.intent}>
           <Metadata theme={theme}>{intentLabels[intent].toUpperCase()}</Metadata>
           <Body theme={theme}>{intent==='phrase'?'Busca esa secuencia en RV1909.':intent==='reference'?'Referencia reconocida: puedes abrirla directamente.':'Busca literalmente el texto escrito; no activa temas.'}</Body>
           {parsed?<Action variant="secondary" label={'Abrir '+query.trim()} theme={theme} onPress={()=>onOpenReader(parsed.book,parsed.chapter,parsed.verse)}/>:null}
           {searchable?<Action label="Buscar texto literal" loading={loading} theme={theme} onPress={()=>{void runLiteral();}}/>:null}
         </View>:null}
       </Section>
       {showExploreTip?<ContextualTip theme={theme} title={uxCopy.exploreTipTitle} onDismiss={()=>setShowExploreTip(false)}>{uxCopy.exploreTipBody}</ContextualTip>:null}
       {searched&&!error?<Section theme={theme} title="Filtrar resultados" description="El testamento no cambia la búsqueda literal.">
         <View style={styles.wrap}>{([{id:'all',label:'Todos'},{id:'old',label:'Antiguo Testamento'},{id:'new',label:'Nuevo Testamento'}] as const).map(opt=><ChoiceChip key={opt.id} theme={theme} label={opt.label} selected={testamentFilter===opt.id} onPress={()=>setTestamentFilter(opt.id)}/>)}</View>
         <Metadata theme={theme}>{filteredResults.length} de {results.length} resultados visibles en RV1909.</Metadata>
       </Section>:null}
       {searched&&!error?<Section theme={theme} title="Resumen de resultados">
         <View style={styles.metrics}>
           <View style={[styles.metric,{backgroundColor:theme.selectionBg}]}><Text style={[typography.display,styles.metricValue,{color:theme.primaryText}]}>{summary.literal}</Text><Metadata theme={theme}>Literal</Metadata></View>
           <View style={[styles.metric,{backgroundColor:theme.warningBg}]}><Text style={[typography.display,styles.metricValue,{color:theme.amber}]}>{summary.related}</Text><Metadata theme={theme}>Relacionadas</Metadata></View>
           <View style={[styles.metric,{backgroundColor:theme.infoBg}]}><Text style={[typography.display,styles.metricValue,{color:theme.sky}]}>{summary.thematic+summary.curated}</Text><Metadata theme={theme}>Temático</Metadata></View>
         </View>
       </Section>:null}
       {loading?<StatusBanner theme={theme} kind="info">Consultando RV1909 local…</StatusBanner>:null}
       {error?<StatusBanner theme={theme} kind="error">No se pudo consultar el índice local.</StatusBanner>:null}
       {searched&&!loading&&!error&&filteredResults.length===0?<StatusBanner theme={theme} kind="info">Sin resultados locales para esta búsqueda en RV1909.</StatusBanner>:null}
       {filteredResults.length?<Section theme={theme} title="Resultados de palabras" description="Cada fila se basa en el texto RV1909, no en una clasificación editorial.">
         <View style={[styles.results,{borderTopColor:theme.border}]}>{filteredResults.map(hit=><ResultRow key={[hit.bookId,hit.chapter,hit.sourceVerseLabel,hit.matchType].join('-')} theme={theme} tier={matchLabel[hit.matchType]} reference={hit.bookName+' '+hit.chapter+':'+hit.sourceVerseLabel} text={hit.text} explanation={hit.explanation} onPress={()=>onOpenReader(hit.bookName,hit.chapter,hit.verse,true,hit.sourceVerseLabel)}/>)}</View>
       </Section>:null}
     </>:<>
       <Section theme={theme} title="Temas bíblicos · conceptos" description="Por familia → tema → subtema → rango. No es una búsqueda de palabras.">
         <Metadata theme={theme}>{conceptPreviewStats.canonicalTopics} temas canónicos · {conceptFamilies.length} familias · {conceptPreviewStats.pilot} fichas piloto · {conceptPreviewStats.canonicalTopics-conceptPreviewStats.pilot} sin ficha visible.</Metadata>
         <StatusBanner theme={theme} kind="info">Ninguna ficha posee aún aprobación editorial humana. {conceptPreviewStats.initialContextSamples} muestras tienen revisión contextual inicial; las demás requieren revisión.</StatusBanner>
       </Section>
       {topicUi.family?<Action theme={theme} variant="secondary" label={selectedTopic?'← Volver a temas de esta familia':'← Volver a familias'} onPress={backTopics}/>:null}
       {!topicUi.family?<Section theme={theme} title="Elegir familia">
         <View style={styles.familyRows}>{conceptFamilies.map(family=><Card theme={theme} key={family}>
           <Subhead theme={theme}>{family}</Subhead><Metadata theme={theme}>{familyTopics(family).length} temas existentes</Metadata>
           <Action theme={theme} variant="secondary" label={'Explorar '+family} onPress={()=>changeState({...topicUi,family,topicId:undefined,scrollY:0})}/>
         </Card>)}</View>
         <Action theme={theme} variant="tertiary" label="Consultar índice A–Z de 100 temas" onPress={()=>changeState({...topicUi,family:'__all__',topicId:undefined,scrollY:0})}/>
       </Section>:null}
       {topicUi.family&&!selectedTopic?<Section theme={theme} title={topicUi.family==='__all__'?'Índice A–Z':topicUi.family} description="Elige un concepto. Una ficha pendiente no presenta referencias como verificadas doctrinalmente.">
         {topicUi.family==='__all__'?<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.letters}>{letters.map(letter=><ChoiceChip key={letter} label={letter} theme={theme} selected={selectedLetter===letter} onPress={()=>setSelectedLetter(letter)}/>)}</ScrollView>:null}
         <View style={styles.topicList}>{familyList.map(topic=><Card key={topic.id} theme={theme}>
           <Subhead theme={theme}>{topic.label}</Subhead>
           <Metadata theme={theme}>{availablePreview(topic.id)?.subtopic??'Subtema por revisar'}</Metadata>
           <Metadata theme={theme}>{topicReviewStatus(topic.id)==='EN_REVISION'?'EN REVISIÓN · muestra inicial':'PROPUESTO · sin aprobación humana'}</Metadata>
           <Action theme={theme} variant="secondary" label={'Ver concepto '+topic.label} onPress={()=>changeState({...topicUi,topicId:topic.id,scrollY:0})}/>
         </Card>)}</View>
         {!familyList.length?<Body theme={theme} muted>No hay temas para esta letra.</Body>:null}
       </Section>:null}
       {selectedTopic?<Section theme={theme} title={selectedTopic.label}>
         <Card theme={theme} featured label={'Tema conceptual: '+selectedTopic.label}>
           <Metadata theme={theme}>FAMILIA · {selectedTopic.family}</Metadata>
           <Subhead theme={theme}>{preview?.subtopic??'Subtema pendiente de revisión'}</Subhead>
           {preview?<Body theme={theme}>{preview.synopsis}</Body>:<Body theme={theme} muted>El tema existe entre los 100 canónicos, pero no tiene ficha contextual publicada.</Body>}
           <Metadata theme={theme}>ESTADO EDITORIAL · {topicReviewStatus(selectedTopic.id)} · NO APROBADO</Metadata>
           <Body theme={theme} muted>{reviewMessage(selectedTopic.id)}</Body>
           {preview?.pastoralCaution?<StatusBanner theme={theme} kind="info">Cuidado contextual: {preview.pastoralCaution}</StatusBanner>:null}
         </Card>
         {preview?<Section theme={theme} title="Referencias propuestas" description="Se comprobó existencia del rango en el corpus local RV1909, NO su aprobación doctrinal.">
           {preview.passages.map(passage=><Card key={passage.reference} theme={theme}>
             <Subhead theme={theme}>{passage.reference}</Subhead>
             <Metadata theme={theme}>Rango completo: {passage.start}–{passage.end} · {passage.sourceVerseLabels.length} etiquetas de origen</Metadata>
             <Body theme={theme}>{passage.rationale}</Body>
             <Metadata theme={theme}>{preview.status==='EN_REVISION'?'EN REVISIÓN editorial':'PROPUESTO · contexto sin revisar'}</Metadata>
             <Action theme={theme} label={'Leer '+passage.reference+' en RV1909'} onPress={()=>openPassage(passage)}/>
           </Card>)}
         </Section>:<StatusBanner theme={theme} kind="info">Aún no hay referencias editoriales visibles para este tema. Se conserva en el índice de 100.</StatusBanner>}
       </Section>:null}
     </>}
   </ScrollView>
 </Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:spacing.xxl},intro:{gap:spacing.xs},accent:{width:36,height:4,borderRadius:4},
 modeButtons:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm},wrap:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs},
 letters:{gap:spacing.xs,paddingVertical:spacing.xs,paddingRight:spacing.md},familyRows:{gap:spacing.sm},
 topicList:{gap:spacing.sm},intent:{gap:spacing.sm},metrics:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm},
 metric:{minWidth:88,flexGrow:1,flexBasis:88,borderRadius:radius.sm,padding:spacing.sm,gap:2},
 metricValue:{fontSize:25,lineHeight:30},results:{borderTopWidth:1}
});

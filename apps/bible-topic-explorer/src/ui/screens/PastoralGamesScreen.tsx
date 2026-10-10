import {useEffect,useMemo,useState} from 'react';
import {ScrollView,StyleSheet,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteBibleRepository} from '../../db/sqliteBibleRepository';
import {triviaQuestions,trueFalseQuestions,sequenceGame} from '../../product/pastoralGames';
import {Action,Body,Card,ChoiceChip,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,type Theme} from '../theme';
type GameMode='trivia'|'truefalse'|'sequence';
function shuffle<T>(items:readonly T[]):T[]{return [...items].map((item,i)=>({item,sort:(i*37+7)%11})).sort((a,b)=>a.sort-b.sort).map(x=>x.item);}
export function PastoralGamesScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [mode,setMode]=useState<GameMode>('trivia'),[index,setIndex]=useState(0),[answers,setAnswers]=useState<readonly number[]>([]),[sequence,setSequence]=useState<readonly string[]>([]),[correctLabels,setCorrectLabels]=useState<readonly string[]>([]),[error,setError]=useState('');
 const db=useSQLiteContext(),repo=useMemo(()=>new SQLiteBibleRepository(db),[db]);
 useEffect(()=>{let active=true;setError('');void repo.getChapter(sequenceGame.book,sequenceGame.chapter).then(rows=>{
  const chosen=rows.filter(v=>v.verse>=sequenceGame.start&&v.verse<=sequenceGame.end);
  if(!active)return;
  if(chosen.length<3){setError('Rango incompleto para esta actividad.');return;}
  const labels=chosen.slice(0,3).map(v=>v.sourceVerseLabel);
  setCorrectLabels(labels);setSequence(shuffle(labels));
 }).catch(()=>{if(active)setError('No se pudo leer RV1909 local.');});return()=>{active=false;};},[repo]);
 const questions=mode==='trivia'?triviaQuestions:trueFalseQuestions;
 const q=questions[index];
 const choice=answers[index];
 const scored=answers.filter((n,i)=>n===(mode==='trivia'?triviaQuestions[i].correct:Number(trueFalseQuestions[i].correct))).length;
 const restart=()=>{setIndex(0);setAnswers([]);setSequence(shuffle(correctLabels));setError('');};
 const select=(v:number)=>{if(choice!==undefined)return;setAnswers(prev=>[...prev,v]);};
 const next=()=>{if(index+1>=questions.length)restart();else setIndex(n=>n+1);};
 const selectMode=(m:GameMode)=>{setMode(m);restart();};
 const sequenceSolved=sequence.length===3&&sequence.every((v,i)=>v===correctLabels[i]);
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label="← Volver a las dinámicas" onPress={onBack}/>
  <ScreenTitle theme={theme}>Juegos bíblicos · RV1909</ScreenTitle>
  <StatusBanner theme={theme} kind="info">Tres actividades interactivas originales en revisión editorial. Las explicaciones no sustituyen un estudio contextual humano.</StatusBanner>
  <View style={styles.inline}>
   <ChoiceChip theme={theme} label="Trivia" selected={mode==='trivia'} onPress={()=>selectMode('trivia')}/>
   <ChoiceChip theme={theme} label="Verdadero/falso" selected={mode==='truefalse'} onPress={()=>selectMode('truefalse')}/>
   <ChoiceChip theme={theme} label="Ordenar versículos" selected={mode==='sequence'} onPress={()=>selectMode('sequence')}/>
  </View>
  {error?<StatusBanner theme={theme} kind="error">{error}</StatusBanner>:null}
  {mode==='sequence'?<Section theme={theme} title={sequenceGame.label}>
    <Body theme={theme}>Toca una fila y usa «Subir» o «Bajar». Se ordenan etiquetas reales de la Biblia local; no es necesario arrastrar.</Body>
    {sequence.map((label,i)=><Card theme={theme} key={label}>
     <Subhead theme={theme}>RV1909 · {sequenceGame.book} {sequenceGame.chapter}:{label}</Subhead>
     <View style={styles.inline}><Action theme={theme} variant="secondary" label={'Subir versículo '+label} disabled={i===0} onPress={()=>setSequence(prev=>{const a=[...prev];[a[i-1],a[i]]=[a[i],a[i-1]];return a;})}/>
     <Action theme={theme} variant="secondary" label={'Bajar versículo '+label} disabled={i===sequence.length-1} onPress={()=>setSequence(prev=>{const a=[...prev];[a[i+1],a[i]]=[a[i],a[i+1]];return a;})}/></View>
    </Card>)}
    <StatusBanner theme={theme} kind={sequenceSolved?'success':'info'}>{sequenceSolved?'Orden correcto de los versículos en Salmos 23.':'Ordena las etiquetas 1, 2 y 3 para completar.'}</StatusBanner>
    <Action theme={theme} variant="secondary" label="Mezclar de nuevo" onPress={()=>setSequence(prev=>[...prev].reverse())}/>
   </Section>:<Section theme={theme} title={'Pregunta '+(index+1)+' de '+questions.length}>
     <Card theme={theme} featured><Subhead theme={theme}>{mode==='trivia'?triviaQuestions[index].prompt:trueFalseQuestions[index].statement}</Subhead>
      {(mode==='trivia'?triviaQuestions[index].options:['Verdadero','Falso']).map((option,i)=><Action theme={theme} key={i} variant="secondary" label={option} disabled={choice!==undefined} onPress={()=>select(mode==='trivia'?i:Number(i===0))}/>)}
     </Card>
     {choice!==undefined?<Card theme={theme}>
       <Subhead theme={theme}>{choice===(mode==='trivia'?triviaQuestions[index].correct:Number(trueFalseQuestions[index].correct))?'Respuesta correcta':'Respuesta para revisar'}</Subhead>
       <Body theme={theme}>{mode==='trivia'?triviaQuestions[index].reason:trueFalseQuestions[index].reason}</Body>
       <Metadata theme={theme}>Referencia para estudiar: {q.reference}</Metadata>
       <Action theme={theme} label={index+1===questions.length?'Volver a jugar':'Siguiente pregunta'} onPress={next}/>
      </Card>:null}
     <Metadata theme={theme}>Puntuación provisional: {scored} de {answers.length} · solo en esta sesión, sin ranking público.</Metadata>
     <Action theme={theme} variant="tertiary" label="Reiniciar juego" onPress={restart}/>
   </Section>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},inline:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm}});

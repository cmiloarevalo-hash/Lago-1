import {useCallback,useEffect,useMemo,useState} from 'react';
import {Alert,ScrollView,StyleSheet,TextInput,View,Text} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {readingPlans,planById} from '../../product/readingPlans';
import {SQLitePlanRepository} from '../../db/sqlitePlanRepository';
import {Action,Body,Card,ChoiceChip,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,radius,type Theme} from '../theme';
type P={theme:Theme;planId?:string;day?:number;onSelect:(id:string,day?:number)=>void;onBack:()=>void;onRead:(book:string,chapter:number,start:number,end:number)=>void};
export function PlansScreen({theme,planId,day,onSelect,onBack,onRead}:P){
 const db=useSQLiteContext(),repo=useMemo(()=>new SQLitePlanRepository(db),[db]);
 const [filter,setFilter]=useState('Todos'),[rows,setRows]=useState<readonly {day:number;done:boolean;note:string}[]>([]);
 const [note,setNote]=useState(''),[error,setError]=useState(''),[saving,setSaving]=useState(false);
 const plan=planById(planId??''),entry=plan?.days.find(d=>d.day===day);
 const refresh=useCallback(()=>{if(!planId){setRows([]);return;}void repo.list(planId).then(setRows).catch(()=>setError('No se pudo leer el progreso local.'));},[repo,planId]);
 useEffect(()=>{refresh();},[refresh]);
 useEffect(()=>{setNote(rows.find(r=>r.day===day)?.note??'');},[day,rows]);
 const done=rows.filter(r=>r.done).length;
 const save=async(complete?:boolean)=>{
  if(!plan||!entry||saving)return;
  setSaving(true);setError('');
  try{await repo.save(plan.id,entry.day,complete??Boolean(rows.find(r=>r.day===entry.day)?.done),note);refresh();}
  catch{setError('No se pudo guardar; tus notas anteriores permanecen intactas.');}
  finally{setSaving(false);}
 };
 const reset=()=>{if(!plan)return;Alert.alert('Reiniciar solo este plan','Se desmarcarán los días completados; las notas privadas se conservarán.',[
  {text:'Cancelar',style:'cancel'},
  {text:'Reiniciar avance',style:'destructive',onPress:()=>{void repo.resetProgress(plan.id).then(refresh).catch(()=>setError('No se pudo reiniciar.'));}}
 ]);};
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack} keyboardShouldPersistTaps="handled">
  <Action theme={theme} variant="tertiary" label={entry?'← Volver al plan':plan?'← Todos los planes':'← Volver al menú'} onPress={onBack}/>
  <ScreenTitle theme={theme}>Planes de lectura · 7 días</ScreenTitle>
  <Body theme={theme} muted>RV1909 sin conexión. Reflexiones originales EN REVISIÓN editorial; las oraciones y acciones son voluntarias.</Body>
  {error?<StatusBanner theme={theme} kind="warning">{error}</StatusBanner>:null}
  {!plan?<><Section theme={theme} title="Elige un camino">
    <View style={styles.inline}>{['Todos','Evangelios','Servicio','Reflexión','Oración'].map(v=><ChoiceChip key={v} theme={theme} label={v} selected={filter===v} onPress={()=>setFilter(v)}/>)}</View>
  </Section>{readingPlans.filter(p=>filter==='Todos'||p.theme===filter).map(p=><Card key={p.id} theme={theme}>
    <View style={[styles.illustration,{backgroundColor:theme.raised,borderColor:theme.border}]}><Text style={{fontSize:28,color:theme.primaryText}}>✦ 7</Text><Text style={{color:theme.text,fontWeight:'700'}}>JORNADAS · RV1909</Text></View>
    <Subhead theme={theme}>{p.title}</Subhead><Body theme={theme} muted>{p.intro}</Body>
    <Metadata theme={theme}>7 lecturas · texto original pendiente de revisión pastoral</Metadata>
    <Action theme={theme} label={'Ver plan '+p.title} onPress={()=>onSelect(p.id)}/>
  </Card>)}</>:<>
    <Card featured theme={theme}>
      <Subhead theme={theme}>{plan.title}</Subhead><Metadata theme={theme}>{plan.theme} · {done} de 7 días completados</Metadata>
      <View accessibilityRole="progressbar" accessibilityValue={{min:0,max:7,now:done}} style={[styles.progress,{backgroundColor:theme.raised}]}><View style={{width:(done/7*100)+'%' as `${number}%`,backgroundColor:theme.primary,height:10,borderRadius:10}}/></View>
      <Body theme={theme}>{plan.intro}</Body><Action theme={theme} variant="secondary" label={'Continuar · día '+(plan.days.find(d=>!rows.some(r=>r.day===d.day&&r.done))?.day??7)} onPress={()=>onSelect(plan.id,plan.days.find(d=>!rows.some(r=>r.day===d.day&&r.done))?.day??7)}/>
      <Action theme={theme} variant="tertiary" label="Reiniciar solo las marcas de progreso" onPress={reset}/>
    </Card>
    {entry?<Section theme={theme} title={'Día '+entry.day+' · '+entry.title}>
      <Card theme={theme}><Metadata theme={theme}>RV1909 · {entry.book} {entry.chapter}:{entry.start}–{entry.end}</Metadata>
       <Action theme={theme} label={'Leer '+entry.book+' '+entry.chapter+':'+entry.start+'–'+entry.end+' en contexto'} onPress={()=>onRead(entry.book,entry.chapter,entry.start,entry.end)}/>
       <Subhead theme={theme}>Reflexión original · EN REVISIÓN</Subhead><Body theme={theme}>{entry.reflection}</Body>
       <Subhead theme={theme}>Oración opcional</Subhead><Body theme={theme}>{entry.prayer}</Body>
       <Subhead theme={theme}>Acción libre</Subhead><Body theme={theme}>{entry.action}</Body>
      </Card>
      <Card theme={theme}><Subhead theme={theme}>Mis notas privadas del día</Subhead>
       <TextInput multiline value={note} onChangeText={setNote} maxLength={5000} placeholder="Escribe solo lo que quieras conservar…" placeholderTextColor={theme.secondary} accessibilityLabel={'Nota privada, día '+entry.day} style={[styles.note,{color:theme.text,borderColor:theme.border,backgroundColor:theme.surface}]}/>
       <Action theme={theme} label="Guardar nota de este día" loading={saving} onPress={()=>{void save();}}/>
       <Action theme={theme} variant="secondary" label={rows.some(r=>r.day===entry.day&&r.done)?'Marcar día como pendiente':'Marcar día completado'} loading={saving} onPress={()=>{void save(!rows.some(r=>r.day===entry.day&&r.done));}}/>
      </Card>
    </Section>:<Section theme={theme} title="Días del plan">
      {plan.days.map(d=><Card key={d.day} theme={theme}>
       <Metadata theme={theme}>{rows.some(r=>r.day===d.day&&r.done)?'✓ COMPLETADO':'○ PENDIENTE'} · RV1909 {d.book} {d.chapter}:{d.start}–{d.end}</Metadata>
       <Subhead theme={theme}>{'Día '+d.day+' — '+d.title}</Subhead>
       <Action theme={theme} variant="secondary" label={'Abrir día '+d.day} onPress={()=>onSelect(plan.id,d.day)}/>
      </Card>)}
    </Section>}
  </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},inline:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs},progress:{height:10,borderRadius:10,overflow:'hidden'},illustration:{height:100,borderWidth:1,borderRadius:radius.lg,alignItems:'center',justifyContent:'center'},note:{borderWidth:1,borderRadius:12,minHeight:120,padding:14,fontSize:17,textAlignVertical:'top'}});

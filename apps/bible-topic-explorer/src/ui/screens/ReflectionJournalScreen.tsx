import {useCallback,useEffect,useMemo,useState} from 'react';
import {Alert,KeyboardAvoidingView,Platform,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteLocalPersistence} from '../../db/sqliteLocalPersistence';
import type {Reflection} from '../../product/adapters';
import {Action,Body,Field,Metadata,Screen,ScreenTitle,Section} from '../primitives';
import {spacing,type Theme} from '../theme';

const LEGACY_ID='library-private-reflection';
function dateLabel(iso:string){const d=new Date(iso);return Number.isNaN(d.getTime())?'Sin fecha':d.toLocaleString('es-CL',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'});}
export function ReflectionJournalScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const db=useSQLiteContext(),persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);
 const [items,setItems]=useState<readonly Reflection[]>([]),[draftId,setDraftId]=useState<string|null>(null);
 const [title,setTitle]=useState(''),[body,setBody]=useState(''),[status,setStatus]=useState('');
 const refresh=useCallback(()=>{void persistence.listReflections().then(setItems).catch(()=>setStatus('No se pudieron cargar las reflexiones.'));},[persistence]);
 useEffect(()=>refresh(),[refresh]);
 const startNew=()=>{setDraftId('journal-'+Date.now()+'-'+Math.floor(Math.random()*100000));setTitle('');setBody('');setStatus('');};
 const edit=(ref:Reflection)=>{setDraftId(ref.id);setTitle(ref.title??(ref.id===LEGACY_ID?'Reflexión anterior':''));setBody(ref.body);setStatus('');};
 const save=async()=>{if(!draftId||!body.trim()){setStatus('Escribe tu reflexión antes de guardarla.');return;}try{
  await persistence.upsertReflection({id:draftId,title:title.trim()||'Mi reflexión',body:body.trim(),updatedAt:new Date().toISOString()});
  setDraftId(null);setStatus('Reflexión guardada en tu diario.');refresh();
 }catch{setStatus('No se pudo guardar la reflexión.');}};
 const remove=(ref:Reflection)=>Alert.alert('Eliminar reflexión','Esta reflexión se eliminará de este dispositivo.',[
  {text:'Cancelar',style:'cancel'},{text:'Eliminar',style:'destructive',onPress:()=>{void persistence.deleteReflection(ref.id).then(()=>{if(draftId===ref.id)setDraftId(null);refresh();}).catch(()=>setStatus('No fue posible eliminarla.'));}}
 ]);
 const byYear=useMemo(()=>{
  const groups=new Map<string,Reflection[]>();
  for(const item of items){const date=new Date(item.updatedAt);const year=Number.isNaN(date.getTime())?'Sin año':String(date.getFullYear());if(!groups.has(year))groups.set(year,[]);groups.get(year)!.push(item);}
  return Array.from(groups.entries());
 },[items]);
 return <Screen theme={theme}><KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==='ios'?'padding':'height'}>
  <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.stack}>
   <Action variant="tertiary" label="← Cerrar diario" theme={theme} onPress={onBack}/>
   <ScreenTitle theme={theme}>Mi diario de reflexiones</ScreenTitle>
   <Body theme={theme} muted>Escribe sobre tu vida, tus lecturas de la Biblia, tus oraciones y aprendizajes. Ordenadas por año y fecha. Solo tú tienes acceso desde este dispositivo.</Body>
   <Action theme={theme} label="+ Nueva reflexión" onPress={startNew}/>
   {status?<Body theme={theme}>{status}</Body>:null}
   {draftId?<Section theme={theme} title={items.some(x=>x.id===draftId)?'Editar reflexión':'Escribir reflexión'}>
    <Field theme={theme} label="Título o nombre" value={title} onChangeText={setTitle} placeholder="Ej.: Mi oración de hoy" maxLength={120}/>
    <Text style={[styles.fieldLabel,{color:theme.text}]}>Tu reflexión personal</Text>
    <TextInput multiline value={body} onChangeText={setBody}
      accessibilityLabel="Texto de mi diario" placeholder="¿Qué aprendí hoy? ¿Qué quiero recordar?"
      placeholderTextColor={theme.secondary} maxLength={20000}
      style={[styles.editor,{backgroundColor:theme.surface,borderColor:theme.border,color:theme.text}]}/>
    <Action theme={theme} label="Guardar en el diario" onPress={()=>{void save();}}/>
    <Action theme={theme} variant="tertiary" label="Cancelar" onPress={()=>setDraftId(null)}/>
   </Section>:null}
   {byYear.length===0?<Body theme={theme} muted>Tu diario está vacío. Escribe tu primera reflexión.</Body>:null}
   {byYear.map(([year,group])=><Section key={year} theme={theme} title={'Reflexiones del año '+year}>
    {group.map(item=><View key={item.id} style={[styles.entry,{backgroundColor:theme.surface,borderColor:theme.border}]}>
     <Text selectable style={[styles.title,{color:theme.text}]}>{item.title|| (item.id===LEGACY_ID?'Reflexión anterior':'Mi reflexión')}</Text>
     <Metadata theme={theme}>{dateLabel(item.updatedAt)}</Metadata>
     <Text selectable numberOfLines={5} style={[styles.preview,{color:theme.text}]}>{item.body}</Text>
     <View style={styles.actions}>
      <Action theme={theme} variant="secondary" label="Leer y editar" onPress={()=>edit(item)}/>
      <Action theme={theme} variant="tertiary" label="Eliminar" onPress={()=>remove(item)}/>
     </View>
    </View>)}
   </Section>)}
  </ScrollView></KeyboardAvoidingView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:70},entry:{borderWidth:1,borderRadius:15,padding:14,gap:8},title:{fontSize:19,fontFamily:'serif',fontWeight:'700'},preview:{fontSize:16,lineHeight:24},fieldLabel:{fontSize:15,fontWeight:'700'},editor:{minHeight:170,maxHeight:300,textAlignVertical:'top',borderWidth:1,borderRadius:12,padding:14,fontSize:17,lineHeight:26},actions:{flexDirection:'row',flexWrap:'wrap',gap:8}});

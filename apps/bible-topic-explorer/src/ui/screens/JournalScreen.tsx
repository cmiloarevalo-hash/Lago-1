import {useCallback,useEffect,useMemo,useState} from 'react';
import {Alert,KeyboardAvoidingView,Platform,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteLocalPersistence} from '../../db/sqliteLocalPersistence';
import type {Reflection} from '../../product/adapters';
import {Action,Body,Field,Metadata,Screen,ScreenTitle,Section} from '../primitives';
import {spacing,type Theme} from '../theme';

const PREVIOUS='library-private-reflection';
function labelDate(value:string){
 const d=new Date(value);
 return Number.isNaN(d.getTime())?'Sin fecha':d.toLocaleString('es-CL',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'});
}
function reflectionTitle(ref:Reflection){
 return ref.title|| (ref.id===PREVIOUS?'Mi reflexión anterior':'Reflexión personal');
}
export function JournalScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const db=useSQLiteContext(),persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);
 const [entries,setEntries]=useState<readonly Reflection[]>([]),[editing,setEditing]=useState<string|null>(null);
 const [title,setTitle]=useState(''),[body,setBody]=useState(''),[message,setMessage]=useState('');
 const refresh=useCallback(()=>{void persistence.listReflections().then(setEntries).catch(()=>setMessage('No se pudo leer el diario.'));},[persistence]);
 useEffect(()=>refresh(),[refresh]);
 const newEntry=()=>{setEditing('diario-'+Date.now()+'-'+Math.floor(Math.random()*10000));setTitle('');setBody('');setMessage('');};
 const open=(item:Reflection)=>{setEditing(item.id);setTitle(reflectionTitle(item));setBody(item.body);setMessage('');};
 const save=async()=>{
  if(!editing||!body.trim()){setMessage('Escribe tu reflexión para guardarla.');return;}
  try{await persistence.upsertReflection({id:editing,title:title.trim()||'Mi reflexión',body:body.trim(),updatedAt:new Date().toISOString()});
   setEditing(null);setMessage('Reflexión guardada.');refresh();}
  catch{setMessage('No se pudo guardar. El texto sigue visible para volver a intentarlo.');}
 };
 const remove=(item:Reflection)=>Alert.alert('Eliminar reflexión','La reflexión se borrará solo de este dispositivo.',[
  {text:'Cancelar',style:'cancel'},{text:'Eliminar',style:'destructive',
   onPress:()=>{void persistence.deleteReflection(item.id).then(()=>{if(editing===item.id)setEditing(null);refresh();}).catch(()=>setMessage('No se pudo eliminar.'));}}
 ]);
 const grouped=useMemo(()=>{
  const map=new Map<string,Reflection[]>();
  for(const r of entries){const d=new Date(r.updatedAt),year=Number.isNaN(d.getTime())?'Sin fecha':String(d.getFullYear());
   if(!map.has(year))map.set(year,[]);map.get(year)!.push(r);}
  return Array.from(map.entries());
 },[entries]);
 return <Screen theme={theme}><KeyboardAvoidingView style={styles.flex} behavior={Platform.OS==='ios'?'padding':'height'}>
  <ScrollView keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag" contentContainerStyle={styles.stack}>
   <Action theme={theme} variant="tertiary" label="← Volver al menú" onPress={onBack}/>
   <ScreenTitle theme={theme}>Mi diario</ScreenTitle>
   <Body theme={theme} muted>Un espacio personal para recordar lo que aprendiste, oraste o viviste. Las reflexiones se ordenan por año y fecha.</Body>
   <Action theme={theme} label="+ Escribir reflexión" onPress={newEntry}/>
   {message?<Body theme={theme}>{message}</Body>:null}
   {editing?<View style={[styles.editor,{borderColor:theme.border,backgroundColor:theme.surface}]}>
    <Text style={[styles.subtitle,{color:theme.text}]}>{entries.some(x=>x.id===editing)?'Editar reflexión':'Nueva reflexión'}</Text>
    <Field theme={theme} label="Nombre de la reflexión" value={title} onChangeText={setTitle}
     maxLength={120} placeholder="Ej.: Una enseñanza para hoy"/>
    <Text style={[styles.fieldLabel,{color:theme.text}]}>Mi reflexión</Text>
    <TextInput accessibilityLabel="Escribir mi reflexión personal" multiline
      value={body} onChangeText={setBody} placeholder="Escribe aquí lo que quieres recordar…"
      placeholderTextColor={theme.secondary} maxLength={20000}
      style={[styles.bodyInput,{color:theme.text,borderColor:theme.border,backgroundColor:theme.background}]}/>
    <Action theme={theme} label="Guardar reflexión" onPress={()=>{void save();}}/>
    <Action theme={theme} variant="tertiary" label="Cancelar edición" onPress={()=>setEditing(null)}/>
   </View>:null}
   {grouped.length===0?<Body theme={theme} muted>Tu diario está vacío. Puedes empezar con una reflexión de hoy.</Body>:null}
   {grouped.map(([year,items])=><Section theme={theme} key={year} title={'Año '+year}>
    {items.map(item=><View key={item.id} style={[styles.entry,{backgroundColor:theme.surface,borderColor:theme.border}]}>
     <Text style={[styles.itemTitle,{color:theme.text}]}>{reflectionTitle(item)}</Text>
     <Metadata theme={theme}>{labelDate(item.updatedAt)}</Metadata>
     <Text selectable style={[styles.itemText,{color:theme.text}]}>{item.body}</Text>
     <View style={styles.actions}>
      <Action theme={theme} variant="secondary" label="Leer y editar" onPress={()=>open(item)}/>
      <Action theme={theme} variant="tertiary" label="Eliminar" onPress={()=>remove(item)}/>
     </View>
    </View>)}
   </Section>)}
  </ScrollView>
 </KeyboardAvoidingView></Screen>;
}
const styles=StyleSheet.create({flex:{flex:1},stack:{gap:spacing.md,paddingBottom:80},
 editor:{borderWidth:1,borderRadius:16,padding:14,gap:12},
 subtitle:{fontSize:21,fontFamily:'serif',fontWeight:'700'},
 fieldLabel:{fontSize:15,fontWeight:'700'},
 bodyInput:{borderWidth:1,borderRadius:12,minHeight:180,maxHeight:330,textAlignVertical:'top',padding:14,fontSize:17,lineHeight:26},
 entry:{borderWidth:.8,borderRadius:15,padding:14,gap:10,marginBottom:10},
 itemTitle:{fontFamily:'serif',fontSize:18,fontWeight:'700'},itemText:{fontSize:16,lineHeight:24},
 actions:{flexDirection:'row',flexWrap:'wrap',gap:8}});

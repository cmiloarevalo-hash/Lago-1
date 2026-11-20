import {useCallback,useEffect,useMemo,useState} from 'react';
import {Alert,BackHandler,KeyboardAvoidingView,Platform,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteLocalPersistence} from '../../db/sqliteLocalPersistence';
import type {Reflection} from '../../product/adapters';
import {Action,Body,Field,Metadata,Screen,ScreenTitle,Section} from '../primitives';
import {spacing,type Theme} from '../theme';

const PREVIOUS='library-private-reflection';
function labelDate(value:string){
 const d=new Date(value);
 return Number.isNaN(d.getTime())?"Undated":d.toLocaleString('en-US',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'});
}
function reflectionTitle(ref:Reflection){
 return ref.title|| (ref.id===PREVIOUS?"My previous reflection":"personal reflection");
}
export function JournalScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const db=useSQLiteContext(),persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);
 const [entries,setEntries]=useState<readonly Reflection[]>([]),[editing,setEditing]=useState<string|null>(null);
 const [title,setTitle]=useState(''),[body,setBody]=useState(''),[message,setMessage]=useState('');
 const refresh=useCallback(()=>{void persistence.listReflections().then(setEntries).catch(()=>setMessage("The diary could not be read."));},[persistence]);
 useEffect(()=>refresh(),[refresh]);
 const newEntry=()=>{setEditing('diario-'+Date.now()+'-'+Math.floor(Math.random()*10000));setTitle('');setBody('');setMessage('');};
 const open=(item:Reflection)=>{setEditing(item.id);setTitle(reflectionTitle(item));setBody(item.body);setMessage('');};
 const save=async()=>{
  if(!editing||!body.trim()){setMessage("Write your reflection to save it.");return;}
  try{await persistence.upsertReflection({id:editing,title:title.trim()||"my reflection",body:body.trim(),updatedAt:new Date().toISOString()});
   setEditing(null);setMessage("Saved reflection.");refresh();}
  catch{setMessage("Could not save. The text is still visible to try again.");}
 };
 const remove=(item:Reflection)=>Alert.alert("Remove reflection","The reflection will be cleared from this device only.",[
  {text:"Cancel",style:'cancel'},{text:"Eliminate",style:'destructive',
   onPress:()=>{void persistence.deleteReflection(item.id).then(()=>{if(editing===item.id)setEditing(null);refresh();}).catch(()=>setMessage("Could not delete."));}}
 ]);
 const cancelEditing=()=>{
  if(!editing)return;
  const original=entries.find(x=>x.id===editing);
  const wasTitle=original?reflectionTitle(original):'';
  const wasBody=original?.body??'';
  const changed=title.trim()!==wasTitle||body.trim()!==wasBody;
  if(changed)Alert.alert("Discard reflection","There are unsaved changes. Discard them?",[
    {text:'Seguir escribiendo',style:'cancel'},
    {text:'Descartar',style:'destructive',onPress:()=>setEditing(null)}
  ]);
  else setEditing(null);
 };
 useEffect(()=>{
  if(!editing)return;
  const sub=BackHandler.addEventListener('hardwareBackPress',()=>{cancelEditing();return true;});
  return()=>sub.remove();
 },[editing,title,body,entries]);
 const grouped=useMemo(()=>{
  const map=new Map<string,Reflection[]>();
  for(const r of entries){const d=new Date(r.updatedAt),year=Number.isNaN(d.getTime())?"Undated":String(d.getFullYear());
   if(!map.has(year))map.set(year,[]);map.get(year)!.push(r);}
  return Array.from(map.entries());
 },[entries]);
 return <Screen theme={theme}><KeyboardAvoidingView style={styles.flex} behavior={Platform.OS==='ios'?'padding':undefined}>
  <ScrollView keyboardShouldPersistTaps="always" keyboardDismissMode="on-drag" contentContainerStyle={styles.stack}>
   <Action theme={theme} variant="tertiary" label={editing?"← Cancel edit":"← Back"} onPress={editing?cancelEditing:onBack}/>
   <ScreenTitle theme={theme}>{editing?"My diary · edition":"my diary"}</ScreenTitle>
   {editing?<View style={styles.editorActions}>
     <Action theme={theme} label="Save reflection" onPress={()=>{void save();}}/>
   </View>:<>
     <Body theme={theme} muted>A personal space to remember what you learned, prayed or experienced. The reflections are ordered by year and date.</Body>
     <Action theme={theme} label="+ Write reflection" onPress={newEntry}/>
   </>}
   {message?<Body theme={theme}>{message}</Body>:null}
   {editing?<View style={[styles.editor,{borderColor:theme.border,backgroundColor:theme.surface}]}>
    <Text style={[styles.subtitle,{color:theme.text}]}>{entries.some(x=>x.id===editing)?"Edit reflection":"New reflection"}</Text>
    <Field theme={theme} label="Reflection name" value={title} onChangeText={setTitle}
     maxLength={120} placeholder="Ex: A teaching for today"/>
    <Text style={[styles.fieldLabel,{color:theme.text}]}>my reflection</Text>
    <TextInput accessibilityLabel="Write my personal reflection" multiline
      value={body} onChangeText={setBody} placeholder="Write here what you want to remember..."
      placeholderTextColor={theme.secondary} maxLength={20000}
      style={[styles.bodyInput,{color:theme.text,borderColor:theme.border,backgroundColor:theme.background}]}/>
   </View>:null}
   {!editing?<>
   {grouped.length===0?<Body theme={theme} muted>Your diary is empty. You can start with a reflection from today.</Body>:null}
   {grouped.map(([year,items])=><Section theme={theme} key={year} title={"Year"+year}>
    {items.map(item=><View key={item.id} style={[styles.entry,{backgroundColor:theme.surface,borderColor:theme.border}]}>
     <Text style={[styles.itemTitle,{color:theme.text}]}>{reflectionTitle(item)}</Text>
     <Metadata theme={theme}>{labelDate(item.updatedAt)}</Metadata>
     <Text selectable style={[styles.itemText,{color:theme.text}]}>{item.body}</Text>
     <View style={styles.actions}>
      <Action theme={theme} variant="secondary" label="Read and edit" onPress={()=>open(item)}/>
      <Action theme={theme} variant="tertiary" label="Eliminate" onPress={()=>remove(item)}/>
     </View>
    </View>)}
   </Section>)}
   </>:null}
  </ScrollView>
 </KeyboardAvoidingView></Screen>;
}
const styles=StyleSheet.create({flex:{flex:1},stack:{gap:spacing.md,paddingBottom:80},editorActions:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm},
 editor:{borderWidth:1,borderRadius:16,padding:14,gap:12},
 subtitle:{fontSize:21,fontFamily:'serif',fontWeight:'700'},
 fieldLabel:{fontSize:15,fontWeight:'700'},
 bodyInput:{borderWidth:1,borderRadius:12,minHeight:180,maxHeight:330,textAlignVertical:'top',padding:14,fontSize:17,lineHeight:26},
 entry:{borderWidth:.8,borderRadius:15,padding:14,gap:10,marginBottom:10},
 itemTitle:{fontFamily:'serif',fontSize:18,fontWeight:'700'},itemText:{fontSize:16,lineHeight:24},
 actions:{flexDirection:'row',flexWrap:'wrap',gap:8}});

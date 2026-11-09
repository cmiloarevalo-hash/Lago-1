import {useCallback,useEffect,useMemo,useState} from 'react';
import {Alert,KeyboardAvoidingView,Platform,ScrollView,StyleSheet,Text,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLiteLocalPersistence} from '../../db/sqliteLocalPersistence';
import type {HighlightTone,SavedReference} from '../../product/adapters';
import {Action,Body,ChoiceChip,Field,Metadata,Screen,ScreenTitle,Section} from '../primitives';
import {spacing,type Theme} from '../theme';

const colors:{tone:HighlightTone;label:string;color:string}[]=[
 {tone:'rose',label:'Rosa',color:'#F8CFDC'},
 {tone:'lavender',label:'Lavanda',color:'#DDCFEF'},
 {tone:'peach',label:'Durazno',color:'#F8D9B7'},
];
export function SavedVersesScreen({theme,onBack,onOpenReader}:{theme:Theme;onBack:()=>void;onOpenReader:(book:string,chapter:number,verse?:number)=>void}){
 const db=useSQLiteContext(),persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);
 const [items,setItems]=useState<readonly SavedReference[]>([]),[editing,setEditing]=useState<SavedReference|null>(null);
 const [title,setTitle]=useState(''),[topic,setTopic]=useState(''),[tone,setTone]=useState<HighlightTone>('rose'),[status,setStatus]=useState('');
 const refresh=useCallback(()=>{void persistence.listSavedReferences().then(setItems).catch(()=>setStatus('No se pudieron cargar los versículos guardados.'));},[persistence]);
 useEffect(()=>refresh(),[refresh]);
 const edit=(ref:SavedReference)=>{setEditing(ref);setTitle(ref.title??'');setTopic(ref.topic??'');setTone(ref.tone??'rose');setStatus('');};
 const save=async()=>{if(!editing)return;try{await persistence.setSavedReferenceDetails(editing,title,topic,tone);setEditing(null);setStatus('Nombre, tema y color guardados.');refresh();}catch{setStatus('No se pudo guardar la clasificación.');}};
 const remove=(ref:SavedReference)=>Alert.alert('Quitar guardado','Se quitará este versículo de Guardados sin borrar tus notas ni resaltados.',[
  {text:'Cancelar',style:'cancel'},
  {text:'Quitar',style:'destructive',onPress:()=>{void persistence.removeSavedReference(ref).then(()=>{setEditing(null);refresh();}).catch(()=>setStatus('No se pudo quitar.'));}}
 ]);
 const titleOf=(r:SavedReference)=>r.title?.trim()||r.bookName+' '+r.chapter+':'+r.verse;
 return <Screen theme={theme}><KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==='ios'?'padding':'height'}>
  <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.stack}>
   <Action label="← Volver a Biblioteca" variant="tertiary" theme={theme} onPress={onBack}/>
   <ScreenTitle theme={theme}>Versículos guardados</ScreenTitle>
   <Body theme={theme} muted>Clasifica tus versículos por nombre, tema y color. Se conserva todo en este dispositivo.</Body>
   {status?<Body theme={theme}>{status}</Body>:null}
   {editing?<Section theme={theme} title={'Organizar · '+(editing.bookName??editing.bookId)+' '+editing.chapter+':'+editing.verse}>
    <Field theme={theme} label="Nombre del guardado" value={title} onChangeText={setTitle} maxLength={120} placeholder="Ej.: Paz en momentos difíciles"/>
    <Field theme={theme} label="Tema o categoría" value={topic} onChangeText={setTopic} maxLength={100} placeholder="Ej.: Esperanza"/>
    <Body theme={theme} muted>Color para identificar el guardado</Body>
    <View style={styles.colors}>{colors.map(c=><ChoiceChip key={c.tone} label={c.label} selected={tone===c.tone} theme={theme} onPress={()=>setTone(c.tone)}/>)}</View>
    <Action label="Guardar nombre, tema y color" theme={theme} onPress={()=>{void save();}}/>
    <Action label="Cancelar edición" variant="tertiary" theme={theme} onPress={()=>setEditing(null)}/>
   </Section>:null}
   <Section theme={theme} title={'Mis guardados · '+items.length}>
    {items.length===0?<Body theme={theme} muted>No hay versículos guardados todavía. Abre un capítulo bíblico y selecciona Guardar referencia.</Body>:null}
    {items.map(ref=><View key={ref.bookId+':'+ref.chapter+':'+ref.verse}
      style={[styles.saved,{borderColor:theme.border,backgroundColor:theme.surface,borderLeftColor:colors.find(c=>c.tone===(ref.tone??'rose'))?.color}]}>
      <Text selectable style={[styles.name,{color:theme.text}]}>{titleOf(ref)}</Text>
      <Metadata theme={theme}>{(ref.bookName??ref.bookId)+' '+ref.chapter+':'+ref.verse} · {ref.topic||'Sin tema asignado'}</Metadata>
      <View style={styles.actions}>
       <Action theme={theme} variant="secondary" label="Leer versículo" onPress={()=>onOpenReader(ref.bookId,ref.chapter,ref.verse)}/>
       <Action theme={theme} variant="tertiary" label="Editar ficha" onPress={()=>edit(ref)}/>
       <Action theme={theme} variant="tertiary" label="Quitar" onPress={()=>remove(ref)}/>
      </View>
    </View>)}
   </Section>
  </ScrollView></KeyboardAvoidingView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:60},saved:{borderWidth:.8,borderLeftWidth:7,borderRadius:14,padding:14,gap:9},name:{fontSize:18,fontWeight:'700',fontFamily:'serif'},colors:{flexDirection:'row',flexWrap:'wrap',gap:7},actions:{flexDirection:'row',flexWrap:'wrap',gap:7}});

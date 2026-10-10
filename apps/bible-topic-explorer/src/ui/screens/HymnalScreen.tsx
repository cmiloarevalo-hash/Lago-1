import {useEffect,useMemo,useState} from 'react';
import {BackHandler,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLitePersonalLyricsRepository,type PersonalLyric} from '../../db/sqlitePersonalLyricsRepository';
import {originalLyrics} from '../../product/originalLyrics';
import {songGuides} from '../../product/pastoralSongs';
import {Action,Body,Card,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,type Theme} from '../theme';
type Props={theme:Theme;onBack:()=>void;readingScale?:number};
export function HymnalScreen({theme,onBack,readingScale=1}:Props){
 const db=useSQLiteContext(),repo=useMemo(()=>new SQLitePersonalLyricsRepository(db),[db]);
 const [personal,setPersonal]=useState<PersonalLyric[]>([]),[query,setQuery]=useState(''),[active,setActive]=useState<string|null>(null);
 const [editing,setEditing]=useState(false),[title,setTitle]=useState(''),[draft,setDraft]=useState(''),[editId,setEditId]=useState<string|null>(null),[error,setError]=useState('');
 const refresh=()=>{void repo.list().then(setPersonal).catch(()=>setError('No se pudo leer las letras privadas.'));};
 useEffect(()=>{refresh();},[repo]);
 useEffect(()=>{const listener=BackHandler.addEventListener('hardwareBackPress',()=>{if(editing||active){setEditing(false);setActive(null);return true;}return false;});return()=>listener.remove();},[editing,active]);
 const selectedOriginal=originalLyrics.find(x=>x.id===active),selectedPersonal=personal.find(x=>x.id===active);
 const copyrightPending=songGuides.find(x=>x.id===active);
 const begin=(v?:PersonalLyric)=>{setEditId(v?.id??null);setTitle(v?.title??'');setDraft(v?.text??'');setEditing(true);setActive(null);};
 const save=async()=>{try{if(!title.trim()||!draft.trim())throw Error('Título y letra obligatorios.');const id=editId??('own-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8));
 await repo.save({id,title:title.trim(),text:draft,updatedAt:new Date().toISOString()});setEditing(false);setError('');refresh();setActive(id);}catch{setError('No se pudo guardar. Máximo 160 caracteres de título y 15.000 de letra.');}};
 const readerStyle={fontSize:Math.max(19,21*readingScale),lineHeight:Math.max(30,34*readingScale),color:theme.text,fontFamily:'serif' as const};
 const items=[...originalLyrics.map(x=>({id:x.id,title:x.title,kind:'original' as const})),...personal.map(x=>({id:x.id,title:x.title,kind:'personal' as const})),...songGuides.map(x=>({id:x.id,title:x.title,kind:'pending' as const}))].filter(x=>x.title.toLocaleLowerCase('es').includes(query.trim().toLocaleLowerCase('es')));
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack} keyboardShouldPersistTaps="handled">
  <Action theme={theme} variant="tertiary" label={editing||active?'← Índice del cancionero':'← Volver al menú'} onPress={()=>{if(editing||active){setEditing(false);setActive(null);}else onBack();}}/>
  <ScreenTitle theme={theme}>Cancionero · letras</ScreenTitle>
  <Body theme={theme} muted>Lee letras completas de creación original o tus letras privadas sin conexión. Las 20 canciones conocidas requieren licencia por obra/versión antes de incluir texto.</Body>
  <StatusBanner theme={theme} kind="info">{originalLyrics.length} letras originales de proyecto en revisión de distribución; {personal.length} letras privadas; {songGuides.length} títulos con LICENCIA_PENDIENTE. Ninguna letra protegida se ha copiado.</StatusBanner>
  {error?<StatusBanner theme={theme} kind="error">{error}</StatusBanner>:null}
  {editing?<Section theme={theme} title={editId?'Editar mi letra privada':'Crear mi letra privada'}>
   <Metadata theme={theme}>Sin sincronización ni publicación. Introduce solo letras que tengas derecho a guardar/usar.</Metadata>
   <TextInput accessibilityLabel="Título de letra personal" placeholderTextColor={theme.secondary} placeholder="Título" value={title} onChangeText={setTitle} maxLength={160} style={[styles.input,{color:theme.text,borderColor:theme.border,backgroundColor:theme.surface}]}/>
   <TextInput accessibilityLabel="Texto completo de mi letra" multiline placeholderTextColor={theme.secondary} placeholder="Escribe tu letra…" value={draft} onChangeText={setDraft} maxLength={15000} style={[styles.editor,{color:theme.text,borderColor:theme.border,backgroundColor:theme.surface}]}/>
   <Action theme={theme} label="Guardar letra en este dispositivo" onPress={()=>{void save();}}/>
   <Action theme={theme} variant="secondary" label="Cancelar edición" onPress={()=>setEditing(false)}/>
  </Section>:active?<Section theme={theme} title={selectedOriginal?.title??selectedPersonal?.title??copyrightPending?.title??'Letra'}>
   {selectedOriginal?<Card theme={theme}>
     <Metadata theme={theme}>ORIGINAL_PROYECTO · EN REVISIÓN</Metadata><Subhead theme={theme}>{selectedOriginal.title}</Subhead>
     <Text selectable style={readerStyle}>{selectedOriginal.lyrics}</Text>
     <Subhead theme={theme}>Autoría, versión y derechos</Subhead><Metadata theme={theme}>{selectedOriginal.author}; {selectedOriginal.version}. {selectedOriginal.licenceNote} Fuente: {selectedOriginal.source}</Metadata>
   </Card>:selectedPersonal?<Card theme={theme}>
     <Metadata theme={theme}>LETRA_PERSONAL · ALMACENAMIENTO PRIVADO</Metadata>
     <Text selectable style={readerStyle}>{selectedPersonal.text}</Text><Action theme={theme} variant="secondary" label="Editar esta letra privada" onPress={()=>begin(selectedPersonal)}/>
   </Card>:<Card theme={theme}>
     <Metadata theme={theme}>LICENCIA_PENDIENTE · LETRA NO INCLUIDA</Metadata>
     <Body theme={theme}>No existe autorización documentada para distribuir la letra completa de este título, versión o traducción. No se mostrará contenido inventado ni copiado.</Body>
     <Metadata theme={theme}>Título orientativo, intérprete/versión y editor pendientes de acreditar.</Metadata>
   </Card>}
  </Section>:<>
    <Action theme={theme} label="Crear mi letra privada" onPress={()=>begin()}/>
    <TextInput accessibilityLabel="Buscar títulos del cancionero" placeholder="Buscar por título…" value={query} onChangeText={setQuery} placeholderTextColor={theme.secondary} style={[styles.input,{color:theme.text,borderColor:theme.border,backgroundColor:theme.surface}]}/>
    {items.map(x=><Card theme={theme} key={x.id}>
     <Subhead theme={theme}>{x.title}</Subhead>
     <Metadata theme={theme}>{x.kind==='pending'?'LICENCIA_PENDIENTE':x.kind==='original'?'ORIGINAL_PROYECTO · pendiente confirmación Owner':'LETRA_PERSONAL'}</Metadata>
     <Action theme={theme} variant="secondary" label={'Abrir título '+x.title} onPress={()=>setActive(x.id)}/>
    </Card>)}
    {!items.length?<Body theme={theme} muted>Sin títulos para esta búsqueda.</Body>:null}
  </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},input:{borderWidth:1,borderRadius:12,padding:14,fontSize:17},editor:{minHeight:260,textAlignVertical:'top',borderWidth:1,borderRadius:12,padding:14,fontSize:18}});

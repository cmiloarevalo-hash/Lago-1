import {useEffect,useMemo,useState} from 'react';
import {BackHandler,Pressable,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLitePersonalLyricsRepository,type PersonalLyric} from '../../db/sqlitePersonalLyricsRepository';
import {originalLyrics} from '../../product/originalLyrics';
import {songGuides} from '../../product/pastoralSongs';
import {Action,Body,Metadata,Screen,StatusBanner} from '../primitives';
import {spacing,type Theme} from '../theme';
type Props={theme:Theme;onBack:()=>void;readingScale?:number};
export function HymnalScreen({theme,onBack,readingScale=1}:Props){
 const db=useSQLiteContext(),repo=useMemo(()=>new SQLitePersonalLyricsRepository(db),[db]);
 const [personal,setPersonal]=useState<PersonalLyric[]>([]),[query,setQuery]=useState(''),[active,setActive]=useState<string|null>(null);
 const [editing,setEditing]=useState(false),[title,setTitle]=useState(''),[draft,setDraft]=useState(''),[editId,setEditId]=useState<string|null>(null),[error,setError]=useState('');
 const refresh=()=>{void repo.list().then(setPersonal).catch(()=>setError("Your local letters could not be read."));};
 useEffect(()=>{refresh();},[repo]);
 useEffect(()=>{const listener=BackHandler.addEventListener('hardwareBackPress',()=>{if(editing||active){setEditing(false);setActive(null);return true;}return false;});return()=>listener.remove();},[editing,active]);
 const selectedOriginal=originalLyrics.find(x=>x.id===active),selectedPersonal=personal.find(x=>x.id===active),pending=songGuides.find(x=>x.id===active);
 const begin=(v?:PersonalLyric)=>{setEditId(v?.id??null);setTitle(v?.title??'');setDraft(v?.text??'');setEditing(true);setActive(null);};
 const save=async()=>{try{if(!title.trim()||!draft.trim())throw Error("Complete title and lyrics.");const id=editId??('own-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8));await repo.save({id,title:title.trim(),text:draft,updatedAt:new Date().toISOString()});setEditing(false);setError('');refresh();setActive(id);}catch{setError("Could not save. Limit: title 160 characters and lyrics 15,000 characters.");}};
 const matches=(x:string)=>x.toLocaleLowerCase('en').includes(query.trim().toLocaleLowerCase('en'));
 const filteredPersonal=personal.filter(x=>matches(x.title)),filteredOriginal=originalLyrics.filter(x=>matches(x.title)),filteredPending=songGuides.filter(x=>matches(x.title));
 const readerStyle={fontSize:Math.max(19,21*readingScale),lineHeight:Math.max(30,34*readingScale),color:theme.text,fontFamily:'serif' as const};
 const row=(id:string,name:string,sub:string,symbol:string)=><Pressable key={id} accessibilityRole="button" accessibilityLabel={"Open"+name+', '+sub} onPress={()=>setActive(id)} style={({pressed})=>[styles.songRow,{borderBottomColor:theme.border,backgroundColor:pressed?theme.surfaceSoft:'transparent'}]}>
  <View style={[styles.songSymbol,{backgroundColor:theme.surfaceSoft}]}><Text style={{color:theme.primaryText,fontSize:22}}>{symbol}</Text></View>
  <View style={styles.songCopy}><Text style={[styles.songTitle,{color:theme.text}]}>{name}</Text><Text style={[styles.songHint,{color:theme.secondary}]}>{sub}</Text></View><Text style={[styles.chevron,{color:theme.primaryText}]}>›</Text>
 </Pressable>;
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack} keyboardShouldPersistTaps="handled">
  <Action theme={theme} variant="tertiary" label={editing||active?'← Cancionero':"← Resources"} onPress={()=>{if(editing||active){setEditing(false);setActive(null);}else onBack();}}/>
  <Text accessibilityRole="header" style={[styles.pageTitle,{color:theme.text}]}>Cancionero</Text>
  <Text style={[styles.subtitle,{color:theme.secondary}]}>Lyrics to read and sing at your own pace. Your notes remain on the device.</Text>
  {error?<StatusBanner theme={theme} kind="error">{error}</StatusBanner>:null}
  {editing?<View style={[styles.paper,{backgroundColor:theme.surface,borderColor:theme.border}]}>
    <Text style={[styles.sectionHeading,{color:theme.text}]}>{editId?"Edit my lyrics":"My new letter"}</Text>
    <Text style={[styles.helper,{color:theme.secondary}]}>For private personal use only. It does not sync or publish.</Text>
    <TextInput accessibilityLabel="Personal letter title" placeholder="song title" value={title} onChangeText={setTitle} maxLength={160} placeholderTextColor={theme.secondary} style={[styles.input,{color:theme.text,borderColor:theme.border,backgroundColor:theme.background}]}/>
    <TextInput accessibilityLabel="Full text of my lyrics" multiline placeholder="Write your letter here..." value={draft} onChangeText={setDraft} maxLength={15000} placeholderTextColor={theme.secondary} style={[styles.editor,{color:theme.text,borderColor:theme.border,backgroundColor:theme.background}]}/>
    <Action theme={theme} label="Save to this device" onPress={()=>{void save();}}/><Action theme={theme} variant="secondary" label="Cancel" onPress={()=>setEditing(false)}/>
   </View>:active?<View style={[styles.paper,{backgroundColor:theme.surface,borderColor:theme.border}]}>
    <Text accessibilityRole="header" style={[styles.readTitle,{color:theme.text}]}>{selectedOriginal?.title??selectedPersonal?.title??pending?.title??'Letra'}</Text>
    {selectedPersonal?<><Text style={[styles.helper,{color:theme.secondary}]}>My lyrics private and available offline</Text><Text selectable style={readerStyle}>{selectedPersonal.text}</Text><Action theme={theme} variant="secondary" label="Edit my lyrics ✎" onPress={()=>begin(selectedPersonal)}/></>:null}
    {selectedOriginal?<><Text style={[styles.helper,{color:theme.secondary}]}>Original draft · distribution pending authorization</Text><Text selectable style={readerStyle}>{selectedOriginal.lyrics}</Text><Text style={[styles.helper,{color:theme.secondary}]}>{selectedOriginal.author}. {selectedOriginal.version}. Rights under review: {selectedOriginal.licenceNote}</Text></>:null}
    {pending?<><Text style={[styles.helper,{color:theme.secondary}]}>Letra pendiente de derechos</Text><Body theme={theme}>This title does not yet have documented permission to distribute its lyrics. Here no invented version is substituted nor is protected material copied.</Body><Metadata theme={theme}>Availability requires authorization of the specific work and version.</Metadata></>:null}
   </View>:<>
    <View style={[styles.searchPanel,{backgroundColor:theme.surface,borderColor:theme.border}]}>
      <TextInput accessibilityLabel="Search songbook titles" placeholder="⌕ Search for a song…" value={query} onChangeText={setQuery} placeholderTextColor={theme.secondary} style={[styles.searchInput,{color:theme.text}]}/>
    </View>
    <View style={[styles.availability,{backgroundColor:theme.selectionBg}]}>
      <Text style={[styles.sectionHeading,{color:theme.text}]}>Available lyrics</Text>
      <Text style={[styles.helper,{color:theme.secondary}]}>0 external songs authorized for distribution. The rights review is still open.</Text>
    </View>
    <View style={styles.sectionHead}><Text style={[styles.sectionHeading,{color:theme.text}]}>my letters</Text><Text style={[styles.count,{color:theme.secondary}]}>{filteredPersonal.length}</Text></View>
    <Action theme={theme} label="+ Write my private letter" onPress={()=>begin()}/>
    {filteredPersonal.length?<View style={[styles.songList,{backgroundColor:theme.surface,borderColor:theme.border}]}>{filteredPersonal.map(x=>row(x.id,x.title,'Guardada solo en este dispositivo','♫'))}</View>:<Text style={[styles.helper,{color:theme.secondary}]}>You don't have private letters yet with this search.</Text>}
    <View style={styles.sectionHead}><Text style={[styles.sectionHeading,{color:theme.text}]}>Pendientes de derechos</Text><Text style={[styles.count,{color:theme.secondary}]}>{filteredOriginal.length+filteredPending.length}</Text></View>
    {filteredOriginal.length?<View style={[styles.songList,{backgroundColor:theme.surface,borderColor:theme.border}]}>{filteredOriginal.map(x=>row(x.id,x.title,"Original draft authorization under review",'✧'))}</View>:null}
    {filteredPending.length?<View style={[styles.songList,{backgroundColor:theme.surface,borderColor:theme.border}]}>{filteredPending.map(x=>row(x.id,x.title,"Known title · lyrics not included",'♪'))}</View>:null}
    {!filteredOriginal.length&&!filteredPending.length?<Text style={[styles.helper,{color:theme.secondary}]}>No pending titles for this search.</Text>:null}
    <Metadata theme={theme}>4 original drafts require confirmation of ownership and distribution; 20 known letters remain without an accredited license.</Metadata>
   </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:16,paddingBottom:38},pageTitle:{fontFamily:'serif',fontSize:30,fontWeight:'700'},subtitle:{fontSize:15,lineHeight:22},
 searchPanel:{minHeight:52,borderWidth:.7,borderRadius:16,paddingHorizontal:14,justifyContent:'center'},
 searchInput:{fontSize:17,minHeight:50},availability:{padding:17,borderRadius:18,gap:5},
 sectionHead:{flexDirection:'row',alignItems:'baseline',justifyContent:'space-between',gap:10,marginTop:8},
 sectionHeading:{fontFamily:'serif',fontSize:22,lineHeight:29,fontWeight:'700'},count:{fontSize:14},
 songList:{borderWidth:.7,borderRadius:19,paddingHorizontal:10,overflow:'hidden'},songRow:{minHeight:74,borderBottomWidth:.6,flexDirection:'row',alignItems:'center',gap:12,paddingVertical:7,paddingHorizontal:3},
 songSymbol:{width:46,height:46,borderRadius:15,justifyContent:'center',alignItems:'center'},
 songCopy:{flex:1,gap:4},songTitle:{fontFamily:'serif',fontSize:17,fontWeight:'700'},songHint:{fontSize:12,lineHeight:18},
 chevron:{fontSize:27},helper:{fontSize:14,lineHeight:21},paper:{padding:18,gap:17,borderWidth:.7,borderRadius:22},
 readTitle:{fontFamily:'serif',fontSize:26,lineHeight:33,fontWeight:'700'},
 input:{minHeight:54,borderWidth:1,borderRadius:14,padding:13,fontSize:17},
 editor:{minHeight:280,borderWidth:1,borderRadius:14,padding:13,fontFamily:'serif',fontSize:19,lineHeight:30,textAlignVertical:'top'}
});

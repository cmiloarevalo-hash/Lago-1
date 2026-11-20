import {useState} from 'react';
import {Linking,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import WebView from 'react-native-webview';
import {youtubeEmbedUrl,youtubeExternalUrl,youtubePlaylistId,youtubePlaylistStatus} from '../../product/youtube';
import {Action,Body,Metadata,Screen,StatusBanner} from '../primitives';
import {spacing,type Theme} from '../theme';
export function YouTubeScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [raw,setRaw]=useState(''),[selected,setSelected]=useState<string|null>(null),[error,setError]=useState('');
 const candidate=youtubePlaylistId(raw);
 const openExternal=(uri:string)=>{void Linking.openURL(uri).catch(()=>setError("Could not open YouTube; Check the connection or external application."));};
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack} keyboardShouldPersistTaps="handled">
  <Action theme={theme} variant="tertiary" label="← Resources" onPress={onBack}/>
  <Text accessibilityRole="header" style={[styles.heading,{color:theme.text}]}>Music on YouTube</Text>
  <Body theme={theme} muted>Listen and watch from the official player, when you choose a valid list. The Bible does not need the internet.</Body>
  <View style={[styles.playerCard,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <View style={styles.identity}><View style={styles.identitySymbol}><Text style={styles.identityMark}>▶</Text></View><Text style={[styles.identityTitle,{color:theme.text}]}>YouTube</Text><Text style={[styles.identityHint,{color:theme.secondary}]}>VISIBLE VIDEO</Text></View>
   {selected?
    <View style={styles.video}>
     <WebView key={selected} source={{uri:youtubeEmbedUrl(selected)}} originWhitelist={['https://*']} javaScriptEnabled domStorageEnabled mediaPlaybackRequiresUserAction
      allowsFullscreenVideo allowsInlineMediaPlayback={false} mixedContentMode="never"
      onError={()=>setError('Could not load the list. You can open it on YouTube.')}
      onHttpError={()=>setError("The list may not allow insertion. Open it on YouTube.")}
      style={styles.webView}/>
    </View>:
    <View accessible accessibilityLabel="No video loaded. Playlist pending approval. There is no playback." style={styles.emptyVideo}>
     <View style={styles.emptyAccent}><Text style={styles.emptyGlyph}>▣</Text></View>
     <Text style={styles.emptyTitle}>Select a YouTube playlist</Text>
     <Text style={styles.emptyMessage}>There is no approved playlist or real preview yet.</Text>
     <Text style={styles.state}>List pending approval</Text>
    </View>}
   {selected?<View style={styles.playerActions}><Action theme={theme} variant="secondary" label="Open this list on YouTube ↗" onPress={()=>openExternal(youtubeExternalUrl(selected))}/><Action theme={theme} variant="tertiary" label="Remove visible video" onPress={()=>setSelected(null)}/></View>:null}
  </View>
  {error?<StatusBanner theme={theme} kind="error">{error}</StatusBanner>:null}
  <View style={[styles.selector,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <Text style={[styles.sectionTitle,{color:theme.text}]}>Choose a playlist</Text>
   <Text style={[styles.helper,{color:theme.secondary}]}>Paste an authentic playlist URL, selected by you. Some lists do not allow insertion by region or rights.</Text>
   <TextInput accessibilityLabel="URL de playlist YouTube" value={raw} onChangeText={v=>{setRaw(v);setError('');}} autoCapitalize="none" autoCorrect={false} placeholder="https://www.youtube.com/playlist?list=…" placeholderTextColor={theme.secondary}
    style={[styles.input,{color:theme.text,borderColor:theme.border,backgroundColor:theme.background}]}/>
   <Action theme={theme} label="Upload official visible video" disabled={!candidate} onPress={()=>{setSelected(candidate);setError('');}}/>
   <Action theme={theme} variant="secondary" label="Open YouTube ↗" onPress={()=>openExternal('https://www.youtube.com/')}/>
  </View>
  <Metadata theme={theme}>Bible – Pastoral Guide does not download or extract audio, does not play in the background, does not hide controls or announce playback before checking it.</Metadata>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:40},heading:{fontFamily:'serif',fontSize:30,fontWeight:'700'},
 playerCard:{borderWidth:.7,borderRadius:22,padding:14,gap:13,elevation:3},
 identity:{flexDirection:'row',alignItems:'center',gap:9,minHeight:34},
 identitySymbol:{width:34,height:24,backgroundColor:'#E62117',borderRadius:7,justifyContent:'center',alignItems:'center'},
 identityMark:{color:'#FFFFFF',fontSize:13,fontWeight:'700'},identityTitle:{fontSize:18,fontWeight:'800'},
 identityHint:{fontSize:10,fontWeight:'800',letterSpacing:.6,marginLeft:'auto'},
 video:{width:'100%',aspectRatio:16/9,minHeight:200,borderRadius:14,overflow:'hidden',backgroundColor:'#090909'},
 webView:{flex:1,backgroundColor:'#080808'},
 emptyVideo:{width:'100%',aspectRatio:16/9,minHeight:200,borderRadius:14,backgroundColor:'#17232F',alignItems:'center',justifyContent:'center',gap:9,padding:16},
 emptyAccent:{borderRadius:15,width:52,height:45,backgroundColor:'#263644',alignItems:'center',justifyContent:'center'},
 emptyGlyph:{color:'#DDDEE0',fontSize:25},emptyTitle:{fontSize:16,fontWeight:'700',color:'#FFFFFF',textAlign:'center'},
 emptyMessage:{fontSize:13,lineHeight:20,color:'#D1DBE3',textAlign:'center'},
 state:{fontSize:12,fontWeight:'500',color:'#F4DEB3',letterSpacing:0},
 playerActions:{gap:9},selector:{padding:15,borderRadius:20,borderWidth:.7,gap:12},
 sectionTitle:{fontFamily:'serif',fontSize:21,fontWeight:'700'},helper:{fontSize:14,lineHeight:22},
 input:{minHeight:52,borderWidth:1,borderRadius:14,fontSize:15,padding:12}
});

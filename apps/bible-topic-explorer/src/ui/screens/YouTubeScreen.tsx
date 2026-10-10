import {useState} from 'react';
import {Linking,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import WebView from 'react-native-webview';
import {youtubeEmbedUrl,youtubeExternalUrl,youtubePlaylistId,youtubePlaylistStatus} from '../../product/youtube';
import {Action,Body,Metadata,Screen,StatusBanner} from '../primitives';
import {spacing,type Theme} from '../theme';
export function YouTubeScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [raw,setRaw]=useState(''),[selected,setSelected]=useState<string|null>(null),[error,setError]=useState('');
 const candidate=youtubePlaylistId(raw);
 const openExternal=(uri:string)=>{void Linking.openURL(uri).catch(()=>setError('No se pudo abrir YouTube; comprueba la conexión o la aplicación externa.'));};
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack} keyboardShouldPersistTaps="handled">
  <Action theme={theme} variant="tertiary" label="← Recursos" onPress={onBack}/>
  <Text accessibilityRole="header" style={[styles.heading,{color:theme.text}]}>Música en YouTube</Text>
  <Body theme={theme} muted>Escucha y mira desde el reproductor oficial, cuando elijas una lista válida. La Biblia no necesita internet.</Body>
  <View style={[styles.playerCard,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <View style={styles.identity}><View style={styles.identitySymbol}><Text style={styles.identityMark}>▶</Text></View><Text style={[styles.identityTitle,{color:theme.text}]}>YouTube</Text><Text style={[styles.identityHint,{color:theme.secondary}]}>VÍDEO VISIBLE</Text></View>
   {selected?
    <View style={styles.video}>
     <WebView key={selected} source={{uri:youtubeEmbedUrl(selected)}} originWhitelist={['https://*']} javaScriptEnabled domStorageEnabled mediaPlaybackRequiresUserAction
      allowsFullscreenVideo allowsInlineMediaPlayback={false} mixedContentMode="never"
      onError={()=>setError('No se pudo cargar la lista. Puedes abrirla en YouTube.')}
      onHttpError={()=>setError('La lista puede no permitir su inserción. Ábrela en YouTube.')}
      style={styles.webView}/>
    </View>:
    <View accessible accessibilityLabel="Sin vídeo cargado. Playlist pendiente de aprobación. No hay reproducción." style={styles.emptyVideo}>
     <View style={styles.emptyAccent}><Text style={styles.emptyGlyph}>▣</Text></View>
     <Text style={styles.emptyTitle}>Selecciona una lista de YouTube</Text>
     <Text style={styles.emptyMessage}>Aún no hay playlist aprobada ni vista previa real.</Text>
     <Text style={styles.state}>{youtubePlaylistStatus}</Text>
    </View>}
   {selected?<View style={styles.playerActions}><Action theme={theme} variant="secondary" label="Abrir esta lista en YouTube ↗" onPress={()=>openExternal(youtubeExternalUrl(selected))}/><Action theme={theme} variant="tertiary" label="Quitar vídeo visible" onPress={()=>setSelected(null)}/></View>:null}
  </View>
  {error?<StatusBanner theme={theme} kind="error">{error}</StatusBanner>:null}
  <View style={[styles.selector,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <Text style={[styles.sectionTitle,{color:theme.text}]}>Elegir una playlist</Text>
   <Text style={[styles.helper,{color:theme.secondary}]}>Pega una URL auténtica de playlist, seleccionada por ti. Algunas listas no permiten inserción por región o derechos.</Text>
   <TextInput accessibilityLabel="URL de playlist YouTube" value={raw} onChangeText={v=>{setRaw(v);setError('');}} autoCapitalize="none" autoCorrect={false} placeholder="https://www.youtube.com/playlist?list=…" placeholderTextColor={theme.secondary}
    style={[styles.input,{color:theme.text,borderColor:theme.border,backgroundColor:theme.background}]}/>
   <Action theme={theme} label="Cargar vídeo oficial visible" disabled={!candidate} onPress={()=>{setSelected(candidate);setError('');}}/>
   <Action theme={theme} variant="secondary" label="Abrir YouTube ↗" onPress={()=>openExternal('https://www.youtube.com/')}/>
  </View>
  <Metadata theme={theme}>La U no descarga ni extrae audio, no reproduce en segundo plano, no oculta los controles ni anuncia playback antes de comprobarlo.</Metadata>
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
 state:{fontSize:11,fontWeight:'800',color:'#E7C77A',letterSpacing:.75},
 playerActions:{gap:9},selector:{padding:15,borderRadius:20,borderWidth:.7,gap:12},
 sectionTitle:{fontFamily:'serif',fontSize:21,fontWeight:'700'},helper:{fontSize:14,lineHeight:22},
 input:{minHeight:52,borderWidth:1,borderRadius:14,fontSize:15,padding:12}
});

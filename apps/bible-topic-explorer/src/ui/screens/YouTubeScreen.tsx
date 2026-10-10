import {useState} from 'react';
import {Linking,ScrollView,StyleSheet,TextInput,View} from 'react-native';
import WebView from 'react-native-webview';
import {youtubeEmbedUrl,youtubeExternalUrl,youtubePlaylistId,youtubePlaylistStatus} from '../../product/youtube';
import {Action,Body,Card,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,radius,type Theme} from '../theme';
export function YouTubeScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [raw,setRaw]=useState(''),[selected,setSelected]=useState<string|null>(null),[error,setError]=useState('');
 const candidate=youtubePlaylistId(raw);
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack} keyboardShouldPersistTaps="handled">
  <Action theme={theme} variant="tertiary" label="← Volver al menú" onPress={onBack}/>
  <ScreenTitle theme={theme}>Música cristiana · YouTube</ScreenTitle>
  <StatusBanner theme={theme} kind="warning">Estado: {youtubePlaylistStatus}. Falta que el propietario apruebe una lista cristiana concreta con inserción permitida. No hay pistas simuladas.</StatusBanner>
  <Body theme={theme} muted>Reproductor oficial de vídeo visible; controles de YouTube conservados, sin extracción de audio, descargas, reproducción oculta ni anuncios suprimidos. Usa conexión a internet.</Body>
  <Section theme={theme} title="Probar una playlist por decisión del usuario">
   <Metadata theme={theme}>Pega una URL https://www.youtube.com/playlist?list=… válida, elegida por ti. No se memoriza ni valida su licencia: YouTube puede prohibir inserción en algunos vídeos.</Metadata>
   <TextInput accessibilityLabel="URL de playlist YouTube elegida por el usuario" value={raw} onChangeText={v=>{setRaw(v);setError('');}} autoCapitalize="none" autoCorrect={false} placeholder="URL de playlist YouTube" placeholderTextColor={theme.secondary} style={[styles.input,{color:theme.text,borderColor:theme.border,backgroundColor:theme.surface}]}/>
   <Action theme={theme} label="Mostrar vídeo oficial visible" disabled={!candidate} onPress={()=>{setSelected(candidate);setError('');}}/>
   {error?<StatusBanner theme={theme} kind="warning">{error}</StatusBanner>:null}
  </Section>
  {selected?<Card theme={theme} featured>
   <Subhead theme={theme}>Vídeo oficial de YouTube · reproducción a solicitud</Subhead>
   <View style={[styles.video,{borderColor:theme.border}]}>
    <WebView key={selected} source={{uri:youtubeEmbedUrl(selected)}} originWhitelist={['https://*']} javaScriptEnabled domStorageEnabled mediaPlaybackRequiresUserAction
      allowsFullscreenVideo allowsInlineMediaPlayback={false} mixedContentMode="never"
      onError={()=>setError('No fue posible cargar YouTube. Abre la lista externamente o revisa la conexión.')}
      onHttpError={()=>setError('YouTube devolvió un error; esta lista puede no permitir inserción.')}
      style={{flex:1,backgroundColor:'#000'}}/>
   </View>
   <Metadata theme={theme}>Vídeo y controles permanecen visibles. No cerrar/ocultar el reproductor para continuar audio.</Metadata>
   <Action theme={theme} variant="secondary" label="Abrir playlist en YouTube ↗" onPress={()=>{void Linking.openURL(youtubeExternalUrl(selected)).catch(()=>setError('No se pudo abrir YouTube externo.'));}}/>
   <Action theme={theme} variant="tertiary" label="Detener vista y quitar reproductor" onPress={()=>setSelected(null)}/>
  </Card>:<StatusBanner theme={theme} kind="info">Sin playlist aprobada preconfigurada. Puedes utilizar el enlace externo del servicio cuando dispongas de una lista válida.</StatusBanner>}
  <Metadata theme={theme}>Fuente del componente: YouTube IFrame / embedded player oficial; condiciones de red, cuenta, edad, región y permisos del propietario aplican. La U no reproduce música fuera del vídeo.</Metadata>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},input:{minHeight:52,borderWidth:1,borderRadius:radius.md,fontSize:16,padding:12},video:{height:245,minHeight:200,width:'100%',borderWidth:1,borderRadius:radius.md,overflow:'hidden',backgroundColor:'#000'}});

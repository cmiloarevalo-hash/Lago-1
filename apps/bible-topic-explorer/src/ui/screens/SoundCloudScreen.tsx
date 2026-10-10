import {useState} from 'react';
import {Linking,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import WebView from 'react-native-webview';
import {soundcloudEmbedUrl,soundcloudTrackUrl} from '../../product/soundcloud';
import {Action,Body,Screen,StatusBanner} from '../primitives';
import {spacing,type Theme} from '../theme';

/** Official SoundCloud player loads only after the user selects an HTTPS track/set. */
export function SoundCloudScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [raw,setRaw]=useState('');
 const [selected,setSelected]=useState<string|null>(null);
 const [error,setError]=useState('');
 const candidate=soundcloudTrackUrl(raw);
 const openOfficial=()=>{void Linking.openURL(selected??'https://soundcloud.com').catch(()=>setError('No se pudo abrir SoundCloud; verifica tu conexión.'));};
 return <Screen theme={theme}><ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label="← Recursos" onPress={onBack}/>
  <Text accessibilityRole="header" style={[styles.heading,{color:theme.text}]}>Música en SoundCloud</Text>
  <Body theme={theme} muted>Escucha desde el reproductor oficial de SoundCloud. La Biblia y tus notas siguen disponibles sin conexión.</Body>
  <View style={[styles.card,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <View style={styles.identity}>
    <View style={styles.logo}><Text style={styles.logoText}>☁</Text></View>
    <Text style={[styles.name,{color:theme.text}]}>SoundCloud</Text>
    <Text style={[styles.subtitle,{color:theme.secondary}]}>REPRODUCTOR OFICIAL</Text>
   </View>
   {selected?<View style={styles.player}>
     <WebView source={{uri:soundcloudEmbedUrl(selected)}} originWhitelist={['https://*']}
      javaScriptEnabled domStorageEnabled mediaPlaybackRequiresUserAction
      allowsInlineMediaPlayback={false} mixedContentMode="never"
      onError={()=>setError('El reproductor no pudo cargar. Puedes abrir esta pista directamente en SoundCloud.')}
      onHttpError={()=>setError('Este audio puede restringir su reproducción integrada. Ábrelo en SoundCloud.')}
      style={styles.webView}/>
    </View>:<View accessible accessibilityLabel="SoundCloud sin pista seleccionada. El reproductor no está reproduciendo." style={styles.empty}>
     <Text style={styles.emptyGlyph}>☁</Text>
     <Text style={styles.emptyTitle}>Tu música, en SoundCloud</Text>
     <Text style={styles.emptyText}>Elige una pista o lista oficial para mostrar su reproductor.</Text>
    </View>}
   {selected?<Action theme={theme} variant="secondary" label="Quitar reproductor" onPress={()=>setSelected(null)}/>:null}
  </View>
  {error?<StatusBanner theme={theme} kind="warning">{error}</StatusBanner>:null}
  <View style={[styles.selector,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <Text style={[styles.section,{color:theme.text}]}>Escoger música</Text>
   <Body theme={theme} muted>Pega el enlace HTTPS de una pista o lista pública de SoundCloud. Algunas grabaciones no permiten reproducción integrada.</Body>
   <TextInput accessibilityLabel="Enlace de SoundCloud" value={raw} onChangeText={s=>{setRaw(s);setError('');}}
    autoCapitalize="none" autoCorrect={false} keyboardType="url"
    placeholder="https://soundcloud.com/artista/pista"
    placeholderTextColor={theme.secondary}
    style={[styles.input,{color:theme.text,backgroundColor:theme.background,borderColor:theme.border}]}/>
   <Action theme={theme} disabled={!candidate} label="Cargar reproductor SoundCloud" onPress={()=>{if(candidate){setSelected(candidate);setError('');}}}/>
   <Action theme={theme} variant="secondary" label="Abrir SoundCloud ↗" onPress={openOfficial}/>
  </View>
  <Text style={[styles.note,{color:theme.secondary}]}>La U no descarga ni redistribuye audio. La reproducción requiere conexión y está sujeta a permisos del creador y las reglas de SoundCloud.</Text>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:48},
 heading:{fontSize:30,fontFamily:'serif',fontWeight:'700'},
 card:{borderWidth:1,borderRadius:22,padding:14,gap:12,elevation:2},
 identity:{flexDirection:'row',alignItems:'center',gap:8},
 logo:{backgroundColor:'#FF5500',borderRadius:10,width:46,height:35,alignItems:'center',justifyContent:'center'},
 logoText:{fontSize:27,color:'#FFFFFF',fontWeight:'800'},
 name:{fontSize:20,fontWeight:'800'},
 subtitle:{fontSize:9,letterSpacing:.8,flexShrink:1,marginLeft:'auto'},
 player:{width:'100%',height:330,borderRadius:14,overflow:'hidden',backgroundColor:'#F6F6F6'},
 webView:{flex:1},
 empty:{minHeight:225,backgroundColor:'#FF6A15',borderRadius:16,justifyContent:'center',alignItems:'center',padding:20,gap:9},
 emptyGlyph:{color:'#FFFFFF',fontSize:49},
 emptyTitle:{color:'#FFFFFF',fontSize:21,fontWeight:'800',textAlign:'center'},
 emptyText:{color:'#FFFFFF',fontSize:14,lineHeight:21,textAlign:'center'},
 selector:{padding:15,borderRadius:18,borderWidth:1,gap:12},
 section:{fontSize:21,fontFamily:'serif',fontWeight:'700'},
 input:{minHeight:54,borderWidth:1,borderRadius:12,padding:12,fontSize:15},
 note:{fontSize:12,lineHeight:18}
});

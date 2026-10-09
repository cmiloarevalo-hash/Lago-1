import {useState} from 'react';
import {Alert,Linking,ScrollView,StyleSheet,View} from 'react-native';
import {musicCategories,isSpotifyPlaylistUrl} from '../../product/music';
import {Action,Body,Card,Metadata,Screen,ScreenTitle,Section,StatusBanner} from '../primitives';
import {spacing} from '../theme';
import type {Theme} from '../theme';

export function MusicScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [error,setError]=useState('');
 const open=async(url:string)=>{
  if(!isSpotifyPlaylistUrl(url)){setError('El enlace no es válido.');return;}
  try{await Linking.openURL(url);setError('');}
  catch{setError('No se pudo abrir Spotify ni el navegador. Comprueba tu conexión y vuelve a intentarlo.');Alert.alert('Enlace no disponible','La lectura sin conexión continúa disponible.');}
 };
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
   <Action label="← Volver a Hoy" theme={theme} variant="tertiary" onPress={onBack}/>
   <ScreenTitle theme={theme}>Música para acompañarte</ScreenTitle>
   <Body theme={theme} muted>Playlists cristianas públicas, para escucha personal y opcional. Spotify se abre fuera de La U; puede necesitar conexión, app o cuenta según el servicio.</Body>
   {error?<StatusBanner theme={theme} kind="warning">{error}</StatusBanner>:null}
   <Section theme={theme} title="Explorar por ánimo">
    {musicCategories.map(entry=><Card key={entry.id} theme={theme} label={entry.category}>
      <Metadata theme={theme}>{entry.category.toUpperCase()}</Metadata>
      <Body theme={theme}>{entry.title}</Body>
      <Metadata theme={theme}>Fuente/curador: {entry.curator}</Metadata>
      <Action label={'Abrir '+entry.category+' en Spotify'} theme={theme} variant="secondary" onPress={()=>{void open(entry.url);}}/>
    </Card>)}
   </Section>
   <Body theme={theme} muted>La U no reproduce ni guarda música. Los enlaces y su disponibilidad pueden cambiar; para reuniones públicas comprueba permisos musicales del lugar.</Body>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl}});

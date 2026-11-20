import {useState} from 'react';
import {Alert,Linking,ScrollView,StyleSheet,View} from 'react-native';
import {musicCategories,isSpotifyPlaylistUrl} from '../../product/music';
import {Action,Body,Card,Metadata,Screen,ScreenTitle,Section,StatusBanner} from '../primitives';
import {spacing} from '../theme';
import type {Theme} from '../theme';

export function MusicScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [error,setError]=useState('');
 const open=async(url:string)=>{
  if(!isSpotifyPlaylistUrl(url)){setError("The link is invalid.");return;}
  try{await Linking.openURL(url);setError('');}
  catch{setError("Could not open Spotify or the browser. Please check your connection and try again.");Alert.alert("Link not available","Offline reading remains available.");}
 };
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
   <Action label="← Back to Today" theme={theme} variant="tertiary" onPress={onBack}/>
   <ScreenTitle theme={theme}>Music to accompany you</ScreenTitle>
   <Body theme={theme} muted>Public Christian playlists, for personal and optional listening. Spotify opens outside Bible – Pastoral Guide; You may need a connection, app or account depending on the service.</Body>
   {error?<StatusBanner theme={theme} kind="warning">{error}</StatusBanner>:null}
   <Section theme={theme} title="Explore by mood">
    {musicCategories.map(entry=><Card key={entry.id} theme={theme} label={entry.category}>
      <Metadata theme={theme}>{entry.category.toUpperCase()}</Metadata>
      <Body theme={theme}>{entry.title}</Body>
      <Metadata theme={theme}>Source / curator: {entry.curator}</Metadata>
      <View style={styles.cta}><Action label="Open in Spotify ↗" theme={theme} variant="secondary" onPress={()=>{void open(entry.url);}}/></View>
    </Card>)}
   </Section>
   <Body theme={theme} muted>Bible – Pastoral Guide does not play or save music. Links and their availability may change; For public gatherings check the venue's music permits.</Body>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},cta:{width:'100%',alignSelf:'stretch',minWidth:0}});

import {useState} from 'react';
import {Linking,ScrollView,StyleSheet,View} from 'react-native';
import {officialSpotifyTitleSearch,songGuides,songMoments,type SongMoment} from '../../product/pastoralSongs';
import {Action,Body,Card,ChoiceChip,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,type Theme} from '../theme';
export function SongsScreen({theme,songId,onSelect,onBack}:{theme:Theme;songId?:string;onSelect:(id:string)=>void;onBack:()=>void}){
 const [moment,setMoment]=useState<SongMoment|"All">("All");
 const [error,setError]=useState('');
 const selected=songGuides.find(x=>x.id===songId);
 const open=async(title:string)=>{
  try{const url=officialSpotifyTitleSearch(title);await Linking.openURL(url);setError('');}
  catch{setError("Could not open official Spotify search. You can continue using the guides offline.");}
 };
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action label={selected?"← Return to songs":"← Return to menu"} variant="tertiary" theme={theme} onPress={onBack}/>
  <ScreenTitle theme={theme}>pastoral songs</ScreenTitle>
  <Body theme={theme} muted>20 original conversation tokens associated with song titles. Music remains on external services.</Body>
  <StatusBanner theme={theme} kind="info">Each link opens a search on Spotify (official platform), NOT a proven track. Choose artist and version; no lyrics or recordings are housed in Bible – Pastoral Guide.</StatusBanner>
  {error?<StatusBanner theme={theme} kind="warning">{error}</StatusBanner>:null}
  {selected?<Section theme={theme} title={selected.title}>
    <Card theme={theme} featured>
      <Metadata theme={theme}>MOMENTO SUGERIDO · {selected.moment.toUpperCase()}</Metadata>
      <Subhead theme={theme}>Purpose of the meeting</Subhead><Body theme={theme}>{selected.objective}</Body>
      <Subhead theme={theme}>Own question to talk</Subhead><Body theme={theme}>{selected.groupPrompt}</Body>
      <Metadata theme={theme}>{selected.contextCaution}</Metadata>
      <Action theme={theme} label={"Look for \""+selected.title+'» en Spotify ↗'} onPress={()=>{void open(selected.title);}}/>
    </Card>
    <StatusBanner theme={theme} kind="warning">For projection, performance or public broadcast, verify rights and licenses. Native Spotify remains blocked externally.</StatusBanner>
  </Section>:<>
    <Section theme={theme} title="Filter by moment"><View style={styles.filters}>
      {(["All",...songMoments] as const).map(m=><ChoiceChip theme={theme} key={m} label={m} selected={moment===m} onPress={()=>setMoment(m)}/>)}
    </View></Section>
    <Section theme={theme} title={moment==="All"?"20 tokens available":moment}>
      {songGuides.filter(x=>moment==="All"||x.moment===moment).map(song=>
       <Card theme={theme} key={song.id}><Subhead theme={theme}>{song.title}</Subhead>
         <Metadata theme={theme}>{song.moment}· pending external selection</Metadata>
         <Body theme={theme} muted>{song.objective}</Body>
         <Action theme={theme} variant="secondary" label={'Ver ficha: '+song.title} onPress={()=>onSelect(song.id)}/>
       </Card>)}
    </Section>
  </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},filters:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs}});

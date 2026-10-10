import {useState} from 'react';
import {Linking,ScrollView,StyleSheet,View} from 'react-native';
import {officialSpotifyTitleSearch,songGuides,songMoments,type SongMoment} from '../../product/pastoralSongs';
import {Action,Body,Card,ChoiceChip,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,type Theme} from '../theme';
export function SongsScreen({theme,songId,onSelect,onBack}:{theme:Theme;songId?:string;onSelect:(id:string)=>void;onBack:()=>void}){
 const [moment,setMoment]=useState<SongMoment|'Todas'>('Todas');
 const [error,setError]=useState('');
 const selected=songGuides.find(x=>x.id===songId);
 const open=async(title:string)=>{
  try{const url=officialSpotifyTitleSearch(title);await Linking.openURL(url);setError('');}
  catch{setError('No se pudo abrir la búsqueda oficial de Spotify. Puedes seguir usando las guías sin conexión.');}
 };
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action label={selected?'← Volver a canciones':'← Volver al menú'} variant="tertiary" theme={theme} onPress={onBack}/>
  <ScreenTitle theme={theme}>Canciones pastorales</ScreenTitle>
  <Body theme={theme} muted>20 fichas de conversación originales asociadas a títulos de canciones. La música permanece en servicios externos.</Body>
  <StatusBanner theme={theme} kind="info">Cada enlace abre una búsqueda en Spotify (plataforma oficial), NO una pista comprobada. Escoge intérprete y versión; ninguna letra o grabación se aloja en La U.</StatusBanner>
  {error?<StatusBanner theme={theme} kind="warning">{error}</StatusBanner>:null}
  {selected?<Section theme={theme} title={selected.title}>
    <Card theme={theme} featured>
      <Metadata theme={theme}>MOMENTO SUGERIDO · {selected.moment.toUpperCase()}</Metadata>
      <Subhead theme={theme}>Propósito del encuentro</Subhead><Body theme={theme}>{selected.objective}</Body>
      <Subhead theme={theme}>Pregunta propia para conversar</Subhead><Body theme={theme}>{selected.groupPrompt}</Body>
      <Metadata theme={theme}>{selected.contextCaution}</Metadata>
      <Action theme={theme} label={'Buscar «'+selected.title+'» en Spotify ↗'} onPress={()=>{void open(selected.title);}}/>
    </Card>
    <StatusBanner theme={theme} kind="warning">Para proyección, ejecución o difusión pública, verifica derechos y licencias. Spotify nativo permanece bloqueado externamente.</StatusBanner>
  </Section>:<>
    <Section theme={theme} title="Filtrar por momento"><View style={styles.filters}>
      {(['Todas',...songMoments] as const).map(m=><ChoiceChip theme={theme} key={m} label={m} selected={moment===m} onPress={()=>setMoment(m)}/>)}
    </View></Section>
    <Section theme={theme} title={moment==='Todas'?'20 fichas disponibles':moment}>
      {songGuides.filter(x=>moment==='Todas'||x.moment===moment).map(song=>
       <Card theme={theme} key={song.id}><Subhead theme={theme}>{song.title}</Subhead>
         <Metadata theme={theme}>{song.moment} · selección externa pendiente</Metadata>
         <Body theme={theme} muted>{song.objective}</Body>
         <Action theme={theme} variant="secondary" label={'Ver ficha: '+song.title} onPress={()=>onSelect(song.id)}/>
       </Card>)}
    </Section>
  </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},filters:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs}});

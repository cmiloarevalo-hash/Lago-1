import {useState} from 'react';
import {ScrollView,StyleSheet,View} from 'react-native';
import {activityCategories,activityGuides,type ActivityCategory} from '../../product/pastoralActivities';
import {Action,Body,Card,ChoiceChip,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,type Theme} from '../theme';

export function ActivitiesScreen({theme,guideId,onSelect,onBack,onPlay}:{theme:Theme;guideId?:string;onSelect:(id:string)=>void;onBack:()=>void;onPlay?:()=>void}){
 const [category,setCategory]=useState<ActivityCategory|'Todas'>('Todas');
 const selected=activityGuides.find(x=>x.id===guideId);
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label={selected?'← Volver a dinámicas':'← Volver al menú'} onPress={onBack}/>
  <ScreenTitle theme={theme}>Dinámicas pastorales</ScreenTitle>
  <Body theme={theme} muted>20 guías presenciales originales y tres juegos bíblicos interactivos, con alternativas accesibles.</Body>
  {onPlay?<Action theme={theme} label="Jugar trivia, verdadero/falso y ordenar versículos" onPress={onPlay}/>:null}
  <StatusBanner theme={theme} kind="info">Son propuestas de facilitación, sin aprobación pastoral humana. Adapta el contexto, edad, consentimiento y accesibilidad.</StatusBanner>
  {selected?<Section theme={theme} title={selected.title}>
    <Card theme={theme} featured>
      <Metadata theme={theme}>{selected.category.toUpperCase()} · {selected.minutes} min · Grupo {selected.groupSize}</Metadata>
      <Subhead theme={theme}>Propósito</Subhead><Body theme={theme}>{selected.goal}</Body>
      <Subhead theme={theme}>Materiales</Subhead><Body theme={theme}>{selected.materials}</Body><Subhead theme={theme}>Adultos y jóvenes</Subhead><Body theme={theme}>Responsables: dos adultos acreditados según protocolo local, con roles de facilitación y cuidado. Participantes jóvenes: ayudan a proponer y elegir tareas voluntarias; nunca supervisan solos a menores.</Body><Subhead theme={theme}>Edad y adaptaciones</Subhead><Body theme={theme}>Sugerencia: desde 12 años, adaptando la complejidad al grupo. Ofrece participación sentado, por escrito o voz; nadie está obligado a moverse, tocar a otros ni relatar experiencias privadas.</Body>
    </Card>
    <Section theme={theme} title="Desarrollo paso a paso">
      {selected.steps.map((step,index)=><Card theme={theme} key={index}><Subhead theme={theme}>Paso {index+1}</Subhead><Body theme={theme}>{step}</Body></Card>)}
    </Section>
    <Card theme={theme}><Subhead theme={theme}>Preguntas para conversar</Subhead><Body theme={theme}>{selected.debrief}</Body></Card>
    <StatusBanner theme={theme} kind="warning">Cuidado y consentimiento: {selected.safety}</StatusBanner>
  </Section>:<>
    <Section theme={theme} title="Filtrar por objetivo">
      <View style={styles.filters}>{(['Todas',...activityCategories] as const).map(c=><ChoiceChip key={c} theme={theme} label={c} selected={category===c} onPress={()=>setCategory(c)}/>)}</View>
    </Section>
    <Section theme={theme} title={category==='Todas'?'Todas las dinámicas':category}>
      {activityGuides.filter(x=>category==='Todas'||x.category===category).map(guide=>
       <Card theme={theme} key={guide.id}>
         <Subhead theme={theme}>{guide.title}</Subhead>
         <Metadata theme={theme}>{guide.category} · {guide.minutes} min · {guide.groupSize} personas</Metadata>
         <Body theme={theme} muted>{guide.goal}</Body>
         <Action theme={theme} variant="secondary" label={'Abrir guía: '+guide.title} onPress={()=>onSelect(guide.id)}/>
       </Card>)}
    </Section>
  </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},filters:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs}});

import {useState} from 'react';
import {Linking,Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {pastoralTopics} from '../../product/pastoralTopics';
import {Action,Body,Card,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,minimumTouchTarget,type Theme} from '../theme';
export function PastoralScreen({theme,onBack,onRead}:{theme:Theme;onBack:()=>void;onRead:(book:string,chapter:number,start:number,end:number)=>void}){
 const [expanded,setExpanded]=useState<string|null>(null);
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action theme={theme} label="← Volver al menú" variant="tertiary" onPress={onBack}/>
  <ScreenTitle theme={theme}>Guía pastoral · 8 temas</ScreenTitle>
  <Body theme={theme} muted>Toca cada título para desplegar o contraer su contenido. Lectura y fichas bibliográficas disponibles sin conexión.</Body>
  <StatusBanner theme={theme} kind="warning">Propuesta ORIGINAL en revisión editorial humana; no es una norma universal de protección, respaldo de UNICEF ni aprobación institucional.</StatusBanner>
  {pastoralTopics.map(item=><Card key={item.id} theme={theme}>
    <Pressable accessibilityRole="button" accessibilityLabel={item.title} accessibilityState={{expanded:expanded===item.id}} onPress={()=>setExpanded(v=>v===item.id?null:item.id)} style={[styles.heading,{borderColor:theme.border}]}>
      <Text style={{color:theme.text,fontSize:19,fontWeight:'700',flex:1}}>{item.title}</Text><Text style={{color:theme.primaryText,fontSize:22}}>{expanded===item.id?'−':'+'}</Text>
    </Pressable>
    {expanded===item.id?<View style={styles.detail}>
      <Metadata theme={theme}>EN REVISIÓN · SIN AVAL EXTERNO</Metadata>
      <Subhead theme={theme}>Propósito</Subhead><Body theme={theme}>{item.purpose}</Body>
      <Subhead theme={theme}>Participantes y adultos</Subhead><Body theme={theme}>{item.ages}; grupo {item.group}. {item.adults}</Body>
      <Subhead theme={theme}>Roles y funciones</Subhead><Body theme={theme}>{item.roles}</Body>
      <Subhead theme={theme}>Preparación y materiales</Subhead><Body theme={theme}>{item.materials}</Body>
      <Subhead theme={theme}>Paso a paso</Subhead>{item.steps.map((step,i)=><Body key={i} theme={theme}>{i+1}. {step}</Body>)}
      <Subhead theme={theme}>Adaptaciones</Subhead><Body theme={theme}>{item.adaptation}</Body>
      <Subhead theme={theme}>Consejos de facilitación</Subhead><Body theme={theme}>{item.facilitation}</Body>
      <Subhead theme={theme}>Oración voluntaria</Subhead><Body theme={theme}>{item.prayer}</Body>
      <Subhead theme={theme}>Amor de Dios y Jesucristo</Subhead><Body theme={theme}>{item.christ}</Body>
      <Subhead theme={theme}>RV1909 en contexto</Subhead>
      <Body theme={theme}>{item.biblical.reason}</Body>
      <Action theme={theme} variant="secondary" label={item.biblical.book+' '+item.biblical.chapter+':'+item.biblical.start+'–'+item.biblical.end+' · abrir RV1909'} onPress={()=>onRead(item.biblical.book,item.biblical.chapter,item.biblical.start,item.biblical.end)}/>
      <StatusBanner theme={theme} kind="warning">{item.safeguarding}</StatusBanner>
      <Section theme={theme} title="Fuentes y referencias" description="Cada fuente sustenta el apartado señalado, no autoriza reproducir material protegido.">
        {item.sources.map((src,index)=><View key={index} style={styles.source}>
          <Metadata theme={theme}>{src.sourceAuthorOrOrg} · {src.sourceDateOrVersion}</Metadata>
          <Body theme={theme}>{src.sourceTitle}</Body>
          <Metadata theme={theme}>Apartado apoyado: {src.applicableSection}. Uso: {src.reuseBasis} · consultado {src.checkedAt}</Metadata>
          <Text selectable style={{color:theme.primaryText}}>{src.sourceUrl}</Text>
          <Action theme={theme} variant="tertiary" label={'Abrir fuente externa '+(index+1)} onPress={()=>{void Linking.openURL(src.sourceUrl).catch(()=>{});}}/>
        </View>)}
        <Metadata theme={theme}>Texto bíblico: RV1909, {item.biblical.book} {item.biblical.chapter}:{item.biblical.start}–{item.biblical.end}, corpus local sin alteraciones.</Metadata>
      </Section>
    </View>:null}
  </Card>)}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},heading:{minHeight:minimumTouchTarget,flexDirection:'row',alignItems:'center',gap:10,borderBottomWidth:1,paddingVertical:12},detail:{gap:spacing.sm,paddingTop:spacing.md},source:{gap:6,paddingBottom:12}});

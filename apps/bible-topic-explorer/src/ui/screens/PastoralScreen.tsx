import {useState} from 'react';
import {Linking,Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {pastoralTopics,type PastoralSource} from '../../product/pastoralTopics';
import {Body,Metadata,Screen,Subhead,Action} from '../primitives';
import {minimumTouchTarget,spacing,type Theme} from '../theme';
const linkBlue='#155E99'; // dark link blue on light surfaces, distinguishable independently of theme accent
function shortSource(src:PastoralSource) {
 const org=src.sourceAuthorOrOrg.toLocaleLowerCase('es');
 if(org.includes('unicef'))return 'UNICEF · Formación Kit Adolescente · 2018';
 if(org.includes('usccb')||org.includes('bishops'))return 'USCCB · Renewing the Vision · 1997';
 if(org.includes('santa sede'))return 'Santa Sede · Protección de menores · 2019';
 return src.sourceAuthorOrOrg+' · '+src.sourceTitle;
}
export function PastoralScreen({theme,onBack,onRead}:{theme:Theme;onBack:()=>void;onRead:(book:string,chapter:number,start:number,end:number)=>void}){
 const [expanded,setExpanded]=useState<string|null>(null),[linkError,setLinkError]=useState('');
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label="← Recursos" onPress={onBack}/>
  <Text accessibilityRole="header" style={[styles.pageTitle,{color:theme.text}]}>Guía pastoral</Text>
  <Body theme={theme} muted>Ocho temas para acompañar encuentros juveniles, con propuestas originales y referencias al final de cada tema.</Body>
  <Text style={[styles.editorial,{color:theme.secondary}]}>En revisión editorial · Aplicar siempre los protocolos locales de protección.</Text>
  {linkError?<Text accessibilityRole="alert" style={{color:theme.errorText}}>{linkError}</Text>:null}
  {pastoralTopics.map(item=>{
   const open=expanded===item.id;
   const preview=item.purpose.length>100?item.purpose.slice(0,98).trimEnd()+'…':item.purpose;
   return <View key={item.id} style={[styles.accordion,{backgroundColor:theme.surface,borderColor:theme.border}]}>
    <Pressable accessibilityRole="button" accessibilityLabel={item.title} accessibilityHint={open?'Contraer tema':'Desplegar tema'} accessibilityState={{expanded:open}} onPress={()=>setExpanded(v=>v===item.id?null:item.id)} style={[styles.heading,{backgroundColor:open?theme.surfaceSoft:'transparent'}]}>
     <View style={styles.headingText}><Text style={[styles.title,{color:theme.text}]}>{item.title}</Text>{!open?<Text style={[styles.preview,{color:theme.secondary}]}>{preview}</Text>:null}</View>
     <Text accessibilityElementsHidden style={[styles.chevron,{color:theme.primaryText}]}>{open?'−':'⌄'}</Text>
    </Pressable>
    {open?<View style={styles.detail}>
      <Text style={[styles.purpose,{color:theme.text}]}>{item.purpose}</Text>
      <View style={styles.section}><Subhead theme={theme}>Para preparar el encuentro</Subhead><Body theme={theme}>{item.ages} · {item.group}. {item.adults}</Body><Body theme={theme}>{item.materials}</Body></View>
      <View style={styles.section}><Subhead theme={theme}>Responsables y jóvenes</Subhead><Body theme={theme}>{item.roles}</Body></View>
      <View style={styles.section}><Subhead theme={theme}>Paso a paso</Subhead>{item.steps.map((step,i)=><View key={i} style={styles.step}><Text style={[styles.stepIndex,{color:theme.primaryText}]}>{i+1}.</Text><View style={{flex:1}}><Body theme={theme}>{step}</Body></View></View>)}</View>
      <View style={styles.section}><Subhead theme={theme}>Adaptaciones y cuidado</Subhead><Body theme={theme}>{item.adaptation}</Body><Body theme={theme}>{item.facilitation}</Body><View style={[styles.safety,{backgroundColor:theme.surfaceSoft}]}><Text style={[styles.safetyLabel,{color:theme.text}]}>Protección y consentimiento</Text><Body theme={theme}>{item.safeguarding}</Body></View></View>
      <View style={styles.section}><Subhead theme={theme}>Fe y reflexión</Subhead><Body theme={theme}>{item.christ}</Body><Body theme={theme}>{item.prayer}</Body><Text style={[styles.preview,{color:theme.secondary}]}>{item.biblical.reason}</Text></View>
      <View style={[styles.sources,{borderTopColor:theme.border}]}>
       <Text style={[styles.sourcesTitle,{color:theme.text}]}>Fuentes y referencias</Text>
       {item.sources.map((src,index)=><Pressable key={index} accessibilityRole="link" accessibilityLabel={'Abrir '+shortSource(src)} onPress={()=>{void Linking.openURL(src.sourceUrl).catch(()=>setLinkError('No fue posible abrir la fuente externa. Puedes seguir leyendo sin conexión.'));}} style={styles.sourceLink}>
        <Text style={styles.blueLink}>{shortSource(src)} ↗</Text>

       </Pressable>)}
       <Pressable accessibilityRole="link" accessibilityLabel={'Leer pasaje RV1909 '+item.biblical.book+' '+item.biblical.chapter+':'+item.biblical.start+' a '+item.biblical.end} onPress={()=>onRead(item.biblical.book,item.biblical.chapter,item.biblical.start,item.biblical.end)} style={styles.sourceLink}>
        <Text style={styles.blueLink}>RV1909 · {item.biblical.book} {item.biblical.chapter}:{item.biblical.start}–{item.biblical.end} · 1909 ↗</Text>

       </Pressable>
      </View>
     </View>:null}
   </View>;
  })}
  <Metadata theme={theme}>Las fuentes documentan contexto; no implican aval institucional ni permiso de reproducción.</Metadata>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:40},pageTitle:{fontFamily:'serif',fontSize:30,fontWeight:'700'},
 editorial:{fontSize:13,lineHeight:20},accordion:{borderWidth:.7,borderRadius:20,overflow:'hidden',elevation:2},
 heading:{minHeight:minimumTouchTarget,flexDirection:'row',alignItems:'center',gap:10,padding:16},
 headingText:{flex:1,gap:6},title:{fontFamily:'serif',fontSize:20,lineHeight:26,fontWeight:'700'},
 preview:{fontSize:14,lineHeight:21},chevron:{fontSize:29,minWidth:27,textAlign:'center'},
 detail:{padding:17,paddingTop:12,gap:20},purpose:{fontFamily:'serif',fontSize:18,lineHeight:27},
 section:{gap:9},step:{flexDirection:'row',alignItems:'flex-start',gap:8},stepIndex:{fontSize:16,fontWeight:'700'},
 safety:{padding:13,borderRadius:14,gap:6},safetyLabel:{fontWeight:'700',fontSize:14},
 sources:{borderTopWidth:.6,paddingTop:11,gap:1},sourcesTitle:{fontFamily:'serif',fontSize:15,fontWeight:'600',marginBottom:1},
 sourceLink:{minHeight:minimumTouchTarget,justifyContent:'center',paddingVertical:3},
 blueLink:{color:linkBlue,fontSize:13.5,lineHeight:21,fontWeight:'500',textDecorationLine:'underline'},
 sourceHint:{fontSize:12,lineHeight:18}
});

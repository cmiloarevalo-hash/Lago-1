import {useState} from 'react';
import {Linking,Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {Action,Body,Screen} from '../primitives';
import {minimumTouchTarget,spacing,type Theme} from '../theme';

const sources=[
 {sourceTitle:'Renewing the Vision: A Framework for Catholic Youth Ministry',sourceAuthorOrOrg:'United States Conference of Catholic Bishops (USCCB)',sourceUrl:'https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision',sourceDateOrVersion:'1997',applicableSection:'liderazgo juvenil'},
 {sourceTitle:'Adolescent Kit training package for programme leaders',sourceAuthorOrOrg:'UNICEF',sourceUrl:'https://www.unicef.org/adolescentkit/reports/adolescent-kit-training-package-programme-leaders',sourceDateOrVersion:'2018',applicableSection:'participación e inclusión'},
 {sourceTitle:'Guidelines for the Protection of Children and Vulnerable Persons',sourceAuthorOrOrg:'Santa Sede',sourceUrl:'https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html',sourceDateOrVersion:'2019',applicableSection:'cuidado de menores y personas vulnerables'}
] as const;
type CreditedLink={label:string;detail:string;url:string};
const photos:CreditedLink[]=[
 {label:'Jordan Moore · Paisaje natural',detail:'Fotografía de paisaje utilizada como base de tratamiento tonal propio.',url:'https://unsplash.com/photos/sunrise-behind-jagged-mountains-over-a-serene-lake-zkxUih6aJg0'},
 {label:'Sixteen Miles Out · Libro abierto',detail:'Fotografía de libro utilizada como base de tratamiento tonal propio.',url:'https://unsplash.com/photos/open-book-with-a-cup-of-coffee-and-plant-2U5JIp0jA-A'},
 {label:'Unsplash License',detail:'Condiciones aplicables a las fotografías anteriores.',url:'https://unsplash.com/license'}
];
function SourceLink({theme,label,detail,url,onError}:{theme:Theme;label:string;detail:string;url:string;onError:()=>void}){
 return <Pressable accessibilityRole="link" accessibilityLabel={'Abrir fuente '+label} onPress={()=>{void Linking.openURL(url).catch(onError);}}
  style={[styles.link,{borderBottomColor:theme.border}]}>
  <Text style={styles.linkTitle}>{label} ↗</Text>
  <Text style={[styles.linkDetail,{color:theme.secondary}]}>{detail}</Text>
 </Pressable>;
}
/** Bibliography credits are linked to official source pages; no copyrighted work is embedded. */
export function AboutSourcesScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [error,setError]=useState(false);
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label="← Volver" onPress={onBack}/>
  <Text style={[styles.h1,{color:theme.text}]} accessibilityRole="header">Biblia Reina-Valera 1909 - Guía Pastoral</Text>
  <View style={[styles.intro,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <Text style={[styles.h2,{color:theme.text}]}>Un recurso para caminar en comunidad</Text>
   <Body theme={theme}>Proyecto sin fines de lucro creado como ayuda práctica para jóvenes y líderes de comunidades creyentes en Jesucristo. Facilita la lectura de la Biblia, la reflexión, el aprendizaje y el acompañamiento comunitario para conocer las enseñanzas de Jesús y seguir sus pasos en la vida cotidiana.</Body>
  </View>
  <Body theme={theme} muted>Versión 1.11.1 · Desarrollador: Camilo Arévalo</Body>
  <Pressable accessibilityRole="link" accessibilityLabel="Enviar correo a apkcristianas@gmail.com"
    onPress={()=>{void Linking.openURL('mailto:apkcristianas@gmail.com?subject=Biblia%20Reina-Valera%201909').catch(()=>setError(true));}}
    style={[styles.link,{borderBottomColor:theme.border}]}>
    <Text style={[styles.linkTitle,{fontWeight:'800'}]}>apkcristianas@gmail.com ↗</Text>
    <Text style={[styles.linkDetail,{color:theme.secondary}]}>Abrir la aplicación de correo</Text>
  </Pressable>
  <Body theme={theme}>Estamos desarrollando más aplicaciones de lectura bíblica, formación cristiana y acompañamiento pastoral para comunidades, jóvenes y familias.</Body>
  <Text style={[styles.h2,{color:theme.text}]}>Bibliografía y fuentes</Text>
  <Body theme={theme} muted>Las fuentes se identifican por transparencia y atribución. Su inclusión no implica aval institucional.</Body>
  <View style={styles.sources}>{sources.map(src=><SourceLink key={src.sourceUrl} theme={theme}
   label={src.sourceAuthorOrOrg+' · '+src.sourceTitle}
   detail={src.sourceDateOrVersion+' · Referencia para '+src.applicableSection}
   url={src.sourceUrl} onError={()=>setError(true)}/>)}</View>
  <Text style={[styles.h2,{color:theme.text}]}>Biblia y recursos locales</Text>
  <Body theme={theme}>Reina-Valera 1909 (RV1909): corpus bíblico de lectura local. Los pasajes se identifican por libro, capítulo y versículo. El contenido personal (notas, destacados y progreso) queda en el dispositivo.</Body>
  <Text style={[styles.h2,{color:theme.text}]}>Imágenes y créditos</Text>
  <View style={styles.sources}>{photos.map(src=><SourceLink key={src.url} theme={theme} label={src.label} detail={src.detail} url={src.url} onError={()=>setError(true)}/>)}</View>
  <Text style={[styles.legal,{color:theme.secondary}]}>Las fuentes mantienen sus propias licencias y derechos. Este proyecto no declara el respaldo oficial de las instituciones citadas.</Text>
  {error?<Text accessibilityRole="alert" style={{color:theme.errorText}}>No se pudo abrir el enlace. Puedes volver a intentarlo cuando tengas conexión.</Text>:null}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:60},
 h1:{fontFamily:'serif',fontSize:31,fontWeight:'700'},
 h2:{fontFamily:'serif',fontSize:21,fontWeight:'700',marginTop:10},
 intro:{padding:16,borderRadius:18,borderWidth:.7,gap:9},
 sources:{gap:5},
 link:{minHeight:minimumTouchTarget,borderBottomWidth:.6,paddingVertical:9,gap:4},
 linkTitle:{fontSize:13.5,color:'#155E99',fontWeight:'600'},
 linkDetail:{fontSize:12,lineHeight:17},
 legal:{fontSize:12,lineHeight:18}
});

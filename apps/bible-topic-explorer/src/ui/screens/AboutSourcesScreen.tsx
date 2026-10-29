import {useState} from 'react';
import {Linking,Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {Action,Body,Screen} from '../primitives';
import {minimumTouchTarget,spacing,type Theme} from '../theme';

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
  <Text style={[styles.h1,{color:theme.text}]} accessibilityRole="header">Acerca de Guía pastoral - Biblia</Text>
  <View style={[styles.intro,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <Text style={[styles.h2,{color:theme.text}]}>Un proyecto en construcción</Text>
   <Body theme={theme}>Guía pastoral - Biblia es un prototipo desarrollado con apoyo de inteligencia artificial y consulta de estudios, textos bíblicos y fuentes documentales. Sus contenidos se están revisando y no constituyen una publicación doctrinal aprobada ni cuentan con aval de las instituciones citadas.</Body>
  </View>
  <Text style={[styles.h2,{color:theme.text}]}>Desarrollador</Text>
  <Body theme={theme}>Camilo Arévalo · Desarrollador de Guía pastoral - Biblia.</Body>
  <Pressable accessibilityRole="link" accessibilityLabel="Enviar correo al desarrollador" onPress={()=>{void Linking.openURL('mailto:cmiloarevalo@gmail.com').catch(()=>setError(true));}} style={styles.contactLink}>
   <Text style={styles.contactLinkText}>cmiloarevalo@gmail.com ↗</Text>
  </Pressable>
  <Pressable accessibilityRole="link" accessibilityLabel="Llamar al desarrollador" onPress={()=>{void Linking.openURL('tel:+56993935016').catch(()=>setError(true));}} style={styles.contactLink}>
   <Text style={styles.contactLinkText}>+56 9 9393 5016 ↗</Text>
  </Pressable>
  <Text style={[styles.h2,{color:theme.text}]}>Contenido de la Guía pastoral</Text>
  <Body theme={theme}>Jesús, el Maestro del Amor — El camino de Jesús. Texto educativo del proyecto, versión editorial 1.0.1 (28 de octubre de 2026), 16 capítulos. Las referencias al Antiguo y Nuevo Testamento aparecen al inicio de cada capítulo; los pasajes se abren en la Biblia local RV1909.</Body>
  <Text style={[styles.h2,{color:theme.text}]}>Biblia y recursos locales</Text>
  <Body theme={theme}>Reina-Valera 1909 (RV1909): corpus bíblico de lectura local. Los pasajes se identifican por libro, capítulo y versículo. El contenido personal (notas, destacados y progreso) queda en el dispositivo.</Body>
  <Text style={[styles.h2,{color:theme.text}]}>Imágenes y créditos</Text>
  <View style={styles.sources}>{photos.map(src=><SourceLink key={src.url} theme={theme} label={src.label} detail={src.detail} url={src.url} onError={()=>setError(true)}/>)}</View>
  <Text style={[styles.h2,{color:theme.text}]}>Música y contenidos propios</Text>
  <Body theme={theme}>Las ilustraciones geométricas de actividades son dibujos originales del proyecto. No se muestran letras de canciones de terceros sin autorización.</Body>
  <Text style={[styles.legal,{color:theme.secondary}]}>Consultar siempre la licencia vigente en cada origen. Las fuentes son bibliografía de contexto, no permisos generales para copiar contenidos ni respaldo editorial o institucional.</Text>
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
 contactLink:{minHeight:minimumTouchTarget,justifyContent:'center',paddingVertical:5},
 contactLinkText:{color:'#155E99',fontSize:14,fontWeight:'600',textDecorationLine:'underline'},
 linkDetail:{fontSize:12,lineHeight:17},
 legal:{fontSize:12,lineHeight:18}
});

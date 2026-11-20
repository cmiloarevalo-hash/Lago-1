import {useState} from 'react';
import {Linking,Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {Action,Body,Screen} from '../primitives';
import {minimumTouchTarget,spacing,type Theme} from '../theme';

const sources=[
 {sourceTitle:'World English Bible (WEBP), 66-book edition',sourceAuthorOrOrg:'eBible.org',sourceUrl:'https://ebible.org/bible/details.php?id=engwebp',sourceDateOrVersion:'Public domain · engwebp',applicableSection:'Bible text, offline distribution and attribution'},
 {sourceTitle:'Renewing the Vision: A Framework for Catholic Youth Ministry',sourceAuthorOrOrg:'United States Conference of Catholic Bishops (USCCB)',sourceUrl:'https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision',sourceDateOrVersion:'1997',applicableSection:'youth leadership'},
 {sourceTitle:'Adolescent Kit training package for programme leaders',sourceAuthorOrOrg:'UNICEF',sourceUrl:'https://www.unicef.org/adolescentkit/reports/adolescent-kit-training-package-programme-leaders',sourceDateOrVersion:'2018',applicableSection:"participation and inclusion"},
 {sourceTitle:'Guidelines for the Protection of Children and Vulnerable Persons',sourceAuthorOrOrg:'Holy See',sourceUrl:'https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html',sourceDateOrVersion:'2019',applicableSection:'protection of minors and vulnerable people'}
] as const;
type CreditedLink={label:string;detail:string;url:string};
const photos:CreditedLink[]=[
 {label:'Jordan Moore · Natural landscape',detail:"Landscape photography used as a basis for its own tonal treatment.",url:'https://unsplash.com/photos/sunrise-behind-jagged-mountains-over-a-serene-lake-zkxUih6aJg0'},
 {label:'Sixteen Miles Out · Open book',detail:"Book photography used as the basis for its own tonal treatment.",url:'https://unsplash.com/photos/open-book-with-a-cup-of-coffee-and-plant-2U5JIp0jA-A'},
 {label:'Unsplash License',detail:"Conditions applicable to previous photographs.",url:'https://unsplash.com/license'}
];
function SourceLink({theme,label,detail,url,onError}:{theme:Theme;label:string;detail:string;url:string;onError:()=>void}){
 return <Pressable accessibilityRole="link" accessibilityLabel={"Open source"+label} onPress={()=>{void Linking.openURL(url).catch(onError);}}
  style={[styles.link,{borderBottomColor:theme.border}]}>
  <Text style={styles.linkTitle}>{label} ↗</Text>
  <Text style={[styles.linkDetail,{color:theme.secondary}]}>{detail}</Text>
 </Pressable>;
}
/** Bibliography credits are linked to official source pages; no copyrighted work is embedded. */
export function AboutSourcesScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [error,setError]=useState(false);
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label="← Back" onPress={onBack}/>
  <View accessibilityLabel="Bible - Pastoral Guide World English Bible"><Text style={[styles.h1,{color:theme.text}]} accessibilityRole="header">Bible – Pastoral Guide</Text><Text style={[styles.h1Bible,{color:theme.text}]}>World English Bible</Text></View>
  <View style={[styles.intro,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <Text style={[styles.h2,{color:theme.text}]}>A resource for walking in community</Text>
   <Body theme={theme}>Non-profit project created as practical help for young people and leaders of communities who believe in Jesus Christ. It facilitates reading the Bible, reflection, learning and community accompaniment to learn about the teachings of Jesus and follow his steps in daily life.</Body>
  </View>
  <Body theme={theme} muted>Version 1.20.01 · Developer: Camilo Arévalo</Body>
  <Pressable accessibilityRole="link" accessibilityLabel="Email apkcristianas@gmail.com"
    onPress={()=>{void Linking.openURL("mailto:apkcristianas@gmail.com?subject=Bible%20Pastoral%20Guide%201.20.01").catch(()=>setError(true));}}
    style={[styles.link,{borderBottomColor:theme.border}]}>
    <Text style={[styles.linkTitle,{fontWeight:'800'}]}>apkcristianas@gmail.com ↗</Text>
    <Text style={[styles.linkDetail,{color:theme.secondary}]}>Open the mail application</Text>
  </Pressable>
  <Body theme={theme}>We are developing more applications for Bible reading, Christian formation and pastoral accompaniment for communities, young people and families.</Body>
  <Text style={[styles.h2,{color:theme.text}]}>Bibliography and sources</Text>
  <Body theme={theme} muted>Sources are identified for transparency and attribution. Its inclusion does not imply institutional endorsement.</Body>
  <View style={styles.sources}>{sources.map(src=><SourceLink key={src.sourceUrl} theme={theme}
   label={src.sourceAuthorOrOrg+' · '+src.sourceTitle}
   detail={src.sourceDateOrVersion+' · Reference for '+src.applicableSection}
   url={src.sourceUrl} onError={()=>setError(true)}/>)}</View>
  <Text style={[styles.h2,{color:theme.text}]}>Bible and local resources</Text>
  <Body theme={theme}>World English Bible (WEBP), 66-book public-domain edition, from eBible.org (engwebp). Scripture text is stored locally and presented without rewriting biblical wording. The source and rights notice are available at https://ebible.org/engwebp/copyright.htm. Personal notes, highlights and progress remain on this device.</Body>
  <Text style={[styles.h2,{color:theme.text}]}>Images and credits</Text>
  <View style={styles.sources}>{photos.map(src=><SourceLink key={src.url} theme={theme} label={src.label} detail={src.detail} url={src.url} onError={()=>setError(true)}/>)}</View>
  <Text style={[styles.legal,{color:theme.secondary}]}>Fonts maintain their own licenses and rights. This project does not declare the official support of the aforementioned institutions.</Text>
  {error?<Text accessibilityRole="alert" style={{color:theme.errorText}}>The link could not be opened. You can try again when you are connected.</Text>:null}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:60},
 h1:{fontSize:23,lineHeight:29,fontWeight:'700'},h1Bible:{fontFamily:'serif',fontSize:26,lineHeight:33,fontWeight:'700'},
 h2:{fontFamily:'serif',fontSize:21,fontWeight:'700',marginTop:10},
 intro:{padding:16,borderRadius:18,borderWidth:.7,gap:9},
 sources:{gap:5},
 link:{minHeight:minimumTouchTarget,borderBottomWidth:.6,paddingVertical:9,gap:4},
 linkTitle:{fontSize:13.5,color:'#155E99',fontWeight:'600'},
 linkDetail:{fontSize:12,lineHeight:17},
 legal:{fontSize:12,lineHeight:18}
});

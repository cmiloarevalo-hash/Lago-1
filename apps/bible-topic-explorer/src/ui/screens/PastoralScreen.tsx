import {useRef,useState} from 'react';
import {Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {pastoralTopics,PASTORAL_GUIDE_TITLE,PASTORAL_GUIDE_SUBTITLE,PASTORAL_GUIDE_VERSION,type PastoralReference} from '../../product/pastoralTopics';
import {Action,Body,Screen} from '../primitives';
import {minimumTouchTarget,spacing,type Theme} from '../theme';

const linkBlue='#155E99';
export function PastoralScreen({theme,onBack,onRead}:{theme:Theme;onBack:()=>void;onRead:(book:string,chapter:number,start:number,end:number)=>void}){
 const [expanded,setExpanded]=useState<string|null>(null);
 const scrollRef=useRef<ScrollView>(null);
 const headings=useRef<Record<string,number>>({});
 const groupOffsets=useRef<Record<number,number>>({});
 const focusNext=useRef<string|null>(null);
 const scrollToOpen=()=>{const id=focusNext.current;if(!id)return;const y=headings.current[id];if(y===undefined)return;const groupId=pastoralTopics.find(x=>x.id===id)?.themeId??1;const groupY=groupOffsets.current[groupId]??0;scrollRef.current?.scrollTo({y:Math.max(0,groupY+y-14),animated:true});focusNext.current=null;};
 const readingLink=(ref:PastoralReference)=><Pressable key={ref.label} accessibilityRole="link" accessibilityLabel={'Leer RV1909 '+ref.label} onPress={()=>onRead(ref.book,ref.chapter,ref.start,ref.end)} style={styles.scriptureLink}>
  <Text style={styles.blueLink}>{ref.label} ↗</Text>
 </Pressable>;
 return <Screen theme={theme}><ScrollView ref={scrollRef} contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label="← Recursos" onPress={onBack}/>
  <Text accessibilityRole="header" style={[styles.pageTitle,{color:theme.text}]}>{PASTORAL_GUIDE_TITLE}</Text>
  <Text style={[styles.subtitle,{color:theme.secondary}]}>{PASTORAL_GUIDE_SUBTITLE} · 16 capítulos</Text>
  <Body theme={theme} muted>Las enseñanzas y acciones de Jesús, a la luz de las Escrituras, para descubrir el amor en nuestra vida diaria.</Body>
  {[1,2,3,4].map(themeId=>{
   const group=pastoralTopics.filter(item=>item.themeId===themeId);
   return <View key={themeId} style={styles.theme} onLayout={e=>{groupOffsets.current[themeId]=e.nativeEvent.layout.y;}}>
    <Text accessibilityRole="header" style={[styles.themeTitle,{color:theme.text}]}>TEMA {themeId} · {group[0].themeTitle}</Text>
    <Text style={[styles.themeObjective,{color:theme.secondary}]}>{group[0].themeObjective}</Text>
    {group.map(item=>{
     const open=expanded===item.id;
     const preview=item.paragraphs[0].length>105?item.paragraphs[0].slice(0,102).trimEnd()+'…':item.paragraphs[0];
     return <View key={item.id} onLayout={e=>{headings.current[item.id]=e.nativeEvent.layout.y;}} style={[styles.accordion,{backgroundColor:theme.surface,borderColor:theme.border}]}>
      <Pressable accessibilityRole="button" accessibilityLabel={'Capítulo '+item.number+' '+item.title} accessibilityHint={open?'Contraer capítulo':'Abrir capítulo'} accessibilityState={{expanded:open}} onPress={()=>{focusNext.current=open?null:item.id;setExpanded(open?null:item.id);if(!open)setTimeout(scrollToOpen,180);}} style={[styles.heading,{backgroundColor:open?theme.surfaceSoft:'transparent'}]}>
       <Text style={[styles.number,{color:theme.primaryText}]}>{String(item.number).padStart(2,'0')}</Text>
       <View style={styles.headingText}><Text style={[styles.title,{color:theme.text}]}>{item.title}</Text>{!open?<Text style={[styles.preview,{color:theme.secondary}]} >{preview}</Text>:null}</View>
       <Text accessibilityElementsHidden style={[styles.chevron,{color:theme.primaryText}]}>{open?'−':'⌄'}</Text>
      </Pressable>
      {open?<View style={styles.detail}>
       <Text style={[styles.readingTitle,{color:theme.text}]}>Antiguo Testamento</Text>
       <View style={styles.readings}>{item.readingsOld.map(readingLink)}</View>
       <Text style={[styles.readingTitle,{color:theme.text}]}>Nuevo Testamento</Text>
       <View style={styles.readings}>{item.readingsNew.map(readingLink)}</View>
       <View style={[styles.prose,{borderTopColor:theme.border}]}>{item.paragraphs.map((paragraph,index)=><Text key={index} style={[styles.paragraph,{color:theme.text}]}>{paragraph}</Text>)}</View>
       <View style={[styles.question,{backgroundColor:theme.surfaceSoft}]}>
        <Text style={[styles.questionLabel,{color:theme.secondary}]}>{item.questionKind==='introspection'?'PARA REFLEXIONAR':'PARA CONVERSAR'}</Text>
        <Text style={[styles.questionText,{color:theme.text}]}>{item.question}</Text>
       </View>
      </View>:null}
     </View>;
    })}
   </View>;
  })}
  <Text style={[styles.footnote,{color:theme.secondary}]}>Contenido editorial · Versión {PASTORAL_GUIDE_VERSION}. Las preguntas pueden reflexionarse en privado; conversar es voluntario.</Text>
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:48},pageTitle:{fontFamily:'serif',fontSize:29,lineHeight:37,fontWeight:'700'},subtitle:{fontSize:16,fontWeight:'600'},
 theme:{gap:10,marginTop:18},themeTitle:{fontFamily:'serif',fontSize:22,lineHeight:29,fontWeight:'700'},
 themeObjective:{fontSize:14,lineHeight:21,marginBottom:5},
 accordion:{borderWidth:.7,borderRadius:18,overflow:'hidden',elevation:1},
 heading:{minHeight:minimumTouchTarget,flexDirection:'row',alignItems:'center',gap:10,padding:14},
 number:{fontSize:16,fontWeight:'800'},headingText:{flex:1,gap:5},title:{fontFamily:'serif',fontSize:19,lineHeight:25,fontWeight:'700'},
 preview:{fontSize:13.5,lineHeight:19},chevron:{fontSize:27,minWidth:27,textAlign:'center'},
 detail:{padding:17,paddingTop:12,gap:11},readingTitle:{fontSize:14,fontWeight:'700'},
 readings:{flexDirection:'row',flexWrap:'wrap',columnGap:12,rowGap:1},
 scriptureLink:{minHeight:minimumTouchTarget,justifyContent:'center',paddingVertical:5},
 blueLink:{color:linkBlue,fontSize:14,fontWeight:'600',textDecorationLine:'underline'},
 prose:{borderTopWidth:.6,paddingTop:15,gap:14},paragraph:{fontFamily:'serif',fontSize:17,lineHeight:28},
 question:{borderRadius:13,padding:15,gap:9,marginTop:5},questionLabel:{fontSize:12,fontWeight:'800',letterSpacing:1},
 questionText:{fontFamily:'serif',fontSize:19,lineHeight:27,fontWeight:'600'},
 footnote:{fontSize:12,lineHeight:18,marginTop:8}
});

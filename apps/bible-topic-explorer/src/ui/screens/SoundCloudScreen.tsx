import {useState} from 'react';
import {Linking,Pressable,ScrollView,StyleSheet,Text,View} from 'react-native';
import {SOUNDCLOUD_HOME,soundcloudCollections} from '../../product/soundcloud';
import {Action,Body,Screen} from '../primitives';
import {minimumTouchTarget,spacing,type Theme} from '../theme';

/** SoundCloud is opened externally, in the installed app when Android supports its links,
 * otherwise in a browser. Bible – Pastoral Guide neither embeds a fake player nor plays licensed tracks.
 */
export function SoundCloudScreen({theme,onBack}:{theme:Theme;onBack:()=>void}){
 const [error,setError]=useState(false);
 const openSoundCloud=(url:string)=>{
  setError(false);
  void Linking.openURL(url).catch(()=>setError(true));
 };
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label="← Resources" onPress={onBack}/>
  <Text accessibilityRole="header" style={[styles.heading,{color:theme.text}]}>Music on SoundCloud</Text>
  <Body theme={theme} muted>The music is listened to directly on SoundCloud, not within Bible – Pastoral Guide. If you have its application installed, Android can open it; otherwise it will use your browser.</Body>
  <View style={[styles.officialCard,{backgroundColor:theme.surface,borderColor:theme.border}]}>
   <View style={styles.identity}>
    <View style={styles.brandMark}><Text accessibilityElementsHidden style={styles.brandIcon}>☁</Text></View>
    <View style={styles.brandText}>
     <Text style={[styles.brandName,{color:theme.text}]}>SoundCloud</Text>
     <Text style={[styles.brandCaption,{color:theme.secondary}]}>Music on its official platform</Text>
    </View>
   </View>
   <Action theme={theme} label="Open SoundCloud ↗" onPress={()=>openSoundCloud(SOUNDCLOUD_HOME)}/>
  </View>
  <Text style={[styles.sectionTitle,{color:theme.text}]}>Lists to discover</Text>
  <Body theme={theme} muted>Some external proposals to explore. They open on SoundCloud and may change over time.</Body>
  <View style={styles.suggestions}>
   {soundcloudCollections.map(item=><Pressable key={item.id} accessibilityRole="link"
     accessibilityLabel={"Open in SoundCloud:"+item.title}
     accessibilityHint="Open an external list; you can use SoundCloud app or browser."
     onPress={()=>openSoundCloud(item.url)}
     style={({pressed})=>[styles.suggestion,{backgroundColor:pressed?theme.surfaceSoft:theme.surface,borderColor:theme.border}]}>
     <View style={[styles.suggestionIcon,{backgroundColor:'#FFF0E7'}]}>
      <Text accessibilityElementsHidden style={styles.suggestionGlyph}>{item.id==='ninos'?'♫':item.id==='estudio'?'♪':'✧'}</Text>
     </View>
     <View style={styles.suggestionBody}>
      <Text style={[styles.suggestionTitle,{color:theme.text}]}>{item.title}</Text>
      <Text style={[styles.suggestionOwner,{color:theme.secondary}]}>{item.by}</Text>
      <Text style={[styles.suggestionDescription,{color:theme.secondary}]}>{item.description}</Text>
     </View>
     <Text accessibilityElementsHidden style={styles.arrow}>↗</Text>
    </Pressable>)}
  </View>
  <Text style={[styles.note,{color:theme.secondary}]}>These lists are neither owned nor approved by Bible – Pastoral Guide. Before playing them with children, a responsible person must check their songs, their content and the conditions of use. Bible – Pastoral Guide does not download or redistribute audio.</Text>
  {error?<Text accessibilityRole="alert" style={[styles.error,{color:theme.errorText}]}>Could not open SoundCloud. Please check the connection and try again.</Text>:null}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({
 stack:{gap:spacing.md,paddingBottom:50},
 heading:{fontSize:29,fontFamily:'serif',fontWeight:'700'},
 officialCard:{borderWidth:1,borderRadius:20,padding:16,gap:16,elevation:1},
 identity:{flexDirection:'row',alignItems:'center',gap:12},
 brandMark:{width:54,height:54,borderRadius:16,backgroundColor:'#FF5500',alignItems:'center',justifyContent:'center'},
 brandIcon:{fontSize:31,color:'#FFFFFF',fontWeight:'800'},
 brandText:{flex:1,gap:3},
 brandName:{fontSize:21,fontWeight:'800'},
 brandCaption:{fontSize:13,lineHeight:17},
 sectionTitle:{fontSize:23,fontFamily:'serif',fontWeight:'700',marginTop:8},
 suggestions:{gap:9},
 suggestion:{flexDirection:'row',alignItems:'center',borderWidth:1,borderRadius:17,padding:13,gap:11,minHeight:minimumTouchTarget},
 suggestionIcon:{width:44,height:44,borderRadius:13,alignItems:'center',justifyContent:'center'},
 suggestionGlyph:{color:'#DA5E17',fontSize:24,fontWeight:'700'},
 suggestionBody:{flex:1,gap:3},
 suggestionTitle:{fontSize:16,fontWeight:'700'},
 suggestionOwner:{fontSize:12},
 suggestionDescription:{fontSize:12,lineHeight:17},
 arrow:{fontSize:22,color:'#D4591A'},
 note:{fontSize:12,lineHeight:18},
 error:{fontSize:13,lineHeight:20}
});

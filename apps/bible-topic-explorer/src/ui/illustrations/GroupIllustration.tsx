import {StyleSheet,Text,View} from 'react-native';

/** Original geometric illustration composed of RN shapes. No stock art, photo or copied characters. */
type Figure={skin:string;shirt:string;hair:string;angle:number;left:number;top:number;scale?:number};
const people:Figure[]=[
 {skin:'#C98561',shirt:'#F28B54',hair:'#152E48',angle:-8,left:35,top:37,scale:1},
 {skin:'#E7AD79',shirt:'#94B8CF',hair:'#313945',angle:7,left:108,top:74,scale:.85},
 {skin:'#9E6545',shirt:'#204D72',hair:'#202C41',angle:-7,left:173,top:34,scale:1},
 {skin:'#D69B78',shirt:'#93B3A3',hair:'#3F3942',angle:13,left:240,top:85,scale:.84}
];
export function GroupIllustration(){
 return <View accessible accessibilityLabel="Dibujo original de cuatro personas conversando en grupo" style={styles.frame}>
  <View style={styles.light}/>
  <View style={[styles.orbit,{left:64,top:27,width:193,height:116}]}/>
  <View style={styles.bubble}><Text style={styles.dots}>···</Text></View>
  {people.map((p,i)=><View key={i} style={[styles.person,{left:p.left,top:p.top,transform:[{rotate:p.angle+'deg'},{scale:p.scale??1}]}]}>
   <View style={[styles.hair,{backgroundColor:p.hair}]}/>
   <View style={[styles.head,{backgroundColor:p.skin}]}/>
   <View style={[styles.body,{backgroundColor:p.shirt}]}/>
   <View style={[styles.arm,{backgroundColor:p.skin}]}/>
  </View>)}
  <View style={styles.ground}/>
 </View>;
}
const styles=StyleSheet.create({
 frame:{width:'100%',height:198,maxWidth:370,alignSelf:'center',borderRadius:18,backgroundColor:'#F7F2EA',overflow:'hidden'},
 light:{position:'absolute',width:170,height:170,borderRadius:85,backgroundColor:'#E2ECF0',left:75,top:9},
 orbit:{position:'absolute',borderRadius:80,borderWidth:2,borderColor:'#DDE5E1'},
 bubble:{position:'absolute',top:17,left:135,width:53,height:32,borderRadius:19,backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center',elevation:1,zIndex:8},
 dots:{color:'#245679',fontSize:25,lineHeight:29,fontWeight:'900',letterSpacing:2},
 person:{position:'absolute',width:60,height:110,alignItems:'center'},
 hair:{height:38,width:43,borderTopLeftRadius:22,borderTopRightRadius:22,borderBottomLeftRadius:9,borderBottomRightRadius:9,position:'absolute',top:0,zIndex:1},
 head:{height:35,width:34,borderRadius:17,position:'absolute',top:13,zIndex:2},
 body:{height:60,width:62,borderTopLeftRadius:29,borderTopRightRadius:29,borderBottomRightRadius:9,borderBottomLeftRadius:9,position:'absolute',top:47,zIndex:2},
 arm:{height:39,width:13,borderRadius:8,position:'absolute',top:56,right:-8,transform:[{rotate:'-27deg'}],zIndex:1},
 ground:{position:'absolute',bottom:0,height:15,width:'100%',backgroundColor:'#E7DED2'}
});

import * as Notifications from 'expo-notifications';
import {isDailyReminderResponse} from './src/product/reminders';
import { StatusBar } from 'expo-status-bar';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, BackHandler, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Modal, ScrollView} from 'react-native';
import {drawerDestinations, type DrawerDestination} from './src/product/secondaryMenu';
import {initialTopicUiState, type TopicUiState} from './src/product/conceptIndex';
import { DATABASE_NAME } from './src/db/model'; import { SQLiteLocalPersistence } from './src/db/sqliteLocalPersistence';
import { goBack as previousNavigation, initialNavigationState, navigate as nextNavigation, tabIcons, tabLabels, tabs, type NavigationState, type Route, type TabId } from './src/product/navigation';
import { defaultPreferences, type LocalPreferences } from './src/product/preferences'; import { minimumTouchTarget, radius, shellMaxFontSizeMultiplier, spacing, themes, type as typography } from './src/ui/theme';
import { TodayScreen } from './src/ui/screens/TodayScreen'; import { SearchScreen } from './src/ui/screens/SearchScreen'; import { BibleScreen } from './src/ui/screens/BibleScreen'; import { MusicScreen } from './src/ui/screens/MusicScreen'; import { LibraryScreen } from './src/ui/screens/LibraryScreen'; import { SettingsScreen } from './src/ui/screens/SettingsScreen';
import {ActivitiesScreen} from './src/ui/screens/ActivitiesScreen';
import {SongsScreen} from './src/ui/screens/SongsScreen';
import {PersonalBooksScreen} from './src/ui/screens/PersonalBooksScreen';
const bundledBible={assetId:require('./assets/data/bible-topic-explorer.db')};
function AppContent(){const [navigation,setNavigation]=useState<NavigationState>(initialNavigationState());const [drawerOpen,setDrawerOpen]=useState(false);const [topicUi,setTopicUi]=useState<TopicUiState>(initialTopicUiState);const route=navigation.current;const db=useSQLiteContext();const persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);const [preferences,setPreferences]=useState<LocalPreferences>(defaultPreferences);
 useEffect(()=>{let active=true;void persistence.getPreferences().then(value=>{if(active)setPreferences(value);}).catch(()=>{});return()=>{active=false;};},[persistence]); const navigate=useCallback((next:Route,recordHistory=true)=>{setNavigation(state=>nextNavigation(state,next,recordHistory));},[]);
 useEffect(()=>{if(Platform.OS!=='android')return;const subscription=Notifications.addNotificationResponseReceivedListener(response=>{if(isDailyReminderResponse(response))navigate({kind:'tab',tab:'today'});});void Notifications.getLastNotificationResponseAsync().then(response=>{if(response&&isDailyReminderResponse(response))navigate({kind:'tab',tab:'today'});}).catch(()=>{});return()=>subscription.remove();},[navigate]);
 useEffect(()=>{if(Platform.OS!=='android')return;const subscription=BackHandler.addEventListener('hardwareBackPress',()=>{if(drawerOpen){setDrawerOpen(false);return true;}if(navigation.history.length){setNavigation(state=>previousNavigation(state)??state);return true;}Alert.alert('Salir de la aplicación','¿Realmente quieres salir?',[{text:'Cancelar',style:'cancel'},{text:'Salir',onPress:()=>BackHandler.exitApp()}]);return true;});return()=>subscription.remove();},[navigation.history.length,drawerOpen]);
 const mode=preferences.theme;const theme=themes[mode];const activeTab:TabId=route.kind==='tab'?route.tab:route.origin; const openReader=(book:string,chapter:number,verse?:number,recordHistory=true,sourceVerseLabel?:string,verseEnd?:number,sourceVerseLabels?:readonly string[])=>{void persistence.recordReading({bookId:book,chapter,...(verse==null?{}:{verse}),openedAt:new Date().toISOString()});navigate({kind:'reader',book,chapter,verse,...(sourceVerseLabel?{sourceVerseLabel}:{}),...(verseEnd===undefined?{}:{verseEnd}),...(sourceVerseLabels?{sourceVerseLabels}:{}),origin:activeTab},recordHistory);};
 const openDrawerItem=(item:DrawerDestination)=>{if(!item.available)return;setDrawerOpen(false);
 if(item.kind==='tab')navigate({kind:'tab',tab:item.tab});
 else if(item.kind==='music')navigate({kind:'music',origin:activeTab});
 else if(item.kind==='settings')navigate({kind:'settings',origin:activeTab});
 else if(item.kind==='topics'){setTopicUi({mode:'topics',scrollY:0});navigate({kind:'tab',tab:'search'});}
 else if(item.kind==='guides')navigate({kind:'guides',origin:activeTab});
 else if(item.kind==='songs')navigate({kind:'songs',origin:activeTab});
 else if(item.kind==='my-books')navigate({kind:'my-books',origin:activeTab});
 };
 const back=()=>setNavigation(state=>previousNavigation(state)??state);
 const content=
 route.kind==='music'?<MusicScreen theme={theme} onBack={back}/>:
 route.kind==='settings'?<SettingsScreen theme={theme} onPreferencesChange={setPreferences}/>:
 route.kind==='guides'?<ActivitiesScreen theme={theme} guideId={route.guideId} onSelect={guideId=>navigate({...route,guideId})} onBack={back}/>:
 route.kind==='songs'?<SongsScreen theme={theme} songId={route.songId} onSelect={songId=>navigate({...route,songId})} onBack={back}/>:
 route.kind==='my-books'?<PersonalBooksScreen theme={theme} bookId={route.bookId} readingScale={preferences.fontScale} onSelect={bookId=>navigate({...route,bookId})} onBack={back}/>:
 route.kind==='reader'?<BibleScreen theme={theme} readingScale={preferences.fontScale} reader={{book:route.book,chapter:route.chapter,verse:route.verse,sourceVerseLabel:route.sourceVerseLabel,verseEnd:route.verseEnd,sourceVerseLabels:route.sourceVerseLabels}} onBack={route.origin==='search'?back:undefined} onOpenReader={openReader}/>:
 route.tab==='today'?<TodayScreen theme={theme} readingScale={preferences.fontScale} onOpenMusic={()=>navigate({kind:'music',origin:'today'})} onOpenReader={openReader}/>:
 route.tab==='search'?<SearchScreen theme={theme} onOpenReader={openReader} topicUi={topicUi} onTopicUiChange={setTopicUi}/>:
 route.tab==='bible'?<BibleScreen theme={theme} readingScale={preferences.fontScale} initialBook={route.bibleBook} onBookContextChange={book=>navigate({kind:'tab',tab:'bible',...(book?{bibleBook:book}:{})})} onOpenReader={openReader}/>:
 <LibraryScreen theme={theme} onOpenReader={(book,chapter,verse,sourceVerseLabel)=>openReader(book,chapter,verse,true,sourceVerseLabel)}/>;
 return <SafeAreaView edges={['top','bottom']} style={[styles.root,{backgroundColor:theme.background}]}><View style={[styles.top,{borderBottomColor:theme.border,backgroundColor:theme.surface}]}><View style={styles.brandRow}><Pressable accessibilityRole="button" accessibilityLabel="Abrir menú de navegación" accessibilityHint="Abre los destinos reales de La U, incluidos temas, dinámicas, canciones y libros personales." onPress={()=>setDrawerOpen(true)}
 style={({pressed})=>[styles.menuButton,{backgroundColor:pressed?theme.surfaceSoft:'transparent'}]}><Text style={[styles.menuGlyph,{color:theme.primaryText}]}>☰</Text></Pressable><View style={styles.brand}><Text maxFontSizeMultiplier={shellMaxFontSizeMultiplier} style={[typography.label,{color:theme.text}]}>Explorador Bíblico</Text><Text maxFontSizeMultiplier={shellMaxFontSizeMultiplier} style={[typography.micro,{color:theme.secondary}]}>RV1909 · sin conexión</Text></View></View><Pressable accessibilityRole="button" accessibilityLabel="Abrir ajustes" hitSlop={4} onPress={()=>navigate({kind:'settings',origin:activeTab})} style={({pressed})=>[styles.settings,{backgroundColor:pressed?theme.surfaceSoft:'transparent'}]}><Text accessibilityElementsHidden maxFontSizeMultiplier={shellMaxFontSizeMultiplier} style={[styles.settingsIcon,{color:theme.primaryText}]}>⚙</Text><Text maxFontSizeMultiplier={shellMaxFontSizeMultiplier} style={[typography.label,{color:theme.primaryText}]}>Ajustes</Text></Pressable></View><View style={styles.content}>{content}</View><View accessibilityRole="tablist" style={[styles.tabs,{borderTopColor:theme.border,backgroundColor:theme.surface}]}>{tabs.map(tab=>{const selected=activeTab===tab;return <Pressable key={tab} accessibilityRole="tab" accessibilityLabel={tabLabels[tab]} accessibilityState={{selected}} onPress={()=>navigate({kind:'tab',tab})} style={({pressed})=>[styles.tab,selected&&{backgroundColor:theme.selectionBg},pressed&&{opacity:0.78}]}>{selected?<View accessibilityElementsHidden style={[styles.tabIndicator,{backgroundColor:theme.primaryText}]}/>:null}<Text accessibilityElementsHidden maxFontSizeMultiplier={shellMaxFontSizeMultiplier} style={[styles.tabIcon,{color:selected?theme.primaryText:theme.secondary}]}>{tabIcons[tab]}</Text><Text maxFontSizeMultiplier={shellMaxFontSizeMultiplier} style={[typography.metadata,{color:selected?theme.primaryText:theme.secondary,fontWeight:selected?'700':'500'}]}>{tabLabels[tab]}</Text></Pressable>;})}</View><StatusBar style={mode==='dark'?'light':'dark'}/>
  <Modal visible={drawerOpen} transparent animationType="fade" onRequestClose={()=>setDrawerOpen(false)}>
   <View style={styles.drawerOverlay}>
    <SafeAreaView edges={['top','bottom']} style={[styles.drawerPanel,{backgroundColor:theme.surface}]}>
      <ScrollView contentContainerStyle={styles.drawerContents} keyboardShouldPersistTaps="handled">
        <Text accessibilityRole="header" style={[typography.subhead,{color:theme.text}]}>Menú de La U</Text>
        {drawerDestinations.map(item=><Pressable key={item.id} accessibilityRole="button"
          accessibilityLabel={item.available?item.label:item.label+' · Próximamente, no disponible'}
          accessibilityState={{disabled:!item.available}}
          disabled={!item.available} onPress={()=>openDrawerItem(item)}
          style={({pressed})=>[styles.drawerItem,{borderColor:theme.border,backgroundColor:item.available?(pressed?theme.surfaceSoft:theme.surface):theme.disabledBg}]}>
          <Text style={[typography.body,{color:item.available?theme.text:theme.disabledText},styles.drawerItemLabel]}>{item.label}{item.available?'':' · próximamente'}</Text>
          {item.available?<Text style={[typography.label,{color:theme.primaryText}]}>›</Text>:null}
        </Pressable>)}
      </ScrollView>
      <View style={[styles.drawerFooter,{borderTopColor:theme.border}]}>
        <Pressable accessibilityRole="button" accessibilityLabel="Cerrar menú" onPress={()=>setDrawerOpen(false)}
          style={[styles.drawerClose,{borderColor:theme.border}]}>
          <Text style={[typography.label,{color:theme.primaryText}]}>Cerrar menú</Text>
        </Pressable>
      </View>
    </SafeAreaView>
    <Pressable accessibilityRole="button" accessibilityLabel="Cerrar menú tocando fuera" onPress={()=>setDrawerOpen(false)} style={styles.drawerDismiss}/>
   </View>
  </Modal>
 </SafeAreaView>;
}
export default function App(){return <SafeAreaProvider><SQLiteProvider databaseName={DATABASE_NAME} assetSource={bundledBible}><AppContent/></SQLiteProvider></SafeAreaProvider>;}
const styles=StyleSheet.create({root:{flex:1},top:{minHeight:52,paddingHorizontal:20,paddingVertical:spacing.xs,borderBottomWidth:1,flexDirection:'row',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:spacing.xs},brand:{gap:1,flexShrink:1},brandRow:{flexDirection:'row',flexShrink:1,alignItems:'center',gap:spacing.xs},menuButton:{minHeight:minimumTouchTarget,minWidth:minimumTouchTarget,borderRadius:radius.sm,alignItems:'center',justifyContent:'center'},menuGlyph:{fontSize:24,lineHeight:28},settings:{minHeight:minimumTouchTarget,minWidth:minimumTouchTarget,borderRadius:radius.sm,paddingHorizontal:spacing.sm,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:spacing.xs},settingsIcon:{fontSize:18,lineHeight:22},content:{flex:1},tabs:{minHeight:60,borderTopWidth:1,flexDirection:'row',paddingHorizontal:spacing.xs,paddingVertical:spacing.xs,gap:spacing.xs},tab:{flex:1,minHeight:minimumTouchTarget,borderRadius:radius.sm,alignItems:'center',justifyContent:'center',gap:1,position:'relative'},tabIndicator:{position:'absolute',top:2,width:28,height:3,borderRadius:2},tabIcon:{fontSize:17,lineHeight:19},drawerOverlay:{flex:1,flexDirection:'row',backgroundColor:'rgba(0,0,0,0.55)'},drawerPanel:{width:'88%',maxWidth:420,height:'100%'},drawerContents:{padding:spacing.md,paddingBottom:spacing.lg,gap:spacing.xs},drawerItem:{minHeight:minimumTouchTarget,borderRadius:radius.sm,borderWidth:1,paddingHorizontal:spacing.md,paddingVertical:spacing.xs,flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:spacing.sm},drawerItemLabel:{flexShrink:1,flexGrow:1},drawerFooter:{padding:spacing.sm,borderTopWidth:1},drawerClose:{minHeight:minimumTouchTarget,alignItems:'center',justifyContent:'center',borderRadius:radius.sm,borderWidth:1},drawerDismiss:{flex:1}});

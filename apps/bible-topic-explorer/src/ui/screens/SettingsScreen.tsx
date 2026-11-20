import { useEffect, useMemo, useState } from 'react';
import { Alert, Platform, ScrollView, StyleSheet, View } from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {exportPrivateBackup} from '../../db/localBackup';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteLocalPersistence } from '../../db/sqliteLocalPersistence';
import { configureReminder, type ReminderState } from '../../product/reminders';
import {nextPendingReadingDay,reminderTimeOptions} from '../../product/reminderSchedule';
import {readingPlans,planById} from '../../product/readingPlans';
import {SQLitePlanRepository} from '../../db/sqlitePlanRepository';
import { defaultPreferences, onboardingSteps, type LocalPreferences, type ThemePreference } from '../../product/preferences';
import { uxCopy } from '../../product/uxCopy';
import type { Theme } from '../theme';
import { spacing } from '../theme';
import { Action, Body, ChoiceChip, Metadata, Screen, ScreenTitle, Section, SettingRow, StatusBanner, Field } from '../primitives';
import type { StatusKind } from '../visualSemantics';
const themeOptions:readonly{id:ThemePreference;label:string}[]=[{id:'coral',label:'Coral · pink and cream'},{id:'natural',label:'Natural · sage and beige'},{id:'marine',label:'Marine · blue and gold'}];
const fontOptions=[{scale:0.8,label:'80%'},{scale:1,label:'100%'},{scale:1.2,label:'120%'},{scale:1.4,label:'140%'},{scale:1.6,label:'160%'},{scale:2,label:'200%'}] as const;
export function SettingsScreen({theme,onPreferencesChange}:{theme:Theme;onPreferencesChange?:(value:LocalPreferences)=>void}){
 const db=useSQLiteContext();const persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);const [prefs,setPrefs]=useState(defaultPreferences);const [status,setStatus]=useState('Loading local preferences…');const [statusKind,setStatusKind]=useState<StatusKind>('info');const [reminderState,setReminderState]=useState<ReminderState>('off');
 const [reminderPlan,setReminderPlan]=useState('encuentro');
 const [reminderTitle,setReminderTitle]=useState("My Bible reading");
 const [draftTime,setDraftTime]=useState(defaultPreferences.reminderTime);
 const [nextDay,setNextDay]=useState(1);
 useEffect(()=>{let active=true;
  void Promise.all([persistence.getPreferences(),persistence.getReminderPlan()]).then(async([value,details])=>{
   const progress=await new SQLitePlanRepository(db).list(details.planId);
   const next=nextPendingReadingDay(progress);
   if(!active)return;
   setPrefs(value);setDraftTime(value.reminderTime);onPreferencesChange?.(value);
   setReminderPlan(details.planId);setReminderTitle(details.title);setNextDay(next);
   void configureReminder(value.reminderEnabled,value.reminderTime,false,{
    planId:details.planId,planTitle:planById(details.planId)?.title??"Bible reading",day:next,title:details.title
   }).then(setReminderState);
   setStatus('');
  }).catch(()=>{if(active){setStatus("Could not read local preferences.");setStatusKind('error');}});
  return()=>{active=false;};
 },[persistence,onPreferencesChange,db]);
 const update=async(next:LocalPreferences)=>{setPrefs(next);onPreferencesChange?.(next);try{await persistence.setPreferences(next);setStatus('Preferences saved on this device.');setStatusKind('success');}catch{setStatus("Local preferences could not be saved.");setStatusKind('error');}};

 const chooseTime=()=>{
  const [hour,minute]=draftTime.split(':').map(Number);
  const date=new Date();date.setHours(hour,minute,0,0);
  DateTimePickerAndroid.open({value:date,mode:'time',is24Hour:true,onChange:(event,chosen)=>{
   if(event.type==='set'&&chosen){
    setDraftTime(String(chosen.getHours()).padStart(2,'0')+':'+String(chosen.getMinutes()).padStart(2,'0'));
   }
  }});
 };
 const choosePlan=(planId:string)=>{
  setReminderPlan(planId);
  void new SQLitePlanRepository(db).list(planId).then(rows=>setNextDay(nextPendingReadingDay(rows))).catch(()=>{});
 };
 const saveReminder=async(enabled:boolean)=>{
  const title=reminderTitle.trim()||"My Bible reading";
  const plan=planById(reminderPlan);
  try{
   await persistence.setReminderPlan(reminderPlan,title);
   const rows=await new SQLitePlanRepository(db).list(reminderPlan);
   const day=nextPendingReadingDay(rows);
   setNextDay(day);
   const actual=await configureReminder(enabled,draftTime,enabled,{
    planId:reminderPlan,planTitle:plan?.title??"Bible reading",day,title
   });
   setReminderState(actual);
   if(enabled&&actual!=='active'){
    setStatus(actual==='denied'?"Turn on notifications in Android Settings if you want to receive notifications.":"It was not possible to schedule the notification on this device.");
    setStatusKind('warning');
    return;
   }
   await update({...prefs,reminderEnabled:enabled,reminderTime:draftTime});
  }catch{setStatus("The reminder could not be saved. Your readings are preserved.");setStatusKind('error');}
 };

 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><View style={[styles.intro,{borderLeftColor:theme.purple}]}><ScreenTitle theme={theme}>Settings</ScreenTitle><Body theme={theme} muted>Local preferences, no account required.</Body></View>{status?(statusKind==='error'?<StatusBanner theme={theme} kind="error">{status}</StatusBanner>:<Body theme={theme} muted>{status}</Body>):null}
 <Section theme={theme} title="Appearance" description="Three editorial atmospheres with light backgrounds; Your choice is preserved on this device."><View style={styles.choices}>{themeOptions.map(option=><ChoiceChip key={option.id} label={option.label} theme={theme} selected={prefs.theme===option.id} onPress={()=>{void update({...prefs,theme:option.id});}}/>)}</View></Section>
 <Section theme={theme} title="Reading size" description="Adjust the biblical text. The interface follows the system's text scaling within safe limits for fixed navigation."><View style={styles.choices}>{fontOptions.map(option=><ChoiceChip key={option.scale} label={option.label} theme={theme} selected={Math.abs(prefs.fontScale-option.scale)<0.01} onPress={()=>{void update({...prefs,fontScale:option.scale});}}/>)}</View><Metadata theme={theme}>Preference: {Math.round(prefs.fontScale*100)}%</Metadata></Section>
 <Section theme={theme} title="Reading reminder"
   description="A personal prompt that opens the next day of your Bible plan. It is only activated if you want it to.">
  <Field theme={theme} label="Name of your reminder" value={reminderTitle}
    onChangeText={setReminderTitle} maxLength={90} placeholder="Ex: Read the Bible when you wake up"/>
  <Body theme={theme} muted>Choose your plan</Body>
  <View style={styles.choices}>{readingPlans.map(plan=><ChoiceChip key={plan.id}
    theme={theme} label={plan.title} selected={reminderPlan===plan.id} onPress={()=>choosePlan(plan.id)}/>)}</View>
  <Metadata theme={theme}>Next reading: day {nextDay} of 7</Metadata>
  <Body theme={theme} muted>Device time</Body>
  {Platform.OS==='android'?<Action theme={theme} variant="secondary"
    label={'Choose time · '+draftTime+'  →'} onPress={chooseTime}/>:
   <View style={styles.choices}>{reminderTimeOptions.map(time=><ChoiceChip key={time}
    theme={theme} label={time} selected={draftTime===time} onPress={()=>setDraftTime(time)}/>)}</View>}
  <SettingRow theme={theme} label="Notification" value={reminderState==='active'?'Active':reminderState==='denied'?'Permission denied':reminderState==='unavailable'?"Not available":'Disabled'}/>
  <Action label="Save name, plan and time" variant="secondary" theme={theme} onPress={()=>{void saveReminder(prefs.reminderEnabled);}}/>
  <Action label={prefs.reminderEnabled?"Disable reading notification":"Activate reading notification"}
    theme={theme} onPress={()=>{void saveReminder(!prefs.reminderEnabled);}}/>
  <Metadata theme={theme}>Notifications are managed by local Android notifications and may be subject to delays.</Metadata>
 </Section>
 <Section theme={theme} title="Introduction"><Body theme={theme} muted>{onboardingSteps.map(step=>step.title).join(' · ')}</Body><SettingRow theme={theme} label="Status" value={prefs.onboardingComplete?'Completed':'Pending'}/><Action label={prefs.onboardingComplete?"Show contextual help again":"Mark introduction as viewed"} variant="tertiary" theme={theme} onPress={()=>{void update({...prefs,onboardingComplete:!prefs.onboardingComplete});}}/></Section>
 <Section theme={theme} title="Manual private backup" description="Export a JSON copy only when choosing an Android folder; It is not uploaded to the cloud automatically or data is deleted."><Action theme={theme} variant="secondary" label="Export copy of notes and highlights" onPress={()=>Alert.alert('Private backup',"The JSON file will include notes, highlights, history, and preferences. Choose a folder that you control; whoever has the file will be able to read your notes. Nothing will be deleted.",[{text:"Cancel",style:'cancel'},{text:'Choose folder',onPress:()=>{void exportPrivateBackup(db).then(filename=>{setStatus('Backup created: '+filename);setStatusKind('success');}).catch(()=>{setStatus("Backup not performed: selection canceled, incompatible destination, or error writing. The original data does not change.");setStatusKind('warning');});}}])}/><Metadata theme={theme}>Does not automatically restore or include PDF/EPUB files; it retains only its reading index. Save the JSON in a safe place.</Metadata></Section>
 <Section theme={theme} title="Privacy and source"><SettingRow theme={theme} label="Account" value="Not required"/><SettingRow theme={theme} label="Usage data" value="Stored locally"/><SettingRow theme={theme} label="Translation" value="WEBP"/><Metadata theme={theme}>World English Bible (WEBP), eBible.org. Public-domain text. License: https://ebible.org/engwebp/copyright.htm.</Metadata></Section></ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},intro:{gap:spacing.xs,borderLeftWidth:3,paddingLeft:spacing.md,paddingVertical:spacing.xs},choices:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs}});

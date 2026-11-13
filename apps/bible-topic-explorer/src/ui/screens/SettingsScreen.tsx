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
const themeOptions:readonly{id:ThemePreference;label:string}[]=[{id:'coral',label:'Coral · rosa y crema'},{id:'natural',label:'Natural · salvia y beige'},{id:'marine',label:'Marino · azul y dorado'}];
const fontOptions=[{scale:0.8,label:'80%'},{scale:1,label:'100%'},{scale:1.2,label:'120%'},{scale:1.4,label:'140%'},{scale:1.6,label:'160%'},{scale:2,label:'200%'}] as const;
export function SettingsScreen({theme,onPreferencesChange}:{theme:Theme;onPreferencesChange?:(value:LocalPreferences)=>void}){
 const db=useSQLiteContext();const persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);const [prefs,setPrefs]=useState(defaultPreferences);const [status,setStatus]=useState('Cargando preferencias locales…');const [statusKind,setStatusKind]=useState<StatusKind>('info');const [reminderState,setReminderState]=useState<ReminderState>('off');
 const [reminderPlan,setReminderPlan]=useState('encuentro');
 const [reminderTitle,setReminderTitle]=useState('Mi lectura bíblica');
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
    planId:details.planId,planTitle:planById(details.planId)?.title??'Lectura bíblica',day:next,title:details.title
   }).then(setReminderState);
   setStatus('');
  }).catch(()=>{if(active){setStatus('No se pudieron leer las preferencias locales.');setStatusKind('error');}});
  return()=>{active=false;};
 },[persistence,onPreferencesChange,db]);
 const update=async(next:LocalPreferences)=>{setPrefs(next);onPreferencesChange?.(next);try{await persistence.setPreferences(next);setStatus('Preferencias guardadas en este dispositivo.');setStatusKind('success');}catch{setStatus('No se pudieron guardar las preferencias locales.');setStatusKind('error');}};

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
  const title=reminderTitle.trim()||'Mi lectura bíblica';
  const plan=planById(reminderPlan);
  try{
   await persistence.setReminderPlan(reminderPlan,title);
   const rows=await new SQLitePlanRepository(db).list(reminderPlan);
   const day=nextPendingReadingDay(rows);
   setNextDay(day);
   const actual=await configureReminder(enabled,draftTime,enabled,{
    planId:reminderPlan,planTitle:plan?.title??'Lectura bíblica',day,title
   });
   setReminderState(actual);
   if(enabled&&actual!=='active'){
    setStatus(actual==='denied'?'Activa las notificaciones en Ajustes de Android si quieres recibir avisos.':'No fue posible programar la notificación en este dispositivo.');
    setStatusKind('warning');
    return;
   }
   await update({...prefs,reminderEnabled:enabled,reminderTime:draftTime});
  }catch{setStatus('No se pudo guardar el recordatorio. Tus lecturas se conservan.');setStatusKind('error');}
 };

 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><View style={[styles.intro,{borderLeftColor:theme.purple}]}><ScreenTitle theme={theme}>Ajustes</ScreenTitle><Body theme={theme} muted>Preferencias locales, sin cuenta obligatoria.</Body></View>{status?(statusKind==='error'?<StatusBanner theme={theme} kind="error">{status}</StatusBanner>:<Body theme={theme} muted>{status}</Body>):null}
 <Section theme={theme} title="Apariencia" description="Tres atmósferas editoriales con fondos claros; tu elección se conserva en este dispositivo."><View style={styles.choices}>{themeOptions.map(option=><ChoiceChip key={option.id} label={option.label} theme={theme} selected={prefs.theme===option.id} onPress={()=>{void update({...prefs,theme:option.id});}}/>)}</View></Section>
 <Section theme={theme} title="Tamaño de lectura" description="Ajusta el texto bíblico. La interfaz sigue el escalado de texto del sistema dentro de límites seguros para la navegación fija."><View style={styles.choices}>{fontOptions.map(option=><ChoiceChip key={option.scale} label={option.label} theme={theme} selected={Math.abs(prefs.fontScale-option.scale)<0.01} onPress={()=>{void update({...prefs,fontScale:option.scale});}}/>)}</View><Metadata theme={theme}>Preferencia: {Math.round(prefs.fontScale*100)}%</Metadata></Section>
 <Section theme={theme} title="Recordatorio de lectura"
   description="Un aviso personal que abre el siguiente día de tu plan bíblico. Solo se activa si tú quieres.">
  <Field theme={theme} label="Nombre de tu recordatorio" value={reminderTitle}
    onChangeText={setReminderTitle} maxLength={90} placeholder="Ej.: Leer la Biblia al despertar"/>
  <Body theme={theme} muted>Elige tu plan</Body>
  <View style={styles.choices}>{readingPlans.map(plan=><ChoiceChip key={plan.id}
    theme={theme} label={plan.title} selected={reminderPlan===plan.id} onPress={()=>choosePlan(plan.id)}/>)}</View>
  <Metadata theme={theme}>Siguiente lectura: día {nextDay} de 7</Metadata>
  <Body theme={theme} muted>Hora del celular</Body>
  {Platform.OS==='android'?<Action theme={theme} variant="secondary"
    label={'Elegir hora · '+draftTime+'  →'} onPress={chooseTime}/>:
   <View style={styles.choices}>{reminderTimeOptions.map(time=><ChoiceChip key={time}
    theme={theme} label={time} selected={draftTime===time} onPress={()=>setDraftTime(time)}/>)}</View>}
  <SettingRow theme={theme} label="Notificación" value={reminderState==='active'?'Activada':reminderState==='denied'?'Permiso denegado':reminderState==='unavailable'?'No disponible':'Desactivada'}/>
  <Action label="Guardar nombre, plan y hora" variant="secondary" theme={theme} onPress={()=>{void saveReminder(prefs.reminderEnabled);}}/>
  <Action label={prefs.reminderEnabled?'Desactivar aviso':'Activar aviso de lectura'}
    theme={theme} onPress={()=>{void saveReminder(!prefs.reminderEnabled);}}/>
  <Metadata theme={theme}>Los avisos se gestionan mediante notificaciones locales de Android y pueden sufrir retrasos.</Metadata>
 </Section>
 <Section theme={theme} title="Introducción"><Body theme={theme} muted>{onboardingSteps.map(step=>step.title).join(' · ')}</Body><SettingRow theme={theme} label="Estado" value={prefs.onboardingComplete?'Completada':'Pendiente'}/><Action label={prefs.onboardingComplete?'Volver a mostrar ayudas contextuales':'Marcar introducción como vista'} variant="tertiary" theme={theme} onPress={()=>{void update({...prefs,onboardingComplete:!prefs.onboardingComplete});}}/></Section>
 <Section theme={theme} title="Respaldo manual y privado" description="Exporta una copia JSON solo al elegir una carpeta de Android; no se sube a la nube automáticamente ni se borran datos."><Action theme={theme} variant="secondary" label="Exportar copia de notas y destacados" onPress={()=>Alert.alert('Respaldo privado','El archivo JSON incluirá notas, destacados, historial y preferencias. Elige una carpeta que controles; quien tenga el archivo podrá leer tus notas. No se borrará nada.',[{text:'Cancelar',style:'cancel'},{text:'Elegir carpeta',onPress:()=>{void exportPrivateBackup(db).then(filename=>{setStatus('Respaldo creado: '+filename);setStatusKind('success');}).catch(()=>{setStatus('Respaldo no realizado: selección cancelada, destino incompatible o error al escribir. Los datos originales no cambian.');setStatusKind('warning');});}}])}/><Metadata theme={theme}>No restaura automáticamente ni incluye archivos PDF/EPUB; conserva únicamente su índice de lectura. Guarda el JSON en un lugar seguro.</Metadata></Section>
 <Section theme={theme} title="Privacidad y fuente"><SettingRow theme={theme} label="Cuenta" value="No requerida"/><SettingRow theme={theme} label="Datos de uso" value="Locales"/><SettingRow theme={theme} label="Traducción" value="RV1909"/><Metadata theme={theme}>Reina-Valera 1909 · BibleAquifer · dominio público/CC0 del paquete.</Metadata></Section></ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},intro:{gap:spacing.xs,borderLeftWidth:3,paddingLeft:spacing.md,paddingVertical:spacing.xs},choices:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs}});

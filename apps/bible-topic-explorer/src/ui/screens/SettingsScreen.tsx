import { useEffect, useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import {exportPrivateBackup} from '../../db/localBackup';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteLocalPersistence } from '../../db/sqliteLocalPersistence';
import { configureReminder, type ReminderState } from '../../product/reminders';
import {readingPlans,planById} from '../../product/readingPlans';
import {SQLitePlanRepository} from '../../db/sqlitePlanRepository';
import { nextPendingReadingDay,reminderTimeOptions } from '../../product/reminderSchedule';
import { defaultPreferences, onboardingSteps, type LocalPreferences, type ThemePreference } from '../../product/preferences';
import { uxCopy } from '../../product/uxCopy';
import type { Theme } from '../theme';
import { spacing } from '../theme';
import { Action, Body, ChoiceChip, Metadata, Screen, ScreenTitle, Section, SettingRow, StatusBanner, Field } from '../primitives';
import type { StatusKind } from '../visualSemantics';
const themeOptions:readonly{id:ThemePreference;label:string}[]=[{id:'coral',label:'Coral · rosa y crema'},{id:'natural',label:'Natural · salvia y beige'},{id:'marine',label:'Marino · azul y dorado'}];
const fontOptions=[{scale:0.8,label:'80%'},{scale:1,label:'100%'},{scale:1.2,label:'120%'},{scale:1.4,label:'140%'},{scale:1.6,label:'160%'},{scale:2,label:'200%'}] as const;
export function SettingsScreen({theme,onPreferencesChange}:{theme:Theme;onPreferencesChange?:(value:LocalPreferences)=>void}){
 const db=useSQLiteContext();const persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);const [prefs,setPrefs]=useState(defaultPreferences);const [status,setStatus]=useState('Cargando preferencias locales…');const [statusKind,setStatusKind]=useState<StatusKind>('info');const [reminderState,setReminderState]=useState<ReminderState>('off');const [reminderPlanId,setReminderPlanId]=useState('encuentro');const [reminderTitle,setReminderTitle]=useState('Mi lectura bíblica');const [reminderDay,setReminderDay]=useState(1);
 useEffect(()=>{let active=true;
  void Promise.all([persistence.getPreferences(),persistence.getReminderDetails()]).then(async([value,details])=>{
   const progress=await new SQLitePlanRepository(db).list(details.planId);
   const day=nextPendingReadingDay(progress);
   if(!active)return;
   setPrefs(value);onPreferencesChange?.(value);setReminderPlanId(details.planId);setReminderTitle(details.title);setReminderDay(day);
   void configureReminder(value.reminderEnabled,value.reminderTime,false,{
    planId:details.planId,planTitle:planById(details.planId)?.title??'Lectura bíblica',day,title:details.title
   }).then(setReminderState);
   setStatus('');setStatusKind('info');
  }).catch(()=>{if(active){setStatus('No se pudieron leer las preferencias locales.');setStatusKind('error');}});
  return()=>{active=false;};
 },[persistence,onPreferencesChange,db]);
 const update=async(next:LocalPreferences)=>{setPrefs(next);onPreferencesChange?.(next);try{await persistence.setPreferences(next);setStatus('Preferencias guardadas en este dispositivo.');setStatusKind('success');}catch{setStatus('No se pudieron guardar las preferencias locales.');setStatusKind('error');}};

 const changeReminder=async(enabled:boolean,time:string)=>{
   const plan=planById(reminderPlanId);
   const progress=await new SQLitePlanRepository(db).list(reminderPlanId).catch(()=>[]);
   const day=nextPendingReadingDay(progress);
   const title=reminderTitle.trim()||'Mi lectura bíblica';
   try{await persistence.setReminderDetails({planId:reminderPlanId,title});}catch{setStatus('No se pudieron guardar los datos del recordatorio.');return;}
   setReminderDay(day);
   const actual=await configureReminder(enabled,time,true,{
      planId:reminderPlanId,planTitle:plan?.title??'Lectura bíblica',day,title
   });
   setReminderState(actual);
   if(enabled&&actual!=='active'){
     setStatus(actual==='denied'?'Activa el permiso de notificaciones en Ajustes de Android.':'Los avisos no están disponibles en este dispositivo.');
     setStatusKind('warning');
     return;
   }
   await update({...prefs,reminderEnabled:enabled,reminderTime:time});
 };
 const saveReminder=async()=>{
  await changeReminder(prefs.reminderEnabled,prefs.reminderTime);
 };

 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><View style={[styles.intro,{borderLeftColor:theme.purple}]}><ScreenTitle theme={theme}>Ajustes</ScreenTitle><Body theme={theme} muted>Preferencias locales, sin cuenta obligatoria.</Body></View>{status?statusKind==='error'?<StatusBanner theme={theme} kind="error">{status}</StatusBanner>:<Body theme={theme} muted>{status}</Body>:null}
 <Section theme={theme} title="Apariencia" description="Tres atmósferas editoriales con fondos claros; tu elección se conserva en este dispositivo."><View style={styles.choices}>{themeOptions.map(option=><ChoiceChip key={option.id} label={option.label} theme={theme} selected={prefs.theme===option.id} onPress={()=>{void update({...prefs,theme:option.id});}}/>)}</View></Section>
 <Section theme={theme} title="Tamaño de lectura" description="Ajusta el texto bíblico. La interfaz sigue el escalado de texto del sistema dentro de límites seguros para la navegación fija."><View style={styles.choices}>{fontOptions.map(option=><ChoiceChip key={option.scale} label={option.label} theme={theme} selected={Math.abs(prefs.fontScale-option.scale)<0.01} onPress={()=>{void update({...prefs,fontScale:option.scale});}}/>)}</View><Metadata theme={theme}>Preferencia: {Math.round(prefs.fontScale*100)}%</Metadata></Section>
 <Section theme={theme} title="Recordatorio de mi plan bíblico"
   description="Elige un plan de siete días. El aviso abrirá el próximo día pendiente de tu lectura.">
  <Field theme={theme} label="Nombre de mi recordatorio" value={reminderTitle}
    onChangeText={setReminderTitle} maxLength={90} placeholder="Ej.: Biblia antes de dormir"/>
  <Body theme={theme} muted>Plan que quieres seguir</Body>
  <View style={styles.choices}>{readingPlans.map(plan=><ChoiceChip key={plan.id} theme={theme}
    label={plan.title} selected={reminderPlanId===plan.id} onPress={()=>{
      setReminderPlanId(plan.id);
      void new SQLitePlanRepository(db).list(plan.id).then(rows=>setReminderDay(nextPendingReadingDay(rows))).catch(()=>{});
    }}/>)}</View>
  <Metadata theme={theme}>Próxima lectura: {planById(reminderPlanId)?.title??'Plan bíblico'} · día {reminderDay} de 7</Metadata>
  <Body theme={theme} muted>Hora local del celular</Body>
  <View style={styles.choices}>{reminderTimeOptions.map(time=><ChoiceChip key={time} label={time} theme={theme}
    selected={prefs.reminderTime===time} onPress={()=>{void changeReminder(prefs.reminderEnabled,time);}}/>)}</View>
  <SettingRow theme={theme} label="Estado" value={reminderState==='active'?'Activado':reminderState==='denied'?'Permiso denegado':reminderState==='unavailable'?'No disponible':'Desactivado'}/>
  <Action label="Guardar nombre y plan del recordatorio" variant="secondary" theme={theme}
    onPress={()=>{void saveReminder();}}/>
  <Action label={prefs.reminderEnabled?'Desactivar recordatorio':'Activar recordatorio del plan'}
    theme={theme} onPress={()=>{void changeReminder(!prefs.reminderEnabled,prefs.reminderTime);}}/>
  <Metadata theme={theme}>Este aviso usa la hora local de Android. Puedes cambiarlo o desactivarlo cuando quieras.</Metadata>
 </Section>
 <Section theme={theme} title="Introducción"><Body theme={theme} muted>{onboardingSteps.map(step=>step.title).join(' · ')}</Body><SettingRow theme={theme} label="Estado" value={prefs.onboardingComplete?'Completada':'Pendiente'}/><Action label={prefs.onboardingComplete?'Volver a mostrar ayudas contextuales':'Marcar introducción como vista'} variant="tertiary" theme={theme} onPress={()=>{void update({...prefs,onboardingComplete:!prefs.onboardingComplete});}}/></Section>
 <Section theme={theme} title="Respaldo manual y privado" description="Exporta una copia JSON solo al elegir una carpeta de Android; no se sube a la nube automáticamente ni se borran datos."><Action theme={theme} variant="secondary" label="Exportar copia de notas y destacados" onPress={()=>Alert.alert('Respaldo privado','El archivo JSON incluirá notas, destacados, historial y preferencias. Elige una carpeta que controles; quien tenga el archivo podrá leer tus notas. No se borrará nada.',[{text:'Cancelar',style:'cancel'},{text:'Elegir carpeta',onPress:()=>{void exportPrivateBackup(db).then(filename=>{setStatus('Respaldo creado: '+filename);setStatusKind('success');}).catch(()=>{setStatus('Respaldo no realizado: selección cancelada, destino incompatible o error al escribir. Los datos originales no cambian.');setStatusKind('warning');});}}])}/><Metadata theme={theme}>No restaura automáticamente ni incluye archivos PDF/EPUB; conserva únicamente su índice de lectura. Guarda el JSON en un lugar seguro.</Metadata></Section>
 <Section theme={theme} title="Privacidad y fuente"><SettingRow theme={theme} label="Cuenta" value="No requerida"/><SettingRow theme={theme} label="Datos de uso" value="Locales"/><SettingRow theme={theme} label="Traducción" value="RV1909"/><Metadata theme={theme}>Reina-Valera 1909 · BibleAquifer · dominio público/CC0 del paquete.</Metadata></Section></ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},intro:{gap:spacing.xs,borderLeftWidth:3,paddingLeft:spacing.md,paddingVertical:spacing.xs},choices:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs}});

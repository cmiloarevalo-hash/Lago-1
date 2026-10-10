import { useEffect, useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import {exportPrivateBackup} from '../../db/localBackup';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteLocalPersistence } from '../../db/sqliteLocalPersistence';
import { configureReminder, type ReminderState } from '../../product/reminders';
import { reminderTimeOptions } from '../../product/reminderSchedule';
import { defaultPreferences, onboardingSteps, type LocalPreferences, type ThemePreference } from '../../product/preferences';
import { uxCopy } from '../../product/uxCopy';
import type { Theme } from '../theme';
import { spacing } from '../theme';
import { Action, Body, ChoiceChip, Metadata, Screen, ScreenTitle, Section, SettingRow, StatusBanner } from '../primitives';
import type { StatusKind } from '../visualSemantics';
const themeOptions:readonly{id:ThemePreference;label:string}[]=[{id:'lavender',label:'Lavanda claro'},{id:'sky',label:'Celeste neutro'},{id:'dark',label:'Oscuro'}];
const fontOptions=[{scale:0.8,label:'80%'},{scale:1,label:'100%'},{scale:1.2,label:'120%'},{scale:1.4,label:'140%'},{scale:1.6,label:'160%'}] as const;
export function SettingsScreen({theme,onPreferencesChange}:{theme:Theme;onPreferencesChange?:(value:LocalPreferences)=>void}){
 const db=useSQLiteContext();const persistence=useMemo(()=>new SQLiteLocalPersistence(db),[db]);const [prefs,setPrefs]=useState(defaultPreferences);const [status,setStatus]=useState('Cargando preferencias locales…');const [statusKind,setStatusKind]=useState<StatusKind>('info');const [reminderState,setReminderState]=useState<ReminderState>('off');
 useEffect(()=>{let active=true;void persistence.getPreferences().then(value=>{if(active){setPrefs(value);onPreferencesChange?.(value);void configureReminder(value.reminderEnabled,value.reminderTime).then(setReminderState);setStatus('');setStatusKind('info');}}).catch(()=>{if(active){setStatus('No se pudieron leer las preferencias locales.');setStatusKind('error');}});return()=>{active=false;};},[persistence,onPreferencesChange]);
 const update=async(next:LocalPreferences)=>{setPrefs(next);onPreferencesChange?.(next);try{await persistence.setPreferences(next);setStatus('Preferencias guardadas en este dispositivo.');setStatusKind('success');}catch{setStatus('No se pudieron guardar las preferencias locales.');setStatusKind('error');}};

 const changeReminder=async(enabled:boolean,time:string)=>{
   const actual=await configureReminder(enabled,time,true);
   setReminderState(actual);
   if(enabled&&actual!=='active'){
     setStatus(actual==='denied'?'Permiso de notificaciones denegado. Puedes habilitarlo en ajustes de Android.':'Recordatorios no disponibles en este dispositivo.');
     setStatusKind('warning');
     return;
   }
   await update({...prefs,reminderEnabled:enabled,reminderTime:time});
 };
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><View style={[styles.intro,{borderLeftColor:theme.purple}]}><ScreenTitle theme={theme}>Ajustes</ScreenTitle><Body theme={theme} muted>Preferencias locales, sin cuenta obligatoria.</Body></View>{status?<StatusBanner theme={theme} kind={statusKind}>{status}</StatusBanner>:null}
 <Section theme={theme} title="Apariencia" description="Elige el color de la aplicación; se conserva en este dispositivo."><View style={styles.choices}>{themeOptions.map(option=><ChoiceChip key={option.id} label={option.label} theme={theme} selected={prefs.theme===option.id} onPress={()=>{void update({...prefs,theme:option.id});}}/>)}</View></Section>
 <Section theme={theme} title="Tamaño de lectura" description="Ajusta el texto bíblico. La interfaz sigue el escalado de texto del sistema dentro de límites seguros para la navegación fija."><View style={styles.choices}>{fontOptions.map(option=><ChoiceChip key={option.scale} label={option.label} theme={theme} selected={Math.abs(prefs.fontScale-option.scale)<0.01} onPress={()=>{void update({...prefs,fontScale:option.scale});}}/>)}</View><Metadata theme={theme}>Preferencia: {Math.round(prefs.fontScale*100)}%</Metadata></Section>
 <Section theme={theme} title="Recordatorio diario" description="Una invitación local a Hoy, desactivada por defecto. Android puede retrasarla."><SettingRow theme={theme} label="Hora local" value={prefs.reminderTime}/><SettingRow theme={theme} label="Estado real" value={reminderState==='active'?'Programado':reminderState==='denied'?'Permiso denegado':reminderState==='unavailable'?'No disponible':'Desactivado'}/><View style={styles.choices}>{reminderTimeOptions.map(time=><ChoiceChip key={time} label={time} theme={theme} selected={prefs.reminderTime===time} onPress={()=>{void changeReminder(prefs.reminderEnabled,time);}}/>)}</View><Action label={prefs.reminderEnabled?'Desactivar recordatorio':'Activar recordatorio diario'} variant={prefs.reminderEnabled?'secondary':'primary'} theme={theme} onPress={()=>{void changeReminder(!prefs.reminderEnabled,prefs.reminderTime);}}/><Metadata theme={theme}>Un momento para la Palabra · Tu lectura de hoy te espera. Léela a tu ritmo. Al tocar, abre Hoy.</Metadata><StatusBanner theme={theme} kind="warning">Notificación local best-effort: requiere permiso y no garantiza una hora exacta. Sin servidor ni cuenta.</StatusBanner></Section>
 <Section theme={theme} title="Introducción"><Body theme={theme} muted>{onboardingSteps.map(step=>step.title).join(' · ')}</Body><SettingRow theme={theme} label="Estado" value={prefs.onboardingComplete?'Completada':'Pendiente'}/><Action label={prefs.onboardingComplete?'Volver a mostrar ayudas contextuales':'Marcar introducción como vista'} variant="tertiary" theme={theme} onPress={()=>{void update({...prefs,onboardingComplete:!prefs.onboardingComplete});}}/></Section>
 <Section theme={theme} title="Respaldo manual y privado" description="Exporta una copia JSON solo al elegir una carpeta de Android; no se sube a la nube automáticamente ni se borran datos."><Action theme={theme} variant="secondary" label="Exportar copia de notas y destacados" onPress={()=>Alert.alert('Respaldo privado','El archivo JSON incluirá notas, destacados, historial y preferencias. Elige una carpeta que controles; quien tenga el archivo podrá leer tus notas. No se borrará nada.',[{text:'Cancelar',style:'cancel'},{text:'Elegir carpeta',onPress:()=>{void exportPrivateBackup(db).then(filename=>{setStatus('Respaldo creado: '+filename);setStatusKind('success');}).catch(()=>{setStatus('Respaldo no realizado: selección cancelada, destino incompatible o error al escribir. Los datos originales no cambian.');setStatusKind('warning');});}}])}/><Metadata theme={theme}>No restaura automáticamente ni incluye archivos PDF/EPUB; conserva únicamente su índice de lectura. Guarda el JSON en un lugar seguro.</Metadata></Section>
 <Section theme={theme} title="Privacidad y fuente"><SettingRow theme={theme} label="Cuenta" value="No requerida"/><SettingRow theme={theme} label="Datos de uso" value="Locales"/><SettingRow theme={theme} label="Traducción" value="RV1909"/><Metadata theme={theme}>Reina-Valera 1909 · BibleAquifer · dominio público/CC0 del paquete.</Metadata></Section></ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},intro:{gap:spacing.xs,borderLeftWidth:3,paddingLeft:spacing.md,paddingVertical:spacing.xs},choices:{flexDirection:'row',flexWrap:'wrap',gap:spacing.xs}});

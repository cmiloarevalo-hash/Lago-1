import {Platform} from 'react-native';
import * as Notifications from 'expo-notifications';
import {parseReminderTime} from './reminderSchedule';

export type ReminderState='active'|'off'|'denied'|'unavailable';
export type PlanReminder={planId:string;planTitle:string;day:number;title:string};
const CHANNEL='lau-daily-reading';
const KIND='lau-word-of-day';

Notifications.setNotificationHandler({
 handleNotification:async()=>({shouldShowBanner:true,shouldShowList:true,shouldPlaySound:false,shouldSetBadge:false}),
});

async function cancelPrevious():Promise<void>{
 const requests=await Notifications.getAllScheduledNotificationsAsync();
 for(const request of requests){
  if(request.content.data?.kind===KIND)await Notifications.cancelScheduledNotificationAsync(request.identifier);
 }
}

/** Plan-based device-local reminder, no subscription, push token or network necessary. */
export async function configureReminder(enabled:boolean,time:string,requestPermission=false,details?:PlanReminder):Promise<ReminderState>{
 if(Platform.OS!=='android')return'unavailable';
 try{
  if(!enabled){await cancelPrevious();return'off';}
  const when=parseReminderTime(time);if(!when)return'unavailable';
  await Notifications.setNotificationChannelAsync(CHANNEL,{name:'Lectura bíblica',importance:Notifications.AndroidImportance.DEFAULT});
  let permission=await Notifications.getPermissionsAsync();
  if(!permission.granted&&requestPermission)permission=await Notifications.requestPermissionsAsync();
  if(!permission.granted)return'denied';
  await cancelPrevious();
  const plan=details?.planTitle??'Plan de lectura';
  const day=details?.day??1;
  await Notifications.scheduleNotificationAsync({
   content:{
    title:details?.title.trim()||'Mi lectura bíblica',
    body:plan+' · Día '+day+'. Continúa tu lectura de la Biblia.',
    data:{kind:KIND,planId:details?.planId??'encuentro',day},
   },
   trigger:{type:Notifications.SchedulableTriggerInputTypes.DAILY,hour:when.hour,minute:when.minute,channelId:CHANNEL},
  });
  return'active';
 }catch{return'unavailable';}
}
export function isDailyReminderResponse(response:Notifications.NotificationResponse):boolean{
 return response.notification.request.content.data?.kind===KIND;
}
export function reminderPlanTarget(response:Notifications.NotificationResponse):{planId:string;day:number}|null{
 if(!isDailyReminderResponse(response))return null;
 const data=response.notification.request.content.data;
 if(typeof data?.planId!=='string'||!/^[a-z0-9_-]{1,80}$/.test(data.planId))return null;
 const day=Number(data.day);
 return Number.isInteger(day)&&day>=1&&day<=7?{planId:data.planId,day}:null;
}

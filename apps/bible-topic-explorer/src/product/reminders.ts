import {Platform} from 'react-native';
import * as Notifications from 'expo-notifications';
import {parseReminderTime} from './reminderSchedule';

export type ReminderState='active'|'off'|'denied'|'unavailable';
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

/** Android local and best-effort: avoid exact alarm privileges and push tokens. */
export async function configureReminder(enabled:boolean,time:string,requestPermission=false):Promise<ReminderState>{
 if(Platform.OS!=='android')return'unavailable';
 try{
  if(!enabled){await cancelPrevious();return'off';}
  const when=parseReminderTime(time);if(!when)return'unavailable';
  await Notifications.setNotificationChannelAsync(CHANNEL,{name:'Palabra del día',importance:Notifications.AndroidImportance.DEFAULT});
  let permission=await Notifications.getPermissionsAsync();
  if(!permission.granted&&requestPermission)permission=await Notifications.requestPermissionsAsync();
  if(!permission.granted)return'denied';
  await cancelPrevious();
  await Notifications.scheduleNotificationAsync({
   content:{title:'Un momento para la Palabra',body:'Tu lectura de hoy te espera. Léela a tu ritmo.',data:{kind:KIND}},
   trigger:{type:Notifications.SchedulableTriggerInputTypes.DAILY,hour:when.hour,minute:when.minute,channelId:CHANNEL},
  });
  return'active';
 }catch{return'unavailable';}
}
export function isDailyReminderResponse(response:Notifications.NotificationResponse):boolean{
 return response.notification.request.content.data?.kind===KIND;
}

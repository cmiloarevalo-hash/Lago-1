/** Pure local-time helper; no precise-alarm or remote service semantics. */
export function parseReminderTime(value:string):{hour:number;minute:number}|null{
 const match=/^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);
 return match?{hour:Number(match[1]),minute:Number(match[2])}:null;
}
export const reminderTimeOptions=['07:00','08:00','09:00','12:00','18:00','20:00'] as const;

/** Next unfinished day, clamped to seven, without altering any plan progress. */
export function nextPendingReadingDay(rows:readonly {day:number;done:boolean}[]):number{
 for(let day=1;day<=7;day++)if(!rows.some(r=>r.day===day&&r.done))return day;
 return 7;
}

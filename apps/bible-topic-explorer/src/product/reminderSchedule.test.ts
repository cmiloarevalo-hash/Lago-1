import {describe,expect,it} from 'vitest';
import {parseReminderTime,reminderTimeOptions,nextPendingReadingDay} from './reminderSchedule';
describe('RC02 local reminder configuration',()=>{
 it('accepts local HH:MM time and rejects invalid time',()=>{
  expect(parseReminderTime('08:00')).toEqual({hour:8,minute:0});
  expect(parseReminderTime('20:30')).toEqual({hour:20,minute:30});
  expect(parseReminderTime('25:00')).toBeNull();expect(parseReminderTime('08:99')).toBeNull();
 });
 it('provides at least morning and evening time choices',()=>{
  expect(reminderTimeOptions).toContain('08:00');
  expect(reminderTimeOptions).toContain('20:00');
 });
});

describe('v1.11 plan-linked reminders',()=>{
 it('selects the first unfinished day without mutating previous progress',()=>{
  const prior=[{day:1,done:true},{day:2,done:false}];
  expect(nextPendingReadingDay(prior)).toBe(2);
  expect(nextPendingReadingDay([])).toBe(1);
  expect(nextPendingReadingDay(Array.from({length:7},(_,i)=>({day:i+1,done:true})))).toBe(7);
  expect(prior[1].done).toBe(false);
 });
});

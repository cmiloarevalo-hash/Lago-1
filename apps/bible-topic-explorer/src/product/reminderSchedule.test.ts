import {describe,expect,it} from 'vitest';
import {parseReminderTime,reminderTimeOptions} from './reminderSchedule';
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

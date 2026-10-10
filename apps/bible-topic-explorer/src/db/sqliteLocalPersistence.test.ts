import { describe, expect, it, vi } from 'vitest';
import { SQLiteLocalPersistence } from './sqliteLocalPersistence';

describe('SQLiteLocalPersistence', () => {
  it('initializes device-local app tables and saves references', async () => {
    const execAsync=vi.fn().mockResolvedValue(undefined); const runAsync=vi.fn().mockResolvedValue({});
    const db={execAsync,runAsync,getAllAsync:vi.fn().mockResolvedValue([]),getFirstAsync:vi.fn()};
    const persistence=new SQLiteLocalPersistence(db as never);
    await persistence.saveReference({bookId:'Salmos',chapter:23,verse:1,savedAt:'2026-10-06T00:00:00.000Z'});
    expect(execAsync.mock.calls[0][0]).toContain('app_saved_references');
    expect(execAsync.mock.calls[0][0]).toContain('app_reading_history');
    expect(execAsync.mock.calls[0][0]).toContain('app_reflections');
    expect(execAsync.mock.calls[0][0]).toContain('app_preferences');
    expect(runAsync).toHaveBeenCalledWith(expect.stringContaining('app_saved_references'),'Salmos',23,1,'2026-10-06T00:00:00.000Z');
  });

  it('maps saved references, history and reflections from local rows', async () => {
    const getAllAsync=vi.fn().mockResolvedValueOnce([{book_id:'John',chapter:3,verse:16,saved_at:'s'}]).mockResolvedValueOnce([{book_id:'John',chapter:3,verse:16,opened_at:'o'}]).mockResolvedValueOnce([{id:'r',body:'nota',updated_at:'u',book_id:'John',chapter:3,verse:16}]);
    const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync:vi.fn(),getAllAsync,getFirstAsync:vi.fn()};
    const persistence=new SQLiteLocalPersistence(db as never);
    await expect(persistence.listSavedReferences()).resolves.toEqual([{bookId:'John',chapter:3,verse:16,savedAt:'s'}]);
    await expect(persistence.listReadingHistory()).resolves.toEqual([{bookId:'John',chapter:3,verse:16,openedAt:'o'}]);
    await expect(persistence.listReflections()).resolves.toEqual([{id:'r',body:'nota',updatedAt:'u',reference:{bookId:'John',chapter:3,verse:16}}]);
  });

  it('records reading continuity and upserts private reflections locally', async () => {
    const runAsync=vi.fn().mockResolvedValue({}); const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync,getAllAsync:vi.fn(),getFirstAsync:vi.fn()};
    const persistence=new SQLiteLocalPersistence(db as never);
    await persistence.recordReading({bookId:'Salmos',chapter:23,verse:1,openedAt:'o'});
    await persistence.upsertReflection({id:'r',body:'privada',updatedAt:'u'});
    expect(runAsync.mock.calls[0][0]).toContain('app_reading_history');
    expect(runAsync.mock.calls[1][0]).toContain('app_reflections');
  });

  it('loads defaults when preferences are absent and persists explicit preferences', async () => {
    const runAsync=vi.fn().mockResolvedValue({}); const getFirstAsync=vi.fn().mockResolvedValue(null);
    const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync,getAllAsync:vi.fn(),getFirstAsync};
    const persistence=new SQLiteLocalPersistence(db as never);
    await expect(persistence.getPreferences()).resolves.toMatchObject({theme:'natural',fontScale:1,onboardingComplete:false});
    await persistence.setPreferences({theme:'dark',fontScale:1.2,reminderEnabled:true,reminderTime:'08:00',onboardingComplete:true});
    expect(runAsync).toHaveBeenCalledWith(expect.stringContaining('app_preferences'),'marine',1.2,1,'08:00',1);
  });
});


describe('RC02 verse annotations',()=>{
  it('adds non-destructive per-verse RV1909 notes and highlights tables',async()=>{
    const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync:vi.fn().mockResolvedValue({}),getAllAsync:vi.fn().mockResolvedValue([]),getFirstAsync:vi.fn()};
    const p=new SQLiteLocalPersistence(db as never);
    await p.upsertVerseNote({translationId:'rv1909',bookId:'Salmos',chapter:23,sourceVerseLabel:'1',body:'Privada',updatedAt:'u'});
    await p.setHighlight({translationId:'rv1909',bookId:'Salmos',chapter:23,sourceVerseLabel:'1'},'rose');
    const schema=db.execAsync.mock.calls[0][0] as string;
    expect(schema).toContain('app_verse_notes');expect(schema).toContain('app_verse_highlights');
    expect(schema).toContain('app_saved_references');expect(schema).toContain('app_reading_history');
    expect(db.runAsync).toHaveBeenCalledWith(expect.stringContaining('app_verse_notes'),'rv1909','Salmos',23,'1','Privada','u');
  });
  it('keeps deletion scoped to edition and exact source verse label',async()=>{
    const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync:vi.fn().mockResolvedValue({}),getAllAsync:vi.fn().mockResolvedValue([]),getFirstAsync:vi.fn()};
    const p=new SQLiteLocalPersistence(db as never);
    await p.deleteVerseNote({translationId:'rv1909',bookId:'Salmos',chapter:23,sourceVerseLabel:'1'});
    expect(db.runAsync.mock.calls[0][0]).toContain("translation_id='rv1909'");
  });
});

describe('R13 legacy theme migration without user-data loss',()=>{
 it('migrates lavender to Coral by one idempotent theme-only update',async()=>{
  const runAsync=vi.fn().mockResolvedValue({});
  const row={theme:'lavender',font_scale:1.6,reminder_enabled:1,reminder_time:'20:30',onboarding_complete:1};
  const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync,getFirstAsync:vi.fn().mockResolvedValue(row),getAllAsync:vi.fn()};
  const p=new SQLiteLocalPersistence(db as never);
  const value=await p.getPreferences();
  expect(value).toEqual({theme:'coral',fontScale:1.6,reminderEnabled:true,reminderTime:'20:30',onboardingComplete:true});
  expect(runAsync).toHaveBeenCalledTimes(1);
  expect(runAsync).toHaveBeenCalledWith('UPDATE app_preferences SET theme = ? WHERE id = 1 AND theme = ?','coral','lavender');
  expect(runAsync.mock.calls[0][0]).not.toMatch(/app_verse_notes|app_verse_highlights|DELETE|DROP|REPLACE/i);
 });
 it('does not rewrite an already migrated preference',async()=>{
  const runAsync=vi.fn();
  const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync,getFirstAsync:vi.fn().mockResolvedValue({theme:'marine',font_scale:1,reminder_enabled:0,reminder_time:'08:00',onboarding_complete:0}),getAllAsync:vi.fn()};
  await new SQLiteLocalPersistence(db as never).getPreferences();
  expect(runAsync).not.toHaveBeenCalled();
 });
});

import { describe, expect, it, vi } from 'vitest';
import { SQLiteLocalPersistence } from './sqliteLocalPersistence';

describe('SQLiteLocalPersistence', () => {
  it('initializes only device-local library tables and saves references', async () => {
    const execAsync=vi.fn().mockResolvedValue(undefined); const runAsync=vi.fn().mockResolvedValue({});
    const db={execAsync,runAsync,getAllAsync:vi.fn().mockResolvedValue([])};
    const persistence=new SQLiteLocalPersistence(db as never);
    await persistence.saveReference({bookId:'Salmos',chapter:23,verse:1,savedAt:'2026-10-06T00:00:00.000Z'});
    expect(execAsync.mock.calls[0][0]).toContain('app_saved_references');
    expect(execAsync.mock.calls[0][0]).toContain('app_reading_history');
    expect(execAsync.mock.calls[0][0]).toContain('app_reflections');
    expect(runAsync).toHaveBeenCalledWith(expect.stringContaining('app_saved_references'),'Salmos',23,1,'2026-10-06T00:00:00.000Z');
  });

  it('maps saved references, history and reflections from local rows', async () => {
    const getAllAsync=vi.fn()
      .mockResolvedValueOnce([{book_id:'John',chapter:3,verse:16,saved_at:'s'}])
      .mockResolvedValueOnce([{book_id:'John',chapter:3,verse:16,opened_at:'o'}])
      .mockResolvedValueOnce([{id:'r',body:'nota',updated_at:'u',book_id:'John',chapter:3,verse:16}]);
    const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync:vi.fn(),getAllAsync};
    const persistence=new SQLiteLocalPersistence(db as never);
    await expect(persistence.listSavedReferences()).resolves.toEqual([{bookId:'John',chapter:3,verse:16,savedAt:'s'}]);
    await expect(persistence.listReadingHistory()).resolves.toEqual([{bookId:'John',chapter:3,verse:16,openedAt:'o'}]);
    await expect(persistence.listReflections()).resolves.toEqual([{id:'r',body:'nota',updatedAt:'u',reference:{bookId:'John',chapter:3,verse:16}}]);
  });

  it('records reading continuity and upserts private reflections locally', async () => {
    const runAsync=vi.fn().mockResolvedValue({}); const db={execAsync:vi.fn().mockResolvedValue(undefined),runAsync,getAllAsync:vi.fn()};
    const persistence=new SQLiteLocalPersistence(db as never);
    await persistence.recordReading({bookId:'Salmos',chapter:23,verse:1,openedAt:'o'});
    await persistence.upsertReflection({id:'r',body:'privada',updatedAt:'u'});
    expect(runAsync.mock.calls[0][0]).toContain('app_reading_history');
    expect(runAsync.mock.calls[1][0]).toContain('app_reflections');
  });
});

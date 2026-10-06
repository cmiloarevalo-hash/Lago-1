import { describe, expect, it } from 'vitest';
import { defaultPreferences } from './preferences';
import type { BibleRepository, LocalPersistence } from './adapters';

const bible: BibleRepository = {
  async getChapter() { return []; },
  async searchLiteral() { return []; },
  async searchTopic() { return []; },
};

const persistence: LocalPersistence = {
  async getPreferences() { return defaultPreferences; },
  async setPreferences() {},
  async listSavedReferences() { return []; },
  async saveReference() {},
  async removeSavedReference() {},
  async listReadingHistory() { return []; },
  async recordReading() {},
  async listReflections() { return []; },
  async upsertReflection() {},
};

describe('M3 local adapter contracts', () => {
  it('allow product logic to depend on a read-only Bible repository', async () => {
    expect(await bible.getChapter('psa', 23)).toEqual([]);
    expect(await bible.searchLiteral('amor')).toEqual([]);
  });

  it('allow product logic to depend on device-local persistence', async () => {
    expect(await persistence.getPreferences()).toEqual(defaultPreferences);
    expect(await persistence.listSavedReferences()).toEqual([]);
  });
});

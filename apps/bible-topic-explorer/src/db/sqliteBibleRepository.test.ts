import { describe, expect, it, vi } from 'vitest';
import { SQLiteBibleRepository } from './sqliteBibleRepository';

describe('SQLiteBibleRepository', () => {
  it('maps bundled chapter rows to the BibleRepository contract', async () => {
    const getAllAsync = vi.fn().mockResolvedValue([
      { bookId: 'John', bookName: 'Juan', chapter: 3, verse: 16, sourceVerseLabel: '16', text: 'texto RV1909' },
    ]);
    const repository = new SQLiteBibleRepository({ getAllAsync } as never);

    await expect(repository.getChapter('Juan', 3)).resolves.toEqual([
      { translationId: 'rv1909', bookId: 'John', bookName: 'Juan', chapter: 3, verse: 16, sourceVerseLabel: '16', text: 'texto RV1909' },
    ]);
    expect(getAllAsync).toHaveBeenCalledWith(expect.stringContaining('FROM verses v'), 'rv1909', 'Juan', 'Juan', 3);
  });

  it('does not query invalid chapters', async () => {
    const getAllAsync = vi.fn();
    const repository = new SQLiteBibleRepository({ getAllAsync } as never);
    await expect(repository.getChapter('John', 0)).resolves.toEqual([]);
    expect(getAllAsync).not.toHaveBeenCalled();
  });

  it('keeps later search gates explicitly unavailable', async () => {
    const repository = new SQLiteBibleRepository({ getAllAsync: vi.fn() } as never);
    await expect(repository.searchLiteral('amor')).rejects.toThrow('M3.3');
    await expect(repository.searchTopic('amor')).rejects.toThrow('M3.4');
  });
});

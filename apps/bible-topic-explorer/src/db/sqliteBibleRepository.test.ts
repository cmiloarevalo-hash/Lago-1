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

  it('returns deterministic explainable literal hits for words and exact phrases', async () => {
    const getAllAsync = vi.fn().mockResolvedValue([
      { bookId: 'John', bookName: 'Juan', chapter: 3, verse: 16, sourceVerseLabel: '16', text: 'Porque de tal manera amó Dios al mundo...' },
    ]);
    const repository = new SQLiteBibleRepository({ getAllAsync } as never);
    await expect(repository.searchLiteral('"amó Dios"', 10)).resolves.toEqual([
      { translationId: 'rv1909', bookId: 'John', bookName: 'Juan', chapter: 3, verse: 16, sourceVerseLabel: '16', text: 'Porque de tal manera amó Dios al mundo...', matchType: 'literal_exact', explanation: 'Coincidencia literal en RV1909: “amó Dios”.' },
    ]);
    expect(getAllAsync).toHaveBeenCalledWith(expect.stringContaining('ORDER BY tb.order_index, v.chapter_num, v.id'), 'rv1909', 'amó Dios', 10);
  });

  it('escapes LIKE wildcards and ignores blank literal queries', async () => {
    const getAllAsync = vi.fn().mockResolvedValue([]);
    const repository = new SQLiteBibleRepository({ getAllAsync } as never);
    await expect(repository.searchLiteral('   ')).resolves.toEqual([]);
    expect(getAllAsync).not.toHaveBeenCalled();
    await repository.searchLiteral('100%_');
    expect(getAllAsync).toHaveBeenCalledWith(expect.stringContaining("ESCAPE '\\\\'"), 'rv1909', '100\\%\\_', 50);
  });

  it('keeps thematic search explicitly unavailable', async () => {
    const repository = new SQLiteBibleRepository({ getAllAsync: vi.fn() } as never);
    await expect(repository.searchTopic('amor')).rejects.toThrow('M3.4');
  });
});

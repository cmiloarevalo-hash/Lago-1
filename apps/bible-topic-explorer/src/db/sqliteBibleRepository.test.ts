import { describe,expect,it,vi } from 'vitest'; import { SQLiteBibleRepository } from './sqliteBibleRepository';
describe('SQLiteBibleRepository',()=>{it('maps bundled chapter rows',async()=>{const getAllAsync=vi.fn().mockResolvedValue([{bookId:'John',bookName:'John',chapter:3,verse:16,sourceVerseLabel:'16',text:'English WEBP text'}]);const r=new SQLiteBibleRepository({getAllAsync} as never);await expect(r.getChapter('John',3)).resolves.toHaveLength(1);});it('does not query invalid chapters',async()=>{const getAllAsync=vi.fn();const r=new SQLiteBibleRepository({getAllAsync} as never);await expect(r.getChapter('John',0)).resolves.toEqual([]);expect(getAllAsync).not.toHaveBeenCalled();});it('keeps literal hits explicitly literal',async()=>{const getAllAsync=vi.fn().mockResolvedValue([{bookId:'John',bookName:'John',chapter:3,verse:16,sourceVerseLabel:'16',text:'For God so loved the world...'}]);const r=new SQLiteBibleRepository({getAllAsync} as never);const hits=await r.searchLiteral('"God so"',10);expect(hits[0]).toMatchObject({matchType:'literal_exact',translationId:'webp'});expect(hits[0].explanation).toContain('Exact whole-word match');});it('escapes LIKE wildcards and ignores blank literal queries',async()=>{const getAllAsync=vi.fn().mockResolvedValue([]);const r=new SQLiteBibleRepository({getAllAsync} as never);await r.searchLiteral('   ');expect(getAllAsync).not.toHaveBeenCalled();await r.searchLiteral('100%_');expect(getAllAsync.mock.calls[0][2]).toBe('100\\%\\_');});it('accepts whole curated lexical forms with deterministic explanation',async()=>{const getAllAsync=vi.fn().mockResolvedValue([{bookId:'John',bookName:'John',chapter:3,verse:16,sourceVerseLabel:'16',text:'For God so loved the world...'}]);const r=new SQLiteBibleRepository({getAllAsync} as never);const hits=await r.searchTopic('love');expect(hits[0]).toMatchObject({matchType:'lexical_related_form',translationId:'webp'});expect(hits[0].explanation).toContain('whole word “loved”');});it('rejects unrelated substring hits such as llamó for amor',async()=>{const getAllAsync=vi.fn().mockResolvedValue([{bookId:'Gen',bookName:'Genesis',chapter:1,verse:5,sourceVerseLabel:'5',text:'He called the light Day...'}]);const r=new SQLiteBibleRepository({getAllAsync} as never);await expect(r.searchTopic('love')).resolves.toEqual([]);});it('marks whole thematic terms separately from lexical forms',async()=>{const getAllAsync=vi.fn().mockResolvedValue([{bookId:'Luke',bookName:'Luke',chapter:10,verse:27,sourceVerseLabel:'27',text:'...your neighbor as yourself'}]);const r=new SQLiteBibleRepository({getAllAsync} as never);const hits=await r.searchTopic('love');expect(hits[0].matchType).toBe('thematic_term');expect(hits[0].explanation).toContain('thematic evidence');});it('returns no results for unknown topics without querying',async()=>{const getAllAsync=vi.fn();const r=new SQLiteBibleRepository({getAllAsync} as never);await expect(r.searchTopic('no-existe')).resolves.toEqual([]);expect(getAllAsync).not.toHaveBeenCalled();});});


describe('D05 book navigation metadata',()=>{it('reads chapter count from existing translation metadata without changing corpus',async()=>{const getAllAsync=vi.fn().mockResolvedValue([{chapterCount:21}]);const r=new SQLiteBibleRepository({getAllAsync} as never);await expect(r.getBookChapterCount('John')).resolves.toBe(21);expect(getAllAsync).toHaveBeenCalledTimes(1);});});


describe('RC02 H search-v2 literal matching',()=>{
  it('rejects substring matching inside unrelated words',async()=>{
    const db={getAllAsync:vi.fn().mockResolvedValue([{bookId:'Psa',bookName:'Psalms',chapter:1,verse:1,sourceVerseLabel:'1',text:'The beloved called another person'},{bookId:'Psa',bookName:'Psalms',chapter:1,verse:2,sourceVerseLabel:'2',text:'Love is patient'}])};
    const repo=new SQLiteBibleRepository(db as never);
    const result=await repo.searchLiteral('love');
    expect(result.map(v=>v.sourceVerseLabel)).toEqual(['2']);
  });
  it('ranks whole-word lexical evidence ahead of thematic evidence deterministically',async()=>{
    const db={getAllAsync:vi.fn().mockResolvedValue([{bookId:'Gen',bookName:'Genesis',chapter:1,verse:1,sourceVerseLabel:'1',text:'...your neighbor as yourself'}, {bookId:'John',bookName:'John',chapter:1,verse:1,sourceVerseLabel:'1',text:'With great love'}])};
    const repo=new SQLiteBibleRepository(db as never);
    const hits=await repo.searchTopic('love');
    expect(hits[0].matchType).toBe('lexical_related_form');
    expect(hits[1].matchType).toBe('thematic_term');
  });
});


describe('Phone-QA A2 bounded topic pagination',()=>{
 it('bounds every SQLite round trip and returns stable lexical-first matches even with thematic overflow',async()=>{
  const lexicalRows=[{bookId:'John',bookName:'John',chapter:1,verse:1,sourceVerseLabel:'1',text:'great love'}];
  const thematicRows=[{bookId:'Luke',bookName:'Luke',chapter:1,verse:2,sourceVerseLabel:'2',text:'my neighbor'}];
  const query=vi.fn().mockResolvedValueOnce(lexicalRows).mockResolvedValueOnce(thematicRows);
  const hits=await new SQLiteBibleRepository({getAllAsync:query} as never).searchTopic('love',50);
  expect(hits.map(h=>h.matchType)).toEqual(['lexical_related_form','thematic_term']);
  for(const args of query.mock.calls){expect(args[0]).toContain('LIMIT ? OFFSET ?');expect(args.at(-2)).toBe(128);}
 });
 it('can cancel a long-running topic after a bounded asynchronous page',async()=>{
  const controller=new AbortController();const query=vi.fn().mockImplementation(async()=>{controller.abort();return [{bookId:'John',bookName:'John',chapter:1,verse:1,sourceVerseLabel:'1',text:'love'}]});
  const hits=await new SQLiteBibleRepository({getAllAsync:query} as never).searchTopic('love',50,controller.signal);
  expect(hits).toEqual([]);expect(query).toHaveBeenCalledTimes(1);
 });
 it('never returns unrelated substring hits in the bounded cursor',async()=>{
  const query=vi.fn().mockResolvedValue([{bookId:'Gen',bookName:'Genesis',chapter:1,verse:1,sourceVerseLabel:'1',text:'called his father'}]);
  const hits=await new SQLiteBibleRepository({getAllAsync:query} as never).searchTopic('love');
  expect(hits).toEqual([]);
 });
});

import {describe,expect,it} from 'vitest';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {topicCatalog} from './topics';
import {conceptPreviews,previewByTopicId,researchCorpusGitBlob} from './conceptPreviews';
import {conceptFamilies,conceptPreviewStats,availablePreview,familyTopics,focusMatchesVerse,isFirstFocusedVerse,initialTopicUiState,reviewMessage,topicReviewStatus} from './conceptIndex';
import {goBack,initialNavigationState,navigate,tabs} from './navigation';
import {books} from './books';

describe('R13 P2 canonical concept hierarchy and editorial honesty',()=>{
 it('preserves all 100 existing ids and exactly 10 families without creating aliases as new topics',()=>{
   expect(topicCatalog).toHaveLength(100);
   expect(new Set(topicCatalog.map(t=>t.id)).size).toBe(100);
   expect(conceptFamilies).toHaveLength(10);
   expect(conceptFamilies.flatMap(f=>familyTopics(f).map(t=>t.id)).sort()).toEqual(topicCatalog.map(t=>t.id).sort());
   expect(tabs).toHaveLength(4);
 });
 it('shows only 22 initially context-sampled topics and one explicitly proposed Esperanza pilot, never VALIDADO',()=>{
   expect(conceptPreviewStats).toEqual({canonicalTopics:100,pilot:23,initialContextSamples:22,awaitingContext:78,passages:46});
   expect(conceptPreviews.filter(p=>p.status==='EN_REVISION')).toHaveLength(22);
   expect(conceptPreviews.filter(p=>p.status==='PROPUESTO').map(p=>p.topicId)).toEqual(['esperanza']);
   expect(conceptPreviews.some(p=>p.status==='VALIDADO')).toBe(false);
   expect(conceptPreviews.every(p=>topicCatalog.some(topic=>topic.id===p.topicId&&topic.family===p.family))).toBe(true);
   expect(researchCorpusGitBlob).toHaveLength(40);
   expect(topicReviewStatus('adoracion')).toBe('EN_REVISION');
   expect(topicReviewStatus('perdon')).toBe('EN_REVISION');
   expect(topicReviewStatus('amor')).toBe('EN_REVISION');
   expect(topicReviewStatus('esperanza')).toBe('PROPUESTO');
   expect(reviewMessage('esperanza')).toContain('pendientes');
   expect(availablePreview('espiritu-santo')).toBeUndefined();
   expect(reviewMessage('espiritu-santo')).toContain('no se muestran pasajes');
 });
 it('has exactly two context-labeled precise REAL candidate ranges per pilot, with canonical source labels and pastoral warnings',()=>{
   const ids=new Set<string>();
   for(const p of conceptPreviews){
     expect(ids.has(p.topicId)).toBe(false);ids.add(p.topicId);
     expect(p.existenceChecked).toBe(true);
     expect(p.subtopic.trim().length).toBeGreaterThan(3);
     expect(p.synopsis.trim().length).toBeGreaterThan(12);
     expect(p.passages).toHaveLength(2);
     for(const range of p.passages){
       expect(books).toContain(range.book);
       expect(range.chapter).toBeGreaterThan(0);
       expect(range.start).toBeGreaterThan(0);
       expect(range.end).toBeGreaterThanOrEqual(range.start);
       expect(range.sourceVerseLabels.length).toBeGreaterThan(0);
       expect(range.sourceVerseLabels[0]).toBe(range.sourceVerseLabel);
       expect(range.reference).toBe(range.book+' '+range.chapter+':'+range.start+'–'+range.end);
       expect(range.rationale.length).toBeGreaterThan(8);
     }
   }
   expect(previewByTopicId.size).toBe(23);
 });
 it('Adoración is instant lookup from fixed in-memory preview (no full corpus thematic scan)',()=>{
   const p=availablePreview('adoracion')!;
   expect(p.subtopic).toBe('adorar con sentido');
   expect(p.passages.map(x=>x.reference)).toEqual(['Juan 4:19–26','Salmos 95:1–7']);
   expect(p.pastoralCaution).toContain('música');
 });
});
describe('R13 P2 reader exact range and Back',()=>{
 it('selects all source labels, not just first verse, and respects split/combined identities',()=>{
   const ref=availablePreview('adoracion')!.passages[0];
   expect(focusMatchesVerse({verse:19,sourceVerseLabel:'19'},ref)).toBe(true);
   expect(focusMatchesVerse({verse:26,sourceVerseLabel:'26'},ref)).toBe(true);
   expect(focusMatchesVerse({verse:27,sourceVerseLabel:'27'},ref)).toBe(false);
   expect(isFirstFocusedVerse({verse:19,sourceVerseLabel:'19'},ref)).toBe(true);
   expect(isFirstFocusedVerse({verse:20,sourceVerseLabel:'20'},ref)).toBe(false);
   const composite={sourceVerseLabel:'12-13',sourceVerseLabels:['12-13','14'],verse:12,verseEnd:14};
   expect(focusMatchesVerse({verse:12,sourceVerseLabel:'12-13'},composite)).toBe(true);
   expect(focusMatchesVerse({verse:12,sourceVerseLabel:'12a'},composite)).toBe(false);
   expect(focusMatchesVerse({verse:14,sourceVerseLabel:'14'},composite)).toBe(true);
 });
 it('returns to exact prior search tab while preserving the full target range in navigation state',()=>{
   const from=navigate(initialNavigationState(),{kind:'tab',tab:'search'});
   const p=availablePreview('perdon')!.passages[0];
   const target={kind:'reader' as const,book:p.book,chapter:p.chapter,verse:p.start,verseEnd:p.end,sourceVerseLabel:p.sourceVerseLabel,sourceVerseLabels:p.sourceVerseLabels,origin:'search' as const};
   const after=navigate(from,target);
   expect(after.current).toEqual(target);
   expect(goBack(after)?.current).toEqual({kind:'tab',tab:'search'});
   expect(initialTopicUiState).toEqual({mode:'words',scrollY:0});
 });
 it('keeps literal search code in Palabras while isolating concept data from SQL searchTopic',()=>{
   const src=readFileSync(resolve(process.cwd(),'src/ui/screens/SearchScreen.tsx'),'utf8');
   const app=readFileSync(resolve(process.cwd(),'App.tsx'),'utf8');
   const bible=readFileSync(resolve(process.cwd(),'src/ui/screens/BibleScreen.tsx'),'utf8');
   expect(src).toContain('searchLiteral(query)');
   expect(src).not.toContain('.searchTopic(');
   expect(src).toContain('Palabras · búsqueda literal');
   expect(src).toContain('Temas · índice conceptual');
   expect(src).toContain('sourceVerseLabels');
   expect(app).toContain('onTopicUiChange={setTopicUi}');
   expect(bible).toContain('focusMatchesVerse(verse,reader)');
   expect(bible).toContain('Volver a Explorar');
 });
});

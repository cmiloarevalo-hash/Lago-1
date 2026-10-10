import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {conceptPreviews,previewByTopicId} from './conceptPreviews';
import {topicCatalog} from './topics';
describe('Owner: youth-friendly canonical topics, compact cards and exact Bible references',()=>{
 it('keeps 100 canonical topics and twenty-three non-approved editorial previews',()=>{
  expect(topicCatalog).toHaveLength(100);
  expect(conceptPreviews).toHaveLength(23);
  expect(conceptPreviews.every(x=>x.status!=='VALIDADO')).toBe(true);
  expect(new Set(conceptPreviews.map(x=>x.topicId)).size).toBe(23);
  expect(conceptPreviews.every(x=>x.passages.length===2)).toBe(true);
 });
 it('explains peace, hope, insecurity and identity in simple Spanish without formulas',()=>{
  expect(previewByTopicId.get('dios')?.subtopic).toBe('¿Quién es Dios para ti?');
  expect(previewByTopicId.get('paz')?.subtopic).toBe('Encontrar calma y construir paz');
  expect(previewByTopicId.get('esperanza')?.subtopic).toBe('Seguir adelante cuando cuesta');
  expect(previewByTopicId.get('miedo')?.subtopic).toBe('Cuando sientes miedo');
  expect(conceptPreviews.every(x=>!x.synopsis.includes('comparando dos escenas o enseñanzas en contexto'))).toBe(true);
  expect(conceptPreviews.every(x=>x.synopsis.length>=65&&x.synopsis.length<310)).toBe(true);
 });
 it('preserves citations and exact source labels without invented Bible text',()=>{
  expect(previewByTopicId.get('dios')?.passages.map(x=>x.reference)).toEqual(['Deuteronomio 6:4–5','Hechos 17:24–28']);
  expect(previewByTopicId.get('paz')?.passages.map(x=>x.reference)).toEqual(['Juan 14:25–27','Mateo 5:9–12']);
  expect(previewByTopicId.get('esperanza')?.passages.map(x=>x.reference)).toEqual(['Romanos 5:1–5','1 Pedro 1:3–9']);
  for(const topic of conceptPreviews)for(const ref of topic.passages){
   expect(ref.sourceVerseLabels[0]).toBe(ref.sourceVerseLabel);
   expect(ref.sourceVerseLabels.length).toBeGreaterThan(0);
   expect(ref.rationale.length).toBeGreaterThan(25);
  }
 });
 it('uses compact rows with real hit targets, icons, and keeps return-to-scroll',()=>{
  const ui=readFileSync('src/ui/screens/SearchScreen.tsx','utf8');
  expect(ui).toContain('accessibilityLabel={\'Ver concepto \'+topic.label}');
  expect(ui).toContain('iconFor(topic.family,topic.id)');
  expect(ui).toContain('minHeight:72');
  expect(ui).toContain('minimumTouchTarget');
  expect(ui).toContain('listScrollY');
  expect(ui).toContain('Leer este pasaje');
  expect(ui).not.toContain('Buscar texto literal');
  expect(ui).not.toContain('StatusBanner');
 });
});

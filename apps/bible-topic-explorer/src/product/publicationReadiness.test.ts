import {describe,expect,it} from 'vitest';
import {readFileSync} from 'node:fs';
import appJson from '../../app.json';
import {pastoralTopics} from './pastoralTopics';

describe('Identidad y atribución pública del desarrollador',()=>{
 it('fija el nombre visible de Android sin cambiar todavía el package ni la firma',()=>{
  expect(appJson.expo.name).toBe('Guía pastoral - Biblia');
  expect(appJson.expo.android.package).toBe('com.lago.bibletopicexplorer');
  expect(appJson.expo.android.versionCode).toBe(4);
 });
 it('presenta los datos indicados por el desarrollador en Acerca de',()=>{
  const screen=readFileSync('src/ui/screens/AboutSourcesScreen.tsx','utf8');
  expect(screen).toContain('Camilo Arévalo');
  expect(screen).toContain('cmiloarevalo@gmail.com');
  expect(screen).toContain('tel:+56993935016');
  expect(screen).toContain('Guía pastoral - Biblia');
  const app=readFileSync('App.tsx','utf8');
  expect(app).toContain('Guía pastoral - Biblia');
 });
 it('mantiene objetivos originales de las unidades 3 y 4 del documento v1.0.1',()=>{
  expect(pastoralTopics.find(p=>p.number===9)?.themeObjective).toBe('Estudiar acciones concretas de Jesús ante la necesidad, la injusticia, la autoridad y los conflictos.');
  expect(pastoralTopics.find(p=>p.number===13)?.themeObjective).toBe('Comprender la entrega, la esperanza de la resurrección y la continuidad de las enseñanzas de Jesús.');
 });
});

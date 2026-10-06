import { RUNTIME_TRANSLATION_ID } from '../db/model';

export type TodayReading = {
  translationId: typeof RUNTIME_TRANSLATION_ID;
  book: string;
  chapter: number;
  verse: number;
  prompt: string;
};

const readingPlan: readonly Omit<TodayReading, 'translationId'>[] = [
  { book: 'Salmos', chapter: 23, verse: 1, prompt: 'Lee con calma y observa qué palabra destaca.' },
  { book: 'Mateo', chapter: 6, verse: 34, prompt: 'Lee el contexto y piensa en el día que tienes delante.' },
  { book: 'Filipenses', chapter: 4, verse: 6, prompt: 'Lee, respira y conserva una idea para volver a ella.' },
  { book: 'Proverbios', chapter: 3, verse: 5, prompt: 'Lee el pasaje y considera dónde necesitas dirección.' },
  { book: 'Juan', chapter: 15, verse: 12, prompt: 'Lee el capítulo y observa cómo se describe el amor.' },
  { book: 'Romanos', chapter: 12, verse: 12, prompt: 'Lee el contexto y elige una frase para recordar.' },
  { book: 'Isaías', chapter: 41, verse: 10, prompt: 'Lee el pasaje completo antes de sacar una conclusión.' },
];

export function readingForDate(date: Date): TodayReading {
  const day = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
  const reading = readingPlan[((day % readingPlan.length) + readingPlan.length) % readingPlan.length];
  return { translationId: RUNTIME_TRANSLATION_ID, ...reading };
}

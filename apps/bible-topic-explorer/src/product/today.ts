import { RUNTIME_TRANSLATION_ID } from '../db/model';

export type TodayReading = {
  translationId: typeof RUNTIME_TRANSLATION_ID;
  book: string;
  chapter: number;
  verse: number;
  prompt: string;
  category: string;
};

/** References only: the actual text is always loaded unmodified from bundled RV1909. */
export const dailyReadings = [
  { book:'Salmos',chapter:23,verse:1,category:'Paz',prompt:'Lee el salmo completo y considera qué significa el cuidado.' },
  { book:'Mateo',chapter:6,verse:34,category:'Paz',prompt:'Lee el contexto antes de pensar en tu día.' },
  { book:'Filipenses',chapter:4,verse:6,category:'Consuelo',prompt:'Observa cómo se propone afrontar la inquietud.' },
  { book:'Proverbios',chapter:3,verse:5,category:'Propósito',prompt:'Lee los versos cercanos y piensa en la confianza.' },
  { book:'Juan',chapter:15,verse:12,category:'Amor',prompt:'Lee el capítulo y observa la invitación al amor.' },
  { book:'Romanos',chapter:12,verse:12,category:'Fortaleza',prompt:'Considera el contexto de la perseverancia.' },
  { book:'Isaías',chapter:41,verse:10,category:'Esperanza',prompt:'Lee el contexto histórico antes de aplicarlo a hoy.' },
  { book:'Salmos',chapter:46,verse:1,category:'Fortaleza',prompt:'Lee el salmo completo para apreciar el lenguaje de refugio.' },
  { book:'1 Tesalonicenses',chapter:5,verse:18,category:'Gratitud',prompt:'Lee también los versos cercanos para comprender la exhortación.' },
  { book:'Eclesiastés',chapter:4,verse:9,category:'Amistad',prompt:'Lee el contexto sobre el acompañamiento y el trabajo compartido.' },
  { book:'Efesios',chapter:4,verse:32,category:'Perdón',prompt:'Considera la compasión junto al contexto de la carta.' },
  { book:'2 Corintios',chapter:1,verse:4,category:'Consuelo',prompt:'Lee el capítulo para comprender de dónde nace el consuelo.' },
  { book:'Salmos',chapter:121,verse:2,category:'Esperanza',prompt:'Recorre el salmo completo sin aislar una promesa.' },
  { book:'Colosenses',chapter:3,verse:14,category:'Amor',prompt:'Relaciona el verso con la convivencia que describe el pasaje.' },
] as const;

export function localDayKey(date:Date):string {
  return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');
}

export function readingForDate(date: Date): TodayReading {
  const day = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
  const reading = dailyReadings[((day % dailyReadings.length) + dailyReadings.length) % dailyReadings.length];
  return { translationId: RUNTIME_TRANSLATION_ID, ...reading };
}

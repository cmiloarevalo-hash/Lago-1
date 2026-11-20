import { RUNTIME_TRANSLATION_ID } from '../db/model';

export type TodayReading = {
  translationId: typeof RUNTIME_TRANSLATION_ID;
  book: string;
  chapter: number;
  verse: number;
  prompt: string;
  category: string;
};

/** References only: the actual text is always loaded unmodified from bundled WEBP. */
export const dailyReadings = [
  { book:"Psalms",chapter:23,verse:1,category:"Peace",prompt:"Read the entire psalm and consider what care means." },
  { book:"Matthew",chapter:6,verse:34,category:"Peace",prompt:"Read the context before thinking about your day." },
  { book:"Philippians",chapter:4,verse:6,category:'Comfort',prompt:"Observe how he intends to deal with the concern." },
  { book:"Proverbs",chapter:3,verse:5,category:"Purpose",prompt:"Read the nearby verses and think about trust." },
  { book:"John",chapter:15,verse:12,category:"Love",prompt:"Read the chapter and observe the invitation to love." },
  { book:"Romans",chapter:12,verse:12,category:'Strength',prompt:'Consider the context of perseverance.' },
  { book:"Isaiah",chapter:41,verse:10,category:"Hope",prompt:"Read the historical context before applying it to today." },
  { book:"Psalms",chapter:46,verse:1,category:'Strength',prompt:"Read the entire psalm to appreciate the language of refuge." },
  { book:"1 Thessalonians",chapter:5,verse:18,category:'Gratitude',prompt:"Also read the nearby verses to understand the exhortation." },
  { book:"Ecclesiastes",chapter:4,verse:9,category:'Friendship',prompt:"Read the context about accompaniment and shared work." },
  { book:"Ephesians",chapter:4,verse:32,category:"Forgiveness",prompt:"Consider compassion in conjunction with the context of the letter." },
  { book:"2 Corinthians",chapter:1,verse:4,category:'Comfort',prompt:"Read the chapter to understand where comfort comes from." },
  { book:"Psalms",chapter:121,verse:2,category:"Hope",prompt:"Go through the entire psalm without isolating a promise." },
  { book:"Colossians",chapter:3,verse:14,category:"Love",prompt:"Relate the verse to the coexistence that the passage describes." },
] as const;

export function localDayKey(date:Date):string {
  return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');
}

export function readingForDate(date: Date): TodayReading {
  const day = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
  const reading = dailyReadings[((day % dailyReadings.length) + dailyReadings.length) % dailyReadings.length];
  return { translationId: RUNTIME_TRANSLATION_ID, ...reading };
}

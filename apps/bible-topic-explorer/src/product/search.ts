import { isTopic } from './topics';
export type SearchIntent='reference'|'phrase'|'word'|'topic';
const referencePattern=/^([1-3]?\s?[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)\s+(\d+)(?::(\d+))?$/;
export function classifyQuery(raw:string):SearchIntent{const q=raw.trim();if(referencePattern.test(q))return'reference';if(q.length>=2&&q.startsWith('"')&&q.endsWith('"'))return'phrase';if(isTopic(q))return'topic';return'word';}
export function parseReference(raw:string){const m=raw.trim().match(referencePattern);if(!m)return null;return{book:m[1].trim(),chapter:Number(m[2]),verse:m[3]?Number(m[3]):undefined};}
export const intentLabels:Record<SearchIntent,string>={reference:'Referencia',phrase:'Frase exacta',word:'Texto',topic:'Tema curado'};

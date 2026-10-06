import type { Theme } from '../theme'; import { Body, Heading, Screen } from '../primitives';
export function SearchScreen({ theme }: { theme: Theme; onOpenReader: (book:string, chapter:number, verse?:number)=>void }) { return <Screen theme={theme}><Heading theme={theme}>Buscar</Heading><Body theme={theme}>Referencia, palabra, frase o tema.</Body></Screen>; }

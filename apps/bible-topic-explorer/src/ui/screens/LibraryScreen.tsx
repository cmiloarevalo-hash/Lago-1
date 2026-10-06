import type { Theme } from '../theme'; import { Body, Heading, Screen } from '../primitives';
export function LibraryScreen({ theme }: { theme: Theme; onOpenReader: (book:string, chapter:number, verse?:number)=>void }) { return <Screen theme={theme}><Heading theme={theme}>Biblioteca</Heading><Body theme={theme}>Guardados, reflexiones e historial.</Body></Screen>; }

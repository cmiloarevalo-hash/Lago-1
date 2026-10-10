import type {TabId} from './navigation';
export type DrawerDestination =
 | {id:string;label:string;kind:'tab';tab:TabId;available:true}
 | {id:string;label:string;kind:'music'|'settings'|'topics'|'guides'|'songs'|'my-books';available:true};
/** Four top-level tabs remain stable; secondary destinations all lead to real screens. */
export const drawerDestinations:readonly DrawerDestination[]=[
 {id:'today',label:'Hoy',kind:'tab',tab:'today',available:true},
 {id:'search',label:'Explorar',kind:'tab',tab:'search',available:true},
 {id:'bible',label:'Leer',kind:'tab',tab:'bible',available:true},
 {id:'library',label:'Biblioteca',kind:'tab',tab:'library',available:true},
 {id:'topics',label:'Temas conceptuales',kind:'topics',available:true},
 {id:'games',label:'Dinámicas y juegos pastorales (20 guías)',kind:'guides',available:true},
 {id:'songs',label:'Canciones pastorales (20 fichas)',kind:'songs',available:true},
 {id:'my-books',label:'Mis libros PDF/EPUB',kind:'my-books',available:true},
 {id:'spotify',label:'Música y Spotify',kind:'music',available:true},
 {id:'settings',label:'Ajustes',kind:'settings',available:true}
];

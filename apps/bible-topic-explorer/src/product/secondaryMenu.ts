import type {TabId} from './navigation';
export type DrawerDestination =
 | {id:string;label:string;kind:'tab';tab:TabId;available:true}
 | {id:string;label:string;kind:'music'|'settings'|'topics'|'guides'|'songs'|'my-books'|'plans'|'pastoral'|'youtube';available:true};
/** Four tabs; all additional modules remain SECONDARY destinations via ☰. */
export const drawerDestinations:readonly DrawerDestination[]=[
 {id:'today',label:'Hoy',kind:'tab',tab:'today',available:true},
 {id:'search',label:'Explorar',kind:'tab',tab:'search',available:true},
 {id:'bible',label:'Leer',kind:'tab',tab:'bible',available:true},
 {id:'library',label:'Biblioteca',kind:'tab',tab:'library',available:true},
 {id:'plans',label:'Planes de lectura · 7 días',kind:'plans',available:true},
 {id:'topics',label:'Temas conceptuales',kind:'topics',available:true},
 {id:'pastoral',label:'Guía pastoral · temas desplegables',kind:'pastoral',available:true},
 {id:'games',label:'Dinámicas y juegos pastorales',kind:'guides',available:true},
 {id:'songs',label:'Cancionero · letras',kind:'songs',available:true},
 {id:'youtube',label:'Música · YouTube visible',kind:'youtube',available:true},
 {id:'my-books',label:'Mis libros PDF/EPUB',kind:'my-books',available:true},
 {id:'spotify',label:'Spotify · enlace externo',kind:'music',available:true},
 {id:'settings',label:'Ajustes',kind:'settings',available:true}
];

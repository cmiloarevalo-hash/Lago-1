import type {TabId} from './navigation';
export type DrawerDestination =
 | {id:string;label:string;kind:'tab';tab:TabId;available:true}
 | {id:string;label:string;kind:'music'|'settings';available:true}
 | {id:string;label:string;kind:'future';available:false};
/** Four top-level tabs stay unchanged. Only destinations with real screens are enabled. */
export const drawerDestinations:readonly DrawerDestination[]=[
 {id:'today',label:'Hoy',kind:'tab',tab:'today',available:true},
 {id:'search',label:'Explorar',kind:'tab',tab:'search',available:true},
 {id:'bible',label:'Leer',kind:'tab',tab:'bible',available:true},
 {id:'library',label:'Biblioteca',kind:'tab',tab:'library',available:true},
 {id:'spotify',label:'Música y Spotify',kind:'music',available:true},
 {id:'settings',label:'Ajustes',kind:'settings',available:true},
 {id:'topics',label:'Temas conceptuales',kind:'future',available:false},
 {id:'games',label:'Juegos pastorales',kind:'future',available:false},
 {id:'songs',label:'Canciones pastorales',kind:'future',available:false},
 {id:'my-books',label:'Mis libros PDF/EPUB',kind:'future',available:false}
];

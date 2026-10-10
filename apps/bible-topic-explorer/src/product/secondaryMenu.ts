export type DrawerDestination={id:string;label:string;symbol:string;group:'Lectura y reflexión'|'Pastoral y música'|'Mi espacio';kind:'settings'|'topics'|'guides'|'songs'|'my-books'|'plans'|'pastoral'|'youtube';available:true};
/** Only secondary destinations; the four tabs stay in the bottom navigation. */
export const drawerDestinations:readonly DrawerDestination[]=[
 {id:'plans',label:'Planes de lectura',symbol:'▤',group:'Lectura y reflexión',kind:'plans',available:true},
 {id:'topics',label:'Temas bíblicos',symbol:'⌕',group:'Lectura y reflexión',kind:'topics',available:true},
 {id:'pastoral',label:'Guía pastoral',symbol:'✦',group:'Pastoral y música',kind:'pastoral',available:true},
 {id:'games',label:'Dinámicas y juegos',symbol:'◇',group:'Pastoral y música',kind:'guides',available:true},
 {id:'songs',label:'Cancionero',symbol:'♫',group:'Pastoral y música',kind:'songs',available:true},
 {id:'youtube',label:'YouTube · vídeo visible',symbol:'▶',group:'Pastoral y música',kind:'youtube',available:true},
 {id:'my-books',label:'Mis libros PDF/EPUB',symbol:'▥',group:'Mi espacio',kind:'my-books',available:true},
 {id:'settings',label:'Ajustes',symbol:'⚙',group:'Mi espacio',kind:'settings',available:true}
];

export type DrawerDestination={id:string;label:string;symbol:string;group:"Reading and reflection"|"Pastoral and activities"|"my space";kind:'settings'|'topics'|'guides'|'songs'|'my-books'|'plans'|'pastoral'|'soundcloud'|'journal';available:true};
/** Only secondary destinations; the four tabs stay in the bottom navigation. */
export const drawerDestinations:readonly DrawerDestination[]=[
 {id:'plans',label:"Reading plans",symbol:'▤',group:"Reading and reflection",kind:'plans',available:true},
 {id:'topics',label:"Biblical themes",symbol:'⌕',group:"Reading and reflection",kind:'topics',available:true},
 {id:'pastoral',label:"Pastoral guide",symbol:'✦',group:"Pastoral and activities",kind:'pastoral',available:true},
 {id:'guides',label:"Pastoral dynamics",symbol:'◇',group:"Pastoral and activities",kind:'guides',available:true},
 {id:'journal',label:"My reflection journal",symbol:'✎',group:"my space",kind:'journal',available:true},
 {id:'my-books',label:"My PDF/EPUB books",symbol:'▥',group:"my space",kind:'my-books',available:true},
 {id:'settings',label:"Settings",symbol:'⚙',group:"my space",kind:'settings',available:true}
];

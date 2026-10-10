/** Historic storage strings remain readable but only three themes are user-visible. */
export type VisibleTheme='coral'|'natural'|'marine';
export type ThemePreference=VisibleTheme|'lavender'|'sky'|'dark'|'contrast';
export interface LocalPreferences { theme:ThemePreference; fontScale:number; reminderEnabled:boolean; reminderTime:string; onboardingComplete:boolean; }
export const defaultPreferences:LocalPreferences={theme:'natural',fontScale:1,reminderEnabled:false,reminderTime:'08:00',onboardingComplete:false};
/** Deterministic and idempotent projection of legacy themes. */
export function visibleTheme(value:unknown):VisibleTheme {
 switch(value){
 case 'coral':case 'natural':case 'marine':return value;
 case 'lavender':return 'coral';
 case 'sky':return 'marine';
 case 'dark':return 'marine';
 case 'contrast':return 'marine';
 default:return 'natural';
 }
}
export const onboardingSteps=[
 {title:'Biblia para cada día',body:'Lee, busca y continúa sin crear una cuenta.'},
 {title:'Funciona sin conexión',body:'El núcleo usa la Biblia guardada en tu dispositivo.'},
 {title:'A tu ritmo',body:'Puedes activar un recordatorio local cuando tú decidas.'},
] as const;

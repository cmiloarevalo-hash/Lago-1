export type ThemePreference='system'|'light'|'dark';
export interface LocalPreferences { theme:ThemePreference; fontScale:number; reminderEnabled:boolean; reminderTime:string; onboardingComplete:boolean; }
export const defaultPreferences:LocalPreferences={theme:'system',fontScale:1,reminderEnabled:false,reminderTime:'08:00',onboardingComplete:false};
export const onboardingSteps=[
 {title:'Biblia para cada día',body:'Lee, busca y continúa sin crear una cuenta.'},
 {title:'Funciona offline',body:'El núcleo usa la Biblia guardada en tu dispositivo.'},
 {title:'A tu ritmo',body:'Puedes activar un recordatorio local cuando tú decidas.'},
] as const;

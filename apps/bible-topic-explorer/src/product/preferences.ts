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
 {title:"Bible for every day",body:"Read, search and continue without creating an account."},
 {title:"Works offline",body:"The core uses the Bible saved on your device."},
 {title:"At your pace",body:"You can activate a local reminder whenever you decide."},
] as const;

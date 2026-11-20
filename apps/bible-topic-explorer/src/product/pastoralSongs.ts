/** R1.3 P4: Catalog of song TITLES, not lyrics, recordings or editorial approval.
 * Links resolve to queries on the official Spotify service, not verified track URLs.
 * The original meeting prompts below may be used independently of any playback.
 */
export type SongMoment='Welcome'|"Prayer"|"Reflection"|"Sending Forth";
export interface SongGuide {id:string;title:string;moment:SongMoment;objective:string;groupPrompt:string;contextCaution:string;}
const entries:readonly [string,string,SongMoment,string,string][]=[
 ['alabare',"Alabaré",'Welcome',"Start a happy meeting.","What does it mean to give thanks in community?"],
 ['pescador-hombres',"Pescador de hombres","Reflection","Dialogue about response and vocation.","What invitations of service do we recognize?"],
 ['dios-esta-aqui',"Dios está aquí","Prayer","Facilitate silence and attention.","How do we prepare a listening space?"],
 ['nadie-te-ama',"Nadie te ama como yo","Reflection","Talk about welcoming without pressure.","What concrete acts express care?"],
 ['cuan-grande',"Cuán grande es Él","Prayer",'Appreciate wonder and gratitude.',"What inspires awe in creation?"],
 ['sublime-gracia',"Sublime gracia","Reflection","Talk about change and reconciliation.","Why does a second chance matter?"],
 ['te-doy-gloria',"Te doy gloria","Prayer",'Express shared gratitude.',"How do we express gratitude without competing?"],
 ['eres-todopoderoso',"Eres todopoderoso",'Welcome',"Encourage voluntary participation.","What qualities do we attribute to hope?"],
 ['mi-universo',"Mi universo","Reflection","Explore personal priorities freely.","What guides our daily decisions?"],
 ['ven-espiritu',"Ven, Espíritu Santo","Prayer","Create a quiet time of reflection.","What questions do we bring to this meeting?"],
 ['abre-mis-ojos',"Abre mis ojos","Prayer","Promote attention and learning.","What do we need to hear today?"],
 ['al-estar-aqui',"Al estar aquí",'Welcome',"Acknowledge the presence of others.","How do we contribute to a sincere welcome?"],
 ['cristo-te-necesita',"Cristo te necesita para amar","Sending Forth","Translate reflection into service.","Who can we listen to before helping?"],
 ['enciende-una-luz',"Enciende una luz","Sending Forth","Propose small actions of hope.","What specific gesture is within our reach?"],
 ['senor-mi-pastor',"El Señor es mi pastor","Reflection","Talk about trust and support.","What does it mean to accompany without controlling?"],
 ['ven-te-invito',"Ven, te invito",'Welcome',"Open space to new people.","What barriers must we eliminate to welcome?"],
 ['aqui-estoy',"Aquí estoy, Señor","Sending Forth","Reflect on availability.","How do we set healthy limits on volunteering?"],
 ['dame-corazon',"Dame un nuevo corazón","Reflection",'Recognize the possibility of change.',"What practices help you learn from mistakes?"],
 ['tu-fidelidad',"Tu fidelidad","Prayer","Express gratitude without idealizing experiences.","What actions generate trust?"],
 ['no-hay-lugar',"No hay lugar más alto","Prayer","Facilitate meditation without imposing an emotional response.","What does silence bring to a meeting?"]
];
export const songGuides:readonly SongGuide[]=entries.map(([id,title,moment,objective,groupPrompt])=>({
 id,title,moment,objective,groupPrompt,
 contextCaution:"Suggestion for dialogue, without transcribing letters or declaring doctrinal review. Check interpreter, version, link and licenses before public use."
}));
/** Official platform SEARCH, not an artist-approved deep link or a player. */
export function officialSpotifyTitleSearch(title:string):string {
 return 'https://open.spotify.com/search/'+encodeURIComponent(title.trim());
}
export const songMoments:readonly SongMoment[]=['Welcome',"Prayer","Reflection","Sending Forth"];

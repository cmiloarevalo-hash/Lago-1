/** R1.3 P4: Catalog of song TITLES, not lyrics, recordings or editorial approval.
 * Links resolve to queries on the official Spotify service, not verified track URLs.
 * The original meeting prompts below may be used independently of any playback.
 */
export type SongMoment='Bienvenida'|"Prayer"|"Reflection"|"Shipment";
export interface SongGuide {id:string;title:string;moment:SongMoment;objective:string;groupPrompt:string;contextCaution:string;}
const entries:readonly [string,string,SongMoment,string,string][]=[
 ['alabare',"I will praise",'Bienvenida',"Start a happy meeting.","What does it mean to give thanks in community?"],
 ['pescador-hombres','Pescador de hombres',"Reflection","Dialogue about response and vocation.","What invitations of service do we recognize?"],
 ['dios-esta-aqui',"God is here","Prayer","Facilitate silence and attention.","How do we prepare a listening space?"],
 ['nadie-te-ama',"Nobody loves you like me","Reflection","Talk about welcoming without pressure.","What concrete acts express care?"],
 ['cuan-grande',"How great is He","Prayer",'Apreciar asombro y gratitud.',"What inspires awe in creation?"],
 ['sublime-gracia','Sublime gracia',"Reflection","Talk about change and reconciliation.","Why does a second chance matter?"],
 ['te-doy-gloria','Te doy gloria',"Prayer",'Expresar gratitud compartida.',"How do we express gratitude without competing?"],
 ['eres-todopoderoso','Eres todopoderoso','Bienvenida',"Encourage voluntary participation.","What qualities do we attribute to hope?"],
 ['mi-universo',"my universe","Reflection","Explore personal priorities freely.","What guides our daily decisions?"],
 ['ven-espiritu',"Come, Holy Spirit","Prayer","Create a quiet time of reflection.","What questions do we bring to this meeting?"],
 ['abre-mis-ojos',"open my eyes","Prayer","Promote attention and learning.","What do we need to hear today?"],
 ['al-estar-aqui',"By being here",'Bienvenida',"Acknowledge the presence of others.","How do we contribute to a sincere welcome?"],
 ['cristo-te-necesita',"Christ needs you to love","Shipment","Translate reflection into service.","Who can we listen to before helping?"],
 ['enciende-una-luz',"Turn on a light","Shipment","Propose small actions of hope.","What specific gesture is within our reach?"],
 ['senor-mi-pastor',"The Lord is my shepherd","Reflection","Talk about trust and support.","What does it mean to accompany without controlling?"],
 ['ven-te-invito','Ven, te invito','Bienvenida',"Open space to new people.","What barriers must we eliminate to welcome?"],
 ['aqui-estoy',"Here I am, Lord","Shipment","Reflect on availability.","How do we set healthy limits on volunteering?"],
 ['dame-corazon',"Give me a new heart","Reflection",'Reconocer la posibilidad de cambiar.',"What practices help you learn from mistakes?"],
 ['tu-fidelidad',"Your fidelity","Prayer","Express gratitude without idealizing experiences.","What actions generate trust?"],
 ['no-hay-lugar',"There is no higher place","Prayer","Facilitate meditation without imposing an emotional response.","What does silence bring to a meeting?"]
];
export const songGuides:readonly SongGuide[]=entries.map(([id,title,moment,objective,groupPrompt])=>({
 id,title,moment,objective,groupPrompt,
 contextCaution:"Suggestion for dialogue, without transcribing letters or declaring doctrinal review. Check interpreter, version, link and licenses before public use."
}));
/** Official platform SEARCH, not an artist-approved deep link or a player. */
export function officialSpotifyTitleSearch(title:string):string {
 return 'https://open.spotify.com/search/'+encodeURIComponent(title.trim());
}
export const songMoments:readonly SongMoment[]=['Bienvenida',"Prayer","Reflection","Shipment"];

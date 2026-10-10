/** R1.3 P4: Catalog of song TITLES, not lyrics, recordings or editorial approval.
 * Links resolve to queries on the official Spotify service, not verified track URLs.
 * The original meeting prompts below may be used independently of any playback.
 */
export type SongMoment='Bienvenida'|'Oración'|'Reflexión'|'Envío';
export interface SongGuide {id:string;title:string;moment:SongMoment;objective:string;groupPrompt:string;contextCaution:string;}
const entries:readonly [string,string,SongMoment,string,string][]=[
 ['alabare','Alabaré','Bienvenida','Iniciar un encuentro alegre.','¿Qué significa agradecer en comunidad?'],
 ['pescador-hombres','Pescador de hombres','Reflexión','Dialogar sobre respuesta y vocación.','¿Qué invitaciones de servicio reconocemos?'],
 ['dios-esta-aqui','Dios está aquí','Oración','Facilitar silencio y atención.','¿Cómo preparamos un espacio de escucha?'],
 ['nadie-te-ama','Nadie te ama como yo','Reflexión','Hablar de acogida sin presiones.','¿Qué actos concretos expresan cuidado?'],
 ['cuan-grande','Cuán grande es Él','Oración','Apreciar asombro y gratitud.','¿Qué nos inspira asombro en la creación?'],
 ['sublime-gracia','Sublime gracia','Reflexión','Conversar sobre cambio y reconciliación.','¿Por qué una segunda oportunidad importa?'],
 ['te-doy-gloria','Te doy gloria','Oración','Expresar gratitud compartida.','¿Cómo expresamos gratitud sin competir?'],
 ['eres-todopoderoso','Eres todopoderoso','Bienvenida','Animar participación voluntaria.','¿Qué cualidades atribuimos a la esperanza?'],
 ['mi-universo','Mi universo','Reflexión','Explorar prioridades personales con libertad.','¿Qué orienta nuestras decisiones cotidianas?'],
 ['ven-espiritu','Ven, Espíritu Santo','Oración','Crear un tiempo tranquilo de reflexión.','¿Qué preguntas traemos a este encuentro?'],
 ['abre-mis-ojos','Abre mis ojos','Oración','Favorecer atención y aprendizaje.','¿Qué necesitamos escuchar hoy?'],
 ['al-estar-aqui','Al estar aquí','Bienvenida','Reconocer la presencia de los demás.','¿Cómo contribuimos a una bienvenida sincera?'],
 ['cristo-te-necesita','Cristo te necesita para amar','Envío','Traducir la reflexión en servicio.','¿A quién podemos escuchar antes de ayudar?'],
 ['enciende-una-luz','Enciende una luz','Envío','Proponer acciones pequeñas de esperanza.','¿Qué gesto concreto está a nuestro alcance?'],
 ['senor-mi-pastor','El Señor es mi pastor','Reflexión','Conversar sobre confianza y acompañamiento.','¿Qué significa acompañar sin controlar?'],
 ['ven-te-invito','Ven, te invito','Bienvenida','Abrir espacio a nuevas personas.','¿Qué barreras debemos eliminar para acoger?'],
 ['aqui-estoy','Aquí estoy, Señor','Envío','Reflexionar sobre disponibilidad.','¿Cómo ponemos límites sanos al voluntariado?'],
 ['dame-corazon','Dame un nuevo corazón','Reflexión','Reconocer la posibilidad de cambiar.','¿Qué prácticas ayudan a aprender de errores?'],
 ['tu-fidelidad','Tu fidelidad','Oración','Expresar agradecimiento sin idealizar experiencias.','¿Qué acciones generan confianza?'],
 ['no-hay-lugar','No hay lugar más alto','Oración','Facilitar recogimiento sin imponer respuesta emocional.','¿Qué aporta el silencio a una reunión?']
];
export const songGuides:readonly SongGuide[]=entries.map(([id,title,moment,objective,groupPrompt])=>({
 id,title,moment,objective,groupPrompt,
 contextCaution:'Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.'
}));
/** Official platform SEARCH, not an artist-approved deep link or a player. */
export function officialSpotifyTitleSearch(title:string):string {
 return 'https://open.spotify.com/search/'+encodeURIComponent(title.trim());
}
export const songMoments:readonly SongMoment[]=['Bienvenida','Oración','Reflexión','Envío'];

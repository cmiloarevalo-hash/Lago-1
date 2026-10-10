/** Externally hosted SoundCloud links. La U neither embeds nor plays audio. */
export const SOUNDCLOUD_HOME='https://soundcloud.com';

export type ExternalSoundCloudCollection={
 id:'ninos'|'estudio'|'pastoral';
 title:string;
 by:string;
 description:string;
 url:string;
};

/** These third-party playlists were checked as existing SoundCloud pages on 2026-10-10.
 * They are not vetted track-by-track, licensed by La U or endorsed by any institution.
 * A responsible adult must review changing content before playing it for minors.
 */
export const soundcloudCollections:readonly ExternalSoundCloudCollection[]=[
 {
  id:'ninos',title:'Canciones cristianas para niños',by:'Syntax Creative · Christian Kids',
  description:'Una selección externa de alabanza infantil; repertorio principalmente en inglés.',
  url:'https://soundcloud.com/syntaxcreative/sets/christian-childrens-music'
 },
 {
  id:'estudio',title:'Instrumentales para acompañar el estudio',by:'Bassage · Christian Instrumental',
  description:'Música instrumental de fondo para una tarea o un momento de lectura.',
  url:'https://soundcloud.com/bassaaaa/sets/christian-instrumental'
 },
 {
  id:'pastoral',title:'Música para encuentros juveniles',by:'Worship Music Recordings · Christian Youth Club EDM',
  description:'Selección cristiana electrónica; comprobar antes de utilizarla en el grupo.',
  url:'https://soundcloud.com/worship_records/sets/christian-youth-club-edm'
 }
];

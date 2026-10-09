/** Public Spotify playlist links for OPTIONAL external/personal listening only.
 * The linked catalog can change, require data/login, or be region restricted.
 * No player SDK, embedded media, covers, lyrics or offline music.
 */
export const musicCategories=[
 {id:'approved',category:'Playlist recomendada',title:'Playlist seleccionada por el Product Owner',curator:'Enlace proporcionado por el Product Owner',url:'https://open.spotify.com/playlist/25HDm6Qx8mZoJWWdgFLz62'},
 {id:'calm',category:'Calma y oración',title:'Música cristiana para orar en la noche',curator:'CanZion (catálogo público citado en P05)',url:'https://open.spotify.com/playlist/4Q44PJN7jSUd2JInNXTY3X'},
 {id:'encouragement',category:'Ánimo',title:'Gozo Cristiano',curator:'The musica cristiana blog',url:'https://open.spotify.com/playlist/6f7UmwlyEW6LYq0zRDwwwu'},
 {id:'praise',category:'Alabanza',title:'Lo mejor del 2025–2026 — AD Uch',curator:'AdoradoresChile',url:'https://open.spotify.com/playlist/1QgTdWclM8YgGeoV50RnEC'},
 {id:'worship',category:'Adoración',title:'Worship en español',curator:'Herson',url:'https://open.spotify.com/playlist/5LDbKSwjzPrenEmF4dVGCp'},
 {id:'youth',category:'Jóvenes',title:'Música cristiana en español',curator:'Cesar Betancourt (categoría editorial, no certificación de edad)',url:'https://open.spotify.com/playlist/1C6WtBg6l9OPRtxWsyjHd0'},
] as const;
export function isSpotifyPlaylistUrl(url:string):boolean{return /^https:\/\/open\.spotify\.com\/playlist\/[A-Za-z0-9]{22}$/.test(url);}

/** Official SoundCloud embeds only; never downloads, proxies or rehosts audio. */
export const soundcloudTrackUrl=(raw:string):string|null=>{
 try{
  const url=new URL(raw.trim());
  if(url.protocol!=='https:'||!['soundcloud.com','www.soundcloud.com'].includes(url.hostname)||url.port||url.username||url.password)return null;
  const segments=url.pathname.split('/').filter(Boolean);
  if(segments.length<2||segments.length>3||segments[0].toLowerCase()==='discover')return null;
  if(!segments.every(s=>/^[a-zA-Z0-9_-]{1,100}$/.test(s)))return null;
  if(segments.length===3&&segments[1]!=='sets')return null;
  return 'https://soundcloud.com/'+segments.join('/');
 }catch{return null;}
};
export const soundcloudEmbedUrl=(canonical:string)=>
 'https://w.soundcloud.com/player/?url='+encodeURIComponent(canonical)+'&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=true';

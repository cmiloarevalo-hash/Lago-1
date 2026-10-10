/** No playlist is pre-approved by Product Owner. Never invent an ID or present embed as authorized. */
export const youtubePlaylistStatus='PENDIENTE_PLAYLIST' as const;
export const youtubePolicyUrl='https://developers.google.com/youtube/terms/developer-policies';
export const youtubePlaylistId=(raw:string):string|null=>{
 try{
  const url=new URL(raw.trim());
  if(!['www.youtube.com','youtube.com','m.youtube.com','music.youtube.com'].includes(url.hostname)||url.protocol!=='https:')return null;
  if(url.pathname!=='/playlist'&&url.pathname!=='/watch')return null;
  const id=url.searchParams.get('list')??'';
  if(!/^[A-Za-z0-9_-]{12,80}$/.test(id))return null;
  return id;
 }catch{return null;}
};
export const youtubeEmbedUrl=(id:string)=>'https://www.youtube.com/embed?listType=playlist&list='+encodeURIComponent(id)+'&controls=1&autoplay=0&playsinline=1';
export const youtubeExternalUrl=(id:string)=>'https://www.youtube.com/playlist?list='+encodeURIComponent(id);

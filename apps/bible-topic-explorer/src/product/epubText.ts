import JSZip from 'jszip';
export interface EpubChapter {title:string;text:string;}
const decodeXml=(text:string)=>text
 .replace(/&#(x[0-9a-f]+|\d+);/gi,(_,value:string)=>{const n=value[0].toLowerCase()==='x'?Number.parseInt(value.slice(1),16):Number.parseInt(value,10);return n>0&&n<=0x10ffff?String.fromCodePoint(n):'';})
 .replace(/&(amp|lt|gt|quot|apos|nbsp|mdash|ndash|hellip);/g,(_,name:string)=>({amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',mdash:'—',ndash:'–',hellip:'…'}[name]??''));
function xmlAttribute(tag:string,key:string):string{
 const escaped=key.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&');
 const match=tag.match(new RegExp('(?:\\s|^)'+escaped+'\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')','i'));
 return decodeXml(match?.[1]??match?.[2]??'');
}
function normalizeZipPath(base:string,relative:string):string{
 const parts=(base?base.split('/'):[]).filter(Boolean);
 for(const segment of relative.split('/')){
  if(!segment||segment==='.')continue;
  if(segment==='..'){if(!parts.length)throw Error('Ruta EPUB fuera del contenedor.');parts.pop();}
  else parts.push(segment);
 }
 return parts.join('/');
}
function plaintextHtml(html:string):string{
 return decodeXml(html.replace(/<(script|style|svg|iframe|object|form|head)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,'')
  .replace(/<\/?(?:p|h[1-6]|div|li|br|blockquote|section)\b[^>]*>/gi,'\n')
  .replace(/<[^>]*>/g,'').replace(/[\t ]+/g,' ').replace(/\n{3,}/g,'\n\n').trim());
}
/** Strictly offline EPUB text, never interprets executable HTML or loads network assets. */
export async function parsePrivateEpubBase64(base64:string):Promise<readonly EpubChapter[]>{
 const archive=await JSZip.loadAsync(base64,{base64:true});
 const container=await archive.file('META-INF/container.xml')?.async('string');
 if(!container)throw Error('EPUB inválido: sin índice de contenedor.');
 const rootTag=container.match(/<rootfile\b[^>]*>/i)?.[0]??'';
 const opfPath=xmlAttribute(rootTag,'full-path');
 if(!opfPath)throw Error('EPUB inválido: sin manifiesto.');
 const opf=await archive.file(opfPath)?.async('string');
 if(!opf)throw Error('EPUB inválido: manifiesto inexistente.');
 const folder=opfPath.split('/').slice(0,-1).join('/');
 const items=new Map<string,{href:string;media:string}>();
 for(const tag of opf.match(/<item\b[^>]*\/?>/gi)??[]){
  const id=xmlAttribute(tag,'id'),href=xmlAttribute(tag,'href'),media=xmlAttribute(tag,'media-type');
  if(id&&href)items.set(id,{href,media});
 }
 const refs=(opf.match(/<itemref\b[^>]*\/?>/gi)??[]).map(tag=>xmlAttribute(tag,'idref'));
 if(refs.length===0||refs.length>300)throw Error('EPUB sin capítulos o demasiado extenso.');
 const chapters:EpubChapter[]=[];let total=0;
 for(const ref of refs){
  const entry=items.get(ref);
  if(!entry||!(/xhtml|html/i.test(entry.media)))continue;
  const path=normalizeZipPath(folder,decodeURIComponent(entry.href.split('#')[0]));
  const zipfile=archive.file(path);
  if(!zipfile)continue;
  const html=await zipfile.async('string');
  if(html.length>2_000_000)throw Error('Capítulo demasiado grande.');
  const text=plaintextHtml(html);
  if(!text)continue;
  total+=text.length;
  if(total>9_000_000)throw Error('EPUB demasiado extenso para lectura segura.');
  const title=plaintextHtml(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]??'')||'Sección '+(chapters.length+1);
  chapters.push({title:title.slice(0,110),text});
 }
 if(!chapters.length)throw Error('El EPUB no contiene capítulos de texto compatibles.');
 return chapters;
}

export type PersonalBookFormat='pdf'|'epub';
export interface PersonalBook {id:string;name:string;format:PersonalBookFormat;size:number;uri:string;importedAt:string;progress:number;chapterIndex:number;updatedAt:string;}
export function getPersonalBookFormat(name:string,mime?:string):PersonalBookFormat|null {
 const normalized=name.toLowerCase().trim();
 if(normalized.endsWith('.pdf'))return 'pdf';
 if(normalized.endsWith('.epub'))return 'epub';
 return null;
}
export function validatePersonalBook(name:string,size:number|undefined):{format:PersonalBookFormat;safeName:string;bytes:number}{
 const format=getPersonalBookFormat(name);if(!format)throw Error('Solo se admiten documentos PDF y EPUB.');
 const bytes=size??0;
 if(!Number.isFinite(bytes)||bytes<1)throw Error('No se pudo verificar el tamaño del documento.');
 if(bytes>(format==='epub'?25:100)*1024*1024)throw Error('Archivo demasiado grande para importación local segura.');
 const safeName=name.split(/[\\/]/).at(-1)!.replace(/[\u0000-\u001f\u007f]/g,'').trim().slice(0,120);
 if(!safeName||!safeName.toLowerCase().endsWith('.'+format))throw Error('Nombre de archivo inválido.');
 return {format,safeName,bytes};
}
export function validReadingProgress(value:number):boolean{return Number.isInteger(value)&&value>=0&&value<=100;}
export function bookProgressLabel(book:Pick<PersonalBook,'progress'|'chapterIndex'|'format'>):string {
 return book.format==='epub'? 'Capítulo '+(book.chapterIndex+1)+' · '+book.progress+'% estimado' : 'Progreso anotado manualmente: '+book.progress+'%';
}

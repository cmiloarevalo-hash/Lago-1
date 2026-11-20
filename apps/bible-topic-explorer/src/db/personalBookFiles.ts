import * as DocumentPicker from 'expo-document-picker';
import {Directory,File,Paths} from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import {parsePrivateEpubBase64,type EpubChapter} from '../product/epubText';
import {validatePersonalBook,type PersonalBook} from '../product/personalBooks';

const PRIVATE_SUBDIR='la-u-personal-books';
export async function pickPrivatePersonalBook():Promise<PersonalBook|null>{
 const result=await DocumentPicker.getDocumentAsync({
  type:['application/pdf','application/epub+zip','application/octet-stream'],copyToCacheDirectory:true,multiple:false
 });
 if(result.canceled||!result.assets.length)return null;
 const asset=result.assets[0],source=new File(asset.uri);
 const checked=validatePersonalBook(asset.name,asset.size??source.size);
 const directory=new Directory(Paths.document,PRIVATE_SUBDIR);
 directory.create({idempotent:true,intermediates:true});
 const id='book-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,12);
 const dest=new File(directory,id+'.'+checked.format);
 if(dest.exists)throw Error('Conflicto local de nombre; vuelve a intentar.');
 await source.copy(dest);
 if(!dest.exists||dest.size<=0)throw Error("The document could not be copied to private storage.");
 const now=new Date().toISOString();
 return {id,name:checked.safeName,format:checked.format,size:dest.size,uri:dest.uri,importedAt:now,updatedAt:now,progress:0,chapterIndex:0};
}
export async function previewPrivatePdf(book:Pick<PersonalBook,'uri'|'format'>):Promise<void>{
 if(book.format!=='pdf')throw Error('Vista PDF incompatible.');
 const file=new File(book.uri);
 if(!file.exists)throw Error("File not available on this device.");
 if(!file.contentUri?.startsWith('content://'))throw Error("The Android vendor did not offer a private read URI.");
 await IntentLauncher.startActivityAsync('android.intent.action.VIEW',{
  data:file.contentUri,type:'application/pdf',flags:1 // FLAG_GRANT_READ_URI_PERMISSION
 });
}
export type {EpubChapter};
export async function readPrivateEpub(uri:string):Promise<readonly EpubChapter[]>{
 const file=new File(uri);
 if(!file.exists)throw Error("The EPUB is no longer available.");
 if(file.size>25*1024*1024)throw Error("The EPUB exceeds the size limit.");
 return parsePrivateEpubBase64(await file.base64());
}

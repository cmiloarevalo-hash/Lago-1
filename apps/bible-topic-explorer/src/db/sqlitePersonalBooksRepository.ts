import type {SQLiteDatabase} from 'expo-sqlite';
import type {PersonalBook} from '../product/personalBooks';
import {validReadingProgress} from '../product/personalBooks';
type BookRow={id:string;name:string;format:'pdf'|'epub';bytes:number;local_uri:string;imported_at:string;progress:number;chapter_index:number;updated_at:string};
function fromRow(r:BookRow):PersonalBook{return {id:r.id,name:r.name,format:r.format,size:r.bytes,uri:r.local_uri,importedAt:r.imported_at,progress:r.progress,chapterIndex:r.chapter_index,updatedAt:r.updated_at};}
/** App-private, additive table. Never updates existing verse history, notes or highlights. */
export class SQLitePersonalBooksRepository {
 private ready:Promise<void>|undefined;
 constructor(private db:SQLiteDatabase){}
 private ensure():Promise<void>{
  return this.ready??=this.db.execAsync(`CREATE TABLE IF NOT EXISTS app_personal_books(
   id TEXT PRIMARY KEY, name TEXT NOT NULL, format TEXT NOT NULL CHECK(format IN ('pdf','epub')),
   bytes INTEGER NOT NULL, local_uri TEXT NOT NULL, imported_at TEXT NOT NULL,
   progress INTEGER NOT NULL DEFAULT 0 CHECK(progress BETWEEN 0 AND 100),
   chapter_index INTEGER NOT NULL DEFAULT 0 CHECK(chapter_index>=0),
   updated_at TEXT NOT NULL);`);
 }
 async list():Promise<PersonalBook[]>{await this.ensure();return (await this.db.getAllAsync<BookRow>('SELECT * FROM app_personal_books ORDER BY updated_at DESC')).map(fromRow);}
 async get(id:string):Promise<PersonalBook|undefined>{await this.ensure();const r=await this.db.getFirstAsync<BookRow>('SELECT * FROM app_personal_books WHERE id=?',id);return r?fromRow(r):undefined;}
 async insert(book:PersonalBook):Promise<void>{await this.ensure();await this.db.runAsync('INSERT INTO app_personal_books(id,name,format,bytes,local_uri,imported_at,progress,chapter_index,updated_at) VALUES(?,?,?,?,?,?,?,?,?)',book.id,book.name,book.format,book.size,book.uri,book.importedAt,0,0,book.updatedAt);}
 async updateProgress(id:string,progress:number,chapterIndex:number):Promise<void>{
  if(!validReadingProgress(progress)||!Number.isInteger(chapterIndex)||chapterIndex<0)throw Error('Progreso fuera de rango.');
  await this.ensure();await this.db.runAsync('UPDATE app_personal_books SET progress=?,chapter_index=?,updated_at=? WHERE id=?',progress,chapterIndex,new Date().toISOString(),id);
 }
}

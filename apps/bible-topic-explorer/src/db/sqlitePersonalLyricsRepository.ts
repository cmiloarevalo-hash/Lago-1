import type {SQLiteDatabase} from 'expo-sqlite';
export type PersonalLyric={id:string;title:string;text:string;updatedAt:string};
/** Private SQLite only. No uploads and no global destructive migration. */
export class SQLitePersonalLyricsRepository{
 private ready?:Promise<void>;
 constructor(private db:SQLiteDatabase){}
 private init(){return this.ready??=this.db.execAsync(`CREATE TABLE IF NOT EXISTS app_personal_lyrics
 (id TEXT PRIMARY KEY,title TEXT NOT NULL,body TEXT NOT NULL,updated_at TEXT NOT NULL);`);}
 async list():Promise<PersonalLyric[]>{await this.init();const r=await this.db.getAllAsync<{id:string;title:string;body:string;updated_at:string}>('SELECT * FROM app_personal_lyrics ORDER BY updated_at DESC');return r.map(x=>({id:x.id,title:x.title,text:x.body,updatedAt:x.updated_at}));}
 async save(v:PersonalLyric){if(!v.title.trim()||v.title.length>160||v.text.length>15000)throw Error('Título o letra no válida.');await this.init();await this.db.runAsync(`INSERT INTO app_personal_lyrics(id,title,body,updated_at) VALUES(?,?,?,?)
 ON CONFLICT(id) DO UPDATE SET title=excluded.title,body=excluded.body,updated_at=excluded.updated_at`,v.id,v.title.trim(),v.text,v.updatedAt);}
}

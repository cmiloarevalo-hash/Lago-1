import type {SQLiteDatabase} from 'expo-sqlite';
/** Additive tables only: no edits to baseline RV1909, saved notes or highlights. */
export class SQLitePlanRepository {
 private ready?:Promise<void>;
 constructor(private db:SQLiteDatabase){}
 private init(){return this.ready??=this.db.execAsync(`
 CREATE TABLE IF NOT EXISTS app_plan_days (
   plan_id TEXT NOT NULL,day INTEGER NOT NULL CHECK(day BETWEEN 1 AND 7),
   done INTEGER NOT NULL DEFAULT 0 CHECK(done IN (0,1)),
   note TEXT NOT NULL DEFAULT '',updated_at TEXT NOT NULL,
   PRIMARY KEY(plan_id,day));
 `);}
 async list(planId:string):Promise<readonly {day:number;done:boolean;note:string}[]>{
  await this.init();
  const rows=await this.db.getAllAsync<{day:number;done:number;note:string}>('SELECT day,done,note FROM app_plan_days WHERE plan_id=? ORDER BY day',planId);
  return rows.map(r=>({...r,done:r.done===1}));
 }
 async save(planId:string,day:number,done:boolean,note:string):Promise<void>{
  if(day<1||day>7||!Number.isInteger(day)||note.length>5000)throw Error('Datos de plan inválidos');
  await this.init();
  await this.db.runAsync(`INSERT INTO app_plan_days(plan_id,day,done,note,updated_at) VALUES(?,?,?,?,?)
  ON CONFLICT(plan_id,day) DO UPDATE SET done=excluded.done,note=excluded.note,updated_at=excluded.updated_at`,planId,day,done?1:0,note,new Date().toISOString());
 }
 /** Reset completed flags ONLY. Notes intentionally remain. Requires caller user confirmation. */
 async resetProgress(planId:string){await this.init();await this.db.runAsync('UPDATE app_plan_days SET done=0,updated_at=? WHERE plan_id=?',new Date().toISOString(),planId);}
}

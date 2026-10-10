import {Directory} from 'expo-file-system';
import {SQLiteLocalPersistence} from './sqliteLocalPersistence';
import {SQLitePersonalBooksRepository} from './sqlitePersonalBooksRepository';
import type {SQLiteDatabase} from 'expo-sqlite';

/** Explicit user-triggered export only, never uploads or changes app data. */
export async function exportPrivateBackup(db:SQLiteDatabase):Promise<string>{
 const local=new SQLiteLocalPersistence(db),books=new SQLitePersonalBooksRepository(db);
 const [prefs,saved,history,reflections,notes,highlights,personal]=await Promise.all([
  local.getPreferences(),local.listSavedReferences(),local.listReadingHistory(),local.listReflections(),
  local.listVerseNotes(),local.listHighlights(),books.list()
 ]);
 // No external file bytes: just book metadata and reading progress.
 const payload={
  format:'la-u-private-backup',schema:1,generatedAt:new Date().toISOString(),source:'rv1909',
  preferences:prefs,savedReferences:saved,readingHistory:history,reflections,verseNotes:notes,highlights,
  personalBookIndex:personal.map(({uri,...book})=>book)
 };
 const folder=await Directory.pickDirectoryAsync();
 const filename='la-u-respaldo-'+new Date().toISOString().replace(/[:.]/g,'-')+'.json';
 const target=folder.createFile(filename,'application/json');
 target.write(JSON.stringify(payload,null,2));
 if(!target.exists||target.size<=0)throw Error('No se pudo guardar el respaldo en la carpeta elegida.');
 return filename;
}

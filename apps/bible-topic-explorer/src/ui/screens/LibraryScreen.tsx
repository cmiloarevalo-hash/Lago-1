import { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteLocalPersistence } from '../../db/sqliteLocalPersistence';
import type { ReadingHistoryEntry, Reflection, SavedReference } from '../../product/adapters';
import type { Theme } from '../theme';
import { spacing } from '../theme';
import { Action, Body, Card, Heading, Screen } from '../primitives';

const DEMO_REFERENCE = { bookId: 'Salmos', chapter: 23, verse: 1 } as const;
const LIBRARY_REFLECTION_ID = 'library-private-reflection';

export function LibraryScreen({ theme, onOpenReader }: { theme: Theme; onOpenReader:(book:string,chapter:number,verse?:number)=>void }) {
  const db = useSQLiteContext();
  const persistence = useMemo(() => new SQLiteLocalPersistence(db), [db]);
  const [saved,setSaved]=useState<readonly SavedReference[]>([]);
  const [history,setHistory]=useState<readonly ReadingHistoryEntry[]>([]);
  const [note,setNote]=useState('');
  const [status,setStatus]=useState('Cargando biblioteca local…');

  const refresh = useCallback(async () => {
    try {
      const [nextSaved,nextHistory,reflections] = await Promise.all([
        persistence.listSavedReferences(), persistence.listReadingHistory(), persistence.listReflections()
      ]);
      setSaved(nextSaved); setHistory(nextHistory);
      setNote(reflections.find(item => item.id === LIBRARY_REFLECTION_ID)?.body ?? '');
      setStatus('');
    } catch { setStatus('No se pudo leer la biblioteca local.'); }
  }, [persistence]);

  useEffect(() => { void refresh(); }, [refresh]);
  const isDemoSaved = saved.some(item => item.bookId===DEMO_REFERENCE.bookId && item.chapter===23 && item.verse===1);

  const toggleDemoSaved = async () => {
    if (isDemoSaved) await persistence.removeSavedReference(DEMO_REFERENCE);
    else await persistence.saveReference({...DEMO_REFERENCE,savedAt:new Date().toISOString()});
    await refresh();
  };
  const saveReflection = async () => {
    const reflection: Reflection = {id:LIBRARY_REFLECTION_ID,body:note,updatedAt:new Date().toISOString()};
    await persistence.upsertReflection(reflection); setStatus('Reflexión guardada en este dispositivo.');
  };

  return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><Heading theme={theme}>Biblioteca</Heading>{status?<Body theme={theme} muted>{status}</Body>:null}<Card theme={theme}><Heading theme={theme}>Guardados</Heading>{saved.length===0?<Body theme={theme} muted>Aún no guardas referencias.</Body>:saved.map(ref=><View key={`${ref.bookId}-${ref.chapter}-${ref.verse}`} style={styles.row}><Body theme={theme}>{ref.bookId} {ref.chapter}:{ref.verse}</Body><Action label={`Abrir ${ref.bookId} ${ref.chapter}:${ref.verse}`} secondary theme={theme} onPress={()=>onOpenReader(ref.bookId,ref.chapter,ref.verse)}/></View>)}<Action label={isDemoSaved?'Quitar Salmos 23:1':'Guardar Salmos 23:1'} secondary theme={theme} onPress={()=>void toggleDemoSaved()}/></Card><Card theme={theme}><Heading theme={theme}>Reflexión privada</Heading><Body theme={theme} muted>Se guarda únicamente en este dispositivo.</Body><TextInput accessibilityLabel="Reflexión privada" multiline value={note} onChangeText={setNote} placeholder="Escribe para ti…" placeholderTextColor={theme.muted} style={[styles.note,{color:theme.text,borderColor:theme.border}]}/><Action label="Guardar reflexión" theme={theme} onPress={()=>void saveReflection()}/></Card><Card theme={theme}><Heading theme={theme}>Historial</Heading>{history.length===0?<Body theme={theme} muted>Aún no hay lecturas registradas.</Body>:history.slice(0,10).map((item,index)=><Action key={`${item.openedAt}-${index}`} label={`${item.bookId} ${item.chapter}${item.verse?`:${item.verse}`:''}`} secondary theme={theme} onPress={()=>onOpenReader(item.bookId,item.chapter,item.verse)}/>)}</Card></ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.lg,paddingBottom:spacing.xxl},row:{gap:spacing.sm},note:{minHeight:120,borderWidth:1,borderRadius:16,padding:12,textAlignVertical:'top',fontSize:17}});

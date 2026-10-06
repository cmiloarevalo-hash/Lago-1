import { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteLocalPersistence } from '../../db/sqliteLocalPersistence';
import type { ReadingHistoryEntry, Reflection, SavedReference } from '../../product/adapters';
import { uxCopy } from '../../product/uxCopy';
import type { Theme } from '../theme';
import { spacing } from '../theme';
import { Action, Body, Card, Field, Metadata, Screen, ScreenTitle, Section, SettingRow, StatusBanner } from '../primitives';
import type { StatusKind } from '../visualSemantics';

const LIBRARY_REFLECTION_ID = 'library-private-reflection';
function readingLabel(item: Pick<ReadingHistoryEntry, 'bookId' | 'chapter' | 'verse'>) { return item.bookId + ' ' + item.chapter + (item.verse ? ':' + item.verse : ''); }

export function LibraryScreen({ theme, onOpenReader }: { theme: Theme; onOpenReader: (book: string, chapter: number, verse?: number) => void }) {
  const db = useSQLiteContext(); const persistence = useMemo(() => new SQLiteLocalPersistence(db), [db]);
  const [saved, setSaved] = useState<readonly SavedReference[]>([]); const [history, setHistory] = useState<readonly ReadingHistoryEntry[]>([]); const [note, setNote] = useState('');
  const [status, setStatus] = useState('Cargando biblioteca local…'); const [statusKind, setStatusKind] = useState<StatusKind>('info'); const [showAllHistory, setShowAllHistory] = useState(false);
  const refresh = useCallback(async () => { try { const [nextSaved, nextHistory, reflections] = await Promise.all([persistence.listSavedReferences(), persistence.listReadingHistory(), persistence.listReflections()]); setSaved(nextSaved); setHistory(nextHistory); setNote(reflections.find(item => item.id === LIBRARY_REFLECTION_ID)?.body ?? ''); setStatus(''); setStatusKind('info'); } catch { setStatus('No se pudo leer la biblioteca local.'); setStatusKind('error'); } }, [persistence]);
  useEffect(() => { void refresh(); }, [refresh]);
  const uniqueChapters = new Set(history.map(item => item.bookId + ':' + item.chapter)).size; const latest = history[0];
  const saveReflection = async () => { try { const reflection: Reflection = { id: LIBRARY_REFLECTION_ID, body: note, updatedAt: new Date().toISOString() }; await persistence.upsertReflection(reflection); setStatus(uxCopy.savedReflection); setStatusKind('success'); } catch { setStatus('No se pudo guardar la reflexión local.'); setStatusKind('error'); } };
  const visibleHistory = showAllHistory ? history.slice(0, 10) : history.slice(0, 4);

  return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
    <View style={styles.intro}><ScreenTitle theme={theme}>Biblioteca</ScreenTitle><Body theme={theme} muted>Retoma lo que has leído y guardado en este dispositivo.</Body></View>
    {status ? <StatusBanner theme={theme} kind={statusKind}>{status}</StatusBanner> : null}
    <Section theme={theme} title="Continuar">{latest ? <Card featured theme={theme} label={'Última lectura: ' + readingLabel(latest)}><View style={[styles.accent, { backgroundColor: theme.purple }]}/><Metadata theme={theme}>ÚLTIMA LECTURA</Metadata><Body theme={theme}>{readingLabel(latest)}</Body><Action label="Continuar leyendo" theme={theme} onPress={() => onOpenReader(latest.bookId, latest.chapter, latest.verse)} /></Card> : <Body theme={theme} muted>Cuando abras un capítulo, podrás retomarlo desde aquí.</Body>}</Section>
    <Section theme={theme} title="Guardados" description="Guarda o quita versículos directamente desde el lector.">{saved.length === 0 ? <Body theme={theme} muted>Aún no guardas referencias.</Body> : saved.map(ref => <SettingRow key={[ref.bookId, ref.chapter, ref.verse].join('-')} theme={theme} label={ref.bookId + ' ' + ref.chapter + ':' + ref.verse} value="Abrir →" onPress={() => onOpenReader(ref.bookId, ref.chapter, ref.verse)} />)}</Section>
    <Section theme={theme} title="Actividad reciente"><Body theme={theme}>{uniqueChapters} capítulos abiertos · {saved.length} guardados</Body></Section>
    <Section theme={theme} title="Reflexión privada" description="Se guarda únicamente en este dispositivo."><Field theme={theme} label="Tu reflexión" multiline value={note} onChangeText={setNote} placeholder="Escribe para ti…"/><Action label="Guardar reflexión" variant="secondary" theme={theme} onPress={() => { void saveReflection(); }}/></Section>
    <Section theme={theme} title="Historial">{history.length === 0 ? <Body theme={theme} muted>Aún no hay lecturas registradas.</Body> : visibleHistory.map((item, index) => <SettingRow key={item.openedAt + '-' + index} theme={theme} label={readingLabel(item)} value="Abrir →" onPress={() => onOpenReader(item.bookId, item.chapter, item.verse)} />)}{history.length > 4 ? <Action label={showAllHistory ? 'Mostrar menos' : 'Ver historial reciente'} variant="tertiary" theme={theme} onPress={() => setShowAllHistory(value => !value)} /> : null}</Section>
  </ScrollView></Screen>;
}
const styles = StyleSheet.create({ stack: { gap: spacing.md, paddingBottom: spacing.xxl }, intro: { gap: spacing.xs }, accent: { width: 36, height: 4, borderRadius: 4 } });

import { useEffect, useMemo, useState } from 'react';
import { AppState, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteBibleRepository } from '../../db/sqliteBibleRepository';
import type { BibleVerse } from '../../product/adapters';
import { localDayKey, readingForDate } from '../../product/today';
import { scaledScriptureMetrics } from '../readingScale';
import type { Theme } from '../theme';
import { radius, spacing, type as typography } from '../theme';
import { Action, Body, Card, Metadata, Screen, StatusBanner } from '../primitives';

export function TodayScreen({ theme, readingScale = 1, onOpenReader }: { theme: Theme; readingScale?: number; onOpenReader: (book: string, chapter: number, verse?: number) => void }) {
  const db = useSQLiteContext(); const repository = useMemo(() => new SQLiteBibleRepository(db), [db]); const [dayKey,setDayKey]=useState(()=>localDayKey(new Date()));const reading=useMemo(()=>readingForDate(new Date(Number(dayKey.slice(0,4)),Number(dayKey.slice(5,7))-1,Number(dayKey.slice(8,10)))),[dayKey]);
  useEffect(()=>{const refresh=()=>setDayKey(localDayKey(new Date()));const subscription=AppState.addEventListener('change',state=>{if(state==='active')refresh();});const interval=setInterval(refresh,60000);return()=>{subscription.remove();clearInterval(interval);};},[]);
  const [verse, setVerse] = useState<BibleVerse | null>(null); const [loading, setLoading] = useState(true); const [error, setError] = useState(false);
  useEffect(() => { let active = true; setLoading(true); setError(false); void repository.getChapter(reading.book, reading.chapter).then(rows => { if (active) setVerse(rows.find(row => row.verse === reading.verse || row.sourceVerseLabel === String(reading.verse)) ?? null); }).catch(() => { if (active) { setVerse(null); setError(true); } }).finally(() => { if (active) setLoading(false); }); return () => { active = false; }; }, [reading.book, reading.chapter, reading.verse, repository]);
  const book = verse?.bookName ?? reading.book; const ref = book + ' ' + reading.chapter + ':' + reading.verse; const scriptureMetrics = scaledScriptureMetrics(readingScale);
  return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
    <View style={styles.heroTitle}><Text style={[typography.label, { color: theme.amber }]}>HOY</Text><Text accessibilityRole="header" style={[typography.display, { color: theme.text }]}>Vuelve a la Palabra.</Text><Body theme={theme} muted>Una lectura breve, disponible sin conexión.</Body></View>
    <Card featured theme={theme} label={'Lectura de hoy, ' + ref}><View accessibilityElementsHidden style={[styles.warmAccent, { backgroundColor: theme.coral }]}/><Metadata theme={theme}>PALABRA DEL DÍA · {reading.category.toUpperCase()} · RV1909 LOCAL</Metadata><Text style={[typography.sectionTitle, { color: theme.text }]}>{ref}</Text>{loading ? <StatusBanner theme={theme} kind="info">Cargando lectura desde el corpus local…</StatusBanner> : null}{error ? <StatusBanner theme={theme} kind="error">No se pudo cargar la lectura local. El resto del contenido sin conexión sigue disponible.</StatusBanner> : null}{!loading && !error && verse ? <Text style={[typography.scripture, scriptureMetrics, { color: theme.text }]}>{verse.text}</Text> : null}{!loading && !error && !verse ? <StatusBanner theme={theme} kind="info">La referencia de hoy no está disponible en el corpus local.</StatusBanner> : null}<Body theme={theme} muted>{reading.prompt}</Body><Action label={'Leer ' + ref + ' en contexto'} theme={theme} onPress={() => onOpenReader(reading.book, reading.chapter, reading.verse)}/></Card>
    <View style={[styles.calmNote, { borderLeftColor: theme.sky }]}><Text style={[typography.subhead, { color: theme.text }]}>Continúa a tu ritmo</Text><Body theme={theme} muted>Retoma tus lecturas cuando quieras; no necesitas cuenta ni conexión.</Body></View>
  </ScrollView></Screen>;
}
const styles = StyleSheet.create({ stack: { gap: spacing.lg, paddingBottom: spacing.xxl }, heroTitle: { gap: spacing.xs }, warmAccent: { width: 44, height: 4, borderRadius: radius.xs }, calmNote: { gap: spacing.xs, paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderLeftWidth: 3 } });

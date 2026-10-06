import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteBibleRepository } from '../../db/sqliteBibleRepository';
import type { BibleVerse } from '../../product/adapters';
import { readingForDate } from '../../product/today';
import type { Theme } from '../theme';
import { spacing, type as typography } from '../theme';
import { Action, Body, Card, Heading, Screen } from '../primitives';

export function TodayScreen({ theme, onOpenReader }: { theme: Theme; onOpenReader: (book:string, chapter:number, verse?:number)=>void }) {
  const db = useSQLiteContext(); const repository = useMemo(() => new SQLiteBibleRepository(db), [db]); const reading = useMemo(() => readingForDate(new Date()), []);
  const [verse, setVerse] = useState<BibleVerse | null>(null); const [loading, setLoading] = useState(true); const [error, setError] = useState(false);
  useEffect(() => { let active = true; setLoading(true); setError(false); repository.getChapter(reading.book, reading.chapter).then(rows => { if (active) setVerse(rows.find(row => row.verse === reading.verse || row.sourceVerseLabel === String(reading.verse)) ?? null); }).catch(() => { if (active) { setVerse(null); setError(true); } }).finally(() => { if (active) setLoading(false); }); return () => { active = false; }; }, [reading.book, reading.chapter, reading.verse, repository]);
  const book = verse?.bookName ?? reading.book; const ref = `${book} ${reading.chapter}:${reading.verse}`;
  return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><View><Text style={[typography.label,{color:theme.muted}]}>HOY</Text><Text accessibilityRole="header" style={[typography.display,{color:theme.text}]}>Un momento para volver a la Palabra.</Text></View><Card theme={theme} label={`Lectura de hoy, ${ref}`}><Text style={[typography.label,{color:theme.accent}]}>LECTURA DE HOY · RV1909 · LOCAL</Text><Heading theme={theme}>{ref}</Heading>{loading?<Text accessibilityLiveRegion="polite" style={{color:theme.muted}}>Cargando lectura desde el corpus local…</Text>:error?<Text accessibilityRole="alert" style={{color:theme.text}}>No se pudo cargar la lectura local. El resto del contenido offline sigue disponible.</Text>:verse?<Body theme={theme}>{verse.text}</Body>:<Text accessibilityLiveRegion="polite" style={{color:theme.muted}}>La referencia de hoy no está disponible en el corpus local.</Text>}<Body theme={theme} muted>{reading.prompt}</Body><Action label={`Leer ${ref} en contexto`} theme={theme} onPress={()=>onOpenReader(reading.book,reading.chapter,reading.verse)} /></Card><Card theme={theme}><Heading theme={theme}>Continúa a tu ritmo</Heading><Body theme={theme} muted>Las aperturas del lector se registran localmente en tu historial. No necesitas cuenta ni conexión.</Body></Card></ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.lg,paddingBottom:spacing.xxl}});

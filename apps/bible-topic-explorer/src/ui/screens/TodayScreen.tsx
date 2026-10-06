import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteBibleRepository } from '../../db/sqliteBibleRepository';
import type { BibleVerse } from '../../product/adapters';
import { readingForDate } from '../../product/today';
import { scaledScriptureMetrics } from '../readingScale';
import type { Theme } from '../theme';
import { radius, spacing, type as typography } from '../theme';
import { Action, Body, Card, Metadata, Screen, StatusBanner } from '../primitives';

export function TodayScreen({ theme, readingScale = 1, onOpenReader }: { theme: Theme; readingScale?: number; onOpenReader: (book: string, chapter: number, verse?: number) => void }) {
  const db = useSQLiteContext();
  const repository = useMemo(() => new SQLiteBibleRepository(db), [db]);
  const reading = useMemo(() => readingForDate(new Date()), []);
  const [verse, setVerse] = useState<BibleVerse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);
    void repository.getChapter(reading.book, reading.chapter).then(rows => {
      if (active) setVerse(rows.find(row => row.verse === reading.verse || row.sourceVerseLabel === String(reading.verse)) ?? null);
    }).catch(() => { if (active) { setVerse(null); setError(true); } }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [reading.book, reading.chapter, reading.verse, repository]);

  const book = verse?.bookName ?? reading.book;
  const ref = book + ' ' + reading.chapter + ':' + reading.verse;
  const scriptureMetrics = scaledScriptureMetrics(readingScale);

  return <Screen theme={theme}>
    <ScrollView contentContainerStyle={styles.stack}>
      <View style={styles.heroTitle}>
        <Text style={[typography.label, { color: theme.amber }]}>HOY</Text>
        <Text accessibilityRole="header" style={[typography.display, { color: theme.text }]}>Un momento para volver a la Palabra.</Text>
      </View>
      <Card featured theme={theme} label={'Lectura de hoy, ' + ref}>
        <View accessibilityElementsHidden style={[styles.warmAccent, { backgroundColor: theme.amber }]} />
        <Metadata theme={theme}>LECTURA DE HOY · RV1909 · LOCAL</Metadata>
        <Text style={[typography.sectionTitle, { color: theme.text }]}>{ref}</Text>
        {loading ? <StatusBanner theme={theme} kind="info">Cargando lectura desde el corpus local…</StatusBanner> : null}
        {error ? <StatusBanner theme={theme} kind="error">No se pudo cargar la lectura local. El resto del contenido sin conexión sigue disponible.</StatusBanner> : null}
        {!loading && !error && verse ? <Text style={[typography.scripture, scriptureMetrics, { color: theme.text }]}>{verse.text}</Text> : null}
        {!loading && !error && !verse ? <StatusBanner theme={theme} kind="info">La referencia de hoy no está disponible en el corpus local.</StatusBanner> : null}
        <Body theme={theme} muted>{reading.prompt}</Body>
        <Action label={'Leer ' + ref + ' en contexto'} theme={theme} onPress={() => onOpenReader(reading.book, reading.chapter, reading.verse)} />
      </Card>
      <View style={styles.calmNote}>
        <Text style={[typography.subhead, { color: theme.text }]}>Continúa a tu ritmo</Text>
        <Body theme={theme} muted>Retoma tus lecturas cuando quieras; no necesitas cuenta ni conexión.</Body>
      </View>
    </ScrollView>
  </Screen>;
}

const styles = StyleSheet.create({
  stack: { gap: spacing.xl, paddingBottom: spacing.xxxl },
  heroTitle: { gap: spacing.sm },
  warmAccent: { width: 48, height: 4, borderRadius: radius.xs },
  calmNote: { gap: spacing.sm, paddingHorizontal: spacing.xs },
});

import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteBibleRepository } from '../../db/sqliteBibleRepository';
import type { BibleVerse } from '../../product/adapters';
import { books, runtimeCoverage } from '../../product/books';
import { scaledScriptureMetrics } from '../readingScale';
import type { Theme } from '../theme';
import { radius, spacing, type as typography } from '../theme';
import { Action, Body, ChoiceChip, Metadata, Screen, ScreenTitle, Section, SettingRow, StatusBanner } from '../primitives';

const oldTestament = books.slice(0, 39);
const newTestament = books.slice(39);

export function BibleScreen({
  theme,
  reader,
  readingScale = 1,
  onOpenReader,
}: {
  theme: Theme;
  reader?: { book: string; chapter: number; verse?: number };
  readingScale?: number;
  onOpenReader: (book: string, chapter: number, verse?: number) => void;
}) {
  const db = useSQLiteContext();
  const repository = useMemo(() => new SQLiteBibleRepository(db), [db]);
  const [verses, setVerses] = useState<readonly BibleVerse[]>([]);
  const [chapterCount, setChapterCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedBook, setSelectedBook] = useState<string>();
  const [pickerChapterCount, setPickerChapterCount] = useState(0);
  const [pickerLoading, setPickerLoading] = useState(false);
  const [pickerError, setPickerError] = useState(false);
  const scriptureMetrics = scaledScriptureMetrics(readingScale);

  useEffect(() => {
    let active = true;
    if (!reader) {
      setVerses([]);
      setChapterCount(0);
      setError(null);
      return () => { active = false; };
    }
    setLoading(true);
    setError(null);
    void Promise.all([
      repository.getChapter(reader.book, reader.chapter),
      repository.getBookChapterCount(reader.book),
    ]).then(([rows, count]) => {
      if (active) {
        setVerses(rows);
        setChapterCount(count);
      }
    }).catch(() => {
      if (active) {
        setVerses([]);
        setChapterCount(0);
        setError('No se pudo leer este capítulo desde el corpus local.');
      }
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, [reader?.book, reader?.chapter, repository]);

  const chooseBook = async (book: string) => {
    setSelectedBook(book);
    setPickerLoading(true);
    setPickerError(false);
    try {
      setPickerChapterCount(await repository.getBookChapterCount(book));
    } catch {
      setPickerChapterCount(0);
      setPickerError(true);
    } finally {
      setPickerLoading(false);
    }
  };

  if (reader) {
    const canonicalName = verses[0]?.bookName ?? reader.book;
    const ref = canonicalName + ' ' + reader.chapter + (reader.verse ? ':' + reader.verse : '');
    const atFirstChapter = reader.chapter <= 1;
    const atLastChapter = chapterCount > 0 && reader.chapter >= chapterCount;

    return <Screen theme={theme}>
      <ScrollView contentContainerStyle={styles.readerStack}>
        <View style={styles.readerHeader}>
          <Metadata theme={theme}>RV1909 · OFFLINE · {chapterCount ? chapterCount + ' capítulos' : 'corpus local'}</Metadata>
          <ScreenTitle theme={theme}>{ref}</ScreenTitle>
          <Body theme={theme} muted>Lectura en contexto. El texto bíblico permanece libre de contenedores pesados.</Body>
        </View>

        {loading ? <StatusBanner theme={theme} kind="info">Cargando capítulo local…</StatusBanner> : null}
        {error ? <StatusBanner theme={theme} kind="error">{error}</StatusBanner> : null}
        {!loading && !error && verses.length === 0 ? <StatusBanner theme={theme} kind="info">No hay versículos para este capítulo.</StatusBanner> : null}

        {!loading && !error && verses.length ? <View style={styles.scripture}>
          {verses.map(verse => {
            const selected = reader.verse != null && (verse.verse === reader.verse || verse.sourceVerseLabel === String(reader.verse));
            return <View
              key={[verse.bookId, verse.chapter, verse.sourceVerseLabel].join('-')}
              accessible
              accessibilityLabel={canonicalName + ' ' + verse.chapter + ':' + verse.sourceVerseLabel + '. ' + verse.text}
              accessibilityState={{ selected }}
              style={[
                styles.verse,
                selected && {
                  backgroundColor: theme.selectionBg,
                  borderLeftColor: theme.selectionBorder,
                },
              ]}
            >
              <Text style={[typography.label, { color: selected ? theme.primary : theme.secondary }]}>
                {verse.sourceVerseLabel}{selected ? ' · seleccionado' : ''}
              </Text>
              <Text style={[typography.scripture, scriptureMetrics, { color: theme.text }]}>{verse.text}</Text>
            </View>;
          })}
        </View> : null}

        <Section theme={theme} title="Navegar por el capítulo">
          <View style={styles.readerActions}>
            <Action
              label="Capítulo anterior"
              variant="secondary"
              disabled={atFirstChapter}
              theme={theme}
              onPress={() => onOpenReader(reader.book, Math.max(1, reader.chapter - 1))}
            />
            <Action
              label="Capítulo siguiente"
              variant="secondary"
              disabled={atLastChapter}
              theme={theme}
              onPress={() => onOpenReader(reader.book, reader.chapter + 1)}
            />
          </View>
        </Section>

        <Metadata theme={theme}>{runtimeCoverage.translation} · 66 libros · corpus local · sin conexión requerida</Metadata>
      </ScrollView>
    </Screen>;
  }

  if (selectedBook) {
    return <Screen theme={theme}>
      <ScrollView contentContainerStyle={styles.stack}>
        <Action label="← Cambiar libro" variant="tertiary" theme={theme} onPress={() => {
          setSelectedBook(undefined);
          setPickerChapterCount(0);
          setPickerError(false);
        }} />
        <View style={styles.readerHeader}>
          <Metadata theme={theme}>LEER · RV1909</Metadata>
          <ScreenTitle theme={theme}>{selectedBook}</ScreenTitle>
          <Body theme={theme} muted>Elige un capítulo para abrir el texto.</Body>
        </View>

        {pickerLoading ? <StatusBanner theme={theme} kind="info">Cargando capítulos disponibles…</StatusBanner> : null}
        {pickerError ? <StatusBanner theme={theme} kind="error">No se pudo leer la metadata local de capítulos.</StatusBanner> : null}
        {!pickerLoading && !pickerError && pickerChapterCount > 0 ? <View style={styles.chapterGrid}>
          {Array.from({ length: pickerChapterCount }, (_, index) => index + 1).map(chapter => <ChoiceChip
            key={chapter}
            label={String(chapter)}
            theme={theme}
            selected={false}
            onPress={() => onOpenReader(selectedBook, chapter)}
          />)}
        </View> : null}
      </ScrollView>
    </Screen>;
  }

  return <Screen theme={theme}>
    <ScrollView contentContainerStyle={styles.stack}>
      <View style={styles.readerHeader}>
        <ScreenTitle theme={theme}>Leer</ScreenTitle>
        <Body theme={theme} muted>{runtimeCoverage.translation} · {runtimeCoverage.books} libros disponibles offline. Primero elige un libro; después, un capítulo.</Body>
      </View>

      <Section theme={theme} title="Antiguo Testamento">
        {oldTestament.map(book => <SettingRow
          key={book}
          theme={theme}
          label={book}
          value="Capítulos →"
          onPress={() => { void chooseBook(book); }}
        />)}
      </Section>

      <Section theme={theme} title="Nuevo Testamento">
        {newTestament.map(book => <SettingRow
          key={book}
          theme={theme}
          label={book}
          value="Capítulos →"
          onPress={() => { void chooseBook(book); }}
        />)}
      </Section>
    </ScrollView>
  </Screen>;
}

const styles = StyleSheet.create({
  stack: { gap: spacing.xl, paddingBottom: spacing.xxxl },
  readerStack: { gap: spacing.xl, paddingBottom: spacing.xxxl },
  readerHeader: { gap: spacing.sm },
  chapterGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  scripture: { gap: spacing.xs },
  verse: {
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    gap: spacing.xs,
  },
  readerActions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
});

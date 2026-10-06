import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteBibleRepository } from '../../db/sqliteBibleRepository';
import type { BibleSearchHit } from '../../product/adapters';
import { classifyQuery, intentLabels, parseReference } from '../../product/search';
import { summarizeMatchTiers } from '../../product/searchPresentation';
import { normalizeTopicText, topicCatalog, type TopicDefinition } from '../../product/topics';
import { uxCopy } from '../../product/uxCopy';
import type { Theme } from '../theme';
import { radius, spacing, type as typography } from '../theme';
import { Action, Body, Card, ChoiceChip, ContextualTip, Field, Metadata, ResultRow, Screen, ScreenTitle, Section, StatusBanner, Subhead } from '../primitives';

const matchLabel = {
  literal_exact: 'Literal',
  lexical_related_form: 'Forma relacionada',
  thematic_term: 'Temático',
  curated_reference: 'Referencia curada',
} as const;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function SearchScreen({ theme, onOpenReader }: { theme: Theme; onOpenReader: (book: string, chapter: number, verse?: number) => void }) {
  const db = useSQLiteContext();
  const [query, setQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [selectedTopic, setSelectedTopic] = useState<TopicDefinition>();
  const [results, setResults] = useState<readonly BibleSearchHit[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showExploreTip, setShowExploreTip] = useState(true);

  const intent = query.trim() ? classifyQuery(query) : null;
  const parsed = intent === 'reference' ? parseReference(query) : null;
  const searchable = intent === 'word' || intent === 'phrase';
  const topics = useMemo(
    () => topicCatalog
      .filter(topic => normalizeTopicText(topic.label).charAt(0).toUpperCase() === selectedLetter)
      .sort((a, b) => a.label.localeCompare(b.label, 'es')),
    [selectedLetter],
  );
  const summary = useMemo(() => summarizeMatchTiers(results), [results]);

  const clearResults = () => {
    setResults([]);
    setSearched(false);
    setError(false);
  };

  const runLiteral = async () => {
    if (!searchable || loading) return;
    setSelectedTopic(undefined);
    setLoading(true);
    setError(false);
    try {
      setResults(await new SQLiteBibleRepository(db).searchLiteral(query));
      setSearched(true);
    } catch {
      setResults([]);
      setSearched(true);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const runTopic = async (topic: TopicDefinition) => {
    if (loading) return;
    setQuery('');
    setSelectedTopic(topic);
    setLoading(true);
    setError(false);
    try {
      setResults(await new SQLiteBibleRepository(db).searchTopic(topic.id));
      setSearched(true);
    } catch {
      setResults([]);
      setSearched(true);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return <Screen theme={theme}>
    <ScrollView contentContainerStyle={styles.stack} keyboardShouldPersistTaps="handled">
      <View style={styles.intro}>
        <ScreenTitle theme={theme}>Explorar</ScreenTitle>
        <Body theme={theme} muted>Elige uno de los 100 temas curados o busca texto y referencias de forma literal. Son recorridos distintos.</Body>
      </View>

      {showExploreTip ? <ContextualTip theme={theme} title={uxCopy.exploreTipTitle} onDismiss={() => setShowExploreTip(false)}>{uxCopy.exploreTipBody}</ContextualTip> : null}

      <Section theme={theme} title="Temas A–Z" description="La selección temática usa términos completos curados; nunca se infiere desde lo que escribes en búsqueda libre.">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.letters}>
          {letters.map(letter => <ChoiceChip
            key={letter}
            label={letter}
            theme={theme}
            selected={selectedLetter === letter}
            onPress={() => setSelectedLetter(letter)}
          />)}
        </ScrollView>
        <View style={styles.topicGrid}>
          {topics.length
            ? topics.map(topic => <ChoiceChip
                key={topic.id}
                label={topic.label}
                theme={theme}
                selected={selectedTopic?.id === topic.id}
                onPress={() => { void runTopic(topic); }}
              />)
            : <Body theme={theme} muted>Sin temas en esta letra.</Body>}
        </View>
      </Section>

      <Section theme={theme} title="Búsqueda textual / referencia" description="Palabras y frases se buscan literalmente en RV1909. Una búsqueda libre nunca activa un tema curado.">
        <Field
          theme={theme}
          label="Buscar en RV1909"
          hint="Ejemplos: Juan 3:16 · amor · “no temas”"
          placeholder="Escribe una palabra, frase o referencia"
          value={query}
          returnKeyType="search"
          onChangeText={value => {
            setQuery(value);
            setSelectedTopic(undefined);
            clearResults();
          }}
          onSubmitEditing={() => { void runLiteral(); }}
        />
        {intent ? <View style={styles.intent}>
          <Metadata theme={theme}>{intentLabels[intent].toUpperCase()}</Metadata>
          <Body theme={theme}>
            {intent === 'phrase'
              ? 'Busca esa secuencia exacta en RV1909.'
              : intent === 'reference'
                ? 'Referencia reconocida; puedes abrirla directamente.'
                : 'Busca literalmente el texto escrito; no activa temas curados.'}
          </Body>
          {parsed ? <Action variant="secondary" label={'Abrir ' + query.trim()} theme={theme} onPress={() => onOpenReader(parsed.book, parsed.chapter, parsed.verse)} /> : null}
          {searchable ? <Action label="Buscar texto literal" loading={loading} theme={theme} onPress={() => { void runLiteral(); }} /> : null}
        </View> : null}
      </Section>

      {selectedTopic ? <Card featured theme={theme} label={'Tema seleccionado: ' + selectedTopic.label}>
        <Metadata theme={theme}>TEMA SELECCIONADO</Metadata>
        <Subhead theme={theme}>{selectedTopic.label}</Subhead>
        <Body theme={theme} muted>Resultados deterministas con términos completos. La selección temática no convierte estos resultados en conteos literales.</Body>
      </Card> : null}

      {searched && !error ? <Section theme={theme} title="Resumen de resultados">
        <View style={styles.metrics}>
          <View style={[styles.metric, { backgroundColor: theme.surfaceSoft }]}>
            <Text style={[typography.display, styles.metricValue, { color: theme.primary }]}>{summary.literal}</Text>
            <Metadata theme={theme}>Literal</Metadata>
          </View>
          <View style={[styles.metric, { backgroundColor: theme.surfaceSoft }]}>
            <Text style={[typography.display, styles.metricValue, { color: theme.amber }]}>{summary.related}</Text>
            <Metadata theme={theme}>Formas relacionadas</Metadata>
          </View>
          <View style={[styles.metric, { backgroundColor: theme.surfaceSoft }]}>
            <Text style={[typography.display, styles.metricValue, { color: theme.sky }]}>{summary.thematic + summary.curated}</Text>
            <Metadata theme={theme}>Temático</Metadata>
          </View>
        </View>
        {summary.curated ? <Metadata theme={theme}>{summary.curated} referencia(s) curada(s) incluidas en el total temático; la razón exacta aparece en cada resultado.</Metadata> : null}
      </Section> : null}

      {loading ? <StatusBanner theme={theme} kind="info">Consultando RV1909 local…</StatusBanner> : null}
      {error ? <StatusBanner theme={theme} kind="error">No se pudo consultar el índice local. Intenta de nuevo.</StatusBanner> : null}
      {searched && !loading && !error && results.length === 0 ? <StatusBanner theme={theme} kind="info">Sin resultados locales para esta búsqueda en RV1909.</StatusBanner> : null}

      {results.length ? <Section theme={theme} title="Resultados" description="Cada fila explica por qué apareció.">
        <View style={[styles.results, { borderTopColor: theme.border }]}>
          {results.map(hit => <ResultRow
            key={[hit.bookId, hit.chapter, hit.sourceVerseLabel, hit.matchType].join('-')}
            theme={theme}
            tier={matchLabel[hit.matchType]}
            reference={hit.bookName + ' ' + hit.chapter + ':' + hit.sourceVerseLabel}
            text={hit.text}
            explanation={hit.explanation}
            onPress={() => onOpenReader(hit.bookName, hit.chapter, hit.verse)}
          />)}
        </View>
      </Section> : null}
    </ScrollView>
  </Screen>;
}

const styles = StyleSheet.create({
  stack: { gap: spacing.xl, paddingBottom: spacing.xxxl },
  intro: { gap: spacing.sm },
  letters: { gap: spacing.sm, paddingVertical: spacing.xs, paddingRight: spacing.lg },
  topicGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  intent: { gap: spacing.md },
  metrics: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  metric: { minWidth: 96, flexGrow: 1, flexBasis: 96, borderRadius: radius.sm, padding: spacing.md, gap: spacing.xs },
  metricValue: { fontSize: 28, lineHeight: 34 },
  results: { borderTopWidth: 1 },
});

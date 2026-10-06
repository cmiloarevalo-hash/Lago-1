import { StatusBar } from 'expo-status-bar';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { DATABASE_NAME } from './src/db/model';
import { SQLiteLocalPersistence } from './src/db/sqliteLocalPersistence';
import { initialRoute, tabIcons, tabLabels, tabs, type Route, type TabId } from './src/product/navigation';
import { defaultPreferences, type LocalPreferences } from './src/product/preferences';
import { minimumTouchTarget, radius, spacing, themes, type as typography, type ThemeMode } from './src/ui/theme';
import { TodayScreen } from './src/ui/screens/TodayScreen';
import { SearchScreen } from './src/ui/screens/SearchScreen';
import { BibleScreen } from './src/ui/screens/BibleScreen';
import { LibraryScreen } from './src/ui/screens/LibraryScreen';
import { SettingsScreen } from './src/ui/screens/SettingsScreen';

const bundledBible = { assetId: require('./assets/data/bible-topic-explorer.db') };

function AppContent() {
  const [route, setRoute] = useState<Route>(initialRoute());
  const db = useSQLiteContext();
  const persistence = useMemo(() => new SQLiteLocalPersistence(db), [db]);
  const [preferences, setPreferences] = useState<LocalPreferences>(defaultPreferences);

  useEffect(() => {
    let active = true;
    void persistence.getPreferences().then(value => {
      if (active) setPreferences(value);
    }).catch(() => {});
    return () => { active = false; };
  }, [persistence]);

  const scheme = useColorScheme();
  const systemMode: ThemeMode = scheme === 'dark' ? 'dark' : 'light';
  const mode: ThemeMode = preferences.theme === 'system' ? systemMode : preferences.theme;
  const theme = themes[mode];
  const activeTab: TabId = route.kind === 'tab' ? route.tab : route.origin;

  const openReader = (book: string, chapter: number, verse?: number) => {
    void persistence.recordReading({
      bookId: book,
      chapter,
      ...(verse == null ? {} : { verse }),
      openedAt: new Date().toISOString(),
    });
    setRoute({ kind: 'reader', book, chapter, verse, origin: activeTab });
  };

  const content = route.kind === 'settings'
    ? <SettingsScreen theme={theme} onPreferencesChange={setPreferences} />
    : route.kind === 'reader'
      ? <BibleScreen theme={theme} readingScale={preferences.fontScale} reader={{ book: route.book, chapter: route.chapter, verse: route.verse }} onOpenReader={openReader} />
      : route.tab === 'today'
        ? <TodayScreen theme={theme} readingScale={preferences.fontScale} onOpenReader={openReader} />
        : route.tab === 'search'
          ? <SearchScreen theme={theme} onOpenReader={openReader} />
          : route.tab === 'bible'
            ? <BibleScreen theme={theme} readingScale={preferences.fontScale} onOpenReader={openReader} />
            : <LibraryScreen theme={theme} onOpenReader={openReader} />;

  return <SafeAreaView style={[styles.root, { backgroundColor: theme.background }]}>
    <View style={[styles.top, { borderBottomColor: theme.border, backgroundColor: theme.surface }]}>
      <View style={styles.brand}>
        <Text style={[typography.label, { color: theme.text }]}>Bible Topic Explorer</Text>
        <Text style={[typography.micro, { color: theme.secondary }]}>RV1909 · offline</Text>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Abrir ajustes"
        hitSlop={4}
        onPress={() => setRoute({ kind: 'settings', origin: activeTab })}
        style={({ pressed }) => [styles.settings, { backgroundColor: pressed ? theme.surfaceSoft : 'transparent' }]}
      >
        <Text accessibilityElementsHidden style={[styles.settingsIcon, { color: theme.primary }]}>⚙</Text>
        <Text style={[typography.label, { color: theme.primary }]}>Ajustes</Text>
      </Pressable>
    </View>

    <View style={styles.content}>{content}</View>

    <View accessibilityRole="tablist" style={[styles.tabs, { borderTopColor: theme.border, backgroundColor: theme.surface }]}>
      {tabs.map(tab => {
        const selected = activeTab === tab;
        return <Pressable
          key={tab}
          accessibilityRole="tab"
          accessibilityLabel={tabLabels[tab]}
          accessibilityState={{ selected }}
          onPress={() => setRoute({ kind: 'tab', tab })}
          style={({ pressed }) => [
            styles.tab,
            selected && { backgroundColor: theme.selectionBg },
            pressed && { opacity: 0.78 },
          ]}
        >
          {selected ? <View accessibilityElementsHidden style={[styles.tabIndicator, { backgroundColor: theme.primary }]} /> : null}
          <Text accessibilityElementsHidden style={[styles.tabIcon, { color: selected ? theme.primary : theme.secondary }]}>{tabIcons[tab]}</Text>
          <Text style={[typography.metadata, { color: selected ? theme.primary : theme.secondary, fontWeight: selected ? '700' : '500' }]}>{tabLabels[tab]}</Text>
        </Pressable>;
      })}
    </View>
    <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
  </SafeAreaView>;
}

export default function App() {
  return <SQLiteProvider databaseName={DATABASE_NAME} assetSource={bundledBible}><AppContent /></SQLiteProvider>;
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  top: {
    minHeight: 56,
    paddingHorizontal: 20,
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.xs,
  },
  brand: { gap: 1, flexShrink: 1 },
  settings: {
    minHeight: minimumTouchTarget,
    minWidth: minimumTouchTarget,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  settingsIcon: { fontSize: 18, lineHeight: 22 },
  content: { flex: 1 },
  tabs: {
    minHeight: 72,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xs,
    gap: spacing.xs,
  },
  tab: {
    flex: 1,
    minHeight: minimumTouchTarget,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    position: 'relative',
  },
  tabIndicator: {
    position: 'absolute',
    top: 3,
    width: 28,
    height: 3,
    borderRadius: 2,
  },
  tabIcon: { fontSize: 18, lineHeight: 20 },
});

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { readingForDate } from '../../product/today';
import type { Theme } from '../theme'; import { spacing, type as typography } from '../theme'; import { Action, Body, Card, Heading, Screen } from '../primitives';
export function TodayScreen({ theme, onOpenReader }: { theme: Theme; onOpenReader: (book:string, chapter:number, verse?:number)=>void }) {
 const reading = readingForDate(new Date()); const ref = `${reading.book} ${reading.chapter}:${reading.verse}`;
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}><View><Text style={[typography.label,{color:theme.muted}]}>HOY</Text><Text accessibilityRole="header" style={[typography.display,{color:theme.text}]}>Un momento para volver a la Palabra.</Text></View><Card theme={theme} label={`Lectura de hoy, ${ref}`}><Text style={[typography.label,{color:theme.accent}]}>LECTURA DE HOY · RV1909</Text><Heading theme={theme}>{ref}</Heading><Body theme={theme}>{reading.prompt}</Body><Action label={`Leer ${ref}`} theme={theme} onPress={()=>onOpenReader(reading.book,reading.chapter,reading.verse)} /></Card><Card theme={theme}><Heading theme={theme}>Continúa a tu ritmo</Heading><Body theme={theme} muted>Tu progreso acompaña; no se reinicia por faltar un día.</Body><Text style={[typography.title,{color:theme.text}]}>0 de 7 días esta semana</Text></Card></ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.lg,paddingBottom:spacing.xxl}});

import type { PropsWithChildren, ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { minimumTouchTarget, radius, spacing, type, type Theme } from './theme';

export function Screen({ children, theme }: PropsWithChildren<{ theme: Theme }>) {
  return <View accessibilityRole="none" style={[styles.screen, { backgroundColor: theme.background }]}>{children}</View>;
}

export function Heading({ children, theme }: PropsWithChildren<{ theme: Theme }>) {
  return <Text accessibilityRole="header" style={[type.title, { color: theme.text }]}>{children}</Text>;
}

export function Body({ children, theme, muted = false }: PropsWithChildren<{ theme: Theme; muted?: boolean }>) {
  return <Text style={[type.body, { color: muted ? theme.muted : theme.text }]}>{children}</Text>;
}

export function Card({ children, theme, label }: PropsWithChildren<{ theme: Theme; label?: string }>) {
  return <View accessible={false} accessibilityLabel={label} style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>{children}</View>;
}

export function Action({ label, theme, onPress, secondary = false, icon, disabled = false }: { label: string; theme: Theme; onPress: () => void; secondary?: boolean; icon?: ReactNode; disabled?: boolean }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={label} accessibilityState={{disabled}} disabled={disabled} onPress={onPress} style={({ pressed }) => [styles.action, { backgroundColor: secondary ? theme.soft : theme.accent, opacity: disabled ? 0.5 : pressed ? 0.75 : 1 }]}>{icon}<Text style={[type.label, { color: secondary ? theme.text : theme.accentText }]}>{label}</Text></Pressable>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: spacing.lg, paddingTop: spacing.lg },
  card: { borderWidth: 1, borderRadius: radius.md, padding: spacing.lg, gap: spacing.sm },
  action: { minHeight: minimumTouchTarget, borderRadius: radius.pill, paddingHorizontal: spacing.lg, paddingVertical: spacing.md, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: spacing.sm },
});

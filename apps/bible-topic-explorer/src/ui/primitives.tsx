import { useState, type PropsWithChildren, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';
import { minimumTouchTarget, radius, spacing, stateLabels, type, type Theme } from './theme';
import { actionVisuals, statusVisuals, type ActionVariant, type StatusKind } from './visualSemantics';

export { actionVisuals, statusVisuals } from './visualSemantics';
export type { ActionVariant, StatusKind } from './visualSemantics';

export function Screen({ children, theme }: PropsWithChildren<{ theme: Theme }>) {
  return <View accessibilityRole="none" style={[styles.screen, { backgroundColor: theme.background }]}>{children}</View>;
}

export function ScreenTitle({ children, theme }: PropsWithChildren<{ theme: Theme }>) {
  return <Text accessibilityRole="header" style={[type.screenTitle, { color: theme.text }]}>{children}</Text>;
}

export function Heading({ children, theme }: PropsWithChildren<{ theme: Theme }>) {
  return <Text accessibilityRole="header" style={[type.sectionTitle, { color: theme.text }]}>{children}</Text>;
}

export function Subhead({ children, theme }: PropsWithChildren<{ theme: Theme }>) {
  return <Text style={[type.subhead, { color: theme.text }]}>{children}</Text>;
}

export function Body({ children, theme, muted = false }: PropsWithChildren<{ theme: Theme; muted?: boolean }>) {
  return <Text style={[type.body, { color: muted ? theme.secondary : theme.text }]}>{children}</Text>;
}

export function Metadata({ children, theme }: PropsWithChildren<{ theme: Theme }>) {
  return <Text style={[type.metadata, { color: theme.secondary }]}>{children}</Text>;
}

export function Section({ children, theme, title, description }: PropsWithChildren<{ theme: Theme; title?: string; description?: string }>) {
  return <View style={styles.section}>{title ? <Heading theme={theme}>{title}</Heading> : null}{description ? <Body theme={theme} muted>{description}</Body> : null}{children}</View>;
}

export function Card({ children, theme, label, featured = false }: PropsWithChildren<{ theme: Theme; label?: string; featured?: boolean }>) {
  return <View accessible={false} accessibilityLabel={label} style={[styles.card, featured && styles.featuredCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>{children}</View>;
}

export function Action({
  label,
  theme,
  onPress,
  variant,
  secondary = false,
  icon,
  disabled = false,
  loading = false,
}: {
  label: string;
  theme: Theme;
  onPress: () => void;
  variant?: ActionVariant;
  secondary?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}) {
  const resolved: ActionVariant = variant ?? (secondary ? 'secondary' : 'primary');
  const visual = actionVisuals(theme, resolved);
  const inactive = disabled || loading;
  return <Pressable
    accessibilityRole="button"
    accessibilityLabel={label}
    accessibilityState={{ disabled: inactive, busy: loading }}
    disabled={inactive}
    onPress={onPress}
    style={({ pressed }) => [
      styles.action,
      resolved === 'tertiary' && styles.tertiaryAction,
      { backgroundColor: inactive ? theme.disabledBg : visual.backgroundColor, borderColor: inactive ? theme.border : visual.borderColor, opacity: pressed ? 0.82 : 1 },
    ]}
  >
    {icon}
    <Text style={[type.label, { color: inactive ? theme.disabledText : visual.color }]}>{loading ? 'Cargando…' : label}</Text>
  </Pressable>;
}

export function ChoiceChip({ label, theme, selected, onPress }: { label: string; theme: Theme; selected: boolean; onPress: () => void }) {
  return <Pressable
    accessibilityRole="button"
    accessibilityLabel={label}
    accessibilityState={{ selected }}
    onPress={onPress}
    style={({ pressed }) => [
      styles.chip,
      {
        backgroundColor: selected ? theme.selectionBg : theme.surface,
        borderColor: selected ? theme.selectionBorder : theme.border,
        opacity: pressed ? 0.82 : 1,
      },
    ]}
  >
    {selected ? <Text accessibilityElementsHidden style={[type.label, { color: theme.primary }]}>✓</Text> : null}
    <Text style={[type.label, { color: selected ? theme.primary : theme.text }]}>{label}</Text>
  </Pressable>;
}

export function ResultRow({
  theme,
  reference,
  tier,
  text,
  explanation,
  onPress,
}: {
  theme: Theme;
  reference: string;
  tier: string;
  text: string;
  explanation: string;
  onPress: () => void;
}) {
  return <Pressable
    accessibilityRole="button"
    accessibilityLabel={`${tier}. ${reference}. ${text}`}
    onPress={onPress}
    style={({ pressed }) => [styles.resultRow, { borderBottomColor: theme.border, backgroundColor: pressed ? theme.surfaceSoft : 'transparent' }]}
  >
    <Text style={[type.label, { color: theme.primary }]}>{tier} · {reference}</Text>
    <Text style={[type.body, { color: theme.text }]}>{text}</Text>
    <Text style={[type.metadata, { color: theme.secondary }]}>{explanation}</Text>
    <Text style={[type.label, { color: theme.primary }]}>Abrir contexto →</Text>
  </Pressable>;
}

export function SettingRow({ theme, label, value, onPress, hint }: { theme: Theme; label: string; value?: string; onPress?: () => void; hint?: string }) {
  const content = <><View style={styles.settingCopy}><Text style={[type.subhead, { color: theme.text }]}>{label}</Text>{hint ? <Text style={[type.metadata, { color: theme.secondary }]}>{hint}</Text> : null}</View>{value ? <Text style={[type.label, { color: theme.primary }]}>{value}</Text> : null}</>;
  if (!onPress) return <View style={[styles.settingRow, { borderBottomColor: theme.border }]}>{content}</View>;
  return <Pressable accessibilityRole="button" accessibilityLabel={value ? `${label}: ${value}` : label} onPress={onPress} style={({ pressed }) => [styles.settingRow, { borderBottomColor: theme.border, backgroundColor: pressed ? theme.surfaceSoft : 'transparent' }]}>{content}</Pressable>;
}

export function Field({
  theme,
  label,
  error,
  hint,
  ...inputProps
}: TextInputProps & { theme: Theme; label: string; error?: string; hint?: string }) {
  const [focused, setFocused] = useState(false);
  const describedBy = error ?? hint;
  return <View style={styles.field}>
    <Text style={[type.label, { color: theme.text }]}>{label}</Text>
    <TextInput
      {...inputProps}
      accessibilityLabel={label}
      accessibilityHint={describedBy}
      onFocus={(event) => { setFocused(true); inputProps.onFocus?.(event); }}
      onBlur={(event) => { setFocused(false); inputProps.onBlur?.(event); }}
      style={[
        styles.input,
        inputProps.multiline && styles.multilineInput,
        {
          color: theme.text,
          backgroundColor: theme.surface,
          borderColor: error ? theme.errorText : focused ? theme.focusRing : theme.border,
          borderWidth: error || focused ? 2 : 1,
        },
        inputProps.style,
      ]}
      placeholderTextColor={theme.secondary}
    />
    {error ? <Text accessibilityRole="alert" style={[type.metadata, { color: theme.errorText }]}>Error: {error}</Text> : hint ? <Text style={[type.metadata, { color: theme.secondary }]}>{hint}</Text> : null}
  </View>;
}

export function StatusBanner({ theme, kind, children }: PropsWithChildren<{ theme: Theme; kind: StatusKind }>) {
  const visual = statusVisuals(theme, kind);
  return <View accessibilityRole={kind === 'error' ? 'alert' : undefined} style={[styles.status, { backgroundColor: visual.backgroundColor }]}>
    <View accessibilityElementsHidden style={[styles.statusMarker, { borderColor: visual.color }]}><Text style={[type.label, { color: visual.color }]}>{visual.marker}</Text></View>
    <Text style={[type.body, styles.statusText, { color: visual.color }]}>{stateLabels[kind]}: {children}</Text>
  </View>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: 20, paddingTop: spacing.lg },
  section: { gap: spacing.md, marginBottom: spacing.xl },
  card: { borderWidth: 1, borderRadius: radius.md, padding: spacing.lg, gap: spacing.sm },
  featuredCard: { borderRadius: radius.lg, padding: spacing.xl },
  action: { minHeight: 52, borderWidth: 1, borderRadius: radius.md, paddingHorizontal: spacing.lg, paddingVertical: spacing.md, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: spacing.sm },
  tertiaryAction: { minHeight: minimumTouchTarget, alignSelf: 'flex-start', paddingHorizontal: spacing.sm },
  chip: { minHeight: minimumTouchTarget, borderWidth: 1, borderRadius: radius.pill, paddingHorizontal: spacing.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.xs },
  resultRow: { minHeight: minimumTouchTarget, borderBottomWidth: 1, paddingVertical: spacing.lg, gap: spacing.sm },
  settingRow: { minHeight: minimumTouchTarget, borderBottomWidth: 1, paddingVertical: spacing.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.lg },
  settingCopy: { flex: 1, gap: spacing.xs },
  field: { gap: spacing.sm },
  input: { minHeight: 52, borderRadius: radius.md, paddingHorizontal: spacing.lg, paddingVertical: spacing.md, fontSize: 17, lineHeight: 26 },
  multilineInput: { minHeight: 120, textAlignVertical: 'top' },
  status: { minHeight: minimumTouchTarget, borderRadius: radius.sm, padding: spacing.md, flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm },
  statusMarker: { width: 24, height: 24, borderWidth: 2, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  statusText: { flex: 1 },
});

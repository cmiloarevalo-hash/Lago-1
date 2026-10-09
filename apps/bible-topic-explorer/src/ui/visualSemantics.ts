import type { Theme } from './theme';

export type ActionVariant = 'primary' | 'secondary' | 'tertiary';
export type StatusKind = 'success' | 'warning' | 'error' | 'info';

export function actionVisuals(theme: Theme, variant: ActionVariant) {
  if (variant === 'primary') return { backgroundColor: theme.primary, color: theme.onPrimary, borderColor: theme.primary };
  if (variant === 'secondary') return { backgroundColor: theme.surfaceSoft, color: theme.text, borderColor: theme.selectionBorder };
  return { backgroundColor: 'transparent', color: theme.primaryText, borderColor: 'transparent' };
}

export function statusVisuals(theme: Theme, kind: StatusKind) {
  if (kind === 'success') return { backgroundColor: theme.selectionBg, color: theme.success, marker: '✓' };
  if (kind === 'warning') return { backgroundColor: theme.warningBg, color: theme.warningText, marker: '!' };
  if (kind === 'error') return { backgroundColor: theme.errorBg, color: theme.errorText, marker: '!' };
  return { backgroundColor: theme.infoBg, color: theme.infoText, marker: 'i' };
}

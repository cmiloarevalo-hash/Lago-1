export type ThemeMode = 'light' | 'dark';

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const radius = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

const display = { fontSize: 34, lineHeight: 40, fontWeight: '700' as const };
const screenTitle = { fontSize: 28, lineHeight: 34, fontWeight: '700' as const };
const sectionTitle = { fontSize: 22, lineHeight: 28, fontWeight: '700' as const };
const subhead = { fontSize: 18, lineHeight: 24, fontWeight: '600' as const };
const body = { fontSize: 17, lineHeight: 26, fontWeight: '400' as const };
const scripture = { fontSize: 20, lineHeight: 32, fontWeight: '400' as const };
const label = { fontSize: 14, lineHeight: 20, fontWeight: '600' as const };
const metadata = { fontSize: 13, lineHeight: 18, fontWeight: '500' as const };
const micro = { fontSize: 12, lineHeight: 16, fontWeight: '600' as const };

export const type = {
  display,
  screenTitle,
  sectionTitle,
  subhead,
  body,
  scripture,
  label,
  metadata,
  micro,
  // Compatibility alias while screens migrate in D02-D06.
  title: sectionTitle,
} as const;

export const themes = {
  light: {
    background: '#FAF7F2',
    surface: '#FFFFFF',
    raised: '#FFFFFF',
    surfaceSoft: '#F1EEE7',
    text: '#1B231E',
    secondary: '#58615B',
    muted: '#58615B',
    primary: '#2F6652',
    accent: '#2F6652',
    onPrimary: '#FFFFFF',
    accentText: '#FFFFFF',
    amber: '#D99614',
    coral: '#C75B4C',
    sky: '#4A91B0',
    border: '#D9DDD8',
    selectionBg: '#E6F2EB',
    selectionBorder: '#2F6652',
    success: '#2F6652',
    warningText: '#7B4B00',
    warningBg: '#FFF2D5',
    errorText: '#8C3A2F',
    errorBg: '#FFE9E4',
    danger: '#8C3A2F',
    infoText: '#15546C',
    infoBg: '#E4F5FB',
    focusRing: '#2F6652',
    disabledBg: '#E3E5E1',
    disabledText: '#626A64',
    soft: '#F1EEE7',
  },
  dark: {
    background: '#111713',
    surface: '#19211C',
    raised: '#202A24',
    surfaceSoft: '#202A24',
    text: '#F2F5F2',
    secondary: '#B8C0BA',
    muted: '#B8C0BA',
    primary: '#8FC9AD',
    accent: '#8FC9AD',
    onPrimary: '#0D1B14',
    accentText: '#0D1B14',
    amber: '#F2C46D',
    coral: '#F49A8A',
    sky: '#8CC9E8',
    border: '#344239',
    selectionBg: '#233D31',
    selectionBorder: '#8FC9AD',
    success: '#79C69B',
    warningText: '#F4C36A',
    warningBg: '#302714',
    errorText: '#FFB4AB',
    errorBg: '#3A201E',
    danger: '#FFB4AB',
    infoText: '#8CC9E8',
    infoBg: '#17303B',
    focusRing: '#8FC9AD',
    disabledBg: '#29322C',
    disabledText: '#929B94',
    soft: '#202A24',
  },
} as const;

export type Theme = (typeof themes)[ThemeMode];
export const minimumTouchTarget = 48;

export const stateLabels = {
  success: 'Correcto',
  warning: 'Atención',
  error: 'Error',
  info: 'Información',
} as const;

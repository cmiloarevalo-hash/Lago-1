export type ThemeMode = 'light' | 'dark';

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
export const radius = { sm: 10, md: 16, lg: 24, pill: 999 } as const;
export const type = {
  display: { fontSize: 32, lineHeight: 38, fontWeight: '700' as const },
  title: { fontSize: 22, lineHeight: 28, fontWeight: '700' as const },
  body: { fontSize: 17, lineHeight: 26, fontWeight: '400' as const },
  label: { fontSize: 14, lineHeight: 20, fontWeight: '600' as const },
  scripture: { fontSize: 19, lineHeight: 31, fontWeight: '400' as const },
} as const;

export const themes = {
  light: {
    background: '#F7F5F0', surface: '#FFFFFF', text: '#1C241F', muted: '#5F6B63',
    accent: '#315E4B', accentText: '#FFFFFF', border: '#D9DED9', soft: '#E9F0EB', danger: '#8B2F2F',
  },
  dark: {
    background: '#111512', surface: '#1A201C', text: '#F3F4F1', muted: '#B7C0B9',
    accent: '#A7D5B9', accentText: '#102018', border: '#3A443D', soft: '#243129', danger: '#F2A7A7',
  },
} as const;

export type Theme = (typeof themes)[ThemeMode];
export const minimumTouchTarget = 48;

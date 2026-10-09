export type ThemeMode = 'light' | 'dark';

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 28, xxxl: 32 } as const;
export const radius = { xs: 7, sm: 10, md: 14, lg: 20, pill: 999 } as const;

const display = { fontSize: 30, lineHeight: 36, fontWeight: '700' as const };
const screenTitle = { fontSize: 26, lineHeight: 32, fontWeight: '700' as const };
const sectionTitle = { fontSize: 21, lineHeight: 27, fontWeight: '700' as const };
const subhead = { fontSize: 18, lineHeight: 24, fontWeight: '600' as const };
const body = { fontSize: 17, lineHeight: 25, fontWeight: '400' as const };
const scripture = { fontSize: 20, lineHeight: 31, fontWeight: '400' as const };
const label = { fontSize: 14, lineHeight: 20, fontWeight: '600' as const };
const metadata = { fontSize: 13, lineHeight: 18, fontWeight: '500' as const };
const micro = { fontSize: 12, lineHeight: 16, fontWeight: '600' as const };

export const type = { display, screenTitle, sectionTitle, subhead, body, scripture, label, metadata, micro, title: sectionTitle } as const;

export const themes = {
  light: {
    background: '#FFF9F7', surface: '#FFFFFF', raised: '#FFF5F2', surfaceSoft: '#FFF1F4',
    text: '#28212C', secondary: '#675B68', muted: '#675B68',
    primary: '#8F3F72', accent: '#8F3F72', onPrimary: '#FFFFFF', accentText: '#FFFFFF',
    amber: '#9A5616', coral: '#AD503E', sky: '#345C9D', purple: '#7551A1',
    border: '#E9DDE5', selectionBg: '#FCE7F3', selectionBorder: '#9C366F', success: '#216B4A',
    warningText: '#78350F', warningBg: '#FEF3C7', errorText: '#991B1B', errorBg: '#FEE2E2', danger: '#B91C1C',
    infoText: '#1E40AF', infoBg: '#DBEAFE', focusRing: '#9C366F', disabledBg: '#E9DDE5', disabledText: '#4B5563', soft: '#FFF1F4',
  },
  dark: {
    background: '#17151E', surface: '#241F2B', raised: '#352737', surfaceSoft: '#372938',
    text: '#F9F3F7', secondary: '#D3C7D1', muted: '#D3C7D1',
    primary: '#F5A5CC', accent: '#F5A5CC', onPrimary: '#281626', accentText: '#281626',
    amber: '#F2C17A', coral: '#FFAD9C', sky: '#B2C8FF', purple: '#D0B0FF',
    border: '#5C4C5C', selectionBg: '#493246', selectionBorder: '#F5A5CC', success: '#A1D5B1',
    warningText: '#FDE68A', warningBg: '#422006', errorText: '#FECACA', errorBg: '#450A0A', danger: '#FCA5A5',
    infoText: '#BFDBFE', infoBg: '#172554', focusRing: '#F5A5CC', disabledBg: '#3B3440', disabledText: '#D3C7D1', soft: '#372938',
  },
} as const;

export type Theme = (typeof themes)[ThemeMode];
export const minimumTouchTarget = 48;
// Persistent chrome remains responsive to Android font scaling, but is bounded so fixed bars stay usable.
export const shellMaxFontSizeMultiplier = 1.25;
export const stateLabels = { success: 'Correcto', warning: 'Atención', error: 'Error', info: 'Información' } as const;

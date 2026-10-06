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
    background: '#FAF9F6', surface: '#FFFFFF', raised: '#FFFFFF', surfaceSoft: '#F3F4F6',
    text: '#111827', secondary: '#6B7280', muted: '#6B7280',
    primary: '#16A34A', accent: '#16A34A', onPrimary: '#07140B', accentText: '#07140B',
    amber: '#B45309', coral: '#C2410C', sky: '#2563EB', purple: '#7C3AED',
    border: '#E5E7EB', selectionBg: '#DCFCE7', selectionBorder: '#15803D', success: '#15803D',
    warningText: '#78350F', warningBg: '#FEF3C7', errorText: '#991B1B', errorBg: '#FEE2E2', danger: '#B91C1C',
    infoText: '#1E40AF', infoBg: '#DBEAFE', focusRing: '#2563EB', disabledBg: '#E5E7EB', disabledText: '#4B5563', soft: '#F3F4F6',
  },
  dark: {
    background: '#111827', surface: '#1F2937', raised: '#273449', surfaceSoft: '#273449',
    text: '#F9FAFB', secondary: '#D1D5DB', muted: '#D1D5DB',
    primary: '#4ADE80', accent: '#4ADE80', onPrimary: '#052E16', accentText: '#052E16',
    amber: '#FBBF24', coral: '#FB923C', sky: '#60A5FA', purple: '#A78BFA',
    border: '#4B5563', selectionBg: '#14532D', selectionBorder: '#86EFAC', success: '#86EFAC',
    warningText: '#FDE68A', warningBg: '#422006', errorText: '#FECACA', errorBg: '#450A0A', danger: '#FCA5A5',
    infoText: '#BFDBFE', infoBg: '#172554', focusRing: '#93C5FD', disabledBg: '#374151', disabledText: '#D1D5DB', soft: '#273449',
  },
} as const;

export type Theme = (typeof themes)[ThemeMode];
export const minimumTouchTarget = 48;
export const stateLabels = { success: 'Correcto', warning: 'Atención', error: 'Error', info: 'Información' } as const;

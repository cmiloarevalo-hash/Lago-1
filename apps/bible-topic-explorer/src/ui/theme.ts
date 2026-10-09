export type ThemeMode = 'lavender' | 'sky' | 'dark';

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

const feedback = {
  warningText: '#78350F', warningBg: '#FEF3C7',
  errorText: '#991B1B', errorBg: '#FEE2E2', danger: '#B91C1C',
  infoText: '#1E40AF', infoBg: '#DBEAFE',
} as const;

/** Pastel buttons have dark foregrounds. Use primaryText for text on surfaces,
 * never the pastel primary fill; all theme modes satisfy contrast tests.
 */
export const themes = {
  lavender: {
    background: '#F7F8FF', surface: '#FFFFFF', raised: '#EEF1FF', surfaceSoft: '#F0F2FF',
    text: '#22243E', secondary: '#565B73', muted: '#565B73',
    primary: '#E0E7FF', primaryText: '#3730A3', accent: '#E0E7FF',
    onPrimary: '#26205B', accentText: '#26205B',
    amber: '#8F5318', coral: '#A34A4A', sky: '#315B95', purple: '#5743A5',
    border: '#D8DEF1', selectionBg: '#E0E7FF', selectionBorder: '#4C3DAD', success: '#216B4A',
    ...feedback, focusRing: '#4C3DAD', disabledBg: '#E7E9F3', disabledText: '#51566B', soft: '#F0F2FF',
  },
  sky: {
    background: '#F5FBFF', surface: '#FFFFFF', raised: '#E8F6FF', surfaceSoft: '#E9F6FD',
    text: '#1D3445', secondary: '#4A6271', muted: '#4A6271',
    primary: '#D5F0FF', primaryText: '#155B78', accent: '#D5F0FF',
    onPrimary: '#14394D', accentText: '#14394D',
    amber: '#8F5318', coral: '#A34A4A', sky: '#226487', purple: '#654899',
    border: '#D5E4EE', selectionBg: '#E0F4FF', selectionBorder: '#176A88', success: '#216B4A',
    ...feedback, focusRing: '#176A88', disabledBg: '#E2EAF0', disabledText: '#4B5A64', soft: '#E9F6FD',
  },
  dark: {
    background: '#17151E', surface: '#241F2B', raised: '#352737', surfaceSoft: '#372938',
    text: '#F9F3F7', secondary: '#D3C7D1', muted: '#D3C7D1',
    primary: '#F5A5CC', primaryText: '#F5A5CC', accent: '#F5A5CC',
    onPrimary: '#281626', accentText: '#281626',
    amber: '#F2C17A', coral: '#FFAD9C', sky: '#B2C8FF', purple: '#D0B0FF',
    border: '#5C4C5C', selectionBg: '#493246', selectionBorder: '#F5A5CC', success: '#A1D5B1',
    warningText: '#FDE68A', warningBg: '#422006', errorText: '#FECACA', errorBg: '#450A0A',
    danger: '#FCA5A5', infoText: '#BFDBFE', infoBg: '#172554',
    focusRing: '#F5A5CC', disabledBg: '#3B3440', disabledText: '#D3C7D1', soft: '#372938',
  },
} as const;
export type Theme = (typeof themes)[ThemeMode];
export const minimumTouchTarget = 48;
export const shellMaxFontSizeMultiplier = 1.25;
export const stateLabels = { success: 'Correcto', warning: 'Atención', error: 'Error', info: 'Información' } as const;

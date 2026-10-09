import { describe, expect, it } from 'vitest';
import { minimumTouchTarget, radius, spacing, themes, type } from './theme';

function luminance(hex: string) {
  const channels = hex.slice(1).match(/.{2}/g)!.map(value => {
    const srgb = parseInt(value, 16) / 255;
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(foreground: string, background: string) {
  const a = luminance(foreground);
  const b = luminance(background);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

describe('R01 approved design tokens', () => {
  it('freezes the accepted spacing, radii and typography scales', () => {
    expect(Object.values(spacing)).toEqual([4, 8, 12, 16, 20, 28, 32]);
    expect([radius.xs, radius.sm, radius.md, radius.lg]).toEqual([7, 10, 14, 20]);
    expect(type.display).toMatchObject({ fontSize: 30, lineHeight: 36, fontWeight: '700' });
    expect(type.screenTitle).toMatchObject({ fontSize: 26, lineHeight: 32, fontWeight: '700' });
    expect(type.scripture).toMatchObject({ fontSize: 20, lineHeight: 31 });
    expect(minimumTouchTarget).toBe(48);
  });

  it.each([
    ['lavender text/background', themes.lavender.text, themes.lavender.background, 4.5],
    ['lavender secondary/background', themes.lavender.secondary, themes.lavender.background, 4.5],
    ['lavender on-primary/primary', themes.lavender.onPrimary, themes.lavender.primary, 4.5],
    ['lavender warning', themes.lavender.warningText, themes.lavender.warningBg, 4.5],
    ['lavender error', themes.lavender.errorText, themes.lavender.errorBg, 4.5],
    ['lavender info', themes.lavender.infoText, themes.lavender.infoBg, 4.5],
    ['sky text/background', themes.sky.text, themes.sky.background, 4.5],
    ['sky secondary/background', themes.sky.secondary, themes.sky.background, 4.5],
    ['sky on-primary/primary', themes.sky.onPrimary, themes.sky.primary, 4.5],
    ['dark text/background', themes.dark.text, themes.dark.background, 4.5],
    ['dark secondary/background', themes.dark.secondary, themes.dark.background, 4.5],
    ['dark on-primary/primary', themes.dark.onPrimary, themes.dark.primary, 4.5],
    ['dark warning/background', themes.dark.warningText, themes.dark.background, 4.5],
    ['dark error/background', themes.dark.errorText, themes.dark.background, 4.5],
    ['dark info/background', themes.dark.infoText, themes.dark.background, 4.5],
  ])('%s contrast is at least AA normal text', (_name, fg, bg, minimum) => {
    expect(contrast(fg, bg)).toBeGreaterThanOrEqual(minimum);
  });

  it('gives essential selection/focus indicators at least 3:1 against surfaces', () => {
    expect(contrast(themes.lavender.selectionBorder, themes.lavender.surface)).toBeGreaterThanOrEqual(3);
    expect(contrast(themes.dark.selectionBorder, themes.dark.surface)).toBeGreaterThanOrEqual(3);
    expect(contrast(themes.lavender.focusRing, themes.lavender.surface)).toBeGreaterThanOrEqual(3);
    expect(contrast(themes.dark.focusRing, themes.dark.surface)).toBeGreaterThanOrEqual(3);
  });
});


describe('RC02 Calma viva v2', () => {
  it('uses user-selected lavender, neutral sky and charcoal dark palettes', () => {
    expect(themes.lavender.primary).toBe('#E0E7FF');
    expect(themes.sky.primary).toBe('#D5F0FF');
    expect(themes.dark.primary).toBe('#F5A5CC');
    expect(themes.lavender.background).toBe('#F7F8FF');
    expect(themes.dark.background).toBe('#17151E');
    expect(themes.lavender.selectionBg).toBe('#E0E7FF');
    expect(themes.dark.selectionBg).toBe('#493246');
    expect(contrast(themes.lavender.primaryText,themes.lavender.surface)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(themes.sky.primaryText,themes.sky.surface)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(themes.sky.selectionBorder,themes.sky.surface)).toBeGreaterThanOrEqual(3);
  });
});

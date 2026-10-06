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
    expect(type.scripture).toMatchObject({ fontSize: 20, lineHeight: 32 });
    expect(minimumTouchTarget).toBe(48);
  });

  it.each([
    ['light text/background', themes.light.text, themes.light.background, 4.5],
    ['light secondary/background', themes.light.secondary, themes.light.background, 4.5],
    ['light on-primary/primary', themes.light.onPrimary, themes.light.primary, 4.5],
    ['light warning', themes.light.warningText, themes.light.warningBg, 4.5],
    ['light error', themes.light.errorText, themes.light.errorBg, 4.5],
    ['light info', themes.light.infoText, themes.light.infoBg, 4.5],
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
    expect(contrast(themes.light.selectionBorder, themes.light.surface)).toBeGreaterThanOrEqual(3);
    expect(contrast(themes.dark.selectionBorder, themes.dark.surface)).toBeGreaterThanOrEqual(3);
    expect(contrast(themes.light.focusRing, themes.light.surface)).toBeGreaterThanOrEqual(3);
    expect(contrast(themes.dark.focusRing, themes.dark.surface)).toBeGreaterThanOrEqual(3);
  });
});

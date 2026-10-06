import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { classifyQuery } from '../product/search';
import { normalizeTopicText, topicCatalog } from '../product/topics';
import { visualMotionPolicy } from '../product/uxCopy';
import { minimumTouchTarget, themes, type } from './theme';

const root = process.cwd();
const read = (relative: string) => readFileSync(resolve(root, relative), 'utf8');
const appSource = read('App.tsx');
const primitivesSource = read('src/ui/primitives.tsx');
const searchSource = read('src/ui/screens/SearchScreen.tsx');
const readerSource = read('src/ui/screens/BibleScreen.tsx');

function runtimeSources(directory: string): string[] {
  const full = resolve(root, directory);
  return readdirSync(full, { withFileTypes: true }).flatMap(entry => {
    const relative = join(directory, entry.name);
    if (entry.isDirectory()) return runtimeSources(relative);
    if (!/\.(ts|tsx)$/.test(entry.name) || /\.test\.(ts|tsx)$/.test(entry.name)) return [];
    return [read(relative)];
  });
}

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

describe('D08 accessibility and frozen functional contracts', () => {
  it('keeps touch targets at 48dp or larger and primary actions above baseline', () => {
    expect(minimumTouchTarget).toBeGreaterThanOrEqual(48);
    expect(primitivesSource).toContain('minHeight: 52');
    expect(primitivesSource).toContain('minHeight: minimumTouchTarget');
    expect(appSource).toContain('minHeight: minimumTouchTarget');
  });

  it('keeps system text scaling enabled and layouts structurally reflow-friendly at 200%', () => {
    const allUi = runtimeSources('src/ui').join('\n') + appSource;
    expect(allUi).not.toContain('allowFontScaling={false}');
    expect(allUi).not.toContain('maxFontSizeMultiplier');
    expect(allUi).not.toContain('ellipsizeMode=');
    expect(allUi).not.toContain('numberOfLines=');
    expect(primitivesSource).toContain("flexWrap: 'wrap'");
    expect(appSource).toContain("flexWrap: 'wrap'");
    expect(type.body.fontSize * 2).toBe(34);
    expect(type.scripture.fontSize * 2).toBe(40);
  });

  it('makes selected states multichannel rather than color-only', () => {
    expect(primitivesSource).toContain('accessibilityState={{ selected }}');
    expect(primitivesSource).toContain('✓');
    expect(appSource).toContain('accessibilityState={{ selected }}');
    expect(appSource).toContain('tabIndicator');
    expect(readerSource).toContain('accessibilityState={{ selected }}');
    expect(readerSource).toContain('seleccionado');
  });

  it.each([
    ['light selected indicator', themes.light.selectionBorder, themes.light.surface],
    ['dark selected indicator', themes.dark.selectionBorder, themes.dark.surface],
    ['light warning banner', themes.light.warningText, themes.light.warningBg],
    ['dark warning banner', themes.dark.warningText, themes.dark.warningBg],
    ['light error banner', themes.light.errorText, themes.light.errorBg],
    ['dark error banner', themes.dark.errorText, themes.dark.errorBg],
    ['light info banner', themes.light.infoText, themes.light.infoBg],
    ['dark info banner', themes.dark.infoText, themes.dark.infoBg],
  ])('%s meets essential contrast', (_name, foreground, background) => {
    const ratio = contrast(foreground, background);
    expect(ratio).toBeGreaterThanOrEqual(_name.includes('indicator') ? 3 : 4.5);
  });

  it('preserves the exact 100-topic A-Z contract and free-form separation', () => {
    expect(topicCatalog).toHaveLength(100);
    expect(new Set(topicCatalog.map(topic => topic.id)).size).toBe(100);
    expect(topicCatalog.every(topic => /^[A-Z]$/.test(normalizeTopicText(topic.label).charAt(0).toUpperCase()))).toBe(true);
    expect(searchSource).toContain("'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')");
    expect(classifyQuery('amor')).toBe('word');
    expect(classifyQuery('"amor"')).toBe('phrase');
  });

  it('introduces no network dependency or essential motion into the local core', () => {
    const runtime = [appSource, ...runtimeSources('src')].join('\n');
    expect(runtime).not.toMatch(/\bfetch\s*\(/);
    expect(runtime).not.toMatch(/\bXMLHttpRequest\b/);
    expect(runtime).not.toMatch(/\baxios\b/);
    expect(visualMotionPolicy.essentialStateDependsOnMotion).toBe(false);
    expect(visualMotionPolicy.animationsIntroduced).toBe(false);
    expect(appSource).toContain("require('./assets/data/bible-topic-explorer.db')");
  });
});

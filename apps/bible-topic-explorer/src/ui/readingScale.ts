const MIN_READING_SCALE = 0.8;
const MAX_READING_SCALE = 1.6;

export function clampReadingScale(value: number) {
  if (!Number.isFinite(value)) return 1;
  return Math.min(MAX_READING_SCALE, Math.max(MIN_READING_SCALE, value));
}

export function scaledScriptureMetrics(value: number) {
  const scale = clampReadingScale(value);
  return {
    fontSize: 20 * scale,
    lineHeight: 32 * scale,
  };
}

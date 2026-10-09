import { describe, expect, it } from 'vitest';
import { actionVisuals, statusVisuals } from './visualSemantics';
import { themes } from './theme';

describe('D02 shared component semantics', () => {
  it('keeps primary, secondary and tertiary actions visually distinct', () => {
    const theme = themes.lavender;
    expect(actionVisuals(theme, 'primary')).toMatchObject({ backgroundColor: theme.primary, color: theme.onPrimary });
    expect(actionVisuals(theme, 'secondary')).toMatchObject({ backgroundColor: theme.surfaceSoft, color: theme.text });
    expect(actionVisuals(theme, 'tertiary')).toMatchObject({ backgroundColor: 'transparent', color: theme.primaryText });
  });

  it.each(['success', 'warning', 'error', 'info'] as const)('provides a non-empty marker for %s status', kind => {
    const state = statusVisuals(themes.lavender, kind);
    expect(state.marker.length).toBeGreaterThan(0);
    expect(state.backgroundColor).not.toBe(state.color);
  });
});

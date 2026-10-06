import { describe, expect, it } from 'vitest';
import { uxCopy, visualMotionPolicy } from './uxCopy';

describe('D07 autonomy-safe feedback', () => {
  it('avoids coercive streak, guilt and religious-pressure wording', () => {
    const corpus = Object.values(uxCopy).join(' ').toLocaleLowerCase('es');
    for (const forbidden of ['racha', 'fallaste', 'culpa', 'atrasado', 'debes leer', 'no olvides a dios']) {
      expect(corpus).not.toContain(forbidden);
    }
  });

  it('does not make essential state depend on motion', () => {
    expect(visualMotionPolicy).toEqual({ animationsIntroduced: false, essentialStateDependsOnMotion: false });
  });
});

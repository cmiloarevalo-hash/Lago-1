import { describe, expect, it } from 'vitest';
import { APP_NAME, MVP_TOPICS } from './smoke';

describe('I01 scaffold', () => {
  it('keeps the frozen app identity and MVP topics', () => {
    expect(APP_NAME).toBe('Bible Topic Explorer');
    expect(MVP_TOPICS).toEqual(['amor', 'perdón', 'misericordia']);
  });
});

import { describe, it, expect } from 'vitest';
import { simpleCompression } from './exercise';

describe('simpleCompression', () => {
  it('kompresuje powtórzenia', () => { expect(simpleCompression('aaabbc')).toBe('a3b2c1'); });
  it('bez powtórzeń zwraca oryginał', () => { expect(simpleCompression('abc')).toBe('abc'); });
  it('pusty string', () => { expect(simpleCompression('')).toBe(''); });
  it('same powtórzenia', () => { expect(simpleCompression('aaaa')).toBe('a4'); });
});

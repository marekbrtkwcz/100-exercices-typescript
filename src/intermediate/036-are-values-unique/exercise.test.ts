import { describe, it, expect } from 'vitest';
import { areValuesUnique } from './exercise';

describe('areValuesUnique', () => {
  it('unikalne', () => { expect(areValuesUnique([1, 2, 3])).toBe(true); });
  it('duplikat', () => { expect(areValuesUnique([1, 2, 1])).toBe(false); });
  it('pusta = true', () => { expect(areValuesUnique([])).toBe(true); });
  it('stringi', () => { expect(areValuesUnique(['a', 'b', 'a'])).toBe(false); });
});

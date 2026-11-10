import { describe, it, expect } from 'vitest';
import { getAddN } from './exercise';

describe('getAddN', () => {
  it('dodaje n', () => { expect(getAddN(10)(5)).toBe(15); });
  it('n = 0', () => { expect(getAddN(0)(5)).toBe(5); });
  it('n ujemne', () => { expect(getAddN(-3)(10)).toBe(7); });
});

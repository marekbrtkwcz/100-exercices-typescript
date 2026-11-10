import { describe, it, expect } from 'vitest';
import { getDoubleN } from './exercise';

describe('getDoubleN', () => {
  it('n=3, x=1 → 8', () => { expect(getDoubleN(3)(1)).toBe(8); });
  it('n=0 → x bez zmian', () => { expect(getDoubleN(0)(5)).toBe(5); });
  it('n=1, x=3 → 6', () => { expect(getDoubleN(1)(3)).toBe(6); });
});

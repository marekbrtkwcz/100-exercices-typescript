import { describe, it, expect } from 'vitest';
import { toDecimal } from './exercise';

describe('toDecimal', () => {
  it('2 miejsca', () => { expect(toDecimal(3.14159, 2)).toBe(3.14); });
  it('0 miejsc = liczba całkowita', () => { expect(toDecimal(3.7, 0)).toBe(4); });
  it('3 miejsca', () => { expect(toDecimal(1.23456, 3)).toBe(1.235); });
});

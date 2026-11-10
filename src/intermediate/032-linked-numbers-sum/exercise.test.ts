import { describe, it, expect } from 'vitest';
import { linkedNumbersSum } from './exercise';

describe('linkedNumbersSum', () => {
  it('sumuje zagnieżdżony obiekt', () => { expect(linkedNumbersSum({ a: 1, b: { c: 2, d: 3 } })).toBe(6); });
  it('płaski obiekt', () => { expect(linkedNumbersSum({ a: 5, b: 10 })).toBe(15); });
  it('pusty obiekt = 0', () => { expect(linkedNumbersSum({})).toBe(0); });
});

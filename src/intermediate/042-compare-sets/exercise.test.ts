import { describe, it, expect } from 'vitest';
import { compareSets } from './exercise';

describe('compareSets', () => {
  it('porównuje zbiory', () => {
    expect(compareSets(new Set([1, 2, 3]), new Set([2, 3, 4]))).toEqual({
      onlyInA: [1],
      onlyInB: [4],
      common: [2, 3],
    });
  });
  it('identyczne zbiory', () => {
    expect(compareSets(new Set([1]), new Set([1]))).toEqual({ onlyInA: [], onlyInB: [], common: [1] });
  });
});

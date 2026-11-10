import { describe, it, expect } from 'vitest';
import { extractElementsBetweenPositions } from './exercise';

describe('extractElementsBetweenPositions', () => {
  it('wycinek od start do end (wyłącznie)', () => {
    expect(extractElementsBetweenPositions([1, 2, 3, 4, 5], 1, 4)).toEqual([2, 3, 4]);
  });
  it('od początku', () => {
    expect(extractElementsBetweenPositions([1, 2, 3], 0, 2)).toEqual([1, 2]);
  });
  it('pusty wycinek', () => {
    expect(extractElementsBetweenPositions([1, 2, 3], 2, 2)).toEqual([]);
  });
});

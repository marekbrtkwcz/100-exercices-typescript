import { describe, it, expect } from 'vitest';
import { everyNPositions } from './exercise';

describe('everyNPositions', () => {
  it('co 2 element', () => { expect(everyNPositions([1, 2, 3, 4, 5, 6], 2)).toEqual([1, 3, 5]); });
  it('co 3 element', () => { expect(everyNPositions(['a', 'b', 'c', 'd'], 3)).toEqual(['a', 'd']); });
  it('n = 1 zwraca wszystko', () => { expect(everyNPositions([1, 2, 3], 1)).toEqual([1, 2, 3]); });
});

import { describe, it, expect } from 'vitest';
import { ascendingSplit } from './exercise';

describe('ascendingSplit', () => {
  it('dzieli na rosnące ciągi', () => {
    expect(ascendingSplit([1, 2, 3, 1, 2, 5, 2])).toEqual([[1, 2, 3], [1, 2, 5], [2]]);
  });
  it('cała posortowana = jedna grupa', () => { expect(ascendingSplit([1, 2, 3])).toEqual([[1, 2, 3]]); });
  it('pusta tablica', () => { expect(ascendingSplit([])).toEqual([]); });
});

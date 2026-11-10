import { describe, it, expect } from 'vitest';
import { mergeSortedArrays } from './exercise';

describe('mergeSortedArrays', () => {
  it('scala posortowane', () => { expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]); });
  it('jedna pusta', () => { expect(mergeSortedArrays([], [1, 2])).toEqual([1, 2]); });
  it('obie puste', () => { expect(mergeSortedArrays([], [])).toEqual([]); });
  it('z duplikatami', () => { expect(mergeSortedArrays([1, 2], [2, 3])).toEqual([1, 2, 2, 3]); });
});

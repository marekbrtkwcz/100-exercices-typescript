import { describe, it, expect } from 'vitest';
import { diffArrays } from './exercise';

describe('diffArrays', () => {
  it('różnica tablic', () => { expect(diffArrays([1, 2, 3, 4], [2, 4])).toEqual([1, 3]); });
  it('b puste = zwraca a', () => { expect(diffArrays([1, 2], [])).toEqual([1, 2]); });
  it('a puste = pusta', () => { expect(diffArrays([], [1])).toEqual([]); });
  it('stringi', () => { expect(diffArrays(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']); });
});

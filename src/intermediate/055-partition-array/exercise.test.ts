import { describe, it, expect } from 'vitest';
import { partitionArray } from './exercise';

describe('partitionArray', () => {
  it('dzieli na parzyste i nieparzyste', () => {
    expect(partitionArray([1, 2, 3, 4], x => x % 2 === 0)).toEqual([[2, 4], [1, 3]]);
  });
  it('pusta tablica', () => { expect(partitionArray([], () => true)).toEqual([[], []]); });
  it('wszystkie spełniają', () => {
    expect(partitionArray([2, 4], x => x > 0)).toEqual([[2, 4], []]);
  });
});

import { describe, it, expect } from 'vitest';
import { customArraySort } from './exercise';

describe('customArraySort', () => {
  it('sortuje rosnąco', () => { expect(customArraySort([3, 1, 2])).toEqual([1, 2, 3]); });
  it('już posortowana', () => { expect(customArraySort([1, 2, 3])).toEqual([1, 2, 3]); });
  it('nie modyfikuje oryginału', () => {
    const arr = [3, 1, 2];
    customArraySort(arr);
    expect(arr).toEqual([3, 1, 2]);
  });
  it('ujemne liczby', () => { expect(customArraySort([0, -1, 5, -10])).toEqual([-10, -1, 0, 5]); });
});

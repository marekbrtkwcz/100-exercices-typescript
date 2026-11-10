import { describe, it, expect } from 'vitest';
import { doubleNumbers } from './exercise';

describe('doubleNumbers', () => {
  it('podwaja liczby', () => { expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]); });
  it('pusta tablica', () => { expect(doubleNumbers([])).toEqual([]); });
  it('nie modyfikuje oryginału', () => {
    const arr = [1, 2];
    doubleNumbers(arr);
    expect(arr).toEqual([1, 2]);
  });
});

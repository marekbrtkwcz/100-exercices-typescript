import { describe, it, expect } from 'vitest';
import { sorted } from './exercise';

describe('sorted', () => {
  it('domyślnie rosnąco', () => { expect(sorted([3, 1, 2])()).toEqual([1, 2, 3]); });
  it('z komparatorem malejąco', () => { expect(sorted([3, 1, 2])((a, b) => b - a)).toEqual([3, 2, 1]); });
  it('nie modyfikuje oryginału', () => {
    const arr = [3, 1, 2];
    sorted(arr)();
    expect(arr).toEqual([3, 1, 2]);
  });
});

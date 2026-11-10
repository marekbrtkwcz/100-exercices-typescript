import { describe, it, expect, vi } from 'vitest';
import { reverseForEach } from './exercise';

describe('reverseForEach', () => {
  it('iteruje od końca', () => {
    const fn = vi.fn();
    reverseForEach([1, 2, 3], fn);
    expect(fn.mock.calls.map(c => c[0])).toEqual([3, 2, 1]);
  });
  it('przekazuje indeks', () => {
    const fn = vi.fn();
    reverseForEach(['a', 'b', 'c'], fn);
    expect(fn.mock.calls.map(c => c[1])).toEqual([2, 1, 0]);
  });
  it('pusta tablica nie wywołuje fn', () => {
    const fn = vi.fn();
    reverseForEach([], fn);
    expect(fn).not.toHaveBeenCalled();
  });
});

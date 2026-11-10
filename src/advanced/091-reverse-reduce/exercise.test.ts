import { describe, it, expect, vi } from 'vitest';
import { reverseReduce } from './exercise';

describe('reverseReduce', () => {
  it('suma działa', () => {
    expect(reverseReduce([1, 2, 3], (acc, x) => acc + x, 0)).toBe(6);
  });
  it('kolejność od końca (stringi)', () => {
    expect(reverseReduce(['a', 'b', 'c'], (acc, x) => acc + x, '')).toBe('cba');
  });
  it('przekazuje indeks', () => {
    const fn = vi.fn((acc: string, _x: number, i: number) => acc + i);
    reverseReduce([10, 20, 30], fn, '');
    expect(fn.mock.calls.map(c => c[2])).toEqual([2, 1, 0]);
  });
  it('pusta tablica = initial', () => {
    expect(reverseReduce([], (acc: number, x: number) => acc + x, 99)).toBe(99);
  });
});

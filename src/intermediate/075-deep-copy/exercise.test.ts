import { describe, it, expect } from 'vitest';
import { deepCopy } from './exercise';

describe('deepCopy', () => {
  it('płaski obiekt', () => {
    const o = { a: 1, b: 'x' };
    const c = deepCopy(o);
    expect(c).toEqual(o);
    expect(c).not.toBe(o);
  });
  it('zagnieżdżony niezależny', () => {
    const o = { a: 1, n: { b: 2 } };
    const c = deepCopy(o);
    c.n.b = 99;
    expect(o.n.b).toBe(2);
  });
  it('tablice', () => {
    const o = [1, [2, 3]];
    const c = deepCopy(o);
    (c[1] as number[]).push(9);
    expect(o[1]).toEqual([2, 3]);
  });
  it('daty', () => {
    const o = { d: new Date('2024-01-01') };
    const c = deepCopy(o);
    expect(c.d).toEqual(o.d);
    expect(c.d).not.toBe(o.d);
  });
  it('wartości proste', () => {
    expect(deepCopy(42)).toBe(42);
    expect(deepCopy(null)).toBe(null);
  });
});

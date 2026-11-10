import { describe, it, expect } from 'vitest';
import { pickNested } from './exercise';

describe('pickNested', () => {
  it('pobiera zagnieżdżoną wartość', () => {
    expect(pickNested({ a: { b: { c: 42 } } }, 'a.b.c')).toBe(42);
  });
  it('płaska ścieżka', () => {
    expect(pickNested({ x: 'hello' }, 'x')).toBe('hello');
  });
  it('nieistniejąca ścieżka = undefined', () => {
    expect(pickNested({ a: {} }, 'a.b.c')).toBeUndefined();
  });
});

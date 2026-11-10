import { describe, it, expect, vi } from 'vitest';
import { cacheGetResult } from './exercise';

describe('cacheGetResult', () => {
  it('cachuje wyniki dla tych samych argumentów', () => {
    const fn = vi.fn((x: number) => x * 2);
    const cached = cacheGetResult(fn);
    expect(cached(5)).toBe(10);
    expect(cached(5)).toBe(10);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('różne argumenty = nowe wywołanie', () => {
    const fn = vi.fn((x: number) => x * 2);
    const cached = cacheGetResult(fn);
    cached(1); cached(2);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});

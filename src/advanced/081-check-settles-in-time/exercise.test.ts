import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { checkSettlesInTime } from './exercise';

describe('checkSettlesInTime', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('promise resolvuje w czasie → true', async () => {
    const p = new Promise<number>((res) => setTimeout(() => res(1), 50));
    const resultPromise = checkSettlesInTime(p, 100);
    await vi.advanceTimersByTimeAsync(100);
    expect(await resultPromise).toBe(true);
  });

  it('promise za wolny → false', async () => {
    const p = new Promise<number>((res) => setTimeout(() => res(1), 200));
    const resultPromise = checkSettlesInTime(p, 100);
    await vi.advanceTimersByTimeAsync(100);
    expect(await resultPromise).toBe(false);
  });
});

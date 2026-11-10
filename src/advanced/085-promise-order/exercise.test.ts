import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { promiseOrder } from './exercise';

describe('promiseOrder', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('wyniki w kolejności zakończenia', async () => {
    const p1 = new Promise<string>((res) => setTimeout(() => res('p1'), 100));
    const p2 = new Promise<string>((res) => setTimeout(() => res('p2'), 50));
    const resultPromise = promiseOrder([p1, p2]);
    await vi.advanceTimersByTimeAsync(150);
    expect(await resultPromise).toEqual(['p2', 'p1']);
  });

  it('pusta tablica', async () => {
    expect(await promiseOrder([])).toEqual([]);
  });
});

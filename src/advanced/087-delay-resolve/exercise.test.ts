import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { delayResolve } from './exercise';

describe('delayResolve', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('resolvuje po czasie', async () => {
    const p = delayResolve('hello', 100);
    vi.advanceTimersByTime(100);
    expect(await p).toBe('hello');
  });

  it('nie resolvuje przed czasem', async () => {
    let resolved = false;
    delayResolve('x', 100).then(() => { resolved = true; });
    vi.advanceTimersByTime(50);
    await Promise.resolve();
    expect(resolved).toBe(false);
  });
});

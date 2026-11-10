import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { throttle } from './exercise';

describe('throttle', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('pierwsze wywołanie natychmiast', () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t();
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('kolejne w oknie ignorowane', () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t(); t(); t();
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('po czasie można znów', () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t();
    vi.advanceTimersByTime(100);
    t();
    expect(fn).toHaveBeenCalledTimes(2);
  });
  it('przekazuje argumenty pierwszego wywołania', () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t('hello');
    expect(fn).toHaveBeenCalledWith('hello');
  });
});

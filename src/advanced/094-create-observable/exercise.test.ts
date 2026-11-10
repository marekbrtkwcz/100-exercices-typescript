import { describe, it, expect, vi } from 'vitest';
import { createObservable } from './exercise';

describe('createObservable', () => {
  it('subskrybent dostaje wartości', () => {
    const obs = createObservable<number>();
    const fn = vi.fn();
    obs.subscribe(fn);
    obs.next(1); obs.next(2);
    expect(fn.mock.calls).toEqual([[1], [2]]);
  });
  it('unsubscribe przestaje otrzymywać', () => {
    const obs = createObservable<number>();
    const fn = vi.fn();
    const unsub = obs.subscribe(fn);
    obs.next(1);
    unsub();
    obs.next(2);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('wielu subskrybentów', () => {
    const obs = createObservable<string>();
    const f1 = vi.fn(); const f2 = vi.fn();
    obs.subscribe(f1); obs.subscribe(f2);
    obs.next('x');
    expect(f1).toHaveBeenCalledWith('x');
    expect(f2).toHaveBeenCalledWith('x');
  });
});

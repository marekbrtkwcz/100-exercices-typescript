import { describe, it, expect, vi } from 'vitest';
import { createPubSub } from './exercise';

describe('createPubSub', () => {
  it('publish wywołuje subskrybentów danego eventu', () => {
    const ps = createPubSub();
    const fn = vi.fn();
    ps.subscribe('click', fn);
    ps.publish('click', { x: 1 });
    expect(fn).toHaveBeenCalledWith({ x: 1 });
  });
  it('różne eventy są niezależne', () => {
    const ps = createPubSub();
    const fnClick = vi.fn(); const fnHover = vi.fn();
    ps.subscribe('click', fnClick);
    ps.subscribe('hover', fnHover);
    ps.publish('click', null);
    expect(fnClick).toHaveBeenCalledTimes(1);
    expect(fnHover).not.toHaveBeenCalled();
  });
  it('unsubscribe działa', () => {
    const ps = createPubSub();
    const fn = vi.fn();
    const unsub = ps.subscribe('e', fn);
    unsub();
    ps.publish('e', null);
    expect(fn).not.toHaveBeenCalled();
  });
});

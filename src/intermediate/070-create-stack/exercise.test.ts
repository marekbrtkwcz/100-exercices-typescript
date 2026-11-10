import { describe, it, expect } from 'vitest';
import { createStack } from './exercise';

describe('createStack', () => {
  it('LIFO — ostatni wchodzi, pierwszy wychodzi', () => {
    const s = createStack<number>();
    s.push(1); s.push(2); s.push(3);
    expect(s.pop()).toBe(3);
    expect(s.pop()).toBe(2);
  });
  it('size i isEmpty', () => {
    const s = createStack<string>();
    expect(s.isEmpty()).toBe(true);
    s.push('x');
    expect(s.size()).toBe(1);
    expect(s.isEmpty()).toBe(false);
  });
  it('peek nie usuwa', () => {
    const s = createStack<number>();
    s.push(7);
    expect(s.peek()).toBe(7);
    expect(s.size()).toBe(1);
  });
  it('pop na pustym = undefined', () => {
    expect(createStack().pop()).toBeUndefined();
  });
});

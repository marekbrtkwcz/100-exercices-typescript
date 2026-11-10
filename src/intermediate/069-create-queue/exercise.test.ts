import { describe, it, expect } from 'vitest';
import { createQueue } from './exercise';

describe('createQueue', () => {
  it('FIFO — pierwszy wchodzi, pierwszy wychodzi', () => {
    const q = createQueue<number>();
    q.enqueue(1); q.enqueue(2); q.enqueue(3);
    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe(2);
  });
  it('size i isEmpty', () => {
    const q = createQueue<string>();
    expect(q.isEmpty()).toBe(true);
    q.enqueue('a');
    expect(q.isEmpty()).toBe(false);
    expect(q.size()).toBe(1);
  });
  it('peek nie usuwa', () => {
    const q = createQueue<number>();
    q.enqueue(42);
    expect(q.peek()).toBe(42);
    expect(q.size()).toBe(1);
  });
  it('dequeue na pustej = undefined', () => {
    expect(createQueue().dequeue()).toBeUndefined();
  });
});

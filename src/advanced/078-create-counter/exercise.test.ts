import { describe, it, expect } from 'vitest';
import { createCounter } from './exercise';

describe('createCounter', () => {
  it('liczy od 1', () => {
    const c = createCounter();
    expect(c()).toBe(1);
    expect(c()).toBe(2);
    expect(c()).toBe(3);
  });
  it('start niestandardowy', () => {
    const c = createCounter(10);
    expect(c()).toBe(11);
    expect(c()).toBe(12);
  });
  it('dwa liczniki są niezależne', () => {
    const a = createCounter();
    const b = createCounter();
    a(); a();
    expect(b()).toBe(1);
  });
});

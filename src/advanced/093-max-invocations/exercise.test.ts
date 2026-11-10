import { describe, it, expect } from 'vitest';
import { maxInvocations } from './exercise';

describe('maxInvocations', () => {
  it('do max działa normalnie', () => {
    const f = maxInvocations((x: number) => x + 1, 2);
    expect(f(1)).toBe(2);
    expect(f(2)).toBe(3);
  });
  it('powyżej max rzuca błąd', () => {
    const f = maxInvocations(() => 'ok', 2);
    f(); f();
    expect(() => f()).toThrow();
  });
  it('max=0 od razu rzuca', () => {
    const f = maxInvocations(() => 'ok', 0);
    expect(() => f()).toThrow();
  });
});

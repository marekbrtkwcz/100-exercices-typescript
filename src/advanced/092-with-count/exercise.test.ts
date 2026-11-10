import { describe, it, expect } from 'vitest';
import { withCount } from './exercise';

describe('withCount', () => {
  it('zlicza wywołania', () => {
    const f = withCount((x: number) => x * 2);
    expect(f.callCount).toBe(0);
    f(1); f(2);
    expect(f.callCount).toBe(2);
  });
  it('zwraca wynik oryginalnej funkcji', () => {
    const f = withCount((x: number) => x + 10);
    expect(f(5)).toBe(15);
    expect(f.callCount).toBe(1);
  });
});

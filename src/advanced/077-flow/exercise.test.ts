import { describe, it, expect } from 'vitest';
import { flow } from './exercise';

describe('flow', () => {
  it('składa funkcje od lewej', () => {
    const f = flow((x: number) => x + 1, (x: number) => x * 2);
    expect(f(3)).toBe(8); // (3+1)*2
  });
  it('trzy funkcje', () => {
    const f = flow(
      (x: number) => x + 1,
      (x: number) => x * 2,
      (x: number) => x - 3
    );
    expect(f(5)).toBe(9); // ((5+1)*2)-3
  });
  it('puste flow = identyczność', () => {
    const f = flow<number>();
    expect(f(42)).toBe(42);
  });
});

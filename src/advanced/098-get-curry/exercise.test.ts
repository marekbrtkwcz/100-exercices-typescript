import { describe, it, expect } from 'vitest';
import { getCurry } from './exercise';

const add3 = (a: number, b: number, c: number) => a + b + c;

describe('getCurry', () => {
  it('pojedyncze argumenty', () => { expect(getCurry(add3)(1)(2)(3)).toBe(6); });
  it('mieszane', () => {
    expect(getCurry(add3)(1, 2)(3)).toBe(6);
    expect(getCurry(add3)(1)(2, 3)).toBe(6);
  });
  it('wszystkie od razu', () => { expect(getCurry(add3)(1, 2, 3)).toBe(6); });
  it('funkcja 2-argumentowa', () => {
    const mul = (a: number, b: number) => a * b;
    expect(getCurry(mul)(3)(4)).toBe(12);
    expect(getCurry(mul)(3, 4)).toBe(12);
  });
});

import { describe, it, expect } from 'vitest';
import { currySum } from './exercise';

describe('currySum', () => {
  it('wszystkie od razu + puste wywołanie', () => {
    expect(currySum(1, 2, 3)()).toBe(6);
  });
  it('pojedyncze argumenty', () => {
    expect(currySum(1)(2)(3)()).toBe(6);
  });
  it('mieszane', () => {
    expect(currySum(1, 2)(3)()).toBe(6);
  });
  it('bez argumentów od razu = 0', () => {
    expect(currySum()()).toBe(0);
  });
});

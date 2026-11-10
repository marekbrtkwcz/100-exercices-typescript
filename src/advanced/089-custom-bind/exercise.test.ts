import { describe, it, expect } from 'vitest';
import { customBind } from './exercise';

describe('customBind', () => {
  it('binduje argumenty', () => {
    const add = (a: number, b: number) => a + b;
    const add1 = customBind(add, null, 1);
    expect(add1(2)).toBe(3);
  });
  it('binduje this', () => {
    const obj = { x: 10, getX() { return this.x; } };
    const bound = customBind(obj.getX, obj);
    expect(bound()).toBe(10);
  });
  it('bez bound args działa normalnie', () => {
    const f = (a: number, b: number) => a * b;
    expect(customBind(f, null)(3, 4)).toBe(12);
  });
});

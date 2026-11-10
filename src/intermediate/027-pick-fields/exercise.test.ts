import { describe, it, expect } from 'vitest';
import { pickFields } from './exercise';

describe('pickFields', () => {
  it('wybiera pola', () => { expect(pickFields({ a: 1, b: 'x', c: true }, ['a', 'c'])).toEqual({ a: 1, c: true }); });
  it('pojedynczy klucz', () => { expect(pickFields({ name: 'Jan', age: 30 }, ['name'])).toEqual({ name: 'Jan' }); });
  it('puste klucze', () => { expect(pickFields({ a: 1, b: 2 }, [])).toEqual({}); });
  it('nie modyfikuje oryginału', () => {
    const o = { a: 1, b: 2 };
    pickFields(o, ['a']);
    expect(o).toEqual({ a: 1, b: 2 });
  });
});

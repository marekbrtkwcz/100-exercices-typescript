import { describe, it, expect } from 'vitest';
import { flipObject } from './exercise';

describe('flipObject', () => {
  it('zamienia klucze z wartościami', () => { expect(flipObject({ a: 'x', b: 'y' })).toEqual({ x: 'a', y: 'b' }); });
  it('pusty obiekt', () => { expect(flipObject({})).toEqual({}); });
});

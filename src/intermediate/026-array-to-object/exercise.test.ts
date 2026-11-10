import { describe, it, expect } from 'vitest';
import { arrayToObject } from './exercise';

describe('arrayToObject', () => {
  it('zamienia na obiekt z indeksami', () => { expect(arrayToObject(['a', 'b', 'c'])).toEqual({ a: 0, b: 1, c: 2 }); });
  it('pojedynczy element', () => { expect(arrayToObject(['x'])).toEqual({ x: 0 }); });
  it('pusta tablica', () => { expect(arrayToObject([])).toEqual({}); });
});

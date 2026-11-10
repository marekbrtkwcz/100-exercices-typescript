import { describe, it, expect } from 'vitest';
import { removeFirstAndLast } from './exercise';

describe('removeFirstAndLast', () => {
  it('usuwa pierwszy i ostatni', () => { expect(removeFirstAndLast([1, 2, 3, 4])).toEqual([2, 3]); });
  it('dwa elementy = pusta', () => { expect(removeFirstAndLast([1, 2])).toEqual([]); });
  it('jeden element = pusta', () => { expect(removeFirstAndLast([1])).toEqual([]); });
  it('pusta = pusta', () => { expect(removeFirstAndLast([])).toEqual([]); });
});

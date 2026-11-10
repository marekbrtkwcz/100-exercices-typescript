import { describe, it, expect } from 'vitest';
import { rotateArray } from './exercise';

describe('rotateArray', () => {
  it('w prawo o 1', () => { expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]); });
  it('w lewo o 1', () => { expect(rotateArray([1, 2, 3, 4], -1)).toEqual([2, 3, 4, 1]); });
  it('o długość tablicy = bez zmian', () => { expect(rotateArray([1, 2, 3], 3)).toEqual([1, 2, 3]); });
  it('pusta tablica', () => { expect(rotateArray([], 5)).toEqual([]); });
});

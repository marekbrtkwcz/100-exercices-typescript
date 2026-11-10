import { describe, it, expect } from 'vitest';
import { averageOf4Numbers } from './exercise';

describe('averageOf4Numbers', () => {
  it('średnia z 1,2,3,4', () => { expect(averageOf4Numbers(1, 2, 3, 4)).toBe(2.5); });
  it('średnia z 10,20,30,40', () => { expect(averageOf4Numbers(10, 20, 30, 40)).toBe(25); });
  it('liczby ujemne', () => { expect(averageOf4Numbers(-10, 0, 10, 20)).toBe(5); });
  it('wszystkie takie same', () => { expect(averageOf4Numbers(7, 7, 7, 7)).toBe(7); });
});

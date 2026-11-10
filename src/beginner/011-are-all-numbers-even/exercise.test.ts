import { describe, it, expect } from 'vitest';
import { areAllNumbersEven } from './exercise';

describe('areAllNumbersEven', () => {
  it('wszystkie parzyste', () => { expect(areAllNumbersEven([2, 4, 6])).toBe(true); });
  it('jedna nieparzysta', () => { expect(areAllNumbersEven([2, 3, 4])).toBe(false); });
  it('pusta tablica = true', () => { expect(areAllNumbersEven([])).toBe(true); });
  it('zera są parzyste', () => { expect(areAllNumbersEven([0, 0])).toBe(true); });
  it('ujemne parzyste', () => { expect(areAllNumbersEven([-2, -4])).toBe(true); });
});

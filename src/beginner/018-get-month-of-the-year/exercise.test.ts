import { describe, it, expect } from 'vitest';
import { getMonthOfTheYear } from './exercise';

describe('getMonthOfTheYear', () => {
  it('styczeń', () => { expect(getMonthOfTheYear(new Date('2024-01-15'))).toBe('styczeń'); });
  it('czerwiec', () => { expect(getMonthOfTheYear(new Date('2024-06-01'))).toBe('czerwiec'); });
  it('grudzień', () => { expect(getMonthOfTheYear(new Date('2024-12-31'))).toBe('grudzień'); });
});

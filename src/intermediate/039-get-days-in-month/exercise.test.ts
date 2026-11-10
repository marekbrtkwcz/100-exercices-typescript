import { describe, it, expect } from 'vitest';
import { getDaysInMonth } from './exercise';

describe('getDaysInMonth', () => {
  it('luty przestępny', () => { expect(getDaysInMonth(2024, 2)).toBe(29); });
  it('luty zwykły', () => { expect(getDaysInMonth(2023, 2)).toBe(28); });
  it('kwiecień = 30', () => { expect(getDaysInMonth(2024, 4)).toBe(30); });
  it('styczeń = 31', () => { expect(getDaysInMonth(2024, 1)).toBe(31); });
  it('luty 2100 nieprzestępny', () => { expect(getDaysInMonth(2100, 2)).toBe(28); });
});

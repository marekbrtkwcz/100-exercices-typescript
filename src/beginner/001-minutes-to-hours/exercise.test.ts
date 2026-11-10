import { describe, it, expect } from 'vitest';
import { minutesToHours } from './exercise';

describe('minutesToHours', () => {
  it('120 minut = 2 godziny', () => { expect(minutesToHours(120)).toBe(2); });
  it('90 minut = 1.5 godziny', () => { expect(minutesToHours(90)).toBe(1.5); });
  it('45 minut = 0.75 godziny', () => { expect(minutesToHours(45)).toBe(0.75); });
  it('0 minut = 0 godzin', () => { expect(minutesToHours(0)).toBe(0); });
  it('zaokrągla do 2 miejsc', () => { expect(minutesToHours(1)).toBeCloseTo(0.02, 2); });
});

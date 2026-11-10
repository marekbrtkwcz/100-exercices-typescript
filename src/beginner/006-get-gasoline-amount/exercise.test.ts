import { describe, it, expect } from 'vitest';
import { getGasolineAmount } from './exercise';

describe('getGasolineAmount', () => {
  it('100 km przy 8l/100km', () => { expect(getGasolineAmount(100, 8)).toBe(8); });
  it('50 km przy 8l/100km', () => { expect(getGasolineAmount(50, 8)).toBe(4); });
  it('zaokrągla w górę', () => { expect(getGasolineAmount(30, 8)).toBe(3); });
  it('0 km = 0 l', () => { expect(getGasolineAmount(0, 8)).toBe(0); });
});

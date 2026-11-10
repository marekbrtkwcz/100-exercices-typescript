import { describe, it, expect } from 'vitest';
import { getMaxMovingDistance } from './exercise';

describe('getMaxMovingDistance', () => {
  it('największy skok', () => { expect(getMaxMovingDistance([0, 5, 2, 10])).toBe(8); });
  it('ruch wstecz też się liczy', () => { expect(getMaxMovingDistance([10, 2])).toBe(8); });
  it('jedna pozycja = 0', () => { expect(getMaxMovingDistance([5])).toBe(0); });
  it('pusta tablica = 0', () => { expect(getMaxMovingDistance([])).toBe(0); });
});

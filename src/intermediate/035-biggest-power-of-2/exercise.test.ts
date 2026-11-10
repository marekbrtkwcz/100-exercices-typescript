import { describe, it, expect } from 'vitest';
import { biggestPowerOf2 } from './exercise';

describe('biggestPowerOf2', () => {
  it('10 → 8', () => { expect(biggestPowerOf2(10)).toBe(8); });
  it('16 → 16', () => { expect(biggestPowerOf2(16)).toBe(16); });
  it('1 → 1', () => { expect(biggestPowerOf2(1)).toBe(1); });
  it('100 → 64', () => { expect(biggestPowerOf2(100)).toBe(64); });
});

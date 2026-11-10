import { describe, it, expect } from 'vitest';
import { halfAndHalf } from './exercise';

describe('halfAndHalf', () => {
  it('nieparzysta długość', () => { expect(halfAndHalf('hello')).toEqual(['hel', 'lo']); });
  it('parzysta długość', () => { expect(halfAndHalf('abcd')).toEqual(['ab', 'cd']); });
  it('pusty string', () => { expect(halfAndHalf('')).toEqual(['', '']); });
  it('jeden znak', () => { expect(halfAndHalf('x')).toEqual(['x', '']); });
});

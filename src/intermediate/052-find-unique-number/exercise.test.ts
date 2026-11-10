import { describe, it, expect } from 'vitest';
import { findUniqueNumber } from './exercise';

describe('findUniqueNumber', () => {
  it('znajduje unikalną', () => { expect(findUniqueNumber([1, 2, 1, 3, 2])).toBe(3); });
  it('inna kolejność', () => { expect(findUniqueNumber([4, 4, 7, 5, 5])).toBe(7); });
  it('pojedynczy element', () => { expect(findUniqueNumber([9])).toBe(9); });
});

import { describe, it, expect } from 'vitest';
import { isSorted } from './exercise';

describe('isSorted', () => {
  it('posortowana', () => { expect(isSorted([1, 2, 3, 4])).toBe(true); });
  it('nieposortowana', () => { expect(isSorted([1, 3, 2])).toBe(false); });
  it('równe elementy ok', () => { expect(isSorted([5, 5, 5])).toBe(true); });
  it('pusta = true', () => { expect(isSorted([])).toBe(true); });
  it('pojedynczy element', () => { expect(isSorted([42])).toBe(true); });
});

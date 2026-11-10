import { describe, it, expect } from 'vitest';
import { max5 } from './exercise';

describe('max5', () => {
  it('zwraca max', () => { expect(max5(1, 5, 3, 2, 4)).toBe(5); });
  it('ujemne liczby', () => { expect(max5(-1, -5, -3, -2, -4)).toBe(-1); });
  it('wszystkie równe', () => { expect(max5(3, 3, 3, 3, 3)).toBe(3); });
  it('pierwsza największa', () => { expect(max5(100, 1, 2, 3, 4)).toBe(100); });
  it('ostatnia największa', () => { expect(max5(1, 2, 3, 4, 100)).toBe(100); });
});

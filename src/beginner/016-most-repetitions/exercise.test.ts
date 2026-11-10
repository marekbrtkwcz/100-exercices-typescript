import { describe, it, expect } from 'vitest';
import { mostRepetitions } from './exercise';

describe('mostRepetitions', () => {
  it('znajduje najczęstszy', () => { expect(mostRepetitions(['a', 'b', 'a', 'c', 'b', 'a'])).toBe('a'); });
  it('remis zwraca pierwszy', () => { expect(mostRepetitions(['x', 'y'])).toBe('x'); });
  it('pojedynczy element', () => { expect(mostRepetitions(['z'])).toBe('z'); });
});

import { describe, it, expect } from 'vitest';
import { getBusinessAddress } from './exercise';

describe('getBusinessAddress', () => {
  it('pełny adres', () => {
    expect(getBusinessAddress({ address: { street: 'Marszałkowska 1', city: 'Warszawa', country: 'Polska' } }))
      .toBe('Marszałkowska 1, Warszawa, Polska');
  });
  it('brak ulicy', () => {
    expect(getBusinessAddress({ address: { city: 'Warszawa', country: 'Polska' } }))
      .toBe('Warszawa, Polska');
  });
  it('brak adresu', () => { expect(getBusinessAddress({})).toBe('Unknown'); });
  it('pusty adres', () => { expect(getBusinessAddress({ address: {} })).toBe('Unknown'); });
});

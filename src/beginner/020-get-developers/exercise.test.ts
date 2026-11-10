import { describe, it, expect } from 'vitest';
import { getDevelopers } from './exercise';

describe('getDevelopers', () => {
  it('filtruje developerów', () => {
    const users = [
      { name: 'Jan', role: 'developer' },
      { name: 'Anna', role: 'designer' },
      { name: 'Piotr', role: 'developer' },
    ];
    expect(getDevelopers(users)).toEqual(['Jan', 'Piotr']);
  });
  it('brak developerów', () => {
    expect(getDevelopers([{ name: 'Anna', role: 'designer' }])).toEqual([]);
  });
  it('pusta tablica', () => { expect(getDevelopers([])).toEqual([]); });
});

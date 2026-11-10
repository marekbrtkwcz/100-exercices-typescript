import { describe, it, expect } from 'vitest';
import { getHighestPaidEmployee } from './exercise';

describe('getHighestPaidEmployee', () => {
  it('znajduje najwyższą pensję', () => {
    expect(getHighestPaidEmployee([{ name: 'Jan', salary: 5000 }, { name: 'Anna', salary: 7000 }])).toBe('Anna');
  });
  it('pojedynczy pracownik', () => {
    expect(getHighestPaidEmployee([{ name: 'Piotr', salary: 1 }])).toBe('Piotr');
  });
});

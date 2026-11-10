import { describe, it, expect } from 'vitest';
import { addDays } from './exercise';

describe('addDays', () => {
  it('dodaje dzień przez granicę miesiąca', () => {
    expect(addDays(new Date('2024-01-31'), 1)).toEqual(new Date('2024-02-01'));
  });
  it('odejmuje dni', () => {
    expect(addDays(new Date('2024-03-01'), -1)).toEqual(new Date('2024-02-29'));
  });
  it('nie modyfikuje oryginału', () => {
    const d = new Date('2024-01-01');
    addDays(d, 10);
    expect(d).toEqual(new Date('2024-01-01'));
  });
  it('0 dni zwraca tę samą datę', () => {
    expect(addDays(new Date('2024-06-15'), 0)).toEqual(new Date('2024-06-15'));
  });
});

import { describe, it, expect } from 'vitest';
import { isSameWeek } from './exercise';

describe('isSameWeek', () => {
  it('poniedziałek i niedziela tego samego tygodnia', () => {
    expect(isSameWeek(new Date('2024-06-10'), new Date('2024-06-16'))).toBe(true); // pn-ndz
  });
  it('inny tydzień', () => {
    expect(isSameWeek(new Date('2024-06-10'), new Date('2024-06-17'))).toBe(false);
  });
  it('ten sam dzień', () => {
    expect(isSameWeek(new Date('2024-06-12'), new Date('2024-06-12'))).toBe(true);
  });
});

import { describe, it, expect } from 'vitest';
import { getMonthsNeededToWait } from './exercise';

describe('getMonthsNeededToWait', () => {
  it('ten sam miesiąc = 0', () => {
    expect(getMonthsNeededToWait(new Date('2024-01-31'), new Date('2024-01-01'))).toBe(0);
  });
  it('następny miesiąc = 1', () => {
    expect(getMonthsNeededToWait(new Date('2024-02-15'), new Date('2024-01-15'))).toBe(1);
  });
  it('trzy miesiące', () => {
    expect(getMonthsNeededToWait(new Date('2024-04-01'), new Date('2024-01-01'))).toBe(3);
  });
  it('rok później = 12', () => {
    expect(getMonthsNeededToWait(new Date('2025-01-01'), new Date('2024-01-01'))).toBe(12);
  });
  it('przeszła data = 0', () => {
    expect(getMonthsNeededToWait(new Date('2023-01-01'), new Date('2024-01-01'))).toBe(0);
  });
});

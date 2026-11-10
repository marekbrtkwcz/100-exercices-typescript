import { describe, it, expect } from 'vitest';
import { getMillisecondsBetween } from './exercise';

describe('getMillisecondsBetween', () => {
  it('1 sekunda = 1000ms', () => {
    expect(getMillisecondsBetween(new Date('2024-01-01T00:00:00'), new Date('2024-01-01T00:00:01'))).toBe(1000);
  });
  it('kolejność nie ma znaczenia', () => {
    expect(getMillisecondsBetween(new Date('2024-01-01T00:00:01'), new Date('2024-01-01T00:00:00'))).toBe(1000);
  });
  it('ta sama data = 0', () => {
    const d = new Date('2024-01-01');
    expect(getMillisecondsBetween(d, d)).toBe(0);
  });
  it('1 godzina = 3600000ms', () => {
    expect(getMillisecondsBetween(new Date('2024-01-01T00:00:00'), new Date('2024-01-01T01:00:00'))).toBe(3600000);
  });
});

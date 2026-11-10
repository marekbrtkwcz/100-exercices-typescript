import { describe, it, expect } from 'vitest';
import { isSameDay } from './exercise';

describe('isSameDay', () => {
  it('ten sam dzień, różne godziny', () => {
    expect(isSameDay(new Date('2024-01-15T10:00:00'), new Date('2024-01-15T23:59:00'))).toBe(true);
  });
  it('inny dzień', () => {
    expect(isSameDay(new Date('2024-01-15'), new Date('2024-01-16'))).toBe(false);
  });
  it('ten sam dzień inny rok', () => {
    expect(isSameDay(new Date('2024-01-15'), new Date('2025-01-15'))).toBe(false);
  });
});

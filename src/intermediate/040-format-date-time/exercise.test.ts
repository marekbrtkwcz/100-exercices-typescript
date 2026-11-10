import { describe, it, expect } from 'vitest';
import { formatDateTime } from './exercise';

describe('formatDateTime', () => {
  it('formatuje z wiodącymi zerami', () => {
    expect(formatDateTime(new Date('2024-01-05T09:07:00'))).toBe('05.01.2024 09:07');
  });
  it('grudzień, północ', () => {
    expect(formatDateTime(new Date('2024-12-31T00:00:00'))).toBe('31.12.2024 00:00');
  });
});

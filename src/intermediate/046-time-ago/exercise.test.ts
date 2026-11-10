import { describe, it, expect } from 'vitest';
import { timeAgo } from './exercise';

const now = new Date('2024-06-15T12:00:00');

describe('timeAgo', () => {
  it('sekundy', () => { expect(timeAgo(new Date('2024-06-15T11:59:30'), now)).toBe('30 sekund temu'); });
  it('minuty', () => { expect(timeAgo(new Date('2024-06-15T11:55:00'), now)).toBe('5 minut temu'); });
  it('godziny', () => { expect(timeAgo(new Date('2024-06-15T09:00:00'), now)).toBe('3 godzin temu'); });
  it('dni', () => { expect(timeAgo(new Date('2024-06-12T12:00:00'), now)).toBe('3 dni temu'); });
});

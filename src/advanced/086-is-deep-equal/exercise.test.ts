import { describe, it, expect } from 'vitest';
import { isDeepEqual } from './exercise';

describe('isDeepEqual', () => {
  it('wartości proste', () => {
    expect(isDeepEqual(1, 1)).toBe(true);
    expect(isDeepEqual('a', 'a')).toBe(true);
    expect(isDeepEqual(1, 2)).toBe(false);
    expect(isDeepEqual(null, undefined)).toBe(false);
  });
  it('obiekty', () => {
    expect(isDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isDeepEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(isDeepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });
  it('zagnieżdżone', () => {
    expect(isDeepEqual([1, [2, { x: 3 }]], [1, [2, { x: 3 }]])).toBe(true);
    expect(isDeepEqual([1, [2, { x: 3 }]], [1, [2, { x: 4 }]])).toBe(false);
  });
  it('daty', () => {
    expect(isDeepEqual(new Date('2024-01-01'), new Date('2024-01-01'))).toBe(true);
    expect(isDeepEqual(new Date('2024-01-01'), new Date('2024-01-02'))).toBe(false);
  });
  it('tablice różnej długości', () => {
    expect(isDeepEqual([1, 2], [1, 2, 3])).toBe(false);
  });
});

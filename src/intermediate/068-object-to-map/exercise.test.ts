import { describe, it, expect } from 'vitest';
import { objectToMap } from './exercise';

describe('objectToMap', () => {
  it('konwertuje obiekt na Map', () => {
    const map = objectToMap({ a: 1, b: 2 });
    expect(map).toBeInstanceOf(Map);
    expect(map.get('a')).toBe(1);
    expect(map.get('b')).toBe(2);
    expect(map.size).toBe(2);
  });
  it('pusty obiekt = pusta mapa', () => {
    expect(objectToMap({}).size).toBe(0);
  });
});

import { describe, it, expect } from 'vitest';
import { uniqBy } from './exercise';

describe('uniqBy', () => {
  it('usuwa duplikaty wg klucza', () => {
    expect(uniqBy([1.1, 2.2, 2.3, 1.5], Math.floor)).toEqual([1.1, 2.2]);
  });
  it('obiekty po polu', () => {
    const arr = [{ id: 1, v: 'a' }, { id: 2, v: 'b' }, { id: 1, v: 'c' }];
    expect(uniqBy(arr, x => x.id)).toEqual([{ id: 1, v: 'a' }, { id: 2, v: 'b' }]);
  });
  it('pusta tablica', () => { expect(uniqBy([], (x: number) => x)).toEqual([]); });
});

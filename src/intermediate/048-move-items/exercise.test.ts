import { describe, it, expect } from 'vitest';
import { moveItems } from './exercise';

describe('moveItems', () => {
  it('przenosi element', () => { expect(moveItems(['a', 'b', 'c', 'd'], 0, 2)).toEqual(['b', 'c', 'a', 'd']); });
  it('przenosi w lewo', () => { expect(moveItems(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b']); });
  it('nie modyfikuje oryginału', () => {
    const arr = ['a', 'b', 'c'];
    moveItems(arr, 0, 2);
    expect(arr).toEqual(['a', 'b', 'c']);
  });
});

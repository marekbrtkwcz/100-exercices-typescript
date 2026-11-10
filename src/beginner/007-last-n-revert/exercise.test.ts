import { describe, it, expect } from 'vitest';
import { lastNRevert } from './exercise';

describe('lastNRevert', () => {
  it('ostatnie 3 odwrócone', () => { expect(lastNRevert([1, 2, 3, 4, 5], 3)).toEqual([5, 4, 3]); });
  it('stringi', () => { expect(lastNRevert(['a', 'b', 'c'], 2)).toEqual(['c', 'b']); });
  it('n większe niż tablica', () => { expect(lastNRevert([1, 2], 5)).toEqual([2, 1]); });
  it('n = 0 daje pustą tablicę', () => { expect(lastNRevert([1, 2, 3], 0)).toEqual([]); });
});

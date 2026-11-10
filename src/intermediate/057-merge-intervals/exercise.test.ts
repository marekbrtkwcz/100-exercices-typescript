import { describe, it, expect } from 'vitest';
import { mergeIntervals } from './exercise';

describe('mergeIntervals', () => {
  it('scala nakładające się', () => {
    expect(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
  });
  it('stykające się też scala', () => { expect(mergeIntervals([[1, 4], [4, 5]])).toEqual([[1, 5]]); });
  it('pusta tablica', () => { expect(mergeIntervals([])).toEqual([]); });
  it('wszystko w jednym', () => { expect(mergeIntervals([[1, 10], [2, 5], [3, 8]])).toEqual([[1, 10]]); });
});

import { describe, it, expect, vi } from 'vitest';
import { getPaginatedData } from './exercise';

describe('getPaginatedData', () => {
  it('łączy wszystkie strony', async () => {
    const fetchPage = vi.fn(async (page: number) => [page * 10, page * 10 + 1]);
    expect(await getPaginatedData(fetchPage, 3)).toEqual([10, 11, 20, 21, 30, 31]);
  });
  it('wywołuje fetchPage dla każdej strony 1..n', async () => {
    const fetchPage = vi.fn(async () => [] as number[]);
    await getPaginatedData(fetchPage, 5);
    expect(fetchPage).toHaveBeenCalledTimes(5);
    expect(fetchPage).toHaveBeenNthCalledWith(1, 1);
    expect(fetchPage).toHaveBeenNthCalledWith(5, 5);
  });
  it('0 stron = pusta tablica', async () => {
    const fetchPage = vi.fn(async () => [1]);
    expect(await getPaginatedData(fetchPage, 0)).toEqual([]);
    expect(fetchPage).not.toHaveBeenCalled();
  });
});

import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchNamesOfAllPublicRepos } from './exercise';

describe('fetchNamesOfAllPublicRepos', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('zwraca nazwy repozytoriów', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => [{ name: 'repo1' }, { name: 'repo2' }],
    }));
    expect(await fetchNamesOfAllPublicRepos('marek')).toEqual(['repo1', 'repo2']);
  });

  it('wywołuje właściwy URL', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ json: async () => [] });
    vi.stubGlobal('fetch', mockFetch);
    await fetchNamesOfAllPublicRepos('marek');
    expect(mockFetch).toHaveBeenCalledWith('https://api.github.com/users/marek/repos');
  });
});

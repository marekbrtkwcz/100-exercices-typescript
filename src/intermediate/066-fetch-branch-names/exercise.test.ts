import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchBranchNames } from './exercise';

describe('fetchBranchNames', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('zwraca nazwy branchy', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => [{ name: 'main' }, { name: 'dev' }],
    }));
    expect(await fetchBranchNames('owner/repo')).toEqual(['main', 'dev']);
  });

  it('wywołuje właściwy URL', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ json: async () => [] });
    vi.stubGlobal('fetch', mockFetch);
    await fetchBranchNames('a/b');
    expect(mockFetch).toHaveBeenCalledWith('https://api.github.com/repos/a/b/branches');
  });
});

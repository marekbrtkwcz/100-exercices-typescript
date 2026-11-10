import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchClosedPullRequests } from './exercise';

describe('fetchClosedPullRequests', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('zwraca tytuły zamkniętych PR', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => [{ title: 'Fix bug' }, { title: 'Add feature' }],
    }));
    expect(await fetchClosedPullRequests('owner/repo')).toEqual(['Fix bug', 'Add feature']);
  });

  it('wywołuje właściwy URL', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ json: async () => [] });
    vi.stubGlobal('fetch', mockFetch);
    await fetchClosedPullRequests('a/b');
    expect(mockFetch).toHaveBeenCalledWith('https://api.github.com/repos/a/b/pulls?state=closed');
  });
});

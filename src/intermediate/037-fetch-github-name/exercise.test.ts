import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchGitHubName } from './exercise';

describe('fetchGitHubName', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('zwraca name z odpowiedzi GitHub', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => ({ name: 'The Octocat' }),
    }));
    expect(await fetchGitHubName('octocat')).toBe('The Octocat');
  });

  it('wywołuje właściwy URL', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ json: async () => ({ name: 'X' }) });
    vi.stubGlobal('fetch', mockFetch);
    await fetchGitHubName('marek');
    expect(mockFetch).toHaveBeenCalledWith('https://api.github.com/users/marek');
  });
});

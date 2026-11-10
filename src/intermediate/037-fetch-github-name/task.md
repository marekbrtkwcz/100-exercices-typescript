# 37 — fetchGitHubName

**Poziom:** Intermediate

Napisz funkcję `fetchGitHubName(username: string): Promise<string>`, która pobiera z API GitHub (`https://api.github.com/users/{username}`) i zwraca pole `name` z odpowiedzi. W testach zamockuj `fetch`.

## Przykłady
- `await fetchGitHubName('octocat')` → nazwa z profilu GitHub

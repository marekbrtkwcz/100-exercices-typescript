# 60 — fetchNamesOfAllPublicRepos

**Poziom:** Intermediate

Napisz funkcję `fetchNamesOfAllPublicRepos(username: string): Promise<string[]>`, która pobiera wszystkie publiczne repozytoria użytkownika GitHub i zwraca ich nazwy. W testach zamockuj `fetch`.

## Przykłady
- mock zwraca `[{name:'repo1'},{name:'repo2'}]` → `['repo1', 'repo2']`

# 65 — fetchClosedPullRequests

**Poziom:** Intermediate

Napisz funkcję `fetchClosedPullRequests(repo: string): Promise<string[]>`, która pobiera zamknięte PR-y z GitHub API i zwraca ich tytuły. W testach zamockuj `fetch`.

URL: `https://api.github.com/repos/{repo}/pulls?state=closed`

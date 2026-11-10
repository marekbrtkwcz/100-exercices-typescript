# 53 — parseQueryParams

**Poziom:** Intermediate

Napisz funkcję `parseQueryParams(url: string): Record<string, string>`, która parsuje parametry z query stringa URL-a.

## Przykłady
- `parseQueryParams('https://x.pl?a=1&b=hello')` → `{ a: '1', b: 'hello' }`
- bez query → `{}`

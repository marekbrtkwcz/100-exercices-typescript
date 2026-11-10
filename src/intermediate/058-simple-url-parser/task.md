# 58 — simpleURLParser

**Poziom:** Intermediate

Napisz funkcję `simpleURLParser(url: string)`, która zwraca obiekt z polami `protocol`, `host`, `path`, `query` (query jako obiekt).

## Przykłady
- `'https://example.com:8080/api/users?page=2'` → `{ protocol: 'https', host: 'example.com:8080', path: '/api/users', query: { page: '2' } }`

# 76 — uniqBy

**Poziom:** Advanced

Napisz funkcję `uniqBy<T, K>(arr: T[], fn: (item: T) => K): T[]`, która zwraca tablicę bez duplikatów wg klucza zwracanego przez `fn`. Zachowuje pierwsze wystąpienie.

## Przykłady
- `uniqBy([1.1, 2.2, 2.3, 1.5], Math.floor)` → `[1.1, 2.2]`

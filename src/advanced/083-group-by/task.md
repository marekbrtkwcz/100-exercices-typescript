# 83 — groupBy

**Poziom:** Advanced

Napisz funkcję `groupBy<T, K extends string | number | symbol>(arr: T[], fn: (item: T) => K): Record<K, T[]>`, która grupuje elementy tablicy wg klucza.

## Przykłady
- `groupBy([1.1, 2.2, 2.3, 3.3], Math.floor)` → `{ '1': [1.1], '2': [2.2, 2.3], '3': [3.3] }`

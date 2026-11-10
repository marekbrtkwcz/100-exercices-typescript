# 27 — pickFields

**Poziom:** Intermediate

Napisz funkcję `pickFields<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>` zwracającą obiekt tylko z wybranymi polami.

## Przykłady
- `pickFields({ a: 1, b: 'x', c: true }, ['a', 'c'])` → `{ a: 1, c: true }`

# 59 — pickNested

**Poziom:** Intermediate

Napisz funkcję `pickNested(obj: Record<string, unknown>, path: string): unknown`, która pobiera wartość z zagnieżdżonego obiektu po ścieżce 'a.b.c'. Jeśli ścieżka nie istnieje, zwraca undefined.

## Przykłady
- `pickNested({ a: { b: { c: 42 } } }, 'a.b.c')` → `42`

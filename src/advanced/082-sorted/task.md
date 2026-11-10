# 82 — sorted

**Poziom:** Advanced

Napisz funkcję `sorted(arr: number[]): (comparator?: (a: number, b: number) => number) => number[]`, która zwraca funkcję sortującą KOPIĘ tablicy podanym komparatorem (domyślnie rosnąco).

## Przykłady
- `sorted([3,1,2])()` → `[1,2,3]`
- `sorted([3,1,2])((a,b) => b-a)` → `[3,2,1]`

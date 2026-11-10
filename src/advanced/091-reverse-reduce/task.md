# 91 — reverseReduce

**Poziom:** Advanced

Napisz funkcję `reverseReduce<T, U>(arr: T[], fn: (acc: U, item: T, index: number) => U, initial: U): U`, która działa jak `reduce` ale iteruje OD KOŃCA tablicy.

## Przykłady
- `reverseReduce([1, 2, 3], (acc, x) => acc + x, 0)` → `6` (kolejność dodawania od końca, ale suma ta sama)
- kolejność widać przy konkatenacji stringów

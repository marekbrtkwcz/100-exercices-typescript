# 79 — createPromise

**Poziom:** Advanced

Napisz funkcję `createPromise(executor: (resolve, reject) => void): Promise<T>`, która działa jak konstruktor Promise — pozwala stworzyć Promise przez podanie funkcji executor.

## Przykłady
- `const p = createPromise<number>((res) => res(42)); await p → 42`

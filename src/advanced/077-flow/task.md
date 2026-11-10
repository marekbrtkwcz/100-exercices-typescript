# 77 — flow

**Poziom:** Advanced

Napisz funkcję `flow(...fns)`, która zwraca funkcję będącą złożeniem funkcji od lewej do prawej: `flow(f, g, h)(x) = h(g(f(x)))`.

## Przykłady
- `const f = flow((x: number) => x + 1, (x: number) => x * 2); f(3)` → `8`

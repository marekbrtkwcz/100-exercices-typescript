# 89 — customBind

**Poziom:** Advanced

Napisz funkcję `customBind(fn, thisArg, ...boundArgs)`, która działa jak `Function.prototype.bind` — zwraca funkcję ze spiętym `this` i częściowo podanymi argumentami.

## Przykłady
- `const f = customBind((a: number, b: number) => a + b, null, 1); f(2)` → `3`

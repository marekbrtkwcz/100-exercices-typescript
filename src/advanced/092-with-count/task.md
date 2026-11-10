# 92 — withCount

**Poziom:** Advanced

Napisz funkcję `withCount<T extends (...args: any[]) => any>(fn: T)`, która opakowuje funkcję i dodaje do niej właściwość `callCount` zliczającą wywołania.

## Przykłady
- `const f = withCount(() => 'hi'); f(); f(); f.callCount` → `2`

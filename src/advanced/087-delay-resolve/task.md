# 87 — delayResolve

**Poziom:** Advanced

Napisz funkcję `delayResolve<T>(value: T, ms: number): Promise<T>`, która zwraca Promise resolvujący się wartością `value` po `ms` milisekundach.

W testach użyj fake timers.

## Przykłady
- `await delayResolve('hello', 100)` → `'hello'`

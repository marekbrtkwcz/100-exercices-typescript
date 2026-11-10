# 93 — maxInvocations

**Poziom:** Advanced

Napisz funkcję `maxInvocations<T extends (...args: any[]) => any>(fn: T, max: number): T`, która opakowuje funkcję tak, by wywołanie jej więcej niż `max` razy rzucało błąd.

## Przykłady
- max=2: f(), f() ok, f() trzeci → rzuca Error

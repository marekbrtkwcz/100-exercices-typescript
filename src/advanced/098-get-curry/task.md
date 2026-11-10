# 98 — getCurry

**Poziom:** Advanced

Napisz funkcję `getCurry(fn)`, która zwraca funkcję curryfikowaną — można podawać argumenty pojedynczo lub po kilka, aż do uzyskania pełnej liczby.

## Przykłady
- `const add = (a: number, b: number, c: number) => a + b + c`
- `getCurry(add)(1)(2)(3)` → `6`
- `getCurry(add)(1, 2, 3)` → `6`

# 97 — currySum

**Poziom:** Advanced

Napisz funkcję `currySum(...args: number[]): any`, która sumuje argumenty — można wywoływać z dowolną liczbą argumentów, a wynik zwraca dopiero gdy wywoła się bez argumentów: `currySum(1,2)(3)()` → `6`.

## Przykłady
- `currySum(1, 2, 3)()` → `6`
- `currySum(1)(2)(3)()` → `6`

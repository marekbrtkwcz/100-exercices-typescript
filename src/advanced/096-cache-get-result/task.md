# 96 — cacheGetResult

**Poziom:** Advanced

Napisz funkcję `cacheGetResult<T extends (...args: any[]) => any>(fn: T): T`, która opakowuje funkcję i cache'uje wyniki — kolejne wywołanie z tymi samymi argumentami zwraca wynik z pamięci bez wywoływania oryginału.

## Przykłady
- `let calls = 0; const f = cacheGetResult(() => ++calls); f(1) → 1, f(1) → 1 (calls=1), f(2) → 2`

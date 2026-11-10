# 94 — createObservable

**Poziom:** Advanced

Napisz funkcję `createObservable<T>()`, która zwraca obiekt z metodami: `subscribe(fn): () => void` (zwraca unsubscribe), `next(value)` (wywołuje wszystkich subskrybentów).

## Przykłady
- subskrybent dostaje każdą wartość po next()

# 75 — deepCopy

**Poziom:** Intermediate

Napisz funkcję `deepCopy<T>(obj: T): T`, która tworzy głęboką kopię obiektu/tablicy/daty. Zmiana kopii nie wpływa na oryginał.

## Przykłady
- `const o = { a: 1, n: { b: 2 } }; const c = deepCopy(o); c.n.b = 99; o.n.b === 2`

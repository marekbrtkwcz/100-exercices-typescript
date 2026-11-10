# 55 — partitionArray

**Poziom:** Intermediate

Napisz funkcję `partitionArray<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]]`, która dzieli tablicę na dwie: elementy spełniające predykat i nie.

## Przykłady
- `partitionArray([1,2,3,4], x => x % 2 === 0)` → `[[2,4],[1,3]]`

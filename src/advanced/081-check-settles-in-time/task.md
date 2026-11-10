# 81 — checkSettlesInTime

**Poziom:** Advanced

Napisz funkcję `checkSettlesInTime(promise: Promise<T>, ms: number): Promise<boolean>`, która zwraca `true` jeśli promise zakończy się (resolve lub reject) w ciągu `ms` milisekund, inaczej `false`.

W testach użyj fake timers.

## Przykłady
- promise który resolvuje po 50ms, ms=100 → true

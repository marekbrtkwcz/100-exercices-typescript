# 85 — promiseOrder

**Poziom:** Advanced

Napisz funkcję `promiseOrder(promises: Promise<unknown>[]): Promise<unknown[]>`, która zwraca wyniki w kolejności zakończenia (nie w kolejności tablicy).

W testach użyj fake timers lub rzeczywistych opóźnień.

## Przykłady
- [p1(100ms), p2(50ms)] → wyniki: najpierw wynik p2, potem p1

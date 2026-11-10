# 99 — throttle

**Poziom:** Advanced

Napisz funkcję `throttle<T extends (...args: any[]) => any>(fn: T, delay: number)`, która wywołuje `fn` maksymalnie raz na `delay` ms. Pierwsze wywołanie natychmiast.

W testach użyj fake timers.

## Przykłady
- 3 wywołania pod rząd, delay=100 → tylko pierwsze się wykonuje

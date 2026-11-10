# 100 — debounce

**Poziom:** Advanced

Napisz funkcję `debounce<T extends (...args: any[]) => any>(fn: T, delay: number)`, która opóźnia wywołanie `fn` o `delay` ms — każde kolejne wywołanie w tym czasie resetuje timer.

W testach użyj fake timers.

## Przykłady
- 3 wywołania pod rząd, delay=100 → fn wywołane raz, po 100ms od ostatniego

# 31 — countPageViews

**Poziom:** Intermediate

Napisz funkcję `countPageViews(logs: { page: string; timestamp: number }[]): Record<string, number>`, która zlicza wyświetlenia każdej strony.

## Przykłady
- `[{page:'/home',timestamp:1},{page:'/home',timestamp:2},{page:'/about',timestamp:3}]` → `{ '/home': 2, '/about': 1 }`

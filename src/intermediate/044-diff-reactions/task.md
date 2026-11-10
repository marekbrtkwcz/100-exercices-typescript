# 44 — diffReactions

**Poziom:** Intermediate

Napisz funkcję `diffReactions(before: Record<string, number>, after: Record<string, number>): Record<string, number>`, która zwraca tylko te reakcje, które zmieniły wartość (lub się pojawiły/zniknęły). Wynik: nowa wartość dla zmienionych, 0 dla usuniętych.

## Przykłady
- before={like:5,love:2}, after={like:5,love:3,haha:1} → {love:3, haha:1}

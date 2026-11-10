# 5 — getMonthsNeededToWait

**Poziom:** Beginner

Napisz funkcję `getMonthsNeededToWait(targetDate: Date, currentDate: Date): number`, która zwraca ile pełnych miesięcy zostało do `targetDate` licząc od `currentDate`.

## Przykłady
- od 2024-01-15 do 2024-03-10 → `1` (luty się kończy, marzec jeszcze nie nadszedł w pełni... zwróć pełne miesiące między datami)
- od 2024-01-01 do 2024-01-31 → `0`

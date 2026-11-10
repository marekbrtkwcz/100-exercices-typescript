# 61 — getPaginatedData

**Poziom:** Intermediate

Napisz funkcję `getPaginatedData<T>(fetchPage: (page: number) => Promise<T[]>, totalPages: number): Promise<T[]>`, która pobiera wszystkie strony i zwraca połączone dane. W testach zamockuj `fetchPage`.

## Przykłady
- 3 strony po 2 elementy → tablica 6 elementów

# 8 — getBusinessAddress

**Poziom:** Beginner

Napisz funkcję `getBusinessAddress(user: { address?: { street?: string; city?: string; country?: string } }): string`, która zwraca adres w formacie "street, city, country". Jeśli któregoś pola brakuje, pomiń je (i przecinek). Jeśli wszystkie są puste, zwróć `'Unknown'`.

## Przykłady
- pełny adres → `'Marszałkowska 1, Warszawa, Polska'`
- brak ulicy → `'Warszawa, Polska'`

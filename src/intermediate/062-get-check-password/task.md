# 62 — getCheckPassword

**Poziom:** Intermediate

Napisz funkcję `getCheckPassword(validator: (pw: string) => boolean): (pw: string) => boolean`, która zwraca funkcję sprawdzającą hasło — ale zwraca `true` tylko gdy walidator zwróci `true`.

To proste "opakowanie" — celem jest zrozumienie funkcji wyższego rzędu.

## Przykłady
- `const check = getCheckPassword(pw => pw.length > 8)`
- `check('długie hasło')` → `true`

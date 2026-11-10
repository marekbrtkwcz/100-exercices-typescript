# 90 — todoList

**Poziom:** Advanced

Napisz funkcję `todoList()`, która zwraca obiekt zarządzający listą TODO z metodami: `add(text): number` (zwraca id), `complete(id): boolean`, `remove(id): boolean`, `list(): { id: number; text: string; done: boolean }[]`.

## Przykłady
- add('napisać testy') → 1; complete(1) → true; list() pokazuje done=true

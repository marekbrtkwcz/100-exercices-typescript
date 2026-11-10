# 95 — createPubSub

**Poziom:** Advanced

Napisz funkcję `createPubSub()`, która zwraca obiekt Pub/Sub z metodami: `subscribe(event, fn): () => void`, `publish(event, data)`. Zdarzenia są niezależne (różne nazwy).

## Przykłady
- subscribe('click', fn); publish('click', {x:1}) → fn({x:1})

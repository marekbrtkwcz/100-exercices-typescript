# 100 Ćwiczeń TypeScript

Kompletny zestaw **100 ćwiczeń TypeScript** z automatycznymi testami (Vitest) — wzorowany na [100jsfunctions.com](https://www.100jsfunctions.com/exercises), z numeracją 1:1.

## Statystyki

| Poziom | Zakres | Liczba |
|--------|--------|--------|
| Beginner | 001–025 | 25 |
| Intermediate | 026–075 | 50 |
| Advanced | 076–100 | 25 |
| **Razem** | | **100** |

Łącznie **324 testy** w 100 plikach testowych.

## Struktura

```
100-exercices-typescript/
├── src/
│   ├── beginner/           # 001–025
│   │   └── 001-minutes-to-hours/
│   │       ├── task.md           # treść zadania (po polsku)
│   │       ├── exercise.ts       # TU PISZESZ ROZWIĄZANIE
│   │       └── exercise.test.ts  # automatyczne testy Vitest
│   ├── intermediate/       # 026–075
│   └── advanced/           # 076–100
├── scripts/
│   ├── seed.ts             # generator wszystkich 100 ćwiczeń
│   ├── generate.ts         # generator pojedynczego nowego ćwiczenia
│   └── data/               # definicje ćwiczeń (opis, sygnatura, testy)
├── package.json
├── tsconfig.json           # strict + noUncheckedIndexedAccess
├── vitest.config.ts
└── README.md
```

## Jak używać

```bash
npm install                              # raz

npm run test:one -- src/beginner/001-minutes-to-hours   # test jednego ćwiczenia
npm test                                 # wszystkie 100 ćwiczeń (324 testy)
npm run test:watch                       # tryb watch — testy po każdej zmianie
npm run check                            # type-check (tsc --noEmit)

npm run new -- intermediate nazwa 076    # dodaj własne ćwiczenie
npx tsx scripts/seed.ts                  # regeneruj wszystkie 100 z definicji
```

## Konwencje

- Katalog: `NNN-nazwa-kebab-case` (NNN = numer 001–100)
- `exercise.ts` zawiera sygnaturę + `throw new Error('Not implemented')` — usuń throw i zaimplementuj
- Testy używają `vitest`: `describe` / `it` / `expect`
- Ćwiczenia async (fetch, promise) — mockuj `fetch` przez `vi.stubGlobal`
- Ćwiczenia z czasem (debounce, throttle, delay) — używaj `vi.useFakeTimers()`
- Ćwiczenia z generics — TypeScript sam pilnuje typów w testach

## Przykład rozwiązania

Ćwiczenie `001-minutes-to-hours` ma gotowe rozwiązanie jako wzór:

```bash
npm run test:one -- src/beginner/001-minutes-to-hours   # 5/5 zielone
```

Pozostałe 99 ćwiczeń czeka na Ciebie — wszystkie testy czerwone dopóki nie zaimplementowane.

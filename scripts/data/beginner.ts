import type { ExerciseDef } from './types';

export const beginner: ExerciseDef[] = [
  {
    num: 1, slug: 'minutes-to-hours', fn: 'minutesToHours',
    task: `Napisz funkcję \`minutesToHours(minutes: number): number\`, która zamienia minuty na godziny zaokrąglone do 2 miejsc po przecinku.

## Przykłady
- \`minutesToHours(120)\` → \`2\`
- \`minutesToHours(90)\` → \`1.5\`
- \`minutesToHours(45)\` → \`0.75\``,
    signature: `export function minutesToHours(minutes: number): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { minutesToHours } from './exercise';

describe('minutesToHours', () => {
  it('120 minut = 2 godziny', () => { expect(minutesToHours(120)).toBe(2); });
  it('90 minut = 1.5 godziny', () => { expect(minutesToHours(90)).toBe(1.5); });
  it('45 minut = 0.75 godziny', () => { expect(minutesToHours(45)).toBe(0.75); });
  it('0 minut = 0 godzin', () => { expect(minutesToHours(0)).toBe(0); });
  it('zaokrągla do 2 miejsc', () => { expect(minutesToHours(1)).toBeCloseTo(0.02, 2); });
});`,
  },
  {
    num: 2, slug: 'average-of-4-numbers', fn: 'averageOf4Numbers',
    task: `Napisz funkcję \`averageOf4Numbers(a, b, c, d): number\`, która zwraca średnią arytmetyczną 4 liczb.

## Przykłady
- \`averageOf4Numbers(1, 2, 3, 4)\` → \`2.5\`
- \`averageOf4Numbers(10, 20, 30, 40)\` → \`25\``,
    signature: `export function averageOf4Numbers(a: number, b: number, c: number, d: number): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { averageOf4Numbers } from './exercise';

describe('averageOf4Numbers', () => {
  it('średnia z 1,2,3,4', () => { expect(averageOf4Numbers(1, 2, 3, 4)).toBe(2.5); });
  it('średnia z 10,20,30,40', () => { expect(averageOf4Numbers(10, 20, 30, 40)).toBe(25); });
  it('liczby ujemne', () => { expect(averageOf4Numbers(-10, 0, 10, 20)).toBe(5); });
  it('wszystkie takie same', () => { expect(averageOf4Numbers(7, 7, 7, 7)).toBe(7); });
});`,
  },
  {
    num: 3, slug: 'concat3', fn: 'concat3',
    task: `Napisz funkcję \`concat3(a: string, b: string, c: string): string\`, która łączy 3 stringi bez separatora.

## Przykłady
- \`concat3('Hello', ' ', 'World')\` → \`'Hello World'\`
- \`concat3('a', 'b', 'c')\` → \`'abc'\``,
    signature: `export function concat3(a: string, b: string, c: string): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { concat3 } from './exercise';

describe('concat3', () => {
  it('łączy 3 stringi', () => { expect(concat3('Hello', ' ', 'World')).toBe('Hello World'); });
  it('bez spacji', () => { expect(concat3('a', 'b', 'c')).toBe('abc'); });
  it('puste stringi', () => { expect(concat3('', '', '')).toBe(''); });
});`,
  },
  {
    num: 4, slug: 'max5', fn: 'max5',
    task: `Napisz funkcję \`max5(a, b, c, d, e): number\`, która zwraca największą z 5 liczb.

## Przykłady
- \`max5(1, 5, 3, 2, 4)\` → \`5\`
- \`max5(-1, -5, -3, -2, -4)\` → \`-1\``,
    signature: `export function max5(a: number, b: number, c: number, d: number, e: number): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { max5 } from './exercise';

describe('max5', () => {
  it('zwraca max', () => { expect(max5(1, 5, 3, 2, 4)).toBe(5); });
  it('ujemne liczby', () => { expect(max5(-1, -5, -3, -2, -4)).toBe(-1); });
  it('wszystkie równe', () => { expect(max5(3, 3, 3, 3, 3)).toBe(3); });
  it('pierwsza największa', () => { expect(max5(100, 1, 2, 3, 4)).toBe(100); });
  it('ostatnia największa', () => { expect(max5(1, 2, 3, 4, 100)).toBe(100); });
});`,
  },
  {
    num: 5, slug: 'get-months-needed-to-wait', fn: 'getMonthsNeededToWait',
    task: `Napisz funkcję \`getMonthsNeededToWait(targetDate: Date, currentDate: Date): number\`, która zwraca ile pełnych miesięcy zostało do \`targetDate\` licząc od \`currentDate\`.

## Przykłady
- od 2024-01-15 do 2024-03-10 → \`1\` (luty się kończy, marzec jeszcze nie nadszedł w pełni... zwróć pełne miesiące między datami)
- od 2024-01-01 do 2024-01-31 → \`0\``,
    signature: `export function getMonthsNeededToWait(targetDate: Date, currentDate: Date): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getMonthsNeededToWait } from './exercise';

describe('getMonthsNeededToWait', () => {
  it('ten sam miesiąc = 0', () => {
    expect(getMonthsNeededToWait(new Date('2024-01-31'), new Date('2024-01-01'))).toBe(0);
  });
  it('następny miesiąc = 1', () => {
    expect(getMonthsNeededToWait(new Date('2024-02-15'), new Date('2024-01-15'))).toBe(1);
  });
  it('trzy miesiące', () => {
    expect(getMonthsNeededToWait(new Date('2024-04-01'), new Date('2024-01-01'))).toBe(3);
  });
  it('rok później = 12', () => {
    expect(getMonthsNeededToWait(new Date('2025-01-01'), new Date('2024-01-01'))).toBe(12);
  });
  it('przeszła data = 0', () => {
    expect(getMonthsNeededToWait(new Date('2023-01-01'), new Date('2024-01-01'))).toBe(0);
  });
});`,
  },
  {
    num: 6, slug: 'get-gasoline-amount', fn: 'getGasolineAmount',
    task: `Napisz funkcję \`getGasolineAmount(distance: number, consumptionPer100km: number): number\`, która oblicza ile litrów paliwa potrzeba na przejechanie \`distance\` km przy spalaniu \`consumptionPer100km\` l/100km. Wynik zaokrąglij w górę do pełnych litrów.

## Przykłady
- \`getGasolineAmount(100, 8)\` → \`8\`
- \`getGasolineAmount(50, 8)\` → \`4\`
- \`getGasolineAmount(30, 8)\` → \`3\` (2.4 zaokrąglone w górę)`,
    signature: `export function getGasolineAmount(distance: number, consumptionPer100km: number): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getGasolineAmount } from './exercise';

describe('getGasolineAmount', () => {
  it('100 km przy 8l/100km', () => { expect(getGasolineAmount(100, 8)).toBe(8); });
  it('50 km przy 8l/100km', () => { expect(getGasolineAmount(50, 8)).toBe(4); });
  it('zaokrągla w górę', () => { expect(getGasolineAmount(30, 8)).toBe(3); });
  it('0 km = 0 l', () => { expect(getGasolineAmount(0, 8)).toBe(0); });
});`,
  },
  {
    num: 7, slug: 'last-n-revert', fn: 'lastNRevert',
    task: `Napisz funkcję \`lastNRevert(arr: T[], n: number): T[]\`, która zwraca tablicę z ostatnich \`n\` elementów ułożonych w odwrotnej kolejności.

## Przykłady
- \`lastNRevert([1, 2, 3, 4, 5], 3)\` → \`[5, 4, 3]\`
- \`lastNRevert(['a', 'b', 'c'], 2)\` → \`['c', 'b']\`
- \`lastNRevert([1, 2], 5)\` → \`[2, 1]\` (n większe niż długość)`,
    signature: `export function lastNRevert<T>(arr: T[], n: number): T[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { lastNRevert } from './exercise';

describe('lastNRevert', () => {
  it('ostatnie 3 odwrócone', () => { expect(lastNRevert([1, 2, 3, 4, 5], 3)).toEqual([5, 4, 3]); });
  it('stringi', () => { expect(lastNRevert(['a', 'b', 'c'], 2)).toEqual(['c', 'b']); });
  it('n większe niż tablica', () => { expect(lastNRevert([1, 2], 5)).toEqual([2, 1]); });
  it('n = 0 daje pustą tablicę', () => { expect(lastNRevert([1, 2, 3], 0)).toEqual([]); });
});`,
  },
  {
    num: 8, slug: 'get-business-address', fn: 'getBusinessAddress',
    task: `Napisz funkcję \`getBusinessAddress(user: { address?: { street?: string; city?: string; country?: string } }): string\`, która zwraca adres w formacie "street, city, country". Jeśli któregoś pola brakuje, pomiń je (i przecinek). Jeśli wszystkie są puste, zwróć \`'Unknown'\`.

## Przykłady
- pełny adres → \`'Marszałkowska 1, Warszawa, Polska'\`
- brak ulicy → \`'Warszawa, Polska'\``,
    signature: `export interface Address {
  street?: string;
  city?: string;
  country?: string;
}

export function getBusinessAddress(user: { address?: Address }): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getBusinessAddress } from './exercise';

describe('getBusinessAddress', () => {
  it('pełny adres', () => {
    expect(getBusinessAddress({ address: { street: 'Marszałkowska 1', city: 'Warszawa', country: 'Polska' } }))
      .toBe('Marszałkowska 1, Warszawa, Polska');
  });
  it('brak ulicy', () => {
    expect(getBusinessAddress({ address: { city: 'Warszawa', country: 'Polska' } }))
      .toBe('Warszawa, Polska');
  });
  it('brak adresu', () => { expect(getBusinessAddress({})).toBe('Unknown'); });
  it('pusty adres', () => { expect(getBusinessAddress({ address: {} })).toBe('Unknown'); });
});`,
  },
  {
    num: 9, slug: 'get-user-object', fn: 'getUserObject',
    task: `Napisz funkcję \`getUserObject(firstName, lastName, age)\`, która zwraca obiekt \`{ fullName, age, isAdult }\` gdzie \`fullName = firstName + ' ' + lastName\` i \`isAdult = age >= 18\`.

## Przykłady
- \`getUserObject('Jan', 'Kowalski', 25)\` → \`{ fullName: 'Jan Kowalski', age: 25, isAdult: true }\``,
    signature: `export interface User {
  fullName: string;
  age: number;
  isAdult: boolean;
}

export function getUserObject(firstName: string, lastName: string, age: number): User {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getUserObject } from './exercise';

describe('getUserObject', () => {
  it('dorosły', () => {
    expect(getUserObject('Jan', 'Kowalski', 25)).toEqual({ fullName: 'Jan Kowalski', age: 25, isAdult: true });
  });
  it('niepełnoletni', () => {
    expect(getUserObject('Anna', 'Nowak', 16)).toEqual({ fullName: 'Anna Nowak', age: 16, isAdult: false });
  });
  it('18 lat = dorosły', () => { expect(getUserObject('Piotr', 'X', 18).isAdult).toBe(true); });
});`,
  },
  {
    num: 10, slug: 'can-drive-car', fn: 'canDriveCar',
    task: `Napisz funkcję \`canDriveCar(age: number, hasLicense: boolean, isDrunk: boolean): boolean\`, która zwraca \`true\` tylko gdy osoba ma ≥18 lat, ma prawo jazdy i nie jest pijana.

## Przykłady
- \`canDriveCar(25, true, false)\` → \`true\`
- \`canDriveCar(25, true, true)\` → \`false\`
- \`canDriveCar(16, true, false)\` → \`false\``,
    signature: `export function canDriveCar(age: number, hasLicense: boolean, isDrunk: boolean): boolean {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { canDriveCar } from './exercise';

describe('canDriveCar', () => {
  it('dorosły z prawem, trzeźwy', () => { expect(canDriveCar(25, true, false)).toBe(true); });
  it('pijany nie może', () => { expect(canDriveCar(25, true, true)).toBe(false); });
  it('bez prawa nie może', () => { expect(canDriveCar(25, false, false)).toBe(false); });
  it('niepełnoletni nie może', () => { expect(canDriveCar(16, true, false)).toBe(false); });
});`,
  },
  {
    num: 11, slug: 'are-all-numbers-even', fn: 'areAllNumbersEven',
    task: `Napisz funkcję \`areAllNumbersEven(arr: number[]): boolean\`, która zwraca \`true\` gdy wszystkie liczby w tablicy są parzyste. Pusta tablica → \`true\`.

## Przykłady
- \`areAllNumbersEven([2, 4, 6])\` → \`true\`
- \`areAllNumbersEven([2, 3, 4])\` → \`false\``,
    signature: `export function areAllNumbersEven(arr: number[]): boolean {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { areAllNumbersEven } from './exercise';

describe('areAllNumbersEven', () => {
  it('wszystkie parzyste', () => { expect(areAllNumbersEven([2, 4, 6])).toBe(true); });
  it('jedna nieparzysta', () => { expect(areAllNumbersEven([2, 3, 4])).toBe(false); });
  it('pusta tablica = true', () => { expect(areAllNumbersEven([])).toBe(true); });
  it('zera są parzyste', () => { expect(areAllNumbersEven([0, 0])).toBe(true); });
  it('ujemne parzyste', () => { expect(areAllNumbersEven([-2, -4])).toBe(true); });
});`,
  },
  {
    num: 12, slug: 'get-biggest-number-in-arrays', fn: 'getBiggestNumberInArrays',
    task: `Napisz funkcję \`getBiggestNumberInArrays(arrays: number[][]): number\`, która znajduje największą liczbę wśród wszystkich podtablic.

## Przykłady
- \`getBiggestNumberInArrays([[1, 5], [3, 9], [2, 7]])\` → \`9\`
- \`getBiggestNumberInArrays([[-1, -5], [-3, -2]])\` → \`-1\``,
    signature: `export function getBiggestNumberInArrays(arrays: number[][]): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getBiggestNumberInArrays } from './exercise';

describe('getBiggestNumberInArrays', () => {
  it('znajduje max z podtablic', () => { expect(getBiggestNumberInArrays([[1, 5], [3, 9], [2, 7]])).toBe(9); });
  it('ujemne liczby', () => { expect(getBiggestNumberInArrays([[-1, -5], [-3, -2]])).toBe(-1); });
  it('jedna podtablica', () => { expect(getBiggestNumberInArrays([[42]])).toBe(42); });
});`,
  },
  {
    num: 13, slug: 'get-longest-string', fn: 'getLongestString',
    task: `Napisz funkcję \`getLongestString(arr: string[]): string\`, która zwraca najdłuższy string z tablicy. Przy remisie zwraca pierwszy.

## Przykłady
- \`getLongestString(['a', 'abc', 'ab'])\` → \`'abc'\`
- \`getLongestString(['xx', 'yy'])\` → \`'xx'\``,
    signature: `export function getLongestString(arr: string[]): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getLongestString } from './exercise';

describe('getLongestString', () => {
  it('najdłuższy string', () => { expect(getLongestString(['a', 'abc', 'ab'])).toBe('abc'); });
  it('remis zwraca pierwszy', () => { expect(getLongestString(['xx', 'yy'])).toBe('xx'); });
  it('pojedynczy element', () => { expect(getLongestString(['hello'])).toBe('hello'); });
});`,
  },
  {
    num: 14, slug: 'every-n-positions', fn: 'everyNPositions',
    task: `Napisz funkcję \`everyNPositions<T>(arr: T[], n: number): T[]\`, która zwraca co n-ty element tablicy (indeksy 0, n, 2n, ...).

## Przykłady
- \`everyNPositions([1, 2, 3, 4, 5, 6], 2)\` → \`[1, 3, 5]\`
- \`everyNPositions(['a', 'b', 'c', 'd'], 3)\` → \`['a', 'd']\``,
    signature: `export function everyNPositions<T>(arr: T[], n: number): T[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { everyNPositions } from './exercise';

describe('everyNPositions', () => {
  it('co 2 element', () => { expect(everyNPositions([1, 2, 3, 4, 5, 6], 2)).toEqual([1, 3, 5]); });
  it('co 3 element', () => { expect(everyNPositions(['a', 'b', 'c', 'd'], 3)).toEqual(['a', 'd']); });
  it('n = 1 zwraca wszystko', () => { expect(everyNPositions([1, 2, 3], 1)).toEqual([1, 2, 3]); });
});`,
  },
  {
    num: 15, slug: 'double-numbers', fn: 'doubleNumbers',
    task: `Napisz funkcję \`doubleNumbers(arr: number[]): number[]\`, która zwraca nową tablicę z każdą liczbą podwojoną.

## Przykłady
- \`doubleNumbers([1, 2, 3])\` → \`[2, 4, 6]\``,
    signature: `export function doubleNumbers(arr: number[]): number[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { doubleNumbers } from './exercise';

describe('doubleNumbers', () => {
  it('podwaja liczby', () => { expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]); });
  it('pusta tablica', () => { expect(doubleNumbers([])).toEqual([]); });
  it('nie modyfikuje oryginału', () => {
    const arr = [1, 2];
    doubleNumbers(arr);
    expect(arr).toEqual([1, 2]);
  });
});`,
  },
  {
    num: 16, slug: 'most-repetitions', fn: 'mostRepetitions',
    task: `Napisz funkcję \`mostRepetitions(arr: string[]): string\`, która zwraca element występujący najczęściej. Przy remisie zwraca pierwszy napotkany.

## Przykłady
- \`mostRepetitions(['a', 'b', 'a', 'c', 'b', 'a'])\` → \`'a'\`
- \`mostRepetitions(['x', 'y'])\` → \`'x'\``,
    signature: `export function mostRepetitions(arr: string[]): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { mostRepetitions } from './exercise';

describe('mostRepetitions', () => {
  it('znajduje najczęstszy', () => { expect(mostRepetitions(['a', 'b', 'a', 'c', 'b', 'a'])).toBe('a'); });
  it('remis zwraca pierwszy', () => { expect(mostRepetitions(['x', 'y'])).toBe('x'); });
  it('pojedynczy element', () => { expect(mostRepetitions(['z'])).toBe('z'); });
});`,
  },
  {
    num: 17, slug: 'get-milliseconds-between', fn: 'getMillisecondsBetween',
    task: `Napisz funkcję \`getMillisecondsBetween(d1: Date, d2: Date): number\`, która zwraca różnicę między datami w milisekundach (zawsze dodatnią).

## Przykłady
- różnica 1 sekundy → \`1000\``,
    signature: `export function getMillisecondsBetween(d1: Date, d2: Date): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getMillisecondsBetween } from './exercise';

describe('getMillisecondsBetween', () => {
  it('1 sekunda = 1000ms', () => {
    expect(getMillisecondsBetween(new Date('2024-01-01T00:00:00'), new Date('2024-01-01T00:00:01'))).toBe(1000);
  });
  it('kolejność nie ma znaczenia', () => {
    expect(getMillisecondsBetween(new Date('2024-01-01T00:00:01'), new Date('2024-01-01T00:00:00'))).toBe(1000);
  });
  it('ta sama data = 0', () => {
    const d = new Date('2024-01-01');
    expect(getMillisecondsBetween(d, d)).toBe(0);
  });
  it('1 godzina = 3600000ms', () => {
    expect(getMillisecondsBetween(new Date('2024-01-01T00:00:00'), new Date('2024-01-01T01:00:00'))).toBe(3600000);
  });
});`,
  },
  {
    num: 18, slug: 'get-month-of-the-year', fn: 'getMonthOfTheYear',
    task: `Napisz funkcję \`getMonthOfTheYear(date: Date): string\`, która zwraca nazwę miesiąca po polsku (styczeń, luty, ...).

## Przykłady
- styczeń → \`'styczeń'\`
- grudzień → \`'grudzień'\``,
    signature: `export function getMonthOfTheYear(date: Date): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getMonthOfTheYear } from './exercise';

describe('getMonthOfTheYear', () => {
  it('styczeń', () => { expect(getMonthOfTheYear(new Date('2024-01-15'))).toBe('styczeń'); });
  it('czerwiec', () => { expect(getMonthOfTheYear(new Date('2024-06-01'))).toBe('czerwiec'); });
  it('grudzień', () => { expect(getMonthOfTheYear(new Date('2024-12-31'))).toBe('grudzień'); });
});`,
  },
  {
    num: 19, slug: 'add-days', fn: 'addDays',
    task: `Napisz funkcję \`addDays(date: Date, days: number): Date\`, która zwraca nową datę przesuniętą o \`days\` dni (może być ujemne). Nie modyfikuj oryginalnej daty.

## Przykłady
- 2024-01-31 + 1 dzień → 2024-02-01`,
    signature: `export function addDays(date: Date, days: number): Date {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { addDays } from './exercise';

describe('addDays', () => {
  it('dodaje dzień przez granicę miesiąca', () => {
    expect(addDays(new Date('2024-01-31'), 1)).toEqual(new Date('2024-02-01'));
  });
  it('odejmuje dni', () => {
    expect(addDays(new Date('2024-03-01'), -1)).toEqual(new Date('2024-02-29'));
  });
  it('nie modyfikuje oryginału', () => {
    const d = new Date('2024-01-01');
    addDays(d, 10);
    expect(d).toEqual(new Date('2024-01-01'));
  });
  it('0 dni zwraca tę samą datę', () => {
    expect(addDays(new Date('2024-06-15'), 0)).toEqual(new Date('2024-06-15'));
  });
});`,
  },
  {
    num: 20, slug: 'get-developers', fn: 'getDevelopers',
    task: `Napisz funkcję \`getDevelopers(users: { name: string; role: string }[]): string[]\`, która zwraca tablicę nazw (\`name\`) osób z rolą \`'developer'\`.

## Przykłady
- \`[{name:'Jan',role:'developer'},{name:'Anna',role:'designer'},{name:'Piotr',role:'developer'}]\` → \`['Jan', 'Piotr']\``,
    signature: `export interface User20 {
  name: string;
  role: string;
}

export function getDevelopers(users: User20[]): string[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getDevelopers } from './exercise';

describe('getDevelopers', () => {
  it('filtruje developerów', () => {
    const users = [
      { name: 'Jan', role: 'developer' },
      { name: 'Anna', role: 'designer' },
      { name: 'Piotr', role: 'developer' },
    ];
    expect(getDevelopers(users)).toEqual(['Jan', 'Piotr']);
  });
  it('brak developerów', () => {
    expect(getDevelopers([{ name: 'Anna', role: 'designer' }])).toEqual([]);
  });
  it('pusta tablica', () => { expect(getDevelopers([])).toEqual([]); });
});`,
  },
  {
    num: 21, slug: 'extract-elements-between-positions', fn: 'extractElementsBetweenPositions',
    task: `Napisz funkcję \`extractElementsBetweenPositions<T>(arr: T[], start: number, end: number): T[]\`, która zwraca elementy tablicy od indeksu \`start\` do \`end\` (wyłącznie).

## Przykłady
- \`extractElementsBetweenPositions([1,2,3,4,5], 1, 4)\` → \`[2, 3, 4]\``,
    signature: `export function extractElementsBetweenPositions<T>(arr: T[], start: number, end: number): T[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { extractElementsBetweenPositions } from './exercise';

describe('extractElementsBetweenPositions', () => {
  it('wycinek od start do end (wyłącznie)', () => {
    expect(extractElementsBetweenPositions([1, 2, 3, 4, 5], 1, 4)).toEqual([2, 3, 4]);
  });
  it('od początku', () => {
    expect(extractElementsBetweenPositions([1, 2, 3], 0, 2)).toEqual([1, 2]);
  });
  it('pusty wycinek', () => {
    expect(extractElementsBetweenPositions([1, 2, 3], 2, 2)).toEqual([]);
  });
});`,
  },
  {
    num: 22, slug: 'is-sorted', fn: 'isSorted',
    task: `Napisz funkcję \`isSorted(arr: number[]): boolean\`, która sprawdza czy tablica jest posortowana niemalejąco.

## Przykłady
- \`isSorted([1, 2, 3, 4])\` → \`true\`
- \`isSorted([1, 3, 2])\` → \`false\`
- \`isSorted([])\` → \`true\``,
    signature: `export function isSorted(arr: number[]): boolean {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { isSorted } from './exercise';

describe('isSorted', () => {
  it('posortowana', () => { expect(isSorted([1, 2, 3, 4])).toBe(true); });
  it('nieposortowana', () => { expect(isSorted([1, 3, 2])).toBe(false); });
  it('równe elementy ok', () => { expect(isSorted([5, 5, 5])).toBe(true); });
  it('pusta = true', () => { expect(isSorted([])).toBe(true); });
  it('pojedynczy element', () => { expect(isSorted([42])).toBe(true); });
});`,
  },
  {
    num: 23, slug: 'half-and-half', fn: 'halfAndHalf',
    task: `Napisz funkcję \`halfAndHalf(str: string): [string, string]\`, która dzieli string na dwie połówki. Jeśli długość jest nieparzysta, pierwsza część dostaje jeden znak więcej.

## Przykłady
- \`halfAndHalf('hello')\` → \`['hel', 'lo']\`
- \`halfAndHalf('abcd')\` → \`['ab', 'cd']\``,
    signature: `export function halfAndHalf(str: string): [string, string] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { halfAndHalf } from './exercise';

describe('halfAndHalf', () => {
  it('nieparzysta długość', () => { expect(halfAndHalf('hello')).toEqual(['hel', 'lo']); });
  it('parzysta długość', () => { expect(halfAndHalf('abcd')).toEqual(['ab', 'cd']); });
  it('pusty string', () => { expect(halfAndHalf('')).toEqual(['', '']); });
  it('jeden znak', () => { expect(halfAndHalf('x')).toEqual(['x', '']); });
});`,
  },
  {
    num: 24, slug: 'is-same-day', fn: 'isSameDay',
    task: `Napisz funkcję \`isSameDay(d1: Date, d2: Date): boolean\`, która sprawdza czy dwie daty to ten sam dzień (rok-miesiąc-dzień), ignorując godziny.

## Przykłady
- 2024-01-15 10:00 i 2024-01-15 23:59 → \`true\`
- 2024-01-15 i 2024-01-16 → \`false\``,
    signature: `export function isSameDay(d1: Date, d2: Date): boolean {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { isSameDay } from './exercise';

describe('isSameDay', () => {
  it('ten sam dzień, różne godziny', () => {
    expect(isSameDay(new Date('2024-01-15T10:00:00'), new Date('2024-01-15T23:59:00'))).toBe(true);
  });
  it('inny dzień', () => {
    expect(isSameDay(new Date('2024-01-15'), new Date('2024-01-16'))).toBe(false);
  });
  it('ten sam dzień inny rok', () => {
    expect(isSameDay(new Date('2024-01-15'), new Date('2025-01-15'))).toBe(false);
  });
});`,
  },
  {
    num: 25, slug: 'get-max-moving-distance', fn: 'getMaxMovingDistance',
    task: `Napisz funkcję \`getMaxMovingDistance(positions: number[]): number\`, która zwraca największą bezwzględną różnicę między kolejnymi pozycjami.

## Przykłady
- \`getMaxMovingDistance([0, 5, 2, 10])\` → \`8\` (z 2 do 10)`,
    signature: `export function getMaxMovingDistance(positions: number[]): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getMaxMovingDistance } from './exercise';

describe('getMaxMovingDistance', () => {
  it('największy skok', () => { expect(getMaxMovingDistance([0, 5, 2, 10])).toBe(8); });
  it('ruch wstecz też się liczy', () => { expect(getMaxMovingDistance([10, 2])).toBe(8); });
  it('jedna pozycja = 0', () => { expect(getMaxMovingDistance([5])).toBe(0); });
  it('pusta tablica = 0', () => { expect(getMaxMovingDistance([])).toBe(0); });
});`,
  },
];

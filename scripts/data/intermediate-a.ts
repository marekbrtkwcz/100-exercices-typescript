import type { ExerciseDef } from './types';

export const intermediateA: ExerciseDef[] = [
  {
    num: 26, slug: 'array-to-object', fn: 'arrayToObject',
    task: `Napisz funkcję \`arrayToObject(arr: string[]): Record<string, number>\`, która zamienia tablicę na obiekt: klucz = element, wartość = jego indeks.

## Przykłady
- \`arrayToObject(['a', 'b', 'c'])\` → \`{ a: 0, b: 1, c: 2 }\``,
    signature: `export function arrayToObject(arr: string[]): Record<string, number> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { arrayToObject } from './exercise';

describe('arrayToObject', () => {
  it('zamienia na obiekt z indeksami', () => { expect(arrayToObject(['a', 'b', 'c'])).toEqual({ a: 0, b: 1, c: 2 }); });
  it('pojedynczy element', () => { expect(arrayToObject(['x'])).toEqual({ x: 0 }); });
  it('pusta tablica', () => { expect(arrayToObject([])).toEqual({}); });
});`,
  },
  {
    num: 27, slug: 'pick-fields', fn: 'pickFields',
    task: `Napisz funkcję \`pickFields<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>\` zwracającą obiekt tylko z wybranymi polami.

## Przykłady
- \`pickFields({ a: 1, b: 'x', c: true }, ['a', 'c'])\` → \`{ a: 1, c: true }\``,
    signature: `export function pickFields<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { pickFields } from './exercise';

describe('pickFields', () => {
  it('wybiera pola', () => { expect(pickFields({ a: 1, b: 'x', c: true }, ['a', 'c'])).toEqual({ a: 1, c: true }); });
  it('pojedynczy klucz', () => { expect(pickFields({ name: 'Jan', age: 30 }, ['name'])).toEqual({ name: 'Jan' }); });
  it('puste klucze', () => { expect(pickFields({ a: 1, b: 2 }, [])).toEqual({}); });
  it('nie modyfikuje oryginału', () => {
    const o = { a: 1, b: 2 };
    pickFields(o, ['a']);
    expect(o).toEqual({ a: 1, b: 2 });
  });
});`,
  },
  {
    num: 28, slug: 'get-highest-paid-employee', fn: 'getHighestPaidEmployee',
    task: `Napisz funkcję \`getHighestPaidEmployee(employees: { name: string; salary: number }[]): string\`, która zwraca imię osoby z najwyższą pensją.

## Przykłady
- \`[{name:'Jan',salary:5000},{name:'Anna',salary:7000}]\` → \`'Anna'\``,
    signature: `export interface Employee28 {
  name: string;
  salary: number;
}

export function getHighestPaidEmployee(employees: Employee28[]): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getHighestPaidEmployee } from './exercise';

describe('getHighestPaidEmployee', () => {
  it('znajduje najwyższą pensję', () => {
    expect(getHighestPaidEmployee([{ name: 'Jan', salary: 5000 }, { name: 'Anna', salary: 7000 }])).toBe('Anna');
  });
  it('pojedynczy pracownik', () => {
    expect(getHighestPaidEmployee([{ name: 'Piotr', salary: 1 }])).toBe('Piotr');
  });
});`,
  },
  {
    num: 29, slug: 'flip-object', fn: 'flipObject',
    task: `Napisz funkcję \`flipObject(obj: Record<string, string>): Record<string, string>\`, która zamienia klucze z wartościami.

## Przykłady
- \`flipObject({ a: 'x', b: 'y' })\` → \`{ x: 'a', y: 'b' }\``,
    signature: `export function flipObject(obj: Record<string, string>): Record<string, string> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { flipObject } from './exercise';

describe('flipObject', () => {
  it('zamienia klucze z wartościami', () => { expect(flipObject({ a: 'x', b: 'y' })).toEqual({ x: 'a', y: 'b' }); });
  it('pusty obiekt', () => { expect(flipObject({})).toEqual({}); });
});`,
  },
  {
    num: 30, slug: 'diff-arrays', fn: 'diffArrays',
    task: `Napisz funkcję \`diffArrays<T>(a: T[], b: T[]): T[]\`, która zwraca elementy występujące w \`a\` ale nie w \`b\`.

## Przykłady
- \`diffArrays([1, 2, 3, 4], [2, 4])\` → \`[1, 3]\``,
    signature: `export function diffArrays<T>(a: T[], b: T[]): T[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { diffArrays } from './exercise';

describe('diffArrays', () => {
  it('różnica tablic', () => { expect(diffArrays([1, 2, 3, 4], [2, 4])).toEqual([1, 3]); });
  it('b puste = zwraca a', () => { expect(diffArrays([1, 2], [])).toEqual([1, 2]); });
  it('a puste = pusta', () => { expect(diffArrays([], [1])).toEqual([]); });
  it('stringi', () => { expect(diffArrays(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']); });
});`,
  },
  {
    num: 31, slug: 'count-page-views', fn: 'countPageViews',
    task: `Napisz funkcję \`countPageViews(logs: { page: string; timestamp: number }[]): Record<string, number>\`, która zlicza wyświetlenia każdej strony.

## Przykłady
- \`[{page:'/home',timestamp:1},{page:'/home',timestamp:2},{page:'/about',timestamp:3}]\` → \`{ '/home': 2, '/about': 1 }\``,
    signature: `export interface PageView {
  page: string;
  timestamp: number;
}

export function countPageViews(logs: PageView[]): Record<string, number> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { countPageViews } from './exercise';

describe('countPageViews', () => {
  it('zlicza wyświetlenia', () => {
    const logs = [
      { page: '/home', timestamp: 1 },
      { page: '/home', timestamp: 2 },
      { page: '/about', timestamp: 3 },
    ];
    expect(countPageViews(logs)).toEqual({ '/home': 2, '/about': 1 });
  });
  it('puste logi', () => { expect(countPageViews([])).toEqual({}); });
});`,
  },
  {
    num: 32, slug: 'linked-numbers-sum', fn: 'linkedNumbersSum',
    task: `Napisz funkcję \`linkedNumbersSum(obj: Record<string, number | Record<string, number>>): number\`, która sumuje wszystkie liczby w płaskim lub zagnieżdżonym obiekcie.

## Przykłady
- \`linkedNumbersSum({ a: 1, b: { c: 2, d: 3 } })\` → \`6\``,
    signature: `export function linkedNumbersSum(obj: Record<string, number | Record<string, number>>): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { linkedNumbersSum } from './exercise';

describe('linkedNumbersSum', () => {
  it('sumuje zagnieżdżony obiekt', () => { expect(linkedNumbersSum({ a: 1, b: { c: 2, d: 3 } })).toBe(6); });
  it('płaski obiekt', () => { expect(linkedNumbersSum({ a: 5, b: 10 })).toBe(15); });
  it('pusty obiekt = 0', () => { expect(linkedNumbersSum({})).toBe(0); });
});`,
  },
  {
    num: 33, slug: 'get-missing-contacts', fn: 'getMissingContacts',
    task: `Napisz funkcję \`getMissingContacts(contacts: { name: string; phone?: string; email?: string }[]): string[]\`, która zwraca nazwy kontaktów, którym brakuje telefonu LUB emaila.

## Przykłady
- kontakt z tylko telefonem → ląduje na liście`,
    signature: `export interface Contact33 {
  name: string;
  phone?: string;
  email?: string;
}

export function getMissingContacts(contacts: Contact33[]): string[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getMissingContacts } from './exercise';

describe('getMissingContacts', () => {
  it('brak telefonu lub emaila', () => {
    const contacts = [
      { name: 'Jan', phone: '123', email: 'jan@x.pl' },
      { name: 'Anna', phone: '456' },
      { name: 'Piotr' },
    ];
    expect(getMissingContacts(contacts)).toEqual(['Anna', 'Piotr']);
  });
  it('wszyscy kompletni', () => {
    expect(getMissingContacts([{ name: 'Jan', phone: '1', email: 'j@x' }])).toEqual([]);
  });
});`,
  },
  {
    num: 34, slug: 'remove-first-and-last', fn: 'removeFirstAndLast',
    task: `Napisz funkcję \`removeFirstAndLast<T>(arr: T[]): T[]\`, która zwraca nową tablicę bez pierwszego i ostatniego elementu.

## Przykłady
- \`removeFirstAndLast([1, 2, 3, 4])\` → \`[2, 3]\`
- \`removeFirstAndLast([1, 2])\` → \`[]\``,
    signature: `export function removeFirstAndLast<T>(arr: T[]): T[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { removeFirstAndLast } from './exercise';

describe('removeFirstAndLast', () => {
  it('usuwa pierwszy i ostatni', () => { expect(removeFirstAndLast([1, 2, 3, 4])).toEqual([2, 3]); });
  it('dwa elementy = pusta', () => { expect(removeFirstAndLast([1, 2])).toEqual([]); });
  it('jeden element = pusta', () => { expect(removeFirstAndLast([1])).toEqual([]); });
  it('pusta = pusta', () => { expect(removeFirstAndLast([])).toEqual([]); });
});`,
  },
  {
    num: 35, slug: 'biggest-power-of-2', fn: 'biggestPowerOf2',
    task: `Napisz funkcję \`biggestPowerOf2(n: number): number\`, która zwraca największą potęgę 2 mniejszą lub równą \`n\`.

## Przykłady
- \`biggestPowerOf2(10)\` → \`8\`
- \`biggestPowerOf2(16)\` → \`16\`
- \`biggestPowerOf2(1)\` → \`1\``,
    signature: `export function biggestPowerOf2(n: number): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { biggestPowerOf2 } from './exercise';

describe('biggestPowerOf2', () => {
  it('10 → 8', () => { expect(biggestPowerOf2(10)).toBe(8); });
  it('16 → 16', () => { expect(biggestPowerOf2(16)).toBe(16); });
  it('1 → 1', () => { expect(biggestPowerOf2(1)).toBe(1); });
  it('100 → 64', () => { expect(biggestPowerOf2(100)).toBe(64); });
});`,
  },
  {
    num: 36, slug: 'are-values-unique', fn: 'areValuesUnique',
    task: `Napisz funkcję \`areValuesUnique<T>(arr: T[]): boolean\`, która sprawdza czy wszystkie elementy tablicy są unikalne.

## Przykłady
- \`areValuesUnique([1, 2, 3])\` → \`true\`
- \`areValuesUnique([1, 2, 1])\` → \`false\``,
    signature: `export function areValuesUnique<T>(arr: T[]): boolean {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { areValuesUnique } from './exercise';

describe('areValuesUnique', () => {
  it('unikalne', () => { expect(areValuesUnique([1, 2, 3])).toBe(true); });
  it('duplikat', () => { expect(areValuesUnique([1, 2, 1])).toBe(false); });
  it('pusta = true', () => { expect(areValuesUnique([])).toBe(true); });
  it('stringi', () => { expect(areValuesUnique(['a', 'b', 'a'])).toBe(false); });
});`,
  },
  {
    num: 37, slug: 'fetch-github-name', fn: 'fetchGitHubName',
    task: `Napisz funkcję \`fetchGitHubName(username: string): Promise<string>\`, która pobiera z API GitHub (\`https://api.github.com/users/{username}\`) i zwraca pole \`name\` z odpowiedzi. W testach zamockuj \`fetch\`.

## Przykłady
- \`await fetchGitHubName('octocat')\` → nazwa z profilu GitHub`,
    signature: `export async function fetchGitHubName(username: string): Promise<string> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchGitHubName } from './exercise';

describe('fetchGitHubName', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('zwraca name z odpowiedzi GitHub', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => ({ name: 'The Octocat' }),
    }));
    expect(await fetchGitHubName('octocat')).toBe('The Octocat');
  });

  it('wywołuje właściwy URL', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ json: async () => ({ name: 'X' }) });
    vi.stubGlobal('fetch', mockFetch);
    await fetchGitHubName('marek');
    expect(mockFetch).toHaveBeenCalledWith('https://api.github.com/users/marek');
  });
});`,
  },
  {
    num: 38, slug: 'rotate-array', fn: 'rotateArray',
    task: `Napisz funkcję \`rotateArray<T>(arr: T[], n: number): T[]\`, która przesuwa elementy tablicy o \`n\` pozycji w prawo (ostatnie lądują na początku). \`n\` może być ujemne (w lewo).

## Przykłady
- \`rotateArray([1, 2, 3, 4], 1)\` → \`[4, 1, 2, 3]\`
- \`rotateArray([1, 2, 3, 4], -1)\` → \`[2, 3, 4, 1]\``,
    signature: `export function rotateArray<T>(arr: T[], n: number): T[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { rotateArray } from './exercise';

describe('rotateArray', () => {
  it('w prawo o 1', () => { expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]); });
  it('w lewo o 1', () => { expect(rotateArray([1, 2, 3, 4], -1)).toEqual([2, 3, 4, 1]); });
  it('o długość tablicy = bez zmian', () => { expect(rotateArray([1, 2, 3], 3)).toEqual([1, 2, 3]); });
  it('pusta tablica', () => { expect(rotateArray([], 5)).toEqual([]); });
});`,
  },
  {
    num: 39, slug: 'get-days-in-month', fn: 'getDaysInMonth',
    task: `Napisz funkcję \`getDaysInMonth(year: number, month: number): number\`, która zwraca liczbę dni w danym miesiącu (month 1-12). Uwzględnij rok przestępny dla lutego.

## Przykłady
- \`getDaysInMonth(2024, 2)\` → \`29\` (przestępny)
- \`getDaysInMonth(2023, 2)\` → \`28\`
- \`getDaysInMonth(2024, 4)\` → \`30\``,
    signature: `export function getDaysInMonth(year: number, month: number): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getDaysInMonth } from './exercise';

describe('getDaysInMonth', () => {
  it('luty przestępny', () => { expect(getDaysInMonth(2024, 2)).toBe(29); });
  it('luty zwykły', () => { expect(getDaysInMonth(2023, 2)).toBe(28); });
  it('kwiecień = 30', () => { expect(getDaysInMonth(2024, 4)).toBe(30); });
  it('styczeń = 31', () => { expect(getDaysInMonth(2024, 1)).toBe(31); });
  it('luty 2100 nieprzestępny', () => { expect(getDaysInMonth(2100, 2)).toBe(28); });
});`,
  },
  {
    num: 40, slug: 'format-date-time', fn: 'formatDateTime',
    task: `Napisz funkcję \`formatDateTime(date: Date): string\`, która formatuje datę jako \`'DD.MM.YYYY HH:mm'\` (z wiodącymi zerami).

## Przykłady
- 2024-01-05 09:07 → \`'05.01.2024 09:07'\``,
    signature: `export function formatDateTime(date: Date): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { formatDateTime } from './exercise';

describe('formatDateTime', () => {
  it('formatuje z wiodącymi zerami', () => {
    expect(formatDateTime(new Date('2024-01-05T09:07:00'))).toBe('05.01.2024 09:07');
  });
  it('grudzień, północ', () => {
    expect(formatDateTime(new Date('2024-12-31T00:00:00'))).toBe('31.12.2024 00:00');
  });
});`,
  },
  {
    num: 41, slug: 'to-decimal', fn: 'toDecimal',
    task: `Napisz funkcję \`toDecimal(num: number, places: number): number\`, która zaokrągla liczbę do \`places\` miejsc po przecinku.

## Przykłady
- \`toDecimal(3.14159, 2)\` → \`3.14\`
- \`toDecimal(1.005, 2)\` → \`1.01\` (lub 1, zależnie od implementacji — użyj Math.round)`,
    signature: `export function toDecimal(num: number, places: number): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { toDecimal } from './exercise';

describe('toDecimal', () => {
  it('2 miejsca', () => { expect(toDecimal(3.14159, 2)).toBe(3.14); });
  it('0 miejsc = liczba całkowita', () => { expect(toDecimal(3.7, 0)).toBe(4); });
  it('3 miejsca', () => { expect(toDecimal(1.23456, 3)).toBe(1.235); });
});`,
  },
  {
    num: 42, slug: 'compare-sets', fn: 'compareSets',
    task: `Napisz funkcję \`compareSets<T>(a: Set<T>, b: Set<T>): { onlyInA: T[]; onlyInB: T[]; common: T[] }\`, która porównuje dwa zbiory.

## Przykłady
- a={1,2,3}, b={2,3,4} → onlyInA=[1], onlyInB=[4], common=[2,3]`,
    signature: `export interface SetComparison<T> {
  onlyInA: T[];
  onlyInB: T[];
  common: T[];
}

export function compareSets<T>(a: Set<T>, b: Set<T>): SetComparison<T> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { compareSets } from './exercise';

describe('compareSets', () => {
  it('porównuje zbiory', () => {
    expect(compareSets(new Set([1, 2, 3]), new Set([2, 3, 4]))).toEqual({
      onlyInA: [1],
      onlyInB: [4],
      common: [2, 3],
    });
  });
  it('identyczne zbiory', () => {
    expect(compareSets(new Set([1]), new Set([1]))).toEqual({ onlyInA: [], onlyInB: [], common: [1] });
  });
});`,
  },
  {
    num: 43, slug: 'group-birthdays', fn: 'groupBirthdays',
    task: `Napisz funkcję \`groupBirthdays(people: { name: string; birthday: Date }[]): Record<string, string[]>\`, która grupuje osoby po miesiącu urodzenia (nazwa miesiąca po polsku).

## Przykłady
- styczeń → osoby urodzone w styczniu`,
    signature: `export interface Person43 {
  name: string;
  birthday: Date;
}

export function groupBirthdays(people: Person43[]): Record<string, string[]> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { groupBirthdays } from './exercise';

describe('groupBirthdays', () => {
  it('grupuje po miesiącu', () => {
    const people = [
      { name: 'Jan', birthday: new Date('1990-01-15') },
      { name: 'Anna', birthday: new Date('1985-01-20') },
      { name: 'Piotr', birthday: new Date('1992-06-10') },
    ];
    expect(groupBirthdays(people)).toEqual({
      styczeń: ['Jan', 'Anna'],
      czerwiec: ['Piotr'],
    });
  });
  it('pusta tablica', () => { expect(groupBirthdays([])).toEqual({}); });
});`,
  },
  {
    num: 44, slug: 'diff-reactions', fn: 'diffReactions',
    task: `Napisz funkcję \`diffReactions(before: Record<string, number>, after: Record<string, number>): Record<string, number>\`, która zwraca tylko te reakcje, które zmieniły wartość (lub się pojawiły/zniknęły). Wynik: nowa wartość dla zmienionych, 0 dla usuniętych.

## Przykłady
- before={like:5,love:2}, after={like:5,love:3,haha:1} → {love:3, haha:1}`,
    signature: `export function diffReactions(before: Record<string, number>, after: Record<string, number>): Record<string, number> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { diffReactions } from './exercise';

describe('diffReactions', () => {
  it('zwraca zmienione reakcje', () => {
    expect(diffReactions({ like: 5, love: 2 }, { like: 5, love: 3, haha: 1 })).toEqual({ love: 3, haha: 1 });
  });
  it('usunięta reakcja = 0', () => {
    expect(diffReactions({ like: 5 }, {})).toEqual({ like: 0 });
  });
  it('bez zmian = pusty obiekt', () => {
    expect(diffReactions({ like: 5 }, { like: 5 })).toEqual({});
  });
});`,
  },
  {
    num: 45, slug: 'rgb-to-hex', fn: 'rgbToHex',
    task: `Napisz funkcję \`rgbToHex(r: number, g: number, b: number): string\`, która zamienia kolor RGB (0-255) na hex (#RRGGBB).

## Przykłady
- \`rgbToHex(255, 0, 0)\` → \`'#ff0000'\`
- \`rgbToHex(0, 255, 128)\` → \`'#00ff80'\``,
    signature: `export function rgbToHex(r: number, g: number, b: number): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { rgbToHex } from './exercise';

describe('rgbToHex', () => {
  it('czerwony', () => { expect(rgbToHex(255, 0, 0)).toBe('#ff0000'); });
  it('zielony z niepełnym bajtem', () => { expect(rgbToHex(0, 255, 128)).toBe('#00ff80'); });
  it('czarny', () => { expect(rgbToHex(0, 0, 0)).toBe('#000000'); });
  it('biały', () => { expect(rgbToHex(255, 255, 255)).toBe('#ffffff'); });
});`,
  },
  {
    num: 46, slug: 'time-ago', fn: 'timeAgo',
    task: `Napisz funkcję \`timeAgo(date: Date, now: Date): string\`, która zwraca czas względny po polsku: 'x sekund temu', 'x minut temu', 'x godzin temu', 'x dni temu'.

## Przykłady
- 30 sekund różnicy → \`'30 sekund temu'\`
- 5 minut → \`'5 minut temu'\``,
    signature: `export function timeAgo(date: Date, now: Date): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { timeAgo } from './exercise';

const now = new Date('2024-06-15T12:00:00');

describe('timeAgo', () => {
  it('sekundy', () => { expect(timeAgo(new Date('2024-06-15T11:59:30'), now)).toBe('30 sekund temu'); });
  it('minuty', () => { expect(timeAgo(new Date('2024-06-15T11:55:00'), now)).toBe('5 minut temu'); });
  it('godziny', () => { expect(timeAgo(new Date('2024-06-15T09:00:00'), now)).toBe('3 godzin temu'); });
  it('dni', () => { expect(timeAgo(new Date('2024-06-12T12:00:00'), now)).toBe('3 dni temu'); });
});`,
  },
  {
    num: 47, slug: 'custom-array-sort', fn: 'customArraySort',
    task: `Napisz funkcję \`customArraySort(arr: number[]): number[]\`, która sortuje tablicę rosnąco BEZ użycia \`.sort()\` (np. przez sortowanie bąbelkowe). Zwraca nową tablicę.

## Przykłady
- \`customArraySort([3, 1, 2])\` → \`[1, 2, 3]\``,
    signature: `export function customArraySort(arr: number[]): number[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { customArraySort } from './exercise';

describe('customArraySort', () => {
  it('sortuje rosnąco', () => { expect(customArraySort([3, 1, 2])).toEqual([1, 2, 3]); });
  it('już posortowana', () => { expect(customArraySort([1, 2, 3])).toEqual([1, 2, 3]); });
  it('nie modyfikuje oryginału', () => {
    const arr = [3, 1, 2];
    customArraySort(arr);
    expect(arr).toEqual([3, 1, 2]);
  });
  it('ujemne liczby', () => { expect(customArraySort([0, -1, 5, -10])).toEqual([-10, -1, 0, 5]); });
});`,
  },
  {
    num: 48, slug: 'move-items', fn: 'moveItems',
    task: `Napisz funkcję \`moveItems<T>(arr: T[], from: number, to: number): T[]\`, która przenosi element z indeksu \`from\` na indeks \`to\` w nowej tablicy.

## Przykłady
- \`moveItems(['a', 'b', 'c', 'd'], 0, 2)\` → \`['b', 'c', 'a', 'd']\``,
    signature: `export function moveItems<T>(arr: T[], from: number, to: number): T[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { moveItems } from './exercise';

describe('moveItems', () => {
  it('przenosi element', () => { expect(moveItems(['a', 'b', 'c', 'd'], 0, 2)).toEqual(['b', 'c', 'a', 'd']); });
  it('przenosi w lewo', () => { expect(moveItems(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b']); });
  it('nie modyfikuje oryginału', () => {
    const arr = ['a', 'b', 'c'];
    moveItems(arr, 0, 2);
    expect(arr).toEqual(['a', 'b', 'c']);
  });
});`,
  },
  {
    num: 49, slug: 'is-valid-password', fn: 'isValidPassword',
    task: `Napisz funkcję \`isValidPassword(password: string): boolean\`. Hasło jest ważne gdy: min. 8 znaków, zawiera wielką literę, małą literę, cyfrę i znak specjalny (!@#$%^&*).

## Przykłady
- \`isValidPassword('Haslo123!')\` → \`true\`
- \`isValidPassword('slabe')\` → \`false\``,
    signature: `export function isValidPassword(password: string): boolean {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { isValidPassword } from './exercise';

describe('isValidPassword', () => {
  it('dobre hasło', () => { expect(isValidPassword('Haslo123!')).toBe(true); });
  it('za krótkie', () => { expect(isValidPassword('Ha1!')).toBe(false); });
  it('bez wielkiej litery', () => { expect(isValidPassword('haslo123!')).toBe(false); });
  it('bez cyfry', () => { expect(isValidPassword('Haslo!abc')).toBe(false); });
  it('bez znaku specjalnego', () => { expect(isValidPassword('Haslo1234')).toBe(false); });
});`,
  },
  {
    num: 50, slug: 'merge-sorted-arrays', fn: 'mergeSortedArrays',
    task: `Napisz funkcję \`mergeSortedArrays(a: number[], b: number[]): number[]\`, która scala dwie posortowane tablice w jedną posortowaną (bez \`.sort()\` na wyniku).

## Przykłady
- \`mergeSortedArrays([1, 3, 5], [2, 4, 6])\` → \`[1, 2, 3, 4, 5, 6]\``,
    signature: `export function mergeSortedArrays(a: number[], b: number[]): number[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { mergeSortedArrays } from './exercise';

describe('mergeSortedArrays', () => {
  it('scala posortowane', () => { expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]); });
  it('jedna pusta', () => { expect(mergeSortedArrays([], [1, 2])).toEqual([1, 2]); });
  it('obie puste', () => { expect(mergeSortedArrays([], [])).toEqual([]); });
  it('z duplikatami', () => { expect(mergeSortedArrays([1, 2], [2, 3])).toEqual([1, 2, 2, 3]); });
});`,
  },
];

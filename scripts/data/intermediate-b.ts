import type { ExerciseDef } from './types';

export const intermediateB: ExerciseDef[] = [
  {
    num: 51, slug: 'ascending-split', fn: 'ascendingSplit',
    task: `Napisz funkcję \`ascendingSplit(arr: number[]): number[][]\`, która dzieli posortowaną tablicę na podtablice rosnących ciągów.

## Przykłady
- \`ascendingSplit([1, 2, 3, 1, 2, 5, 2])\` → \`[[1,2,3],[1,2,5],[2]]\``,
    signature: `export function ascendingSplit(arr: number[]): number[][] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { ascendingSplit } from './exercise';

describe('ascendingSplit', () => {
  it('dzieli na rosnące ciągi', () => {
    expect(ascendingSplit([1, 2, 3, 1, 2, 5, 2])).toEqual([[1, 2, 3], [1, 2, 5], [2]]);
  });
  it('cała posortowana = jedna grupa', () => { expect(ascendingSplit([1, 2, 3])).toEqual([[1, 2, 3]]); });
  it('pusta tablica', () => { expect(ascendingSplit([])).toEqual([]); });
});`,
  },
  {
    num: 52, slug: 'find-unique-number', fn: 'findUniqueNumber',
    task: `Napisz funkcję \`findUniqueNumber(arr: number[]): number\`, która znajduje liczbę występującą dokładnie raz (wszystkie inne występują dokładnie dwa razy).

## Przykłady
- \`findUniqueNumber([1, 2, 1, 3, 2])\` → \`3\``,
    signature: `export function findUniqueNumber(arr: number[]): number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { findUniqueNumber } from './exercise';

describe('findUniqueNumber', () => {
  it('znajduje unikalną', () => { expect(findUniqueNumber([1, 2, 1, 3, 2])).toBe(3); });
  it('inna kolejność', () => { expect(findUniqueNumber([4, 4, 7, 5, 5])).toBe(7); });
  it('pojedynczy element', () => { expect(findUniqueNumber([9])).toBe(9); });
});`,
  },
  {
    num: 53, slug: 'parse-query-params', fn: 'parseQueryParams',
    task: `Napisz funkcję \`parseQueryParams(url: string): Record<string, string>\`, która parsuje parametry z query stringa URL-a.

## Przykłady
- \`parseQueryParams('https://x.pl?a=1&b=hello')\` → \`{ a: '1', b: 'hello' }\`
- bez query → \`{}\``,
    signature: `export function parseQueryParams(url: string): Record<string, string> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { parseQueryParams } from './exercise';

describe('parseQueryParams', () => {
  it('parsuje parametry', () => {
    expect(parseQueryParams('https://x.pl?a=1&b=hello')).toEqual({ a: '1', b: 'hello' });
  });
  it('bez query stringa', () => { expect(parseQueryParams('https://x.pl')).toEqual({}); });
  it('jeden parametr', () => { expect(parseQueryParams('https://x.pl?search=ts')).toEqual({ search: 'ts' }); });
});`,
  },
  {
    num: 54, slug: 'simple-compression', fn: 'simpleCompression',
    task: `Napisz funkcję \`simpleCompression(str: string): string\`, która kompresuje string przez zamianę powtarzających się znaków na znak + liczbę, np. 'aaabbc' → 'a3b2c1'. Jeśli wynik nie jest krótszy, zwraca oryginał.

## Przykłady
- \`simpleCompression('aaabbc')\` → \`'a3b2c1'\`
- \`simpleCompression('abc')\` → \`'abc'\` (krótszy oryginał)`,
    signature: `export function simpleCompression(str: string): string {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { simpleCompression } from './exercise';

describe('simpleCompression', () => {
  it('kompresuje powtórzenia', () => { expect(simpleCompression('aaabbc')).toBe('a3b2c1'); });
  it('bez powtórzeń zwraca oryginał', () => { expect(simpleCompression('abc')).toBe('abc'); });
  it('pusty string', () => { expect(simpleCompression('')).toBe(''); });
  it('same powtórzenia', () => { expect(simpleCompression('aaaa')).toBe('a4'); });
});`,
  },
  {
    num: 55, slug: 'partition-array', fn: 'partitionArray',
    task: `Napisz funkcję \`partitionArray<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]]\`, która dzieli tablicę na dwie: elementy spełniające predykat i nie.

## Przykłady
- \`partitionArray([1,2,3,4], x => x % 2 === 0)\` → \`[[2,4],[1,3]]\``,
    signature: `export function partitionArray<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { partitionArray } from './exercise';

describe('partitionArray', () => {
  it('dzieli na parzyste i nieparzyste', () => {
    expect(partitionArray([1, 2, 3, 4], x => x % 2 === 0)).toEqual([[2, 4], [1, 3]]);
  });
  it('pusta tablica', () => { expect(partitionArray([], () => true)).toEqual([[], []]); });
  it('wszystkie spełniają', () => {
    expect(partitionArray([2, 4], x => x > 0)).toEqual([[2, 4], []]);
  });
});`,
  },
  {
    num: 56, slug: 'find-free-calendar-spots', fn: 'findFreeCalendarSpots',
    task: `Napisz funkcję \`findFreeCalendarSpots(busy: [number, number][], dayStart: number, dayEnd: number, minDuration: number): [number, number][]\`, która znajduje wolne przedziały czasu w ciągu dnia o długości min. \`minDuration\`.

## Przykłady
- busy=[[9,10],[11,12]], dayStart=8, dayEnd=17, minDuration=60 → [[8,9],[10,11],[12,17]]`,
    signature: `export function findFreeCalendarSpots(
  busy: [number, number][],
  dayStart: number,
  dayEnd: number,
  minDuration: number
): [number, number][] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { findFreeCalendarSpots } from './exercise';

describe('findFreeCalendarSpots', () => {
  it('znajduje wolne sloty', () => {
    expect(findFreeCalendarSpots([[9, 10], [11, 12]], 8, 17, 60)).toEqual([[8, 9], [10, 11], [12, 17]]);
  });
  it('brak zajętości = cały dzień', () => {
    expect(findFreeCalendarSpots([], 9, 17, 30)).toEqual([[9, 17]]);
  });
  it('zbyt krótkie sloty są pomijane', () => {
    expect(findFreeCalendarSpots([[9, 9.5]], 9, 17, 60)).toEqual([[9.5, 17]]);
  });
});`,
  },
  {
    num: 57, slug: 'merge-intervals', fn: 'mergeIntervals',
    task: `Napisz funkcję \`mergeIntervals(intervals: [number, number][]): [number, number][]\`, która scala nakładające się przedziały.

## Przykłady
- \`mergeIntervals([[1,3],[2,6],[8,10],[15,18]])\` → \`[[1,6],[8,10],[15,18]]\`
- \`mergeIntervals([[1,4],[4,5]])\` → \`[[1,5]]\``,
    signature: `export function mergeIntervals(intervals: [number, number][]): [number, number][] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { mergeIntervals } from './exercise';

describe('mergeIntervals', () => {
  it('scala nakładające się', () => {
    expect(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
  });
  it('stykające się też scala', () => { expect(mergeIntervals([[1, 4], [4, 5]])).toEqual([[1, 5]]); });
  it('pusta tablica', () => { expect(mergeIntervals([])).toEqual([]); });
  it('wszystko w jednym', () => { expect(mergeIntervals([[1, 10], [2, 5], [3, 8]])).toEqual([[1, 10]]); });
});`,
  },
  {
    num: 58, slug: 'simple-url-parser', fn: 'simpleURLParser',
    task: `Napisz funkcję \`simpleURLParser(url: string)\`, która zwraca obiekt z polami \`protocol\`, \`host\`, \`path\`, \`query\` (query jako obiekt).

## Przykłady
- \`'https://example.com:8080/api/users?page=2'\` → \`{ protocol: 'https', host: 'example.com:8080', path: '/api/users', query: { page: '2' } }\``,
    signature: `export interface ParsedURL {
  protocol: string;
  host: string;
  path: string;
  query: Record<string, string>;
}

export function simpleURLParser(url: string): ParsedURL {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { simpleURLParser } from './exercise';

describe('simpleURLParser', () => {
  it('parsuje pełny URL', () => {
    expect(simpleURLParser('https://example.com:8080/api/users?page=2')).toEqual({
      protocol: 'https',
      host: 'example.com:8080',
      path: '/api/users',
      query: { page: '2' },
    });
  });
  it('bez query', () => {
    expect(simpleURLParser('http://localhost/')).toEqual({
      protocol: 'http',
      host: 'localhost',
      path: '/',
      query: {},
    });
  });
});`,
  },
  {
    num: 59, slug: 'pick-nested', fn: 'pickNested',
    task: `Napisz funkcję \`pickNested(obj: Record<string, unknown>, path: string): unknown\`, która pobiera wartość z zagnieżdżonego obiektu po ścieżce 'a.b.c'. Jeśli ścieżka nie istnieje, zwraca undefined.

## Przykłady
- \`pickNested({ a: { b: { c: 42 } } }, 'a.b.c')\` → \`42\``,
    signature: `export function pickNested(obj: Record<string, unknown>, path: string): unknown {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { pickNested } from './exercise';

describe('pickNested', () => {
  it('pobiera zagnieżdżoną wartość', () => {
    expect(pickNested({ a: { b: { c: 42 } } }, 'a.b.c')).toBe(42);
  });
  it('płaska ścieżka', () => {
    expect(pickNested({ x: 'hello' }, 'x')).toBe('hello');
  });
  it('nieistniejąca ścieżka = undefined', () => {
    expect(pickNested({ a: {} }, 'a.b.c')).toBeUndefined();
  });
});`,
  },
  {
    num: 60, slug: 'fetch-names-of-all-public-repos', fn: 'fetchNamesOfAllPublicRepos',
    task: `Napisz funkcję \`fetchNamesOfAllPublicRepos(username: string): Promise<string[]>\`, która pobiera wszystkie publiczne repozytoria użytkownika GitHub i zwraca ich nazwy. W testach zamockuj \`fetch\`.

## Przykłady
- mock zwraca \`[{name:'repo1'},{name:'repo2'}]\` → \`['repo1', 'repo2']\``,
    signature: `export async function fetchNamesOfAllPublicRepos(username: string): Promise<string[]> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchNamesOfAllPublicRepos } from './exercise';

describe('fetchNamesOfAllPublicRepos', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('zwraca nazwy repozytoriów', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => [{ name: 'repo1' }, { name: 'repo2' }],
    }));
    expect(await fetchNamesOfAllPublicRepos('marek')).toEqual(['repo1', 'repo2']);
  });

  it('wywołuje właściwy URL', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ json: async () => [] });
    vi.stubGlobal('fetch', mockFetch);
    await fetchNamesOfAllPublicRepos('marek');
    expect(mockFetch).toHaveBeenCalledWith('https://api.github.com/users/marek/repos');
  });
});`,
  },
  {
    num: 61, slug: 'get-paginated-data', fn: 'getPaginatedData',
    task: `Napisz funkcję \`getPaginatedData<T>(fetchPage: (page: number) => Promise<T[]>, totalPages: number): Promise<T[]>\`, która pobiera wszystkie strony i zwraca połączone dane. W testach zamockuj \`fetchPage\`.

## Przykłady
- 3 strony po 2 elementy → tablica 6 elementów`,
    signature: `export async function getPaginatedData<T>(
  fetchPage: (page: number) => Promise<T[]>,
  totalPages: number
): Promise<T[]> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi } from 'vitest';
import { getPaginatedData } from './exercise';

describe('getPaginatedData', () => {
  it('łączy wszystkie strony', async () => {
    const fetchPage = vi.fn(async (page: number) => [page * 10, page * 10 + 1]);
    expect(await getPaginatedData(fetchPage, 3)).toEqual([10, 11, 20, 21, 30, 31]);
  });
  it('wywołuje fetchPage dla każdej strony 1..n', async () => {
    const fetchPage = vi.fn(async () => [] as number[]);
    await getPaginatedData(fetchPage, 5);
    expect(fetchPage).toHaveBeenCalledTimes(5);
    expect(fetchPage).toHaveBeenNthCalledWith(1, 1);
    expect(fetchPage).toHaveBeenNthCalledWith(5, 5);
  });
  it('0 stron = pusta tablica', async () => {
    const fetchPage = vi.fn(async () => [1]);
    expect(await getPaginatedData(fetchPage, 0)).toEqual([]);
    expect(fetchPage).not.toHaveBeenCalled();
  });
});`,
  },
  {
    num: 62, slug: 'get-check-password', fn: 'getCheckPassword',
    task: `Napisz funkcję \`getCheckPassword(validator: (pw: string) => boolean): (pw: string) => boolean\`, która zwraca funkcję sprawdzającą hasło — ale zwraca \`true\` tylko gdy walidator zwróci \`true\`.

To proste "opakowanie" — celem jest zrozumienie funkcji wyższego rzędu.

## Przykłady
- \`const check = getCheckPassword(pw => pw.length > 8)\`
- \`check('długie hasło')\` → \`true\``,
    signature: `export function getCheckPassword(validator: (pw: string) => boolean): (pw: string) => boolean {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getCheckPassword } from './exercise';

describe('getCheckPassword', () => {
  it('zwraca funkcję która używa walidatora', () => {
    const check = getCheckPassword(pw => pw.length > 8);
    expect(check('długie hasło')).toBe(true);
    expect(check('krótkie')).toBe(false);
  });
});`,
  },
  {
    num: 63, slug: 'get-add5', fn: 'getAdd5',
    task: `Napisz funkcję \`getAdd5(): (x: number) => number\`, która zwraca funkcję dodającą 5 do argumentu.

## Przykłady
- \`const add5 = getAdd5(); add5(3)\` → \`8\``,
    signature: `export function getAdd5(): (x: number) => number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getAdd5 } from './exercise';

describe('getAdd5', () => {
  it('dodaje 5', () => { expect(getAdd5()(3)).toBe(8); });
  it('działa z ujemnymi', () => { expect(getAdd5()(-5)).toBe(0); });
});`,
  },
  {
    num: 64, slug: 'get-add-n', fn: 'getAddN',
    task: `Napisz funkcję \`getAddN(n: number): (x: number) => number\`, która zwraca funkcję dodającą \`n\`.

## Przykłady
- \`const add10 = getAddN(10); add10(5)\` → \`15\``,
    signature: `export function getAddN(n: number): (x: number) => number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getAddN } from './exercise';

describe('getAddN', () => {
  it('dodaje n', () => { expect(getAddN(10)(5)).toBe(15); });
  it('n = 0', () => { expect(getAddN(0)(5)).toBe(5); });
  it('n ujemne', () => { expect(getAddN(-3)(10)).toBe(7); });
});`,
  },
  {
    num: 65, slug: 'fetch-closed-pull-requests', fn: 'fetchClosedPullRequests',
    task: `Napisz funkcję \`fetchClosedPullRequests(repo: string): Promise<string[]>\`, która pobiera zamknięte PR-y z GitHub API i zwraca ich tytuły. W testach zamockuj \`fetch\`.

URL: \`https://api.github.com/repos/{repo}/pulls?state=closed\``,
    signature: `export async function fetchClosedPullRequests(repo: string): Promise<string[]> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchClosedPullRequests } from './exercise';

describe('fetchClosedPullRequests', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('zwraca tytuły zamkniętych PR', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => [{ title: 'Fix bug' }, { title: 'Add feature' }],
    }));
    expect(await fetchClosedPullRequests('owner/repo')).toEqual(['Fix bug', 'Add feature']);
  });

  it('wywołuje właściwy URL', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ json: async () => [] });
    vi.stubGlobal('fetch', mockFetch);
    await fetchClosedPullRequests('a/b');
    expect(mockFetch).toHaveBeenCalledWith('https://api.github.com/repos/a/b/pulls?state=closed');
  });
});`,
  },
  {
    num: 66, slug: 'fetch-branch-names', fn: 'fetchBranchNames',
    task: `Napisz funkcję \`fetchBranchNames(repo: string): Promise<string[]>\`, która pobiera nazwy branchy z GitHub API. W testach zamockuj \`fetch\`.

URL: \`https://api.github.com/repos/{repo}/branches\``,
    signature: `export async function fetchBranchNames(repo: string): Promise<string[]> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchBranchNames } from './exercise';

describe('fetchBranchNames', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('zwraca nazwy branchy', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => [{ name: 'main' }, { name: 'dev' }],
    }));
    expect(await fetchBranchNames('owner/repo')).toEqual(['main', 'dev']);
  });

  it('wywołuje właściwy URL', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ json: async () => [] });
    vi.stubGlobal('fetch', mockFetch);
    await fetchBranchNames('a/b');
    expect(mockFetch).toHaveBeenCalledWith('https://api.github.com/repos/a/b/branches');
  });
});`,
  },
  {
    num: 67, slug: 'search-messages', fn: 'searchMessages',
    task: `Napisz funkcję \`searchMessages(messages: { id: number; text: string }[], query: string): { id: number; text: string }[]\`, która zwraca wiadomości zawierające \`query\` (case-insensitive).

## Przykłady
- query 'hello' łapie 'Hello world' i 'say hello!'`,
    signature: `export interface Message67 {
  id: number;
  text: string;
}

export function searchMessages(messages: Message67[], query: string): Message67[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { searchMessages } from './exercise';

const messages = [
  { id: 1, text: 'Hello world' },
  { id: 2, text: 'say hello!' },
  { id: 3, text: 'goodbye' },
];

describe('searchMessages', () => {
  it('znajduje case-insensitive', () => {
    expect(searchMessages(messages, 'hello')).toEqual([messages[0], messages[1]]);
  });
  it('brak wyników', () => { expect(searchMessages(messages, 'xyz')).toEqual([]); });
  it('puste query zwraca wszystko lub nic — zwraca wszystkie', () => {
    expect(searchMessages(messages, '')).toEqual(messages);
  });
});`,
  },
  {
    num: 68, slug: 'object-to-map', fn: 'objectToMap',
    task: `Napisz funkcję \`objectToMap<K extends string, V>(obj: Record<K, V>): Map<K, V>\`, która konwertuje obiekt na Map.

## Przykłady
- \`objectToMap({ a: 1, b: 2 })\` → Map z wpisami a→1, b→2`,
    signature: `export function objectToMap<K extends string, V>(obj: Record<K, V>): Map<K, V> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { objectToMap } from './exercise';

describe('objectToMap', () => {
  it('konwertuje obiekt na Map', () => {
    const map = objectToMap({ a: 1, b: 2 });
    expect(map).toBeInstanceOf(Map);
    expect(map.get('a')).toBe(1);
    expect(map.get('b')).toBe(2);
    expect(map.size).toBe(2);
  });
  it('pusty obiekt = pusta mapa', () => {
    expect(objectToMap({}).size).toBe(0);
  });
});`,
  },
  {
    num: 69, slug: 'create-queue', fn: 'createQueue',
    task: `Napisz funkcję \`createQueue<T>()\`, która zwraca obiekt kolejki FIFO z metodami: \`enqueue(item)\`, \`dequeue(): T | undefined\`, \`peek(): T | undefined\`, \`size(): number\`, \`isEmpty(): boolean\`.

## Przykłady
- enqueue(1), enqueue(2), dequeue() → 1`,
    signature: `export interface Queue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
}

export function createQueue<T>(): Queue<T> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { createQueue } from './exercise';

describe('createQueue', () => {
  it('FIFO — pierwszy wchodzi, pierwszy wychodzi', () => {
    const q = createQueue<number>();
    q.enqueue(1); q.enqueue(2); q.enqueue(3);
    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe(2);
  });
  it('size i isEmpty', () => {
    const q = createQueue<string>();
    expect(q.isEmpty()).toBe(true);
    q.enqueue('a');
    expect(q.isEmpty()).toBe(false);
    expect(q.size()).toBe(1);
  });
  it('peek nie usuwa', () => {
    const q = createQueue<number>();
    q.enqueue(42);
    expect(q.peek()).toBe(42);
    expect(q.size()).toBe(1);
  });
  it('dequeue na pustej = undefined', () => {
    expect(createQueue().dequeue()).toBeUndefined();
  });
});`,
  },
  {
    num: 70, slug: 'create-stack', fn: 'createStack',
    task: `Napisz funkcję \`createStack<T>()\`, która zwraca stos LIFO z metodami: \`push(item)\`, \`pop(): T | undefined\`, \`peek(): T | undefined\`, \`size(): number\`, \`isEmpty(): boolean\`.

## Przykłady
- push(1), push(2), pop() → 2`,
    signature: `export interface Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
}

export function createStack<T>(): Stack<T> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { createStack } from './exercise';

describe('createStack', () => {
  it('LIFO — ostatni wchodzi, pierwszy wychodzi', () => {
    const s = createStack<number>();
    s.push(1); s.push(2); s.push(3);
    expect(s.pop()).toBe(3);
    expect(s.pop()).toBe(2);
  });
  it('size i isEmpty', () => {
    const s = createStack<string>();
    expect(s.isEmpty()).toBe(true);
    s.push('x');
    expect(s.size()).toBe(1);
    expect(s.isEmpty()).toBe(false);
  });
  it('peek nie usuwa', () => {
    const s = createStack<number>();
    s.push(7);
    expect(s.peek()).toBe(7);
    expect(s.size()).toBe(1);
  });
  it('pop na pustym = undefined', () => {
    expect(createStack().pop()).toBeUndefined();
  });
});`,
  },
  {
    num: 71, slug: 'is-same-week', fn: 'isSameWeek',
    task: `Napisz funkcję \`isSameWeek(d1: Date, d2: Date): boolean\`, która sprawdza czy dwie daty są w tym samym tygodniu (tydzień zaczyna się w poniedziałek).

## Przykłady
- poniedziałek i niedziela tego samego tygodnia → true`,
    signature: `export function isSameWeek(d1: Date, d2: Date): boolean {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { isSameWeek } from './exercise';

describe('isSameWeek', () => {
  it('poniedziałek i niedziela tego samego tygodnia', () => {
    expect(isSameWeek(new Date('2024-06-10'), new Date('2024-06-16'))).toBe(true); // pn-ndz
  });
  it('inny tydzień', () => {
    expect(isSameWeek(new Date('2024-06-10'), new Date('2024-06-17'))).toBe(false);
  });
  it('ten sam dzień', () => {
    expect(isSameWeek(new Date('2024-06-12'), new Date('2024-06-12'))).toBe(true);
  });
});`,
  },
  {
    num: 72, slug: 'bfs-traversal', fn: 'bfsTraversal',
    task: `Napisz funkcję \`bfsTraversal(graph: Record<string, string[]>, start: string): string[]\`, która przechodzi graf wszerz (BFS) i zwraca kolejność odwiedzonych węzłów.

## Przykłady
- graf: A→[B,C], B→[D], C→[D], D→[] start='A' → ['A','B','C','D']`,
    signature: `export function bfsTraversal(graph: Record<string, string[]>, start: string): string[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { bfsTraversal } from './exercise';

describe('bfsTraversal', () => {
  it('BFS kolejność', () => {
    const graph = { A: ['B', 'C'], B: ['D'], C: ['D'], D: [] };
    expect(bfsTraversal(graph, 'A')).toEqual(['A', 'B', 'C', 'D']);
  });
  it('pojedynczy węzeł', () => {
    expect(bfsTraversal({ X: [] }, 'X')).toEqual(['X']);
  });
});`,
  },
  {
    num: 73, slug: 'dfs-traversal', fn: 'dfsTraversal',
    task: `Napisz funkcję \`dfsTraversal(graph: Record<string, string[]>, start: string): string[]\`, która przechodzi graf w głąb (DFS) i zwraca kolejność odwiedzonych węzłów.

## Przykłady
- graf: A→[B,C], B→[D], C→[D], D→[] start='A' → ['A','B','D','C']`,
    signature: `export function dfsTraversal(graph: Record<string, string[]>, start: string): string[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { dfsTraversal } from './exercise';

describe('dfsTraversal', () => {
  it('DFS kolejność', () => {
    const graph = { A: ['B', 'C'], B: ['D'], C: ['D'], D: [] };
    expect(dfsTraversal(graph, 'A')).toEqual(['A', 'B', 'D', 'C']);
  });
  it('pojedynczy węzeł', () => {
    expect(dfsTraversal({ X: [] }, 'X')).toEqual(['X']);
  });
});`,
  },
  {
    num: 74, slug: 'get-double-n', fn: 'getDoubleN',
    task: `Napisz funkcję \`getDoubleN(n: number): (x: number) => number\`, która zwraca funkcję mnożącą argument przez \`2^n\` (n razy podwojona).

## Przykłady
- \`getDoubleN(3)(1)\` → \`8\` (1 * 2 * 2 * 2)`,
    signature: `export function getDoubleN(n: number): (x: number) => number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getDoubleN } from './exercise';

describe('getDoubleN', () => {
  it('n=3, x=1 → 8', () => { expect(getDoubleN(3)(1)).toBe(8); });
  it('n=0 → x bez zmian', () => { expect(getDoubleN(0)(5)).toBe(5); });
  it('n=1, x=3 → 6', () => { expect(getDoubleN(1)(3)).toBe(6); });
});`,
  },
  {
    num: 75, slug: 'deep-copy', fn: 'deepCopy',
    task: `Napisz funkcję \`deepCopy<T>(obj: T): T\`, która tworzy głęboką kopię obiektu/tablicy/daty. Zmiana kopii nie wpływa na oryginał.

## Przykłady
- \`const o = { a: 1, n: { b: 2 } }; const c = deepCopy(o); c.n.b = 99; o.n.b === 2\``,
    signature: `export function deepCopy<T>(obj: T): T {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { deepCopy } from './exercise';

describe('deepCopy', () => {
  it('płaski obiekt', () => {
    const o = { a: 1, b: 'x' };
    const c = deepCopy(o);
    expect(c).toEqual(o);
    expect(c).not.toBe(o);
  });
  it('zagnieżdżony niezależny', () => {
    const o = { a: 1, n: { b: 2 } };
    const c = deepCopy(o);
    c.n.b = 99;
    expect(o.n.b).toBe(2);
  });
  it('tablice', () => {
    const o = [1, [2, 3]];
    const c = deepCopy(o);
    (c[1] as number[]).push(9);
    expect(o[1]).toEqual([2, 3]);
  });
  it('daty', () => {
    const o = { d: new Date('2024-01-01') };
    const c = deepCopy(o);
    expect(c.d).toEqual(o.d);
    expect(c.d).not.toBe(o.d);
  });
  it('wartości proste', () => {
    expect(deepCopy(42)).toBe(42);
    expect(deepCopy(null)).toBe(null);
  });
});`,
  },
];

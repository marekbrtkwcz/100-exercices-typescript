import type { ExerciseDef } from './types';

export const advanced: ExerciseDef[] = [
  {
    num: 76, slug: 'uniq-by', fn: 'uniqBy',
    task: `Napisz funkcję \`uniqBy<T, K>(arr: T[], fn: (item: T) => K): T[]\`, która zwraca tablicę bez duplikatów wg klucza zwracanego przez \`fn\`. Zachowuje pierwsze wystąpienie.

## Przykłady
- \`uniqBy([1.1, 2.2, 2.3, 1.5], Math.floor)\` → \`[1.1, 2.2]\``,
    signature: `export function uniqBy<T, K>(arr: T[], fn: (item: T) => K): T[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { uniqBy } from './exercise';

describe('uniqBy', () => {
  it('usuwa duplikaty wg klucza', () => {
    expect(uniqBy([1.1, 2.2, 2.3, 1.5], Math.floor)).toEqual([1.1, 2.2]);
  });
  it('obiekty po polu', () => {
    const arr = [{ id: 1, v: 'a' }, { id: 2, v: 'b' }, { id: 1, v: 'c' }];
    expect(uniqBy(arr, x => x.id)).toEqual([{ id: 1, v: 'a' }, { id: 2, v: 'b' }]);
  });
  it('pusta tablica', () => { expect(uniqBy([], (x: number) => x)).toEqual([]); });
});`,
  },
  {
    num: 77, slug: 'flow', fn: 'flow',
    task: `Napisz funkcję \`flow(...fns)\`, która zwraca funkcję będącą złożeniem funkcji od lewej do prawej: \`flow(f, g, h)(x) = h(g(f(x)))\`.

## Przykłady
- \`const f = flow((x: number) => x + 1, (x: number) => x * 2); f(3)\` → \`8\``,
    signature: `export function flow<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { flow } from './exercise';

describe('flow', () => {
  it('składa funkcje od lewej', () => {
    const f = flow((x: number) => x + 1, (x: number) => x * 2);
    expect(f(3)).toBe(8); // (3+1)*2
  });
  it('trzy funkcje', () => {
    const f = flow(
      (x: number) => x + 1,
      (x: number) => x * 2,
      (x: number) => x - 3
    );
    expect(f(5)).toBe(9); // ((5+1)*2)-3
  });
  it('puste flow = identyczność', () => {
    const f = flow<number>();
    expect(f(42)).toBe(42);
  });
});`,
  },
  {
    num: 78, slug: 'create-counter', fn: 'createCounter',
    task: `Napisz funkcję \`createCounter(start = 0)\`, która zwraca funkcję — licznik zwiększający się o 1 przy każdym wywołaniu.

## Przykłady
- \`const c = createCounter(); c() → 1, c() → 2, c() → 3\``,
    signature: `export function createCounter(start = 0): () => number {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { createCounter } from './exercise';

describe('createCounter', () => {
  it('liczy od 1', () => {
    const c = createCounter();
    expect(c()).toBe(1);
    expect(c()).toBe(2);
    expect(c()).toBe(3);
  });
  it('start niestandardowy', () => {
    const c = createCounter(10);
    expect(c()).toBe(11);
    expect(c()).toBe(12);
  });
  it('dwa liczniki są niezależne', () => {
    const a = createCounter();
    const b = createCounter();
    a(); a();
    expect(b()).toBe(1);
  });
});`,
  },
  {
    num: 79, slug: 'create-promise', fn: 'createPromise',
    task: `Napisz funkcję \`createPromise(executor: (resolve, reject) => void): Promise<T>\`, która działa jak konstruktor Promise — pozwala stworzyć Promise przez podanie funkcji executor.

## Przykłady
- \`const p = createPromise<number>((res) => res(42)); await p → 42\``,
    signature: `export function createPromise<T>(
  executor: (resolve: (value: T) => void, reject: (reason?: unknown) => void) => void
): Promise<T> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { createPromise } from './exercise';

describe('createPromise', () => {
  it('resolve działa', async () => {
    const p = createPromise<number>((res) => res(42));
    expect(await p).toBe(42);
  });
  it('reject działa', async () => {
    const p = createPromise<number>((_, rej) => rej(new Error('fail')));
    await expect(p).rejects.toThrow('fail');
  });
});`,
  },
  {
    num: 80, slug: 'reverse-for-each', fn: 'reverseForEach',
    task: `Napisz funkcję \`reverseForEach<T>(arr: T[], fn: (item: T, index: number) => void): void\`, która wywołuje \`fn\` dla każdego elementu tablicy OD KOŃCA.

## Przykłady
- \`reverseForEach([1, 2, 3], x => console.log(x))\` wypisuje 3, 2, 1`,
    signature: `export function reverseForEach<T>(arr: T[], fn: (item: T, index: number) => void): void {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi } from 'vitest';
import { reverseForEach } from './exercise';

describe('reverseForEach', () => {
  it('iteruje od końca', () => {
    const fn = vi.fn();
    reverseForEach([1, 2, 3], fn);
    expect(fn.mock.calls.map(c => c[0])).toEqual([3, 2, 1]);
  });
  it('przekazuje indeks', () => {
    const fn = vi.fn();
    reverseForEach(['a', 'b', 'c'], fn);
    expect(fn.mock.calls.map(c => c[1])).toEqual([2, 1, 0]);
  });
  it('pusta tablica nie wywołuje fn', () => {
    const fn = vi.fn();
    reverseForEach([], fn);
    expect(fn).not.toHaveBeenCalled();
  });
});`,
  },
  {
    num: 81, slug: 'check-settles-in-time', fn: 'checkSettlesInTime',
    task: `Napisz funkcję \`checkSettlesInTime(promise: Promise<T>, ms: number): Promise<boolean>\`, która zwraca \`true\` jeśli promise zakończy się (resolve lub reject) w ciągu \`ms\` milisekund, inaczej \`false\`.

W testach użyj fake timers.

## Przykłady
- promise który resolvuje po 50ms, ms=100 → true`,
    signature: `export async function checkSettlesInTime<T>(promise: Promise<T>, ms: number): Promise<boolean> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { checkSettlesInTime } from './exercise';

describe('checkSettlesInTime', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('promise resolvuje w czasie → true', async () => {
    const p = new Promise<number>((res) => setTimeout(() => res(1), 50));
    const resultPromise = checkSettlesInTime(p, 100);
    await vi.advanceTimersByTimeAsync(100);
    expect(await resultPromise).toBe(true);
  });

  it('promise za wolny → false', async () => {
    const p = new Promise<number>((res) => setTimeout(() => res(1), 200));
    const resultPromise = checkSettlesInTime(p, 100);
    await vi.advanceTimersByTimeAsync(100);
    expect(await resultPromise).toBe(false);
  });
});`,
  },
  {
    num: 82, slug: 'sorted', fn: 'sorted',
    task: `Napisz funkcję \`sorted(arr: number[]): (comparator?: (a: number, b: number) => number) => number[]\`, która zwraca funkcję sortującą KOPIĘ tablicy podanym komparatorem (domyślnie rosnąco).

## Przykłady
- \`sorted([3,1,2])()\` → \`[1,2,3]\`
- \`sorted([3,1,2])((a,b) => b-a)\` → \`[3,2,1]\``,
    signature: `export function sorted(
  arr: number[]
): (comparator?: (a: number, b: number) => number) => number[] {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { sorted } from './exercise';

describe('sorted', () => {
  it('domyślnie rosnąco', () => { expect(sorted([3, 1, 2])()).toEqual([1, 2, 3]); });
  it('z komparatorem malejąco', () => { expect(sorted([3, 1, 2])((a, b) => b - a)).toEqual([3, 2, 1]); });
  it('nie modyfikuje oryginału', () => {
    const arr = [3, 1, 2];
    sorted(arr)();
    expect(arr).toEqual([3, 1, 2]);
  });
});`,
  },
  {
    num: 83, slug: 'group-by', fn: 'groupBy',
    task: `Napisz funkcję \`groupBy<T, K extends string | number | symbol>(arr: T[], fn: (item: T) => K): Record<K, T[]>\`, która grupuje elementy tablicy wg klucza.

## Przykłady
- \`groupBy([1.1, 2.2, 2.3, 3.3], Math.floor)\` → \`{ '1': [1.1], '2': [2.2, 2.3], '3': [3.3] }\``,
    signature: `export function groupBy<T, K extends string | number | symbol>(
  arr: T[],
  fn: (item: T) => K
): Record<K, T[]> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { groupBy } from './exercise';

describe('groupBy', () => {
  it('grupuje liczby po floor', () => {
    expect(groupBy([1.1, 2.2, 2.3, 3.3], Math.floor)).toEqual({ '1': [1.1], '2': [2.2, 2.3], '3': [3.3] });
  });
  it('grupuje stringi po pierwszej literze', () => {
    expect(groupBy(['apple', 'banana', 'avocado'], s => s[0]!)).toEqual({ a: ['apple', 'avocado'], b: ['banana'] });
  });
  it('grupuje obiekty po polu', () => {
    const users = [
      { name: 'Jan', role: 'admin' },
      { name: 'Anna', role: 'user' },
      { name: 'Piotr', role: 'admin' },
    ];
    expect(groupBy(users, u => u.role)).toEqual({ admin: [users[0], users[2]], user: [users[1]] });
  });
  it('pusta tablica', () => { expect(groupBy([], (x: number) => x)).toEqual({}); });
});`,
  },
  {
    num: 84, slug: 'create-linked-list', fn: 'createLinkedList',
    task: `Napisz funkcję \`createLinkedList<T>()\`, która zwraca listę jednokierunkową z metodami: \`append(value)\`, \`prepend(value)\`, \`toArray(): T[]\`, \`size(): number\`.

## Przykłady
- append(1), append(2), prepend(0) → toArray() = [0, 1, 2]`,
    signature: `export interface LinkedList<T> {
  append(value: T): void;
  prepend(value: T): void;
  toArray(): T[];
  size(): number;
}

export function createLinkedList<T>(): LinkedList<T> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { createLinkedList } from './exercise';

describe('createLinkedList', () => {
  it('append i toArray', () => {
    const list = createLinkedList<number>();
    list.append(1); list.append(2);
    expect(list.toArray()).toEqual([1, 2]);
    expect(list.size()).toBe(2);
  });
  it('prepend dodaje na początek', () => {
    const list = createLinkedList<number>();
    list.append(2); list.prepend(1);
    expect(list.toArray()).toEqual([1, 2]);
  });
  it('pusta lista', () => {
    const list = createLinkedList<string>();
    expect(list.toArray()).toEqual([]);
    expect(list.size()).toBe(0);
  });
});`,
  },
  {
    num: 85, slug: 'promise-order', fn: 'promiseOrder',
    task: `Napisz funkcję \`promiseOrder(promises: Promise<unknown>[]): Promise<unknown[]>\`, która zwraca wyniki w kolejności zakończenia (nie w kolejności tablicy).

W testach użyj fake timers lub rzeczywistych opóźnień.

## Przykłady
- [p1(100ms), p2(50ms)] → wyniki: najpierw wynik p2, potem p1`,
    signature: `export async function promiseOrder(promises: Promise<unknown>[]): Promise<unknown[]> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { promiseOrder } from './exercise';

describe('promiseOrder', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('wyniki w kolejności zakończenia', async () => {
    const p1 = new Promise<string>((res) => setTimeout(() => res('p1'), 100));
    const p2 = new Promise<string>((res) => setTimeout(() => res('p2'), 50));
    const resultPromise = promiseOrder([p1, p2]);
    await vi.advanceTimersByTimeAsync(150);
    expect(await resultPromise).toEqual(['p2', 'p1']);
  });

  it('pusta tablica', async () => {
    expect(await promiseOrder([])).toEqual([]);
  });
});`,
  },
  {
    num: 86, slug: 'is-deep-equal', fn: 'isDeepEqual',
    task: `Napisz funkcję \`isDeepEqual(a: unknown, b: unknown): boolean\`, która rekurencyjnie porównuje obiekty, tablice, daty i wartości proste.

## Przykłady
- \`isDeepEqual({a:1,b:[2,3]}, {a:1,b:[2,3]})\` → \`true\``,
    signature: `export function isDeepEqual(a: unknown, b: unknown): boolean {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { isDeepEqual } from './exercise';

describe('isDeepEqual', () => {
  it('wartości proste', () => {
    expect(isDeepEqual(1, 1)).toBe(true);
    expect(isDeepEqual('a', 'a')).toBe(true);
    expect(isDeepEqual(1, 2)).toBe(false);
    expect(isDeepEqual(null, undefined)).toBe(false);
  });
  it('obiekty', () => {
    expect(isDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isDeepEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(isDeepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });
  it('zagnieżdżone', () => {
    expect(isDeepEqual([1, [2, { x: 3 }]], [1, [2, { x: 3 }]])).toBe(true);
    expect(isDeepEqual([1, [2, { x: 3 }]], [1, [2, { x: 4 }]])).toBe(false);
  });
  it('daty', () => {
    expect(isDeepEqual(new Date('2024-01-01'), new Date('2024-01-01'))).toBe(true);
    expect(isDeepEqual(new Date('2024-01-01'), new Date('2024-01-02'))).toBe(false);
  });
  it('tablice różnej długości', () => {
    expect(isDeepEqual([1, 2], [1, 2, 3])).toBe(false);
  });
});`,
  },
  {
    num: 87, slug: 'delay-resolve', fn: 'delayResolve',
    task: `Napisz funkcję \`delayResolve<T>(value: T, ms: number): Promise<T>\`, która zwraca Promise resolvujący się wartością \`value\` po \`ms\` milisekundach.

W testach użyj fake timers.

## Przykłady
- \`await delayResolve('hello', 100)\` → \`'hello'\``,
    signature: `export function delayResolve<T>(value: T, ms: number): Promise<T> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { delayResolve } from './exercise';

describe('delayResolve', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('resolvuje po czasie', async () => {
    const p = delayResolve('hello', 100);
    vi.advanceTimersByTime(100);
    expect(await p).toBe('hello');
  });

  it('nie resolvuje przed czasem', async () => {
    let resolved = false;
    delayResolve('x', 100).then(() => { resolved = true; });
    vi.advanceTimersByTime(50);
    await Promise.resolve();
    expect(resolved).toBe(false);
  });
});`,
  },
  {
    num: 88, slug: 'class-inheritance', fn: 'classInheritance',
    task: `Napisz klasę \`Animal\` z metodą \`speak(): string\` zwracającą '...', oraz klasę \`Dog extends Animal\` nadpisującą \`speak()\` na 'Woof!'. Funkcja \`classInheritance()\` zwraca nowego psa.

## Przykłady
- \`classInheritance().speak()\` → \`'Woof!'\``,
    signature: `class Animal {
  speak(): string {
    return '...';
  }
}

class Dog extends Animal {
  // TODO: nadpisz speak()
}

export function classInheritance(): Dog {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { classInheritance } from './exercise';

describe('classInheritance', () => {
  it('pies szczeka', () => {
    expect(classInheritance().speak()).toBe('Woof!');
  });
  it('pies jest też Animalem', () => {
    const dog = classInheritance();
    expect(dog).toBeInstanceOf(Object);
    expect(typeof dog.speak).toBe('function');
  });
});`,
  },
  {
    num: 89, slug: 'custom-bind', fn: 'customBind',
    task: `Napisz funkcję \`customBind(fn, thisArg, ...boundArgs)\`, która działa jak \`Function.prototype.bind\` — zwraca funkcję ze spiętym \`this\` i częściowo podanymi argumentami.

## Przykłady
- \`const f = customBind((a: number, b: number) => a + b, null, 1); f(2)\` → \`3\``,
    signature: `export function customBind<T extends (...args: any[]) => any>(
  fn: T,
  thisArg: unknown,
  ...boundArgs: unknown[]
): (...args: unknown[]) => unknown {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { customBind } from './exercise';

describe('customBind', () => {
  it('binduje argumenty', () => {
    const add = (a: number, b: number) => a + b;
    const add1 = customBind(add, null, 1);
    expect(add1(2)).toBe(3);
  });
  it('binduje this', () => {
    const obj = { x: 10, getX() { return this.x; } };
    const bound = customBind(obj.getX, obj);
    expect(bound()).toBe(10);
  });
  it('bez bound args działa normalnie', () => {
    const f = (a: number, b: number) => a * b;
    expect(customBind(f, null)(3, 4)).toBe(12);
  });
});`,
  },
  {
    num: 90, slug: 'todo-list', fn: 'todoList',
    task: `Napisz funkcję \`todoList()\`, która zwraca obiekt zarządzający listą TODO z metodami: \`add(text): number\` (zwraca id), \`complete(id): boolean\`, \`remove(id): boolean\`, \`list(): { id: number; text: string; done: boolean }[]\`.

## Przykłady
- add('napisać testy') → 1; complete(1) → true; list() pokazuje done=true`,
    signature: `export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoList {
  add(text: string): number;
  complete(id: number): boolean;
  remove(id: number): boolean;
  list(): Todo[];
}

export function todoList(): TodoList {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { todoList } from './exercise';

describe('todoList', () => {
  it('add zwraca kolejne id', () => {
    const t = todoList();
    expect(t.add('pierwsze')).toBe(1);
    expect(t.add('drugie')).toBe(2);
  });
  it('complete oznacza jako done', () => {
    const t = todoList();
    const id = t.add('zadanie');
    expect(t.complete(id)).toBe(true);
    expect(t.list()[0]!.done).toBe(true);
  });
  it('complete na nieistniejącym = false', () => {
    const t = todoList();
    expect(t.complete(999)).toBe(false);
  });
  it('remove usuwa', () => {
    const t = todoList();
    const id = t.add('do usunięcia');
    expect(t.remove(id)).toBe(true);
    expect(t.list()).toEqual([]);
  });
  it('list zwraca wszystkie', () => {
    const t = todoList();
    t.add('a'); t.add('b');
    expect(t.list().map(x => x.text)).toEqual(['a', 'b']);
  });
});`,
  },
  {
    num: 91, slug: 'reverse-reduce', fn: 'reverseReduce',
    task: `Napisz funkcję \`reverseReduce<T, U>(arr: T[], fn: (acc: U, item: T, index: number) => U, initial: U): U\`, która działa jak \`reduce\` ale iteruje OD KOŃCA tablicy.

## Przykłady
- \`reverseReduce([1, 2, 3], (acc, x) => acc + x, 0)\` → \`6\` (kolejność dodawania od końca, ale suma ta sama)
- kolejność widać przy konkatenacji stringów`,
    signature: `export function reverseReduce<T, U>(
  arr: T[],
  fn: (acc: U, item: T, index: number) => U,
  initial: U
): U {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi } from 'vitest';
import { reverseReduce } from './exercise';

describe('reverseReduce', () => {
  it('suma działa', () => {
    expect(reverseReduce([1, 2, 3], (acc, x) => acc + x, 0)).toBe(6);
  });
  it('kolejność od końca (stringi)', () => {
    expect(reverseReduce(['a', 'b', 'c'], (acc, x) => acc + x, '')).toBe('cba');
  });
  it('przekazuje indeks', () => {
    const fn = vi.fn((acc: string, _x: number, i: number) => acc + i);
    reverseReduce([10, 20, 30], fn, '');
    expect(fn.mock.calls.map(c => c[2])).toEqual([2, 1, 0]);
  });
  it('pusta tablica = initial', () => {
    expect(reverseReduce([], (acc: number, x: number) => acc + x, 99)).toBe(99);
  });
});`,
  },
  {
    num: 92, slug: 'with-count', fn: 'withCount',
    task: `Napisz funkcję \`withCount<T extends (...args: any[]) => any>(fn: T)\`, która opakowuje funkcję i dodaje do niej właściwość \`callCount\` zliczającą wywołania.

## Przykłady
- \`const f = withCount(() => 'hi'); f(); f(); f.callCount\` → \`2\``,
    signature: `export type WithCount<T extends (...args: any[]) => any> = T & { callCount: number };

export function withCount<T extends (...args: any[]) => any>(fn: T): WithCount<T> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { withCount } from './exercise';

describe('withCount', () => {
  it('zlicza wywołania', () => {
    const f = withCount((x: number) => x * 2);
    expect(f.callCount).toBe(0);
    f(1); f(2);
    expect(f.callCount).toBe(2);
  });
  it('zwraca wynik oryginalnej funkcji', () => {
    const f = withCount((x: number) => x + 10);
    expect(f(5)).toBe(15);
    expect(f.callCount).toBe(1);
  });
});`,
  },
  {
    num: 93, slug: 'max-invocations', fn: 'maxInvocations',
    task: `Napisz funkcję \`maxInvocations<T extends (...args: any[]) => any>(fn: T, max: number): T\`, która opakowuje funkcję tak, by wywołanie jej więcej niż \`max\` razy rzucało błąd.

## Przykłady
- max=2: f(), f() ok, f() trzeci → rzuca Error`,
    signature: `export function maxInvocations<T extends (...args: any[]) => any>(fn: T, max: number): T {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { maxInvocations } from './exercise';

describe('maxInvocations', () => {
  it('do max działa normalnie', () => {
    const f = maxInvocations((x: number) => x + 1, 2);
    expect(f(1)).toBe(2);
    expect(f(2)).toBe(3);
  });
  it('powyżej max rzuca błąd', () => {
    const f = maxInvocations(() => 'ok', 2);
    f(); f();
    expect(() => f()).toThrow();
  });
  it('max=0 od razu rzuca', () => {
    const f = maxInvocations(() => 'ok', 0);
    expect(() => f()).toThrow();
  });
});`,
  },
  {
    num: 94, slug: 'create-observable', fn: 'createObservable',
    task: `Napisz funkcję \`createObservable<T>()\`, która zwraca obiekt z metodami: \`subscribe(fn): () => void\` (zwraca unsubscribe), \`next(value)\` (wywołuje wszystkich subskrybentów).

## Przykłady
- subskrybent dostaje każdą wartość po next()`,
    signature: `export interface Observable<T> {
  subscribe(fn: (value: T) => void): () => void;
  next(value: T): void;
}

export function createObservable<T>(): Observable<T> {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi } from 'vitest';
import { createObservable } from './exercise';

describe('createObservable', () => {
  it('subskrybent dostaje wartości', () => {
    const obs = createObservable<number>();
    const fn = vi.fn();
    obs.subscribe(fn);
    obs.next(1); obs.next(2);
    expect(fn.mock.calls).toEqual([[1], [2]]);
  });
  it('unsubscribe przestaje otrzymywać', () => {
    const obs = createObservable<number>();
    const fn = vi.fn();
    const unsub = obs.subscribe(fn);
    obs.next(1);
    unsub();
    obs.next(2);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('wielu subskrybentów', () => {
    const obs = createObservable<string>();
    const f1 = vi.fn(); const f2 = vi.fn();
    obs.subscribe(f1); obs.subscribe(f2);
    obs.next('x');
    expect(f1).toHaveBeenCalledWith('x');
    expect(f2).toHaveBeenCalledWith('x');
  });
});`,
  },
  {
    num: 95, slug: 'create-pub-sub', fn: 'createPubSub',
    task: `Napisz funkcję \`createPubSub()\`, która zwraca obiekt Pub/Sub z metodami: \`subscribe(event, fn): () => void\`, \`publish(event, data)\`. Zdarzenia są niezależne (różne nazwy).

## Przykłady
- subscribe('click', fn); publish('click', {x:1}) → fn({x:1})`,
    signature: `export interface PubSub {
  subscribe(event: string, fn: (data: unknown) => void): () => void;
  publish(event: string, data: unknown): void;
}

export function createPubSub(): PubSub {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi } from 'vitest';
import { createPubSub } from './exercise';

describe('createPubSub', () => {
  it('publish wywołuje subskrybentów danego eventu', () => {
    const ps = createPubSub();
    const fn = vi.fn();
    ps.subscribe('click', fn);
    ps.publish('click', { x: 1 });
    expect(fn).toHaveBeenCalledWith({ x: 1 });
  });
  it('różne eventy są niezależne', () => {
    const ps = createPubSub();
    const fnClick = vi.fn(); const fnHover = vi.fn();
    ps.subscribe('click', fnClick);
    ps.subscribe('hover', fnHover);
    ps.publish('click', null);
    expect(fnClick).toHaveBeenCalledTimes(1);
    expect(fnHover).not.toHaveBeenCalled();
  });
  it('unsubscribe działa', () => {
    const ps = createPubSub();
    const fn = vi.fn();
    const unsub = ps.subscribe('e', fn);
    unsub();
    ps.publish('e', null);
    expect(fn).not.toHaveBeenCalled();
  });
});`,
  },
  {
    num: 96, slug: 'cache-get-result', fn: 'cacheGetResult',
    task: `Napisz funkcję \`cacheGetResult<T extends (...args: any[]) => any>(fn: T): T\`, która opakowuje funkcję i cache'uje wyniki — kolejne wywołanie z tymi samymi argumentami zwraca wynik z pamięci bez wywoływania oryginału.

## Przykłady
- \`let calls = 0; const f = cacheGetResult(() => ++calls); f(1) → 1, f(1) → 1 (calls=1), f(2) → 2\``,
    signature: `export function cacheGetResult<T extends (...args: any[]) => any>(fn: T): T {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi } from 'vitest';
import { cacheGetResult } from './exercise';

describe('cacheGetResult', () => {
  it('cachuje wyniki dla tych samych argumentów', () => {
    const fn = vi.fn((x: number) => x * 2);
    const cached = cacheGetResult(fn);
    expect(cached(5)).toBe(10);
    expect(cached(5)).toBe(10);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('różne argumenty = nowe wywołanie', () => {
    const fn = vi.fn((x: number) => x * 2);
    const cached = cacheGetResult(fn);
    cached(1); cached(2);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});`,
  },
  {
    num: 97, slug: 'curry-sum', fn: 'currySum',
    task: `Napisz funkcję \`currySum(...args: number[]): any\`, która sumuje argumenty — można wywoływać z dowolną liczbą argumentów, a wynik zwraca dopiero gdy wywoła się bez argumentów: \`currySum(1,2)(3)()\` → \`6\`.

## Przykłady
- \`currySum(1, 2, 3)()\` → \`6\`
- \`currySum(1)(2)(3)()\` → \`6\``,
    signature: `export function currySum(...args: number[]): any {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { currySum } from './exercise';

describe('currySum', () => {
  it('wszystkie od razu + puste wywołanie', () => {
    expect(currySum(1, 2, 3)()).toBe(6);
  });
  it('pojedyncze argumenty', () => {
    expect(currySum(1)(2)(3)()).toBe(6);
  });
  it('mieszane', () => {
    expect(currySum(1, 2)(3)()).toBe(6);
  });
  it('bez argumentów od razu = 0', () => {
    expect(currySum()()).toBe(0);
  });
});`,
  },
  {
    num: 98, slug: 'get-curry', fn: 'getCurry',
    task: `Napisz funkcję \`getCurry(fn)\`, która zwraca funkcję curryfikowaną — można podawać argumenty pojedynczo lub po kilka, aż do uzyskania pełnej liczby.

## Przykłady
- \`const add = (a: number, b: number, c: number) => a + b + c\`
- \`getCurry(add)(1)(2)(3)\` → \`6\`
- \`getCurry(add)(1, 2, 3)\` → \`6\``,
    signature: `export function getCurry<T extends (...args: any[]) => any>(fn: T): any {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect } from 'vitest';
import { getCurry } from './exercise';

const add3 = (a: number, b: number, c: number) => a + b + c;

describe('getCurry', () => {
  it('pojedyncze argumenty', () => { expect(getCurry(add3)(1)(2)(3)).toBe(6); });
  it('mieszane', () => {
    expect(getCurry(add3)(1, 2)(3)).toBe(6);
    expect(getCurry(add3)(1)(2, 3)).toBe(6);
  });
  it('wszystkie od razu', () => { expect(getCurry(add3)(1, 2, 3)).toBe(6); });
  it('funkcja 2-argumentowa', () => {
    const mul = (a: number, b: number) => a * b;
    expect(getCurry(mul)(3)(4)).toBe(12);
    expect(getCurry(mul)(3, 4)).toBe(12);
  });
});`,
  },
  {
    num: 99, slug: 'throttle', fn: 'throttle',
    task: `Napisz funkcję \`throttle<T extends (...args: any[]) => any>(fn: T, delay: number)\`, która wywołuje \`fn\` maksymalnie raz na \`delay\` ms. Pierwsze wywołanie natychmiast.

W testach użyj fake timers.

## Przykłady
- 3 wywołania pod rząd, delay=100 → tylko pierwsze się wykonuje`,
    signature: `export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { throttle } from './exercise';

describe('throttle', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('pierwsze wywołanie natychmiast', () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t();
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('kolejne w oknie ignorowane', () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t(); t(); t();
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('po czasie można znów', () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t();
    vi.advanceTimersByTime(100);
    t();
    expect(fn).toHaveBeenCalledTimes(2);
  });
  it('przekazuje argumenty pierwszego wywołania', () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t('hello');
    expect(fn).toHaveBeenCalledWith('hello');
  });
});`,
  },
  {
    num: 100, slug: 'debounce', fn: 'debounce',
    task: `Napisz funkcję \`debounce<T extends (...args: any[]) => any>(fn: T, delay: number)\`, która opóźnia wywołanie \`fn\` o \`delay\` ms — każde kolejne wywołanie w tym czasie resetuje timer.

W testach użyj fake timers.

## Przykłady
- 3 wywołania pod rząd, delay=100 → fn wywołane raz, po 100ms od ostatniego`,
    signature: `export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  throw new Error('Not implemented');
}`,
    tests: `import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce } from './exercise';

describe('debounce', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('wywołuje raz mimo wielu wywołań', () => {
    const fn = vi.fn();
    const d = debounce(fn, 100);
    d(); d(); d();
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('przekazuje ostatnie argumenty', () => {
    const fn = vi.fn();
    const d = debounce(fn, 100);
    d('a'); d('b'); d('c');
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledWith('c');
  });
  it('resetuje timer', () => {
    const fn = vi.fn();
    const d = debounce(fn, 100);
    d();
    vi.advanceTimersByTime(50);
    d();
    vi.advanceTimersByTime(50);
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('można ponownie po czasie', () => {
    const fn = vi.fn();
    const d = debounce(fn, 100);
    d();
    vi.advanceTimersByTime(100);
    d();
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});`,
  },
];

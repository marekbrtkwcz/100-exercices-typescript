import { describe, it, expect } from 'vitest';
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
});

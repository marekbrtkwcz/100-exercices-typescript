import { describe, it, expect } from 'vitest';
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
});

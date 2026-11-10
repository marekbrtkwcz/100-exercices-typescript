import { describe, it, expect } from 'vitest';
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
});

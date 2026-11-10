// TODO: zaimplementuj funkcję poniżej
export interface LinkedList<T> {
  append(value: T): void;
  prepend(value: T): void;
  toArray(): T[];
  size(): number;
}

export function createLinkedList<T>(): LinkedList<T> {
  throw new Error('Not implemented');
}

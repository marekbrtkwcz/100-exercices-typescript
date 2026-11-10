// TODO: zaimplementuj funkcję poniżej
export interface Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
}

export function createStack<T>(): Stack<T> {
  throw new Error('Not implemented');
}

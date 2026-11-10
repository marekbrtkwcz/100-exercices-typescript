// TODO: zaimplementuj funkcję poniżej
export interface Queue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
}

export function createQueue<T>(): Queue<T> {
  throw new Error('Not implemented');
}

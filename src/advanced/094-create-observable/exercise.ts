// TODO: zaimplementuj funkcję poniżej
export interface Observable<T> {
  subscribe(fn: (value: T) => void): () => void;
  next(value: T): void;
}

export function createObservable<T>(): Observable<T> {
  throw new Error('Not implemented');
}

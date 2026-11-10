// TODO: zaimplementuj funkcję poniżej
export type WithCount<T extends (...args: any[]) => any> = T & { callCount: number };

export function withCount<T extends (...args: any[]) => any>(fn: T): WithCount<T> {
  throw new Error('Not implemented');
}

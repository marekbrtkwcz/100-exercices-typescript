// TODO: zaimplementuj funkcję poniżej
export function customBind<T extends (...args: any[]) => any>(
  fn: T,
  thisArg: unknown,
  ...boundArgs: unknown[]
): (...args: unknown[]) => unknown {
  throw new Error('Not implemented');
}

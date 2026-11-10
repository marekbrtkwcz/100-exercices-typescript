// TODO: zaimplementuj funkcję poniżej
export interface SetComparison<T> {
  onlyInA: T[];
  onlyInB: T[];
  common: T[];
}

export function compareSets<T>(a: Set<T>, b: Set<T>): SetComparison<T> {
  throw new Error('Not implemented');
}

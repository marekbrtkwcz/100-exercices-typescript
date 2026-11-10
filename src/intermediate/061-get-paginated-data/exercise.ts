// TODO: zaimplementuj funkcję poniżej
export async function getPaginatedData<T>(
  fetchPage: (page: number) => Promise<T[]>,
  totalPages: number
): Promise<T[]> {
  throw new Error('Not implemented');
}

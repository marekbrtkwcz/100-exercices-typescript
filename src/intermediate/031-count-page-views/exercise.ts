// TODO: zaimplementuj funkcję poniżej
export interface PageView {
  page: string;
  timestamp: number;
}

export function countPageViews(logs: PageView[]): Record<string, number> {
  throw new Error('Not implemented');
}

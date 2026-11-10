// TODO: zaimplementuj funkcję poniżej
export interface ParsedURL {
  protocol: string;
  host: string;
  path: string;
  query: Record<string, string>;
}

export function simpleURLParser(url: string): ParsedURL {
  throw new Error('Not implemented');
}

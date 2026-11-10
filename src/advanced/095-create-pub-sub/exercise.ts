// TODO: zaimplementuj funkcję poniżej
export interface PubSub {
  subscribe(event: string, fn: (data: unknown) => void): () => void;
  publish(event: string, data: unknown): void;
}

export function createPubSub(): PubSub {
  throw new Error('Not implemented');
}

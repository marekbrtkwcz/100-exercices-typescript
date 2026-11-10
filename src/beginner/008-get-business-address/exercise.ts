// TODO: zaimplementuj funkcję poniżej
export interface Address {
  street?: string;
  city?: string;
  country?: string;
}

export function getBusinessAddress(user: { address?: Address }): string {
  throw new Error('Not implemented');
}

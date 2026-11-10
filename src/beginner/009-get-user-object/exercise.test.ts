import { describe, it, expect } from 'vitest';
import { getUserObject } from './exercise';

describe('getUserObject', () => {
  it('dorosły', () => {
    expect(getUserObject('Jan', 'Kowalski', 25)).toEqual({ fullName: 'Jan Kowalski', age: 25, isAdult: true });
  });
  it('niepełnoletni', () => {
    expect(getUserObject('Anna', 'Nowak', 16)).toEqual({ fullName: 'Anna Nowak', age: 16, isAdult: false });
  });
  it('18 lat = dorosły', () => { expect(getUserObject('Piotr', 'X', 18).isAdult).toBe(true); });
});

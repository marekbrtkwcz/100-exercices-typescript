import { describe, it, expect } from 'vitest';
import { getAdd5 } from './exercise';

describe('getAdd5', () => {
  it('dodaje 5', () => { expect(getAdd5()(3)).toBe(8); });
  it('działa z ujemnymi', () => { expect(getAdd5()(-5)).toBe(0); });
});

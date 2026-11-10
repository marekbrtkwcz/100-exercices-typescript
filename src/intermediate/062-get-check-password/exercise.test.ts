import { describe, it, expect } from 'vitest';
import { getCheckPassword } from './exercise';

describe('getCheckPassword', () => {
  it('zwraca funkcję która używa walidatora', () => {
    const check = getCheckPassword(pw => pw.length > 8);
    expect(check('długie hasło')).toBe(true);
    expect(check('krótkie')).toBe(false);
  });
});

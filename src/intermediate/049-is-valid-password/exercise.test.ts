import { describe, it, expect } from 'vitest';
import { isValidPassword } from './exercise';

describe('isValidPassword', () => {
  it('dobre hasło', () => { expect(isValidPassword('Haslo123!')).toBe(true); });
  it('za krótkie', () => { expect(isValidPassword('Ha1!')).toBe(false); });
  it('bez wielkiej litery', () => { expect(isValidPassword('haslo123!')).toBe(false); });
  it('bez cyfry', () => { expect(isValidPassword('Haslo!abc')).toBe(false); });
  it('bez znaku specjalnego', () => { expect(isValidPassword('Haslo1234')).toBe(false); });
});

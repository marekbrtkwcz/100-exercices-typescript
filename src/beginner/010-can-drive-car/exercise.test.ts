import { describe, it, expect } from 'vitest';
import { canDriveCar } from './exercise';

describe('canDriveCar', () => {
  it('dorosły z prawem, trzeźwy', () => { expect(canDriveCar(25, true, false)).toBe(true); });
  it('pijany nie może', () => { expect(canDriveCar(25, true, true)).toBe(false); });
  it('bez prawa nie może', () => { expect(canDriveCar(25, false, false)).toBe(false); });
  it('niepełnoletni nie może', () => { expect(canDriveCar(16, true, false)).toBe(false); });
});

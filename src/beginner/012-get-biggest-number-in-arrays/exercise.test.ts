import { describe, it, expect } from 'vitest';
import { getBiggestNumberInArrays } from './exercise';

describe('getBiggestNumberInArrays', () => {
  it('znajduje max z podtablic', () => { expect(getBiggestNumberInArrays([[1, 5], [3, 9], [2, 7]])).toBe(9); });
  it('ujemne liczby', () => { expect(getBiggestNumberInArrays([[-1, -5], [-3, -2]])).toBe(-1); });
  it('jedna podtablica', () => { expect(getBiggestNumberInArrays([[42]])).toBe(42); });
});

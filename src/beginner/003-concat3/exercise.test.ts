import { describe, it, expect } from 'vitest';
import { concat3 } from './exercise';

describe('concat3', () => {
  it('łączy 3 stringi', () => { expect(concat3('Hello', ' ', 'World')).toBe('Hello World'); });
  it('bez spacji', () => { expect(concat3('a', 'b', 'c')).toBe('abc'); });
  it('puste stringi', () => { expect(concat3('', '', '')).toBe(''); });
});

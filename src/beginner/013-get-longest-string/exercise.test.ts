import { describe, it, expect } from 'vitest';
import { getLongestString } from './exercise';

describe('getLongestString', () => {
  it('najdłuższy string', () => { expect(getLongestString(['a', 'abc', 'ab'])).toBe('abc'); });
  it('remis zwraca pierwszy', () => { expect(getLongestString(['xx', 'yy'])).toBe('xx'); });
  it('pojedynczy element', () => { expect(getLongestString(['hello'])).toBe('hello'); });
});

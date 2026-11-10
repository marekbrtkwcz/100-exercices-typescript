import { describe, it, expect } from 'vitest';
import { parseQueryParams } from './exercise';

describe('parseQueryParams', () => {
  it('parsuje parametry', () => {
    expect(parseQueryParams('https://x.pl?a=1&b=hello')).toEqual({ a: '1', b: 'hello' });
  });
  it('bez query stringa', () => { expect(parseQueryParams('https://x.pl')).toEqual({}); });
  it('jeden parametr', () => { expect(parseQueryParams('https://x.pl?search=ts')).toEqual({ search: 'ts' }); });
});

import { describe, it, expect } from 'vitest';
import { simpleURLParser } from './exercise';

describe('simpleURLParser', () => {
  it('parsuje pełny URL', () => {
    expect(simpleURLParser('https://example.com:8080/api/users?page=2')).toEqual({
      protocol: 'https',
      host: 'example.com:8080',
      path: '/api/users',
      query: { page: '2' },
    });
  });
  it('bez query', () => {
    expect(simpleURLParser('http://localhost/')).toEqual({
      protocol: 'http',
      host: 'localhost',
      path: '/',
      query: {},
    });
  });
});

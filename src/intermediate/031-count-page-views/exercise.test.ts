import { describe, it, expect } from 'vitest';
import { countPageViews } from './exercise';

describe('countPageViews', () => {
  it('zlicza wyświetlenia', () => {
    const logs = [
      { page: '/home', timestamp: 1 },
      { page: '/home', timestamp: 2 },
      { page: '/about', timestamp: 3 },
    ];
    expect(countPageViews(logs)).toEqual({ '/home': 2, '/about': 1 });
  });
  it('puste logi', () => { expect(countPageViews([])).toEqual({}); });
});

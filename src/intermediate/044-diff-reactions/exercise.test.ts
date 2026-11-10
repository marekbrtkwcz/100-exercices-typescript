import { describe, it, expect } from 'vitest';
import { diffReactions } from './exercise';

describe('diffReactions', () => {
  it('zwraca zmienione reakcje', () => {
    expect(diffReactions({ like: 5, love: 2 }, { like: 5, love: 3, haha: 1 })).toEqual({ love: 3, haha: 1 });
  });
  it('usunięta reakcja = 0', () => {
    expect(diffReactions({ like: 5 }, {})).toEqual({ like: 0 });
  });
  it('bez zmian = pusty obiekt', () => {
    expect(diffReactions({ like: 5 }, { like: 5 })).toEqual({});
  });
});

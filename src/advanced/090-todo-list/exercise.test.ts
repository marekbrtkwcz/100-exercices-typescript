import { describe, it, expect } from 'vitest';
import { todoList } from './exercise';

describe('todoList', () => {
  it('add zwraca kolejne id', () => {
    const t = todoList();
    expect(t.add('pierwsze')).toBe(1);
    expect(t.add('drugie')).toBe(2);
  });
  it('complete oznacza jako done', () => {
    const t = todoList();
    const id = t.add('zadanie');
    expect(t.complete(id)).toBe(true);
    expect(t.list()[0]!.done).toBe(true);
  });
  it('complete na nieistniejącym = false', () => {
    const t = todoList();
    expect(t.complete(999)).toBe(false);
  });
  it('remove usuwa', () => {
    const t = todoList();
    const id = t.add('do usunięcia');
    expect(t.remove(id)).toBe(true);
    expect(t.list()).toEqual([]);
  });
  it('list zwraca wszystkie', () => {
    const t = todoList();
    t.add('a'); t.add('b');
    expect(t.list().map(x => x.text)).toEqual(['a', 'b']);
  });
});

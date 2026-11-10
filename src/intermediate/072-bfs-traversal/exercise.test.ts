import { describe, it, expect } from 'vitest';
import { bfsTraversal } from './exercise';

describe('bfsTraversal', () => {
  it('BFS kolejność', () => {
    const graph = { A: ['B', 'C'], B: ['D'], C: ['D'], D: [] };
    expect(bfsTraversal(graph, 'A')).toEqual(['A', 'B', 'C', 'D']);
  });
  it('pojedynczy węzeł', () => {
    expect(bfsTraversal({ X: [] }, 'X')).toEqual(['X']);
  });
});

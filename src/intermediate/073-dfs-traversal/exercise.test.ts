import { describe, it, expect } from 'vitest';
import { dfsTraversal } from './exercise';

describe('dfsTraversal', () => {
  it('DFS kolejność', () => {
    const graph = { A: ['B', 'C'], B: ['D'], C: ['D'], D: [] };
    expect(dfsTraversal(graph, 'A')).toEqual(['A', 'B', 'D', 'C']);
  });
  it('pojedynczy węzeł', () => {
    expect(dfsTraversal({ X: [] }, 'X')).toEqual(['X']);
  });
});

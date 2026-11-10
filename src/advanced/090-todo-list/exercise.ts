// TODO: zaimplementuj funkcję poniżej
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoList {
  add(text: string): number;
  complete(id: number): boolean;
  remove(id: number): boolean;
  list(): Todo[];
}

export function todoList(): TodoList {
  throw new Error('Not implemented');
}

import { describe, it, expect } from 'vitest';
import { classInheritance } from './exercise';

describe('classInheritance', () => {
  it('pies szczeka', () => {
    expect(classInheritance().speak()).toBe('Woof!');
  });
  it('pies jest też Animalem', () => {
    const dog = classInheritance();
    expect(dog).toBeInstanceOf(Object);
    expect(typeof dog.speak).toBe('function');
  });
});

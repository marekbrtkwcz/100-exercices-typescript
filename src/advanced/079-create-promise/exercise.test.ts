import { describe, it, expect } from 'vitest';
import { createPromise } from './exercise';

describe('createPromise', () => {
  it('resolve działa', async () => {
    const p = createPromise<number>((res) => res(42));
    expect(await p).toBe(42);
  });
  it('reject działa', async () => {
    const p = createPromise<number>((_, rej) => rej(new Error('fail')));
    await expect(p).rejects.toThrow('fail');
  });
});

import { describe, it, expect } from 'vitest';
import { getMissingContacts } from './exercise';

describe('getMissingContacts', () => {
  it('brak telefonu lub emaila', () => {
    const contacts = [
      { name: 'Jan', phone: '123', email: 'jan@x.pl' },
      { name: 'Anna', phone: '456' },
      { name: 'Piotr' },
    ];
    expect(getMissingContacts(contacts)).toEqual(['Anna', 'Piotr']);
  });
  it('wszyscy kompletni', () => {
    expect(getMissingContacts([{ name: 'Jan', phone: '1', email: 'j@x' }])).toEqual([]);
  });
});

import { describe, it, expect } from 'vitest';
import { groupBirthdays } from './exercise';

describe('groupBirthdays', () => {
  it('grupuje po miesiącu', () => {
    const people = [
      { name: 'Jan', birthday: new Date('1990-01-15') },
      { name: 'Anna', birthday: new Date('1985-01-20') },
      { name: 'Piotr', birthday: new Date('1992-06-10') },
    ];
    expect(groupBirthdays(people)).toEqual({
      styczeń: ['Jan', 'Anna'],
      czerwiec: ['Piotr'],
    });
  });
  it('pusta tablica', () => { expect(groupBirthdays([])).toEqual({}); });
});

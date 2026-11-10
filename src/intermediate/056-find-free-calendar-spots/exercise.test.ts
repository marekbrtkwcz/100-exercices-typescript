import { describe, it, expect } from 'vitest';
import { findFreeCalendarSpots } from './exercise';

describe('findFreeCalendarSpots', () => {
  it('znajduje wolne sloty', () => {
    expect(findFreeCalendarSpots([[9, 10], [11, 12]], 8, 17, 60)).toEqual([[8, 9], [10, 11], [12, 17]]);
  });
  it('brak zajętości = cały dzień', () => {
    expect(findFreeCalendarSpots([], 9, 17, 30)).toEqual([[9, 17]]);
  });
  it('zbyt krótkie sloty są pomijane', () => {
    expect(findFreeCalendarSpots([[9, 9.5]], 9, 17, 60)).toEqual([[9.5, 17]]);
  });
});

/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import  itemCounter  from "./mocks/itemCounter.js";


describe('Test the amount of items displayed', () => {
  it('Array of items to contain tv-series', () => {
    const itemsArray = [
      { name: 'Breaking Bad', genres: ['Drama', 'Crime', 'Thriller'], id: 104 },
      { name: 'Better Call Saul', genres: ['Drama', 'Crime', 'Legal'], id: 128 },
      { name: 'Suits', genres: ['Drama', 'Legal'], id: 42 },
      { name: 'Game of Thrones', genres: ['Drama', 'Adventure', 'Fantasy'], id: 39 },
    ];
   
    expect(itemCounter(itemsArray)).toBe(4);
  });

  it('Empty array of items', () => {
    const itemsArray = [
    ];
    expect(itemCounter(itemsArray)).toBe(0);
  });
});
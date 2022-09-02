import getMovies from '../displayMovies.js';
import { TestData } from './testData.js';

describe('Number of movies test', () => {
  test('Number of movies', () => {
    expect(getMovies(TestData.list1)).toBe(8);
  });
  test('Number of movies', () => {
    expect(getMovies(TestData.list2)).toBe(4);
  });
  test('Number of movies', () => {
    expect(getMovies(TestData.list3)).toBe(2);
  });
});
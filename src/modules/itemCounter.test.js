import movieCounter from './itemCounter.js';

test('items counter check ', () => {
  const arr = [
    {
      id: 3,
    },
  ];
  const counter = movieCounter(arr);

  expect(counter).toBe(1);
});
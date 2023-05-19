import { sortArr } from '../pages/counter/utils';

test('Sorting in positive order', () => {
  const arr = [3600, 5010, 10100, 801];
  expect(arr.sort(sortArr)).toEquale([10100, 5010, 3600, 801]);
});

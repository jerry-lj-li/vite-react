import { sortArr, sortArr1 } from '../pages/counter/utils';

test('Sorting in positive order', () => {
  const arr = [3600, 5010, 10100, 801];
  expect(arr.sort(sortArr)).toEqual([801, 3600, 5010, 10100]);
});

test('Sorting in reverse order', () => {
  const arr = [3600, 5010, 10100, 801];
  expect(arr.sort(sortArr1)).toEqual([10100, 5010, 3600, 801]);
});

import { normalizeStep } from '../src/components/stepper-state';

test.each([
  [0, 3, 0],
  [1, 3, 1],
  [2, 3, 2],
  [-1, 3, 0],
  [9, 3, 2],
  [1.9, 3, 1],
  [NaN, 3, 0],
  [Infinity, 3, 0],
  [2, 0, 0],
])('normalizes step %s with %s steps to %s', (current, count, expected) => {
  expect(normalizeStep(current, count)).toBe(expected);
});

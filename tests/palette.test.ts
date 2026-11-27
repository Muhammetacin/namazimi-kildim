import { palette } from '../src/theme/palette';

test('preserves approved primary design tokens', () => {
  expect(palette.background).toBe('#F5EEE3');
  expect(palette.primary).toBe('#086347');
  expect(palette.text).toBe('#40362B');
});

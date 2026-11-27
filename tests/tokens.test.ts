import { palette } from '../src/theme/palette';
import { tokens } from '../src/theme/tokens';

test('uses the approved palette without substitutions', () => {
  expect(tokens.colors).toBe(palette);
});

test('provides a minimum accessible touch target', () => {
  expect(tokens.touchTarget).toBeGreaterThanOrEqual(44);
});

test('keeps typography hierarchy and bounded desktop content', () => {
  expect(tokens.typography.title).toBeGreaterThan(tokens.typography.body);
  expect(tokens.contentWidth).toBeGreaterThan(320);
});

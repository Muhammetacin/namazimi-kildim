import { StyleSheet } from 'react-native';
import { Button } from '../src/components/Button';
import { Icon } from '../src/components/Icon';
import { iconShapes } from '../src/components/icon-shapes';
import { LanguageFlag } from '../src/components/LanguageFlag';
import { OnboardingStepper } from '../src/components/OnboardingStepper';
import { TrackingSquare } from '../src/components/TrackingSquare';
import { tokens } from '../src/theme/tokens';

test('button exposes its disabled state and minimum touch height', () => {
  const button = Button({ label: 'İleri', onPress: jest.fn(), disabled: true });
  expect(button.props.accessibilityRole).toBe('button');
  expect(button.props.accessibilityState.disabled).toBe(true);
  expect(button.props.disabled).toBe(true);
  const style = StyleSheet.flatten(button.props.style({ pressed: false }));
  expect(style.minHeight).toBeGreaterThanOrEqual(tokens.touchTarget);
});

test('tracking square exposes recorded and disabled state', () => {
  const onPress = jest.fn();
  const square = TrackingSquare({ label: 'Sabah', recorded: true, onPress });
  expect(square.props.accessibilityRole).toBe('checkbox');
  expect(square.props.accessibilityLabel).toBe('Sabah');
  expect(square.props.accessibilityState).toEqual({
    checked: true,
    disabled: false,
  });
  square.props.onPress();
  expect(onPress).toHaveBeenCalledTimes(1);
  const style = StyleSheet.flatten(square.props.style);
  expect(style.minWidth).toBeGreaterThanOrEqual(tokens.touchTarget);
});

test('icons expose a label only when informative', () => {
  const decorative = Icon({ name: 'check' });
  expect(decorative.props.accessible).toBe(false);
  expect(decorative.props.accessibilityElementsHidden).toBe(true);
  expect(decorative.props.importantForAccessibility).toBe(
    'no-hide-descendants',
  );
  const info = Icon({ name: 'info', label: 'Bilgi' });
  expect(info.props.accessibilityLabel).toBe('Bilgi');
  expect(info.props.accessible).toBe(true);
  expect(info.props.accessibilityElementsHidden).toBe(false);
  expect(info.props.importantForAccessibility).toBe('auto');
});

test('language flags expose labels and handle invalid codes', () => {
  const flag = LanguageFlag({ countryCode: 'tr', label: 'Türkçe' });
  expect(flag.props.accessibilityLabel).toBe('Türkçe');
  expect(flag.props.children.props.children).toBe('🇹🇷');
  const fallback = LanguageFlag({ countryCode: '', label: 'Dil' });
  expect(fallback.props.children.props.children).toBe('—');
});

test('empty onboarding steps render nothing', () => {
  expect(OnboardingStepper({ steps: [], current: 0 })).toBeNull();
});

test('unrecorded disabled tracking square exposes both states', () => {
  const square = TrackingSquare({
    label: 'Sabah',
    recorded: false,
    disabled: true,
    onPress: jest.fn(),
  });
  expect(square.props.disabled).toBe(true);
  expect(square.props.accessibilityState).toEqual({
    checked: false,
    disabled: true,
  });
  const style = StyleSheet.flatten(square.props.style);
  expect(style.minHeight).toBeGreaterThanOrEqual(tokens.touchTarget);
});

test('enabled button forwards its action', () => {
  const onPress = jest.fn();
  const button = Button({ label: 'İleri', onPress });
  expect(button.props.disabled).toBe(false);
  button.props.onPress();
  expect(onPress).toHaveBeenCalledTimes(1);
});

test.each(['ß', 'ıı', 'TR\n', 'T1'])('rejects invalid flag code %s', (code) => {
  const flag = LanguageFlag({ countryCode: code, label: 'Dil' });
  expect(flag.props.children.props.children).toBe('—');
});

test('shape icons keep the label contract and use the requested size', () => {
  const icon = Icon({ name: 'settings', label: 'Ayarlar', size: 48 });
  expect(icon.props.accessibilityLabel).toBe('Ayarlar');
  expect(icon.props.accessible).toBe(true);
  expect(icon.props.importantForAccessibility).toBe('auto');
  expect(StyleSheet.flatten(icon.props.style)).toMatchObject({
    width: 48,
    height: 48,
  });
  expect(icon.props.children).toHaveLength(iconShapes.settings.length);
});

test('decorative shape icons are hidden from accessibility', () => {
  const icon = Icon({ name: 'grid' });
  expect(icon.props.accessible).toBe(false);
  expect(icon.props.accessibilityElementsHidden).toBe(true);
  expect(icon.props.importantForAccessibility).toBe('no-hide-descendants');
});

test('shape icons draw every part in the requested color', () => {
  const icon = Icon({ name: 'clock', color: '#123456' });
  for (const part of icon.props.children) {
    expect(part.props.style.borderColor).toBe('#123456');
  }
});

test('glyph icons also use the requested color', () => {
  const icon = Icon({ name: 'check', color: '#123456' });
  expect(StyleSheet.flatten(icon.props.style).color).toBe('#123456');
});

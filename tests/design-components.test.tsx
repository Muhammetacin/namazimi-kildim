import { StyleSheet } from 'react-native';
import { Button } from '../src/components/Button';
import { Icon } from '../src/components/Icon';
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
  expect(Icon({ name: 'check' }).props.accessible).toBe(false);
  const info = Icon({ name: 'info', label: 'Bilgi' });
  expect(info.props.accessibilityLabel).toBe('Bilgi');
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

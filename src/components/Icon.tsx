import { Text } from 'react-native';
import { tokens } from '../theme/tokens';

const glyphs = {
  clock: '◷',
  list: '☰',
  check: '✓',
  back: '‹',
  next: '›',
  close: '×',
  add: '+',
  info: 'ⓘ',
} as const;

type Props = { name: keyof typeof glyphs; label?: string };

export function Icon({ name, label }: Props) {
  return (
    <Text
      accessible={Boolean(label)}
      accessibilityElementsHidden={!label}
      importantForAccessibility={label ? 'auto' : 'no-hide-descendants'}
      accessibilityLabel={label}
      style={{ color: tokens.colors.primary, fontSize: tokens.typography.body }}
    >
      {glyphs[name] ?? '?'}
    </Text>
  );
}

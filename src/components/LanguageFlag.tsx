import { Text, View } from 'react-native';
import { tokens } from '../theme/tokens';

type Props = { countryCode: string; label: string };

export function LanguageFlag({ countryCode, label }: Props) {
  const code = countryCode.toUpperCase();
  const flag = /^[A-Z]{2}$/.test(code)
    ? String.fromCodePoint(...Array.from(code, (c) => c.charCodeAt(0) + 127397))
    : '—';

  return (
    <View accessible accessibilityLabel={label}>
      <Text style={{ fontSize: tokens.typography.heading }}>{flag}</Text>
    </View>
  );
}

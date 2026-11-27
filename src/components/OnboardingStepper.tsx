import { StyleSheet, Text, View } from 'react-native';
import { tokens } from '../theme/tokens';

type Props = { steps: readonly string[]; current: number };

export function OnboardingStepper({ steps, current }: Props) {
  if (steps.length === 0) return null;
  const active = Math.min(Math.max(current, 0), steps.length - 1);

  return (
    <View style={styles.row}>
      {steps.map((label, index) => (
        <View key={index} style={styles.step}>
          <Text
            accessibilityLabel={`${index + 1}. ${label}`}
            accessibilityState={{ selected: index === active }}
            style={index === active ? styles.active : styles.number}
          >
            {index + 1}
          </Text>
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: tokens.spacing.sm },
  step: { alignItems: 'center', flexGrow: 1, gap: tokens.spacing.xs },
  number: { color: tokens.colors.text, fontSize: tokens.typography.body },
  active: {
    color: tokens.colors.primary,
    fontSize: tokens.typography.body,
    fontWeight: '700',
  },
  label: { color: tokens.colors.text, fontSize: tokens.typography.caption },
});

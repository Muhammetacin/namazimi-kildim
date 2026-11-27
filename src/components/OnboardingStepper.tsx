import { StyleSheet, Text, View } from 'react-native';
import { tokens } from '../theme/tokens';

type Props = { steps: readonly string[]; current: number };

export function OnboardingStepper({ steps, current }: Props) {
  if (steps.length === 0) return null;
  const active = Number.isFinite(current)
    ? Math.min(Math.max(Math.trunc(current), 0), steps.length - 1)
    : 0;

  return (
    <View style={styles.row}>
      {steps.map((label, index) => (
        <View key={index} style={styles.step}>
          <View style={styles.track}>
            <View style={[styles.line, index === 0 && styles.hidden]} />
            <View style={[styles.circle, index === active && styles.active]}>
              <Text
                accessibilityLabel={`${index + 1}. ${label}`}
                accessibilityState={{ selected: index === active }}
                style={styles.number}
              >
                {index + 1}
              </Text>
            </View>
            <View
              style={[styles.line, index === steps.length - 1 && styles.hidden]}
            />
          </View>
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  step: { flex: 1, alignItems: 'center', gap: tokens.spacing.xs },
  track: { flexDirection: 'row', alignItems: 'center', width: '100%' },
  line: { flex: 1, height: 2, backgroundColor: tokens.colors.border },
  hidden: { opacity: 0 },
  circle: {
    minWidth: 32,
    minHeight: 32,
    borderRadius: 16,
    padding: tokens.spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colors.inactive,
  },
  active: { backgroundColor: tokens.colors.selected },
  number: { color: tokens.colors.text, fontWeight: '700' },
  label: {
    color: tokens.colors.text,
    fontSize: tokens.typography.caption,
    textAlign: 'center',
  },
});

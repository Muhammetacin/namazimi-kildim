import { Pressable, StyleSheet, Text } from 'react-native';
import { tokens } from '../theme/tokens';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({ label, onPress, disabled = false }: Props) {
  const labelStyle = [styles.label, disabled && styles.disabledLabel];
  const buttonStyle = [styles.button, disabled && styles.disabled];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [...buttonStyle, pressed && styles.pressed]}
    >
      <Text style={labelStyle}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: tokens.touchTarget,
    backgroundColor: tokens.colors.primary,
    borderRadius: tokens.radius.small,
    padding: tokens.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: { backgroundColor: tokens.colors.inactive },
  pressed: { opacity: 0.85 },
  label: {
    color: tokens.colors.white,
    fontSize: tokens.typography.body,
    fontWeight: '600',
  },
  disabledLabel: { color: tokens.colors.text },
});

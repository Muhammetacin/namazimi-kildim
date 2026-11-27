import { Pressable, StyleSheet, Text, View } from 'react-native';
import { tokens } from '../theme/tokens';

type Props = {
  label: string;
  recorded: boolean;
  onPress: () => void;
  disabled?: boolean;
};

export function TrackingSquare({
  label,
  recorded,
  onPress,
  disabled = false,
}: Props) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityLabel={label}
      accessibilityState={{ checked: recorded, disabled }}
      disabled={disabled}
      onPress={onPress}
      style={styles.target}
    >
      <View style={[styles.square, recorded && styles.recorded]}>
        {recorded && <Text style={styles.mark}>✓</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  target: {
    minWidth: tokens.touchTarget,
    minHeight: tokens.touchTarget,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 28,
    height: 28,
    borderRadius: tokens.radius.small,
    backgroundColor: tokens.colors.inactive,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recorded: { backgroundColor: tokens.colors.primary },
  mark: { color: tokens.colors.white, fontWeight: '600' },
});

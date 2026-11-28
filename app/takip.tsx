import { StyleSheet, Text } from 'react-native';
import { Screen } from '../src/components/Screen';
import { tokens } from '../src/theme/tokens';

export default function Page() {
  return (
    <Screen>
      <Text accessibilityRole="header" style={styles.heading}>
        Namaz Takibi
      </Text>
      <Text style={styles.text}>Henüz takip verisi yok.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: tokens.colors.primary,
    fontSize: tokens.typography.heading,
    fontWeight: '600',
  },
  text: { color: tokens.colors.text, fontSize: tokens.typography.body },
});

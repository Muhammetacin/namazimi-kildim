import { useRouter } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Button } from '../src/components/Button';
import { Screen } from '../src/components/Screen';
import { tokens } from '../src/theme/tokens';

export default function Settings() {
  const router = useRouter();

  return (
    <Screen>
      <Text accessibilityRole="header" style={styles.heading}>
        Ayarlar
      </Text>
      <Button label="Geri" onPress={() => router.replace('/')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: tokens.colors.primary,
    fontSize: tokens.typography.heading,
  },
});

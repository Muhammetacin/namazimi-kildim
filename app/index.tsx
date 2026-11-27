import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../src/components/Button';
import { Screen } from '../src/components/Screen';
import { tokens } from '../src/theme/tokens';

export default function Home() {
  const router = useRouter();

  return (
    <Screen>
      <View style={styles.container}>
        <Text accessibilityRole="header" style={styles.title}>
          Namazımı Kıldım!
        </Text>
        <Text style={styles.subtitle}>Vaktini bil, ibadetini takip et.</Text>
        <Button label="Başla" onPress={() => router.push('/onboarding')} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { gap: tokens.spacing.md },
  title: {
    color: tokens.colors.primary,
    fontSize: tokens.typography.title,
    fontWeight: '600',
  },
  subtitle: { color: tokens.colors.text, fontSize: tokens.typography.body },
});

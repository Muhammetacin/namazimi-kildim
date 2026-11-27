import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../src/theme/palette';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>
        Namazımı Kıldım!
      </Text>
      <Text style={styles.subtitle}>Vaktini bil, ibadetini takip et.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.background,
    padding: 24,
  },
  title: { color: palette.primary, fontSize: 26, fontWeight: '600' },
  subtitle: { color: palette.text, marginTop: 8 },
});

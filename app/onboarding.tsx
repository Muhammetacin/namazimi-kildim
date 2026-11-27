import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from '../src/components/Button';
import { OnboardingStepper } from '../src/components/OnboardingStepper';
import { Screen } from '../src/components/Screen';
import { tokens } from '../src/theme/tokens';

const steps = ['Dil', 'Konum', 'Bildirim'];

export default function Onboarding() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  return (
    <Screen>
      <OnboardingStepper steps={steps} current={current} />
      <Text accessibilityRole="header" style={styles.heading}>
        {steps[current]}
      </Text>
      <Button
        label="Geri"
        onPress={() => {
          if (current > 0) setCurrent(current - 1);
          else router.replace('/');
        }}
      />
      <Button
        label={current === steps.length - 1 ? 'Bitir' : 'İleri'}
        onPress={() => {
          if (current < steps.length - 1) setCurrent(current + 1);
          else router.replace('/');
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: tokens.colors.text,
    fontSize: tokens.typography.heading,
  },
});

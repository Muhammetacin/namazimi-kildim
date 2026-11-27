import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from '../src/components/Button';
import { OnboardingStepper } from '../src/components/OnboardingStepper';
import { Screen } from '../src/components/Screen';
import { tokens } from '../src/theme/tokens';
import {
  moveOnboarding,
  onboardingSteps,
} from '../src/components/onboarding-navigation';

export default function Onboarding() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  function move(direction: 'back' | 'next') {
    const next = moveOnboarding(current, direction);
    if (next === 'home') router.replace('/');
    else setCurrent(next);
  }

  return (
    <Screen>
      <OnboardingStepper steps={onboardingSteps} current={current} />
      <Text accessibilityRole="header" style={styles.heading}>
        {onboardingSteps[current]}
      </Text>
      <Button label="Geri" onPress={() => move('back')} />
      <Button
        label={current === onboardingSteps.length - 1 ? 'Bitir' : 'İleri'}
        onPress={() => move('next')}
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

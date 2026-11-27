import { normalizeStep } from './stepper-state';

export const onboardingSteps = ['Dil', 'Konum', 'Bildirim'] as const;

export function moveOnboarding(
  current: number,
  direction: 'back' | 'next',
): number | 'home' {
  const active = normalizeStep(current, onboardingSteps.length);
  const next = active + (direction === 'back' ? -1 : 1);
  return next < 0 || next >= onboardingSteps.length ? 'home' : next;
}

import {
  moveOnboarding,
  onboardingSteps,
} from '../src/components/onboarding-navigation';

test('preserves the approved onboarding sequence', () => {
  expect(onboardingSteps).toEqual(['Dil', 'Konum', 'Bildirim']);
});

test('advances through steps and returns home on completion', () => {
  expect(moveOnboarding(0, 'next')).toBe(1);
  expect(moveOnboarding(1, 'next')).toBe(2);
  expect(moveOnboarding(2, 'next')).toBe('home');
});

test('goes back without leaving an invalid step', () => {
  expect(moveOnboarding(2, 'back')).toBe(1);
  expect(moveOnboarding(1, 'back')).toBe(0);
  expect(moveOnboarding(0, 'back')).toBe('home');
});

test('normalizes invalid step values before navigation', () => {
  expect(moveOnboarding(NaN, 'next')).toBe(1);
  expect(moveOnboarding(99, 'next')).toBe('home');
});

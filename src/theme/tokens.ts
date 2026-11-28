import { palette } from './palette';

export const tokens = {
  colors: palette,
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  radius: { small: 6, card: 12 },
  typography: { caption: 14, body: 16, heading: 24, title: 28 },
  touchTarget: 48,
  contentWidth: 640,
} as const;

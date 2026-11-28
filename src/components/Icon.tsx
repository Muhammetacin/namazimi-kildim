import { Text, View } from 'react-native';
import { tokens } from '../theme/tokens';
import {
  ICON_GRID,
  iconShapes,
  isShapeIconName,
  toBoxes,
  type ShapeIconName,
} from './icon-shapes';

const glyphs = {
  check: '✓',
  back: '‹',
  next: '›',
  close: '×',
  add: '+',
  info: 'ⓘ',
} as const;

export type IconName = keyof typeof glyphs | ShapeIconName;

type Props = {
  name: IconName;
  label?: string;
  color?: string;
  size?: number;
};

export function Icon({
  name,
  label,
  color = tokens.colors.primary,
  size = ICON_GRID,
}: Props) {
  const accessibility = {
    accessible: Boolean(label),
    accessibilityElementsHidden: !label,
    importantForAccessibility: label
      ? ('auto' as const)
      : ('no-hide-descendants' as const),
    accessibilityLabel: label,
  };

  if (isShapeIconName(name)) {
    return (
      <View {...accessibility} style={{ width: size, height: size }}>
        {toBoxes(iconShapes[name], size).map((box, index) => (
          <View
            key={index}
            style={{
              position: 'absolute',
              left: box.left,
              top: box.top,
              width: box.width,
              height: box.height,
              borderRadius: box.borderRadius,
              borderWidth: box.borderWidth,
              borderColor: color,
              backgroundColor: box.filled ? color : 'transparent',
              transform: box.rotateDeg
                ? [{ rotate: `${box.rotateDeg}deg` }]
                : [],
            }}
          />
        ))}
      </View>
    );
  }

  return (
    <Text
      {...accessibility}
      style={{ color, fontSize: tokens.typography.body }}
    >
      {glyphs[name] ?? '?'}
    </Text>
  );
}

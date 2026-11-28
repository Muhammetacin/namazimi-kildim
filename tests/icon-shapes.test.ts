import {
  ICON_GRID,
  iconShapes,
  isShapeIconName,
  toBoxes,
  type Box,
} from '../src/components/icon-shapes';

function corners(box: Box) {
  const cx = box.left + box.width / 2;
  const cy = box.top + box.height / 2;
  const angle = (box.rotateDeg * Math.PI) / 180;
  return [
    [-box.width / 2, -box.height / 2],
    [box.width / 2, -box.height / 2],
    [box.width / 2, box.height / 2],
    [-box.width / 2, box.height / 2],
  ].map(([x, y]) => [
    cx + x * Math.cos(angle) - y * Math.sin(angle),
    cy + x * Math.sin(angle) + y * Math.cos(angle),
  ]);
}

test.each(Object.keys(iconShapes) as (keyof typeof iconShapes)[])(
  '%s icon stays inside its square at every size',
  (name) => {
    for (const size of [16, 24, 48]) {
      for (const box of toBoxes(iconShapes[name], size)) {
        for (const [x, y] of corners(box)) {
          expect(x).toBeGreaterThanOrEqual(-0.001);
          expect(y).toBeGreaterThanOrEqual(-0.001);
          expect(x).toBeLessThanOrEqual(size + 0.001);
          expect(y).toBeLessThanOrEqual(size + 0.001);
        }
      }
    }
  },
);

test('settings icon is two sliders: four line segments and two knobs', () => {
  const boxes = toBoxes(iconShapes.settings, ICON_GRID);
  expect(boxes.filter((box) => box.filled)).toHaveLength(4);
  expect(boxes.filter((box) => !box.filled)).toHaveLength(2);
  expect(boxes.every((box) => box.rotateDeg === 0)).toBe(true);
});

test('navigation icons use the approved shape counts', () => {
  expect(iconShapes.clock).toHaveLength(3);
  expect(iconShapes.calendar).toHaveLength(4);
  expect(iconShapes.grid).toHaveLength(4);
});

test('clock minute hand points to about 4 o’clock', () => {
  const hand = toBoxes(iconShapes.clock, ICON_GRID)[2];
  expect(hand.rotateDeg).toBeCloseTo(36.87, 1);
});

test('boxes scale linearly with the icon size', () => {
  const small = toBoxes(iconShapes.clock, 24)[0];
  const large = toBoxes(iconShapes.clock, 48)[0];
  expect(large.width).toBeCloseTo(small.width * 2, 5);
  expect(large.borderWidth).toBeCloseTo(small.borderWidth * 2, 5);
});

test.each(['clock', 'calendar', 'grid', 'settings'])(
  'recognizes shape icon %s',
  (name) => {
    expect(isShapeIconName(name)).toBe(true);
  },
);

test.each(['check', 'info', 'toString', '__proto__', ''])(
  'does not treat %s as a shape icon',
  (name) => {
    expect(isShapeIconName(name)).toBe(false);
  },
);

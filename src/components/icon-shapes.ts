/**
 * Geometry of the approved Final Design v1.3 navigation icons.
 * Coordinates use a 24 x 24 grid with a 1.5 stroke, matching the reference
 * prototype. The shapes are plain data so they render identically on iOS,
 * Android and web without an SVG dependency, and so they can be tested.
 */
export const ICON_GRID = 24;
export const ICON_STROKE = 1.5;

export type Shape =
  | { kind: 'ring'; cx: number; cy: number; r: number }
  | { kind: 'rect'; x: number; y: number; w: number; h: number; r: number }
  | { kind: 'line'; x1: number; y1: number; x2: number; y2: number };

export const iconShapes = {
  clock: [
    { kind: 'ring', cx: 12, cy: 12, r: 9 },
    { kind: 'line', x1: 12, y1: 6, x2: 12, y2: 12 },
    { kind: 'line', x1: 12, y1: 12, x2: 16, y2: 15 },
  ],
  calendar: [
    { kind: 'rect', x: 3, y: 5, w: 18, h: 16, r: 2 },
    { kind: 'line', x1: 7, y1: 3, x2: 7, y2: 7 },
    { kind: 'line', x1: 17, y1: 3, x2: 17, y2: 7 },
    { kind: 'line', x1: 3, y1: 10, x2: 21, y2: 10 },
  ],
  grid: [
    { kind: 'rect', x: 3, y: 3, w: 7, h: 7, r: 1 },
    { kind: 'rect', x: 14, y: 3, w: 7, h: 7, r: 1 },
    { kind: 'rect', x: 3, y: 14, w: 7, h: 7, r: 1 },
    { kind: 'rect', x: 14, y: 14, w: 7, h: 7, r: 1 },
  ],
  // Slider lines end 0.5 inside the knob stroke so their round caps never
  // poke into the hollow knob when the renderer anti-aliases the edges.
  settings: [
    { kind: 'line', x1: 4, y1: 7, x2: 13.5, y2: 7 },
    { kind: 'line', x1: 18.5, y1: 7, x2: 20, y2: 7 },
    { kind: 'ring', cx: 16, cy: 7, r: 2 },
    { kind: 'line', x1: 4, y1: 17, x2: 5.5, y2: 17 },
    { kind: 'line', x1: 10.5, y1: 17, x2: 20, y2: 17 },
    { kind: 'ring', cx: 8, cy: 17, r: 2 },
  ],
} as const satisfies Record<string, readonly Shape[]>;

export type ShapeIconName = keyof typeof iconShapes;

export function isShapeIconName(name: string): name is ShapeIconName {
  return Object.prototype.hasOwnProperty.call(iconShapes, name);
}

export type Box = {
  left: number;
  top: number;
  width: number;
  height: number;
  borderRadius: number;
  borderWidth: number;
  /** Solid fill (lines) instead of an outline (rings and rectangles). */
  filled: boolean;
  rotateDeg: number;
};

/** Converts shapes on the 24 grid to absolutely positioned boxes for `size`. */
export function toBoxes(shapes: readonly Shape[], size: number): Box[] {
  const scale = size / ICON_GRID;
  const stroke = ICON_STROKE * scale;

  return shapes.map((shape): Box => {
    if (shape.kind === 'ring') {
      const diameter = shape.r * 2 * scale + stroke;
      return {
        left: shape.cx * scale - diameter / 2,
        top: shape.cy * scale - diameter / 2,
        width: diameter,
        height: diameter,
        borderRadius: diameter / 2,
        borderWidth: stroke,
        filled: false,
        rotateDeg: 0,
      };
    }
    if (shape.kind === 'rect') {
      return {
        left: shape.x * scale - stroke / 2,
        top: shape.y * scale - stroke / 2,
        width: shape.w * scale + stroke,
        height: shape.h * scale + stroke,
        borderRadius: shape.r * scale + stroke / 2,
        borderWidth: stroke,
        filled: false,
        rotateDeg: 0,
      };
    }
    const dx = shape.x2 - shape.x1;
    const dy = shape.y2 - shape.y1;
    const width = Math.hypot(dx, dy) * scale + stroke;
    return {
      left: ((shape.x1 + shape.x2) / 2) * scale - width / 2,
      top: ((shape.y1 + shape.y2) / 2) * scale - stroke / 2,
      width,
      height: stroke,
      borderRadius: stroke / 2,
      borderWidth: 0,
      filled: true,
      rotateDeg: (Math.atan2(dy, dx) * 180) / Math.PI,
    };
  });
}

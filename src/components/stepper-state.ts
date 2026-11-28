export function normalizeStep(current: number, count: number): number {
  if (count <= 0 || !Number.isFinite(current)) return 0;
  return Math.min(Math.max(Math.trunc(current), 0), count - 1);
}

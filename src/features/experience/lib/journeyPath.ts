export interface Point {
  /** horizontal position in viewBox units (0 = left, 100 = right) */
  x: number;
  /** vertical position in viewBox units (0 = top, 100 = bottom) */
  y: number;
}

export interface JourneyLayout {
  start: Point;
  /** one point per milestone, in order */
  nodes: Point[];
  /** where the "Next Chapter" teaser sits, continuing the trail past the last milestone */
  end: Point;
  /** start + milestones + end, used to draw the connecting path */
  points: Point[];
}

/**
 * Lays milestones out along a vertical, zig-zagging path (Duolingo style).
 * The trail begins at a "Start" marker, runs through every milestone and
 * continues on to an "end" point where the "Next Chapter" teaser sits — the
 * story isn't over yet. All coordinates are normalized to a 0-100 viewBox so
 * the same numbers drive both the SVG connector and the absolutely-positioned
 * nodes, keeping them aligned at any screen size.
 */
export function getJourneyLayout(count: number, amplitude = 22): JourneyLayout {
  const start: Point = { x: 50, y: 4 };
  const topNode = 20;
  const bottomNode = 78;

  const nodes: Point[] = Array.from({ length: count }, (_, i) => {
    const t = count <= 1 ? 0.5 : i / (count - 1);
    return {
      x: 50 + (i % 2 === 0 ? -amplitude : amplitude),
      y: topNode + t * (bottomNode - topNode),
    };
  });

  const end: Point = {
    x: 50 + (count % 2 === 0 ? -amplitude : amplitude),
    y: 95,
  };

  return { start, nodes, end, points: [start, ...nodes, end] };
}

/**
 * Builds a smooth SVG cubic-bezier `d` string that flows through every point
 * (Catmull-Rom style smoothing) so the path reads as one premium curve
 * instead of connected straight segments.
 */
export function buildSmoothPath(points: Point[], smoothing = 0.2): string {
  if (points.length < 2) return "";

  const line = (a: Point, b: Point) => ({
    length: Math.hypot(b.x - a.x, b.y - a.y),
    angle: Math.atan2(b.y - a.y, b.x - a.x),
  });

  const controlPoint = (
    current: Point,
    previous: Point | undefined,
    next: Point | undefined,
    reverse = false,
  ): [number, number] => {
    const p = previous ?? current;
    const n = next ?? current;
    const o = line(p, n);
    const angle = o.angle + (reverse ? Math.PI : 0);
    const length = o.length * smoothing;
    return [current.x + Math.cos(angle) * length, current.y + Math.sin(angle) * length];
  };

  return points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const [cp1x, cp1y] = controlPoint(points[i - 1], points[i - 2], point);
    const [cp2x, cp2y] = controlPoint(point, points[i - 1], points[i + 1], true);
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  }, "");
}

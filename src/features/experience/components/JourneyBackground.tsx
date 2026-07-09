/** deterministic pseudo-random so stars stay put across re-renders */
const rand = (seed: number) => {
  const x = Math.sin(seed * 999.7) * 10000;
  return x - Math.floor(x);
};

const STARS = Array.from({ length: 90 }, (_, i) => {
  const roll = rand(i + 101);
  return {
    x: rand(i + 1) * 100,
    y: rand(i + 51) * 100,
    size: roll < 0.12 ? 2.4 : roll < 0.45 ? 1.5 : 0.9,
    twinkle: rand(i + 151) > 0.35,
    delay: rand(i + 201) * 4,
    duration: 2.4 + rand(i + 251) * 3.5,
  };
});

/** a couple of faint constellations (line vertices), drawn as patterns */
const CONSTELLATIONS = [
  [
    { x: 12, y: 16 },
    { x: 19, y: 24 },
    { x: 27, y: 20 },
    { x: 31, y: 30 },
    { x: 23, y: 35 },
  ],
  [
    { x: 80, y: 58 },
    { x: 86, y: 64 },
    { x: 90, y: 55 },
    { x: 84, y: 49 },
    { x: 91, y: 44 },
  ],
];

/**
 * Deep-space backdrop: a twinkling starfield, a few faint constellations and
 * occasional shooting stars. Purely decorative and aria-hidden. No bright
 * glow blobs — just quiet outer space.
 */
const JourneyBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* deep space vignette for subtle depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(126,98,243,0.08), transparent 60%), radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.55))",
        }}
      />

      {/* starfield */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#EDF0F7]"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.twinkle ? undefined : 0.5,
            boxShadow: s.size > 2 ? "0 0 6px rgba(237,240,247,0.8)" : undefined,
            animation: s.twinkle
              ? `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`
              : undefined,
          }}
        />
      ))}

      {/* constellations: faint connecting lines + vertex dots */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {CONSTELLATIONS.map((pts, ci) => (
          <polyline
            key={ci}
            points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="#7E62F3"
            strokeOpacity={0.25}
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {CONSTELLATIONS.flat().map((p, i) => (
        <span
          key={`c-${i}`}
          className="absolute h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7E62F3]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: "0 0 6px rgba(126,98,243,0.8)",
          }}
        />
      ))}
    </div>
  );
};

export default JourneyBackground;

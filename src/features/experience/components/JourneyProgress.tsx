import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import type { Experience } from "@/features/experience/types/experience";
import { getJourneyStats } from "@/features/experience/lib/journeyStats";

interface JourneyProgressProps {
  experiences: Experience[];
}

interface TileData {
  value: string;
  label: string;
}

interface TileProps extends TileData {
  big?: boolean;
}

/** Animates an integer from 0 up to `value` once the tile scrolls into view. */
const useCountUp = (value: number, inView: boolean) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 900;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return display;
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

const Tile = ({ value, label, big }: TileProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const numericValue = /^\d+$/.test(value) ? Number(value) : null;
  const countUp = useCountUp(numericValue ?? 0, inView && numericValue !== null);
  const displayValue = numericValue !== null ? String(countUp) : value;

  return (
    <motion.div
      ref={ref}
      variants={item}
      className="flex h-full flex-col rounded-[3px] border border-[#EDF0F7]/10 bg-[#EDF0F7]/[0.03] p-4 transition-colors duration-300 hover:border-[#7E62F3]/50 md:p-5"
    >
      <div className="flex items-center gap-3">
        <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-[#7E62F3]">
          {label}
        </span>
        <span aria-hidden className="h-px flex-1 bg-[#EDF0F7]/10" />
      </div>
      <p
        className={`mt-auto pt-3 font-bold tabular-nums text-[#EDF0F7] ${
          big ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
        }`}
      >
        {displayValue}
      </p>
    </motion.div>
  );
};

/**
 * Flat editorial stat tiles summarising the journey — fully derived from the
 * experiences data (nothing hardcoded). Same visual language as the experience
 * modal: sharp corners, thin neutral borders, one purple accent, label + hairline.
 */
const JourneyProgress = ({ experiences }: JourneyProgressProps) => {
  const stats = getJourneyStats(experiences);

  const tiles: TileData[] = [
    { value: String(stats.total), label: "Milestones" },
    { value: `${stats.startYear} → ${stats.endYear}`, label: "Timeline" },
    ...stats.byType.map((t) => ({
      value: String(t.count),
      label: t.label,
    })),
  ];

  // Milestones + Timeline always exist, so they form a fixed "hero" row.
  // Everything else (one tile per experience type) flows into an even grid
  // below it — no fixed row-spans, so it never leaves a gap regardless of
  // how many types the data ends up having.
  const [milestones, timeline, ...byType] = tiles;

  return (
    <div className="relative z-10 mx-auto max-w-2xl">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col gap-3"
      >
        <div className="grid grid-cols-2 gap-3">
          <Tile {...milestones} big />
          <Tile {...timeline} />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {byType.map((t) => (
            <Tile key={t.label} {...t} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default JourneyProgress;

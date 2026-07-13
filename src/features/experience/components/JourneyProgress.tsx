import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
  Briefcase,
  CalendarRange,
  Code2,
  Flag,
  GraduationCap,
  Globe,
  Laptop,
  Presentation,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { Experience, ExperienceType } from "@/features/experience/types/experience";
import { getJourneyStats } from "@/features/experience/lib/journeyStats";

interface JourneyProgressProps {
  experiences: Experience[];
}

const TYPE_ICON: Record<ExperienceType, LucideIcon> = {
  education: GraduationCap,
  teaching: Presentation,
  community: Globe,
  internship: Code2,
  work: Briefcase,
  competition: Trophy,
  freelance: Laptop,
};

const TYPE_ACCENT: Record<ExperienceType, string> = {
  education: "#A78BFA",
  teaching: "#F472B6",
  community: "#22D3EE",
  internship: "#34D399",
  work: "#F59E0B",
  competition: "#FB7185",
  freelance: "#38BDF8",
};

const MILESTONES_ACCENT = "#7E62F3";
const TIMELINE_ACCENT = "#38BDF8";

interface TileData {
  icon: LucideIcon;
  value: string;
  label: string;
  accent: string;
}

interface TileProps extends TileData {
  className?: string;
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
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

const Tile = ({ icon: Icon, value, label, accent, className, big }: TileProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const numericValue = /^\d+$/.test(value) ? Number(value) : null;
  const countUp = useCountUp(numericValue ?? 0, inView && numericValue !== null);
  const displayValue = numericValue !== null ? String(countUp) : value;

  return (
    <motion.div
      ref={ref}
      variants={item}
      whileHover={{ y: -4, scale: 1.02 }}
      style={{ "--accent": accent } as React.CSSProperties}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-tl-[28px] rounded-tr-[10px] rounded-br-[28px] rounded-bl-[10px] border border-[#EDF0F7]/10 bg-gradient-to-b from-[#EDF0F7]/[0.07] to-transparent p-5 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[color:var(--accent)]/50 hover:shadow-[0_0_32px_-8px_var(--accent)] ${className ?? ""}`}
    >
      {/* top accent bar — hidden until hover, then grows left-to-right across the full top edge */}
      <div className="absolute left-0 top-0 h-[3px] w-0 rounded-full bg-[color:var(--accent)] transition-all duration-500 ease-out group-hover:w-full" />

      {/* decorative watermark icon */}
      <Icon
        className={`pointer-events-none absolute -bottom-4 -right-4 text-[color:var(--accent)] opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.14] ${big ? "h-28 w-28" : "h-16 w-16"}`}
        strokeWidth={1.5}
      />

      {/* hover glow */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[color:var(--accent)]/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-center gap-2">
        <span
          className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--accent)]/25 to-[color:var(--accent)]/10 text-[color:var(--accent)] ring-1 ring-inset ring-[color:var(--accent)]/30 ${big ? "h-11 w-11" : "h-9 w-9"}`}
        >
          <Icon size={big ? 20 : 17} />
        </span>
      </div>

      <div className="relative">
        <p
          className={`font-bold tabular-nums text-[#EDF0F7] ${big ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}
        >
          {displayValue}
        </p>
        <p className="mt-0.5 text-xs text-[#EDF0F7]/55">{label}</p>
      </div>
    </motion.div>
  );
};

/**
 * Modern glass stat cards summarising the journey — fully derived from the
 * experiences data (nothing hardcoded) — plus a progress bar that fills into
 * view, ending on the current chapter.
 */
const JourneyProgress = ({ experiences }: JourneyProgressProps) => {
  const stats = getJourneyStats(experiences);

  const tiles: TileData[] = [
    {
      icon: Flag,
      value: String(stats.total),
      label: "Milestones",
      accent: MILESTONES_ACCENT,
    },
    {
      icon: CalendarRange,
      value: `${stats.startYear} → ${stats.endYear}`,
      label: "Timeline",
      accent: TIMELINE_ACCENT,
    },
    ...stats.byType.map((t) => ({
      icon: TYPE_ICON[t.type],
      value: String(t.count),
      label: t.label,
      accent: TYPE_ACCENT[t.type],
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

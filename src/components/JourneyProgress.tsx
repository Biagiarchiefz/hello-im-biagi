import { motion, type Variants } from "motion/react";
import {
  Briefcase,
  CalendarRange,
  Code2,
  Flag,
  GraduationCap,
  Laptop,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { Experience, ExperienceType } from "@/interface/experience";
import { getJourneyStats } from "@/lib/journeyStats";

interface JourneyProgressProps {
  experiences: Experience[];
}

const TYPE_ICON: Record<ExperienceType, LucideIcon> = {
  education: GraduationCap,
  internship: Code2,
  work: Briefcase,
  competition: Trophy,
  freelance: Laptop,
};

interface TileData {
  icon: LucideIcon;
  value: string;
  label: string;
}

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

const Tile = ({ icon: Icon, value, label }: TileData) => (
  <motion.div
    variants={item}
    whileHover={{ y: -4 }}
    className="group relative overflow-hidden rounded-2xl border border-[#EDF0F7]/10 bg-gradient-to-b from-[#EDF0F7]/[0.07] to-transparent p-4 backdrop-blur-sm transition-colors duration-300 hover:border-[#7E62F3]/50"
  >
    {/* hover glow */}
    <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#7E62F3]/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

    <div className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7E62F3]/15 text-[#7E62F3] ring-1 ring-inset ring-[#7E62F3]/30">
        <Icon size={16} />
      </span>
    </div>
    <p className="mt-3 text-xl font-bold text-[#EDF0F7] md:text-2xl">{value}</p>
    <p className="mt-0.5 text-xs text-[#EDF0F7]/55">{label}</p>
  </motion.div>
);

/**
 * Modern glass stat cards summarising the journey — fully derived from the
 * experiences data (nothing hardcoded) — plus a progress bar that fills into
 * view, ending on the current chapter.
 */
const JourneyProgress = ({ experiences }: JourneyProgressProps) => {
  const stats = getJourneyStats(experiences);

  const tiles: TileData[] = [
    { icon: Flag, value: String(stats.total), label: "Milestones" },
    {
      icon: CalendarRange,
      value: `${stats.startYear} → ${stats.endYear}`,
      label: "Timeline",
    },
    ...stats.byType.map((t) => ({
      icon: TYPE_ICON[t.type],
      value: String(t.count),
      label: t.label,
    })),
  ];

  return (
    <div className="relative z-10 mx-auto max-w-2xl">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-2 gap-3 md:grid-cols-4"
      >
        {tiles.map((t) => (
          <Tile key={t.label} {...t} />
        ))}
      </motion.div>
    </div>
  );
};

export default JourneyProgress;

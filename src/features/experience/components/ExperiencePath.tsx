import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Rocket } from "lucide-react";
import type { Experience } from "@/features/experience/types/experience";
import { buildSmoothPath, getJourneyLayout } from "@/features/experience/lib/journeyPath";
import PathConnector from "./PathConnector";
import ExperienceNode from "./ExperienceNode";
import ExperienceModal from "./ExperienceModal";
import NextChapterNode from "./NextChapterNode";

interface ExperiencePathProps {
  experiences: Experience[];
}

interface ActiveState {
  experience: Experience;
  rect: DOMRect;
}

/**
 * Orchestrates the journey: lays milestones along a winding path, draws the
 * connecting curve behind them and manages which milestone's modal is open.
 */
const ExperiencePath = ({ experiences }: ExperiencePathProps) => {
  const [active, setActive] = useState<ActiveState | null>(null);

  const layout = useMemo(
    () => getJourneyLayout(experiences.length),
    [experiences.length],
  );
  const pathD = useMemo(
    () => buildSmoothPath(layout.points),
    [layout.points],
  );

  const height = 340 + experiences.length * 240 + 220;

  const handleSelect = (experience: Experience, rect: DOMRect) =>
    setActive({ experience, rect });

  return (
    <>
      <div
        className="relative mx-auto w-full max-w-[560px] md:max-w-[720px]"
        style={{ height }}
      >
        <PathConnector d={pathD} />

        {/* Start marker */}
        <Marker point={layout.start} label="Start" icon={<Rocket size={14} />} />

        {/* Milestone nodes — the trail ends on the last one (current chapter) */}
        {experiences.map((experience, i) => (
          <div
            key={experience.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${layout.nodes[i].x}%`, top: `${layout.nodes[i].y}%` }}
          >
            <ExperienceNode
              experience={experience}
              index={i + 1}
              isActive={active?.experience.id === experience.id}
              isCurrent={i === experiences.length - 1}
              onSelect={handleSelect}
            />
          </div>
        ))}

        {/* Next Chapter teaser — continues the trail, not clickable */}
        <div
          className="absolute w-56 -translate-x-1/2 -translate-y-1/2 md:w-64"
          style={{ left: `${layout.end.x}%`, top: `${layout.end.y}%` }}
        >
          <NextChapterNode />
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ExperienceModal
            key={active.experience.id}
            experience={active.experience}
            anchorRect={active.rect}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Marker = ({
  point,
  label,
  icon,
  highlight = false,
}: {
  point: { x: number; y: number };
  label: string;
  icon: ReactNode;
  highlight?: boolean;
}) => (
  <motion.div
    className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
    style={{ left: `${point.x}%`, top: `${point.y}%` }}
    initial={{ opacity: 0, scale: 0.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    <span
      className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
        highlight
          ? "bg-[#7E62F3] text-white shadow-[0_0_20px_rgba(126,98,243,0.6)]"
          : "border border-[#EDF0F7]/20 bg-[#1c1c1c] text-[#EDF0F7]/80"
      }`}
    >
      {icon}
      {label}
    </span>
  </motion.div>
);

export default ExperiencePath;

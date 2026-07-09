import { motion } from "motion/react";
import {
  Briefcase,
  Code2,
  GraduationCap,
  Trophy,
  Laptop,
  type LucideIcon,
} from "lucide-react";
import type { Experience, ExperienceType } from "@/interface/experience";
import { nodeReveal } from "@/animations/journey";

const ICONS: Record<ExperienceType, LucideIcon> = {
  education: GraduationCap,
  internship: Code2,
  work: Briefcase,
  competition: Trophy,
  freelance: Laptop,
};

interface ExperienceNodeProps {
  experience: Experience;
  /** 1-based position shown on the node */
  index: number;
  isActive: boolean;
  /** the last / current chapter — the trail ends here */
  isCurrent?: boolean;
  onSelect: (experience: Experience, rect: DOMRect) => void;
}

const ExperienceNode = ({
  experience,
  index,
  isActive,
  isCurrent = false,
  onSelect,
}: ExperienceNodeProps) => {
  const Icon = ICONS[experience.type];
  const highlighted = isActive || isCurrent;

  return (
    <motion.div
      className="group relative flex flex-col items-center"
      variants={nodeReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {/* persistent "you are here" badge on the current chapter, else hover tooltip */}
      {isCurrent ? (
        <div className="pointer-events-none absolute -top-12 z-20 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#7E62F3] px-3 py-1 text-xs font-bold text-white shadow-[0_0_18px_rgba(126,98,243,0.7)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          You are here
          <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-[#7E62F3]" />
        </div>
      ) : (
        <div
          role="tooltip"
          className="pointer-events-none absolute -top-11 z-20 whitespace-nowrap rounded-md bg-[#EDF0F7] px-2.5 py-1 text-xs font-semibold text-[#141414] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
        >
          {experience.startDate} – {experience.endDate}
          <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-[#EDF0F7]" />
        </div>
      )}

      {/* node button */}
      <motion.button
        type="button"
        onClick={(e) => onSelect(experience, e.currentTarget.getBoundingClientRect())}
        aria-haspopup="dialog"
        aria-expanded={isActive}
        aria-label={`${experience.title} at ${experience.company}, ${experience.startDate} to ${experience.endDate}. Open details.`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
        className={`relative z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 bg-[#1c1c1c] shadow-lg transition-colors duration-300 md:h-20 md:w-20 ${
          highlighted
            ? "border-[#7E62F3] shadow-[0_0_25px_rgba(126,98,243,0.7)]"
            : "border-[#7E62F3]/40 hover:border-[#7E62F3]"
        }`}
      >
        <Icon
          className={`h-6 w-6 transition-colors duration-300 md:h-8 md:w-8 ${
            highlighted ? "text-[#7E62F3]" : "text-[#EDF0F7] group-hover:text-[#7E62F3]"
          }`}
        />
        <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#7E62F3] text-xs font-bold text-white shadow-md">
          {index}
        </span>
      </motion.button>

      {/* label */}
      <div className="absolute top-full mt-3 w-36 text-center md:w-44">
        <p className="text-sm font-bold text-[#EDF0F7] md:text-base">
          {experience.company}
        </p>
        <p className="text-xs text-[#EDF0F7]/60">{experience.role}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceNode;

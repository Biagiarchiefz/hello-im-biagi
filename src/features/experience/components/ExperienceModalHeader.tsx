import { X } from "lucide-react";
import type { Experience } from "@/features/experience/types/experience";

interface ExperienceModalHeaderProps {
  experience: Experience;
  titleId: string;
  onClose: () => void;
}

/**
 * Fixed modal header — never scrolls. Holds the badge, title, meta line and an
 * always-visible, accessible close button. Solid blurred background with a thin
 * bottom border so it reads as pinned while the body scrolls beneath it.
 */
const ExperienceModalHeader = ({
  experience,
  titleId,
  onClose,
}: ExperienceModalHeaderProps) => {
  return (
    <div className="relative flex-shrink-0 px-5 pt-4">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#EDF0F7]/70 outline-none transition-colors hover:bg-white/10 hover:text-[#EDF0F7] focus-visible:ring-2 focus-visible:ring-[#7E62F3]"
      >
        <X size={18} />
      </button>

      <div className="pr-10">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7E62F3]">
          {experience.type}
        </span>
        <h2 id={titleId} className="mt-1.5 text-xl font-bold text-[#EDF0F7]">
          {experience.title}
        </h2>
        <p className="text-sm font-semibold text-[#7E62F3]">
          {experience.company}
        </p>
        <p className="text-xs text-[#EDF0F7]/60">
          {experience.role} · {experience.startDate} – {experience.endDate}
        </p>
      </div>
    </div>
  );
};

export default ExperienceModalHeader;

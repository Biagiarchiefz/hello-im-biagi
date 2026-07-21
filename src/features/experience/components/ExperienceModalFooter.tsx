import { Github, TvMinimalPlay } from "lucide-react";
import type { Experience } from "@/features/experience/types/experience";

interface ExperienceModalFooterProps {
  experience: Experience;
}

/**
 * Optional pinned footer with the external links. Renders nothing when the
 * experience has neither a repo nor a demo, so the modal stays clean.
 */
const ExperienceModalFooter = ({ experience }: ExperienceModalFooterProps) => {
  if (!experience.github && !experience.demo) return null;

  return (
    <div className="flex flex-shrink-0 flex-wrap gap-3 px-5 py-4">
      {experience.github && (
        <a
          href={experience.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#7E62F3] px-4 py-2 text-sm font-semibold text-[#EDF0F7] outline-none transition-colors hover:bg-[#7E62F3]/20 focus-visible:ring-2 focus-visible:ring-[#7E62F3]"
        >
          <Github size={16} /> GitHub
        </a>
      )}
      {experience.demo && (
        <a
          href={experience.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#7E62F3] px-4 py-2 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#7E62F3]/80 focus-visible:ring-2 focus-visible:ring-[#7E62F3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181818]"
        >
          <TvMinimalPlay size={16} /> Live Demo
        </a>
      )}
    </div>
  );
};

export default ExperienceModalFooter;

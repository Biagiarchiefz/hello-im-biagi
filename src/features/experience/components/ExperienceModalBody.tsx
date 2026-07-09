import type { ReactNode } from "react";
import { Award, Lightbulb, Sparkles, Target } from "lucide-react";
import type { Experience } from "@/features/experience/types/experience";

interface ExperienceModalBodyProps {
  experience: Experience;
}

const Chip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-[#7E62F3]/40 bg-[#7E62F3]/10 px-2.5 py-1 text-xs text-[#EDF0F7]">
    {children}
  </span>
);

const Section = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) => (
  <div className="mt-4">
    <div className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#7E62F3]">
      {icon}
      {title}
    </div>
    {children}
  </div>
);

/**
 * The only scrollable part of the modal. `flex-1` makes it fill the space left
 * by the header/footer, `overflow-y-auto` + `.modal-scroll` give it a thin,
 * unobtrusive scrollbar so the panel itself never scrolls.
 */
const ExperienceModalBody = ({ experience }: ExperienceModalBodyProps) => {
  return (
    <div className="modal-scroll min-h-0 flex-1 overflow-y-auto px-5 py-4">
      {experience.image && (
        <img
          src={experience.image}
          alt={experience.title}
          className="mb-4 h-40 w-full rounded-lg object-cover"
        />
      )}

      <p className="text-sm leading-relaxed text-[#EDF0F7]/90">
        {experience.description}
      </p>

      {experience.learned && (
        <Section icon={<Lightbulb size={15} />} title="What I learned">
          <p className="text-sm leading-relaxed text-[#EDF0F7]/80">
            {experience.learned}
          </p>
        </Section>
      )}

      {experience.technologies.length > 0 && (
        <Section icon={<Sparkles size={15} />} title="Technologies">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Section>
      )}

      {experience.skills.length > 0 && (
        <Section icon={<Award size={15} />} title="Skills gained">
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </Section>
      )}

      {experience.challenge && (
        <Section icon={<Target size={15} />} title="Challenge">
          <p className="text-sm leading-relaxed text-[#EDF0F7]/80">
            {experience.challenge}
          </p>
        </Section>
      )}

      {experience.achievements.length > 0 && (
        <Section icon={<Award size={15} />} title="Achievements">
          <ul className="space-y-1.5">
            {experience.achievements.map((a) => (
              <li
                key={a}
                className="flex gap-2 text-sm leading-relaxed text-[#EDF0F7]/80"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7E62F3]" />
                {a}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
};

export default ExperienceModalBody;

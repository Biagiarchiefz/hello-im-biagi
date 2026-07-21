import type { ReactNode } from "react";
import type { Experience } from "@/features/experience/types/experience";

interface ExperienceModalBodyProps {
  experience: Experience;
}

const Chip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-[3px] border border-[#EDF0F7]/15 bg-[#EDF0F7]/[0.03] px-2 py-0.5 text-xs text-[#EDF0F7]/80">
    {children}
  </span>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="mt-6">
    <div className="mb-2.5 flex items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7E62F3]">
        {title}
      </span>
      <span aria-hidden className="h-px flex-1 bg-[#EDF0F7]/10" />
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
          loading="lazy"
          decoding="async"
          className="mb-4 h-40 w-full rounded-[3px] object-cover"
        />
      )}

      <p className="text-sm leading-relaxed text-[#EDF0F7]/90">
        {experience.description}
      </p>

      {experience.learned && (
        <Section title="What I learned">
          <p className="text-sm leading-relaxed text-[#EDF0F7]/80">
            {experience.learned}
          </p>
        </Section>
      )}

      {experience.technologies.length > 0 && (
        <Section title="Technologies">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Section>
      )}

      {experience.skills.length > 0 && (
        <Section title="Skills gained">
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </Section>
      )}

      {experience.challenge && (
        <Section title="Challenge">
          <p className="text-sm leading-relaxed text-[#EDF0F7]/80">
            {experience.challenge}
          </p>
        </Section>
      )}

      {experience.achievements.length > 0 && (
        <Section title="Achievements">
          <ul className="space-y-2">
            {experience.achievements.map((a) => (
              <li
                key={a}
                className="flex gap-2.5 text-sm leading-relaxed text-[#EDF0F7]/80"
              >
                <span
                  aria-hidden
                  className="mt-[9px] h-px w-3 shrink-0 bg-[#7E62F3]"
                />
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

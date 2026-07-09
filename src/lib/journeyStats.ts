import type { Experience, ExperienceType } from "@/interface/experience";

export interface JourneyStats {
  total: number;
  startYear: string;
  endYear: string;
  /** number of milestones per type, only including types that appear */
  byType: { type: ExperienceType; label: string; count: number }[];
}

const TYPE_LABEL: Record<ExperienceType, string> = {
  education: "Education",
  internship: "Internship",
  work: "Work",
  competition: "Competition",
  freelance: "Freelance",
};

/** Derives all journey summary numbers from the data — nothing hardcoded. */
export function getJourneyStats(experiences: Experience[]): JourneyStats {
  const years = experiences
    .flatMap((e) => [e.startDate, e.endDate])
    .filter((y) => y !== "Present")
    .map(Number)
    .filter((n) => !Number.isNaN(n));

  const hasOngoing = experiences.some((e) => e.endDate === "Present");
  const startYear = years.length ? String(Math.min(...years)) : "";
  const endYear = hasOngoing
    ? "Present"
    : years.length
      ? String(Math.max(...years))
      : "";

  const counts = experiences.reduce<Partial<Record<ExperienceType, number>>>(
    (acc, e) => ({ ...acc, [e.type]: (acc[e.type] ?? 0) + 1 }),
    {},
  );

  const byType = (Object.keys(counts) as ExperienceType[]).map((type) => ({
    type,
    label: TYPE_LABEL[type],
    count: counts[type] ?? 0,
  }));

  return { total: experiences.length, startYear, endYear, byType };
}

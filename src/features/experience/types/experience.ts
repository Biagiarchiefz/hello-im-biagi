export type ExperienceType =
  | "education"
  | "teaching"
  | "community"
  | "internship"
  | "work"
  | "competition"
  | "freelance";

export interface Experience {
  id: number;
  title: string;
  company: string;
  role: string;
  /** Year (or "2022") the experience starteddsds */
  startDate: string;
  /** Year the experience ended, or "Present" for ongoing */
  endDate: string;
  type: ExperienceType;
  description: string;
  /** What was learned during this chapter */
  learned?: string;
  /** A notable challenge that was faced */
  challenge?: string;
  technologies: string[];
  achievements: string[];
  skills: string[];
  image?: string;
  github?: string;
  demo?: string;
}

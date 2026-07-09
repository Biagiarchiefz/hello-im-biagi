import type { Experience } from "@/interface/experience";

/**
 * The story of my journey as a software developer, told chronologically.
 * Add a new object here and the journey path, connectors, progress stats
 * and modals all update automatically — no layout code to touch.
 */
export const experiences: Experience[] = [
  {
    id: 1,
    title: "Informatics Engineering",
    company: "Universitas Pasundan",
    role: "Undergraduate Student",
    startDate: "2022",
    endDate: "Present",
    type: "education",
    description:
      "Where my journey began. I study Informatics Engineering while building real projects on the side, turning classroom theory into things people can actually use on the web.",
    learned:
      "Strong fundamentals in programming, data structures, databases and how to break a big problem into small, shippable pieces.",
    challenge:
      "Balancing coursework with self-driven learning of modern web technologies that move much faster than any curriculum.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Figma"],
    achievements: [
      "Built several full projects from scratch, including a PHP + MySQL app with full CRUD",
      "Grew from writing static pages to shipping data-driven applications",
    ],
    skills: [
      "Problem Solving",
      "Web Fundamentals",
      "Database Design",
      "Self-Learning",
    ],
    github: "https://github.com/Biagiarchiefz",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Kodingin.id",
    role: "Intern & Developer",
    startDate: "2024",
    endDate: "Present",
    type: "internship",
    description:
      "My first real-world chapter. At Kodingin.id I interned and then kept working as a developer, shipping interfaces in a real team with real deadlines and real users.",
    learned:
      "How production teams actually work — code reviews, collaboration, componentized UI, and shipping features that need to hold up in the real world.",
    challenge:
      "Moving from personal projects to a shared codebase where readability, consistency and communication matter as much as the feature itself.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    achievements: [
      "Turned from intern into a contributing developer on live projects",
      "Delivered responsive, reusable UI components used across the product",
    ],
    skills: [
      "React",
      "Team Collaboration",
      "Responsive UI",
      "REST APIs",
      "Version Control",
    ],
    github: "https://github.com/Biagiarchiefz",
  },
];

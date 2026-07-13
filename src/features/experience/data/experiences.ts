import type { Experience } from "@/features/experience/types/experience";

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
      "This is where my journey began. I started studying Informatics Engineering while quietly building things outside the classroom — teaching myself web development through personal projects, because reading about code was never as satisfying as watching it actually run in a browser.",
    learned:
      "Strong fundamentals in programming, data structures, databases and how to break a big problem into small, shippable pieces. Just as importantly, I learned how to keep teaching myself once the syllabus ran out.",
    challenge:
      "Balancing coursework with self-driven learning of modern web technologies that moved much faster than any curriculum — and not burning out trying to catch up on both at once.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "PHP",
      "MySQL",
      "Git",
      "Github",
      "Figma",
      "Node.js",
      "Express",
      "MongoDB",
    ],
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
    title: "Web Programming Course Project Assistant",
    company: "Universitas Pasundan",
    role: "Teaching Assistant",
    startDate: "May 2025",
    endDate: "Jun 2025",
    type: "teaching",
    description:
      "A few semesters in, I got the chance to turn around and help the next batch of students. For a short stretch in May–June 2025, I assisted a Web Programming course at Universitas Pasundan — guiding classmates through their final projects and, alongside the lecturer, deciding what a finished project actually looked like.",
    learned:
      "That understanding something well enough to use it yourself is a different skill from understanding it well enough to explain and grade it fairly. I got better at breaking a problem down out loud and judging work against a rubric instead of a gut feeling.",
    challenge:
      "Some students needed the same concept explained two or three different ways before it clicked, and grading final projects meant being consistent and fair across all of them, not just generous.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    achievements: [
      "Mentored 15 informatics students on their final web programming projects, providing structured technical guidance and code reviews",
      "Partnered with lecturers to assess, review, and grade final project implementations based on predefined rubrics",
    ],
    skills: ["Mentoring", "Code Review", "Assessment & Grading", "PHP & MySQL"],
  },
  {
    id: 3,
    title: "Staff Web Developer",
    company: "GDG on Campus Universitas Pasundan (GDGOC UNPAS)",
    role: "Web Development Staff",
    startDate: "Oct 2025",
    endDate: "Present",
    type: "community",
    description:
      "Helping in one classroom turned out to be something I wanted to do at a bigger scale, so since October 2025 I've been web development staff at GDG on Campus Universitas Pasundan. This chapter is less about writing my own code and more about deciding what other people should learn and how to teach it well.",
    learned:
      "How to turn something I already knew into a curriculum other people could actually follow — structuring material, pacing a session, and choosing the right examples instead of just dumping everything I know.",
    challenge:
      "Presenting to a room is a different kind of pressure than helping one student at a time — building the Study Jam material meant anticipating questions I couldn't just wave away.",
    technologies: ["JavaScript", "DOM APIs"],
    achievements: [
      "Formulated web development curriculum and structured learning materials for internal community Study Jam sessions",
      'Served as main presenter/instructor for a Study Jam session, "JavaScript DOM: Dasar Manipulasi dan Event pada Web", mentoring participants through hands-on coding practice',
      "Partnered with the core committee to organize technical learning activities and foster student programming skills",
    ],
    skills: [
      "Public Speaking",
      "Curriculum Design",
      "JavaScript & DOM",
      "Community Collaboration",
    ],
  },
  {
    id: 4,
    title: "Frontend Web Developer Intern",
    company: "Kodingin.id",
    role: "Intern & Developer",
    startDate: "Dec 2025",
    endDate: "Jul 2026",
    type: "internship",
    description:
      "This is where teaching and community work turned into shipping real product. From December 2025 to July 2026, I worked as a frontend intern at Kodingin.id — writing React for real users in a codebase other people depend on. The instincts from mentoring and the confidence from presenting showed up here too — in code reviews, in async communication, in explaining a decision instead of just shipping it.",
    learned:
      "How production teams actually work — code reviews, collaboration, componentized UI, and shipping features that need to hold up in the real world.",
    challenge:
      "Moving from personal projects to a shared codebase where readability, consistency and communication matter as much as the feature itself.",
    technologies: ["React", "Tailwind CSS"],
    achievements: [
      "Built reusable, responsive, and interactive React.js components with a strong focus on delivering an intuitive user experience (UX)",
      "Integrated frontend applications with REST APIs to efficiently retrieve, display, and manage dynamic data",
      "Maintained a clean, modular, and scalable project structure to improve code readability and team collaboration",
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
  {
    id: 5,
    title: "Teaching Assistant - Programming 1 Laboratory",
    company: "Universitas Pasundan",
    role: "Lab Teaching Assistant",
    startDate: "Feb 2026",
    endDate: "Jul 2026",
    type: "teaching",
    description:
      "This chapter brings the story full circle. Since February 2026 I've been a lab teaching assistant for Programming 1 at Universitas Pasundan, guiding first-year students through Java fundamentals — the exact kind of struggle I remember having myself back in chapter one.",
    learned:
      "How to teach the fundamentals to someone encountering them for the very first time — patience for the basics, not just the advanced stuff, and how to grade fairly at scale instead of case by case.",
    challenge:
      "Keeping feedback consistent and genuinely useful across a full lab section of submissions, without it turning into a rubber stamp.",
    technologies: ["Java"],
    achievements: [
      "Delivered practical programming modules and led laboratory sessions on fundamental programming concepts",
      "Evaluated student code submissions, graded assignments, and collaborated with lecturers to refine the learning syllabus",
    ],
    skills: [
      "Mentoring",
      "Java Fundamentals",
      "Assessment & Grading",
      "Curriculum Collaboration",
    ],
  },
];

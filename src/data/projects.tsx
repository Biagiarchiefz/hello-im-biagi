import type { Project } from "@/interface/projects";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/terraplant.webp";

export const projects: Project[] = [
  {
    id: 1,
    name: "TuneTrack",
    description: "This is a music-themed website I built using PHP and MySQL. It features an admin page where data such as songs, artists, and podcasts can be easily managed through CRUD operations. This project helped me understand how to connect front-end interfaces with databases.",
    technologies: ["Php", "MySQL"],
    github: "https://github.com/Biagiarchiefz/pw2024_tubes_233040006",
    liveDemo: "/livedemonotfound",
    image: project1
  },
  {
    id: 2,
    name: "Personal Website V1",
    description: "My first personal website built with HTML, CSS, and JavaScript — a simple project that helped me learn the basics of building and styling web pages.",
    technologies: ["Html", "Css", "JavaScript"],
    github: "https://github.com/Biagiarchiefz/portfolio-v1",
    liveDemo: "https://biagiarchiefz.github.io/portfolio-v1/",
    image: project2
  },
     {
    id: 3,
    name: "TerraPlant",
    description: "Terraplant is a web-based e-commerce application focused on selling ornamental plants, including both indoor and outdoor varieties. The application is developed using a full-stack MERN architecture (MongoDB, Express.js, React.js, and Node.js) and leverages Prisma as an ORM to efficiently and systematically manage and integrate the database.",
    technologies: ["React", "Tailwind", "Node js", "Express", "MonggoDB", "Prisma"],
    github: "https://github.com/Biagiarchiefz/terraplant-be",
    liveDemo: "https://terraplant-fe.vercel.app/",
    image: project4
  },
   {
    id: 4,
    name: "Rumahku.Id",
    description: "This project is a website clone I created using HTML and CSS, based on a design I discovered on Dribbble. Through this project, I practiced turning creative UI designs into real, functional web pages while improving my attention to detail and layout techniques.",
    technologies: ["Html", "Css"],
    github: "https://github.com/Biagiarchiefz/rumahku.id",
    liveDemo: "https://biagiarchiefz.github.io/rumahku.id/",
    image: project3
  },

]
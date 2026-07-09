import type { Project } from "@/features/projects/types/projects";
import project1 from "@/assets/img/project1.webp";
import project2 from "@/assets/img/project2.webp";
import project3 from "@/assets/img/machineLearningProject.webp";
import project4 from "@/assets/img/terraplant.webp";
import project5 from "@/assets/img/kiddoProject.webp";


export const projects: Project[] = [
  {
    id: 1,
    name: "TuneTrack",
    description:
      "This is a music-themed website I built using PHP and MySQL. It features an admin page where data such as songs, artists, and podcasts can be easily managed through CRUD operations. This project helped me understand how to connect front-end interfaces with databases.",
    technologies: ["Php", "MySQL"],
    github: "https://github.com/Biagiarchiefz/pw2024_tubes_233040006",
    liveDemo: "/livedemonotfound",
    image: project1,
  },
  {
    id: 2,
    name: "Personal Website V1",
    description:
      "My first personal website built with HTML, CSS, and JavaScript — a simple project that helped me learn the basics of building and styling web pages.",
    technologies: ["Html", "Css", "JavaScript"],
    github: "https://github.com/Biagiarchiefz/portfolio-v1",
    liveDemo: "https://biagiarchiefz.github.io/portfolio-v1/",
    image: project2,
  },
  {
    id: 3,
    name: "TerraPlant",
    description:
      "Terraplant is a web-based e-commerce application focused on selling ornamental plants, including both indoor and outdoor varieties. The application is developed using a full-stack MERN architecture (MongoDB, Express.js, React.js, and Node.js) and leverages Prisma as an ORM to efficiently and systematically manage and integrate the database.",
    technologies: [
      "React",
      "Tailwind",
      "Node js",
      "Express",
      "MonggoDB",
      "Prisma",
    ],
    github: "https://github.com/Biagiarchiefz/terraplant-be",
    liveDemo: "https://terraplant-fe.vercel.app/",
    image: project4,
  },
  {
    id: 4,
    name: "FloodPredict",
    description:
      "FloodPredict is a flood prediction web application powered by Machine Learning, developed to estimate flood risk based on environmental data. The project uses React and Tailwind CSS to deliver a modern, responsive, and user-friendly interface, while Python with Flask serves as the backend API that integrates the Machine Learning model into the application. Users can input the required parameters, which are then sent to the Flask API for processing by the Machine Learning model. The prediction results are displayed in real time through the web interface, allowing users to quickly understand the estimated flood risk. Through this project, I gained hands-on experience in the complete Machine Learning workflow, including data preprocessing, algorithm selection, model evaluation using regression metrics, and deploying the trained model into a web application for real-world use.",
    technologies: ["React", "Tailwind", "Python", "Flask"],
    github: "https://github.com/Biagiarchiefz/flood-prediction-app",
    liveDemo: "https://floodpredict-app.vercel.app/",
    image: project3,
  },
  {
    id: 5,
    name: "Kiddo",
    description:
      "Kiddo is a web-based learning platform developed for a programming competition, where it was awarded 2nd Place. The platform is designed to support home tutoring by simplifying the learning process for both teachers and students. Teachers can easily create and manage learning materials, as well as design interactive quizzes, while students can access the materials, complete quizzes, and monitor their progress through a leaderboard that encourages motivation and healthy competition. The application was built using React.js and Tailwind CSS to provide a modern, responsive, and intuitive user experience. Supabase was used as the backend service to handle authentication, database management, and real-time data synchronization. Through this project, I gained practical experience in designing an interactive educational platform, implementing role-based features for teachers and students, integrating backend services with Supabase, and building a user experience that promotes engagement through gamification.",
    technologies: ["React", "Tailwind", "Supabase"],
    github: "https://github.com/Biagiarchiefz/kiddo",
    liveDemo: "https://kiddo-sepia.vercel.app/",
    image: project5,
  },
];



import type { Project } from "@/interface/projects";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";

export const projects: Project[] = [
  {
    id: 1,
    name: "TuneTrack",
    description: " Lorem ipsum dolor",
    technologies: ["Php", "MySQL"],
    github: "/github/tunetrack",
    liveDemo: "/tunetrack",
    image: project1
  },
  {
    id: 2,
    name: "ShopEase",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam explicabo unde minus laborum dolore? Quam magni commodi sint nihil,nisi enim porro! Laudantium hic exercitationem omnis odio optio fugit eiusaliquid facilis accusamus nostrum autem sunt tempore, recusandae velit estsequi maiores numquam totam, illum iste harum. Alias, in.",
    technologies: ["Html", "Css", "JavaScript"],
    github: "/github/shopease",
    liveDemo: "/shopease",
    image: project2
  },
   {
    id: 3,
    name: "TuneTrack",
    description: " Lorem ipsum dolor",
    technologies: ["Php", "MySQL"],
    github: "/github/tunetrack",
    liveDemo: "/tunetrack",
    image: project1
  },
]
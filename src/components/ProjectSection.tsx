import { Github, TvMinimalPlay } from "lucide-react";
import type { Project } from "@/interface/projects";
import { Link } from "react-router";

const ProjectSection = ({ project }: { project: Project }) => {
  return (
    <>
      {project.id % 2 === 0 ? (
        <div className="text-[#EDF0F7] flex mt-25 relative">
          <div className="flex flex-col gap-1 pt-5 items-end w-full">
            <h3 className="font-semibold text-[#7E62F3]">
              Project 0{project.id}
            </h3>
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <div className="max-w-[500px] w-[500px] z-10 py-5 px-4 mt-3 rounded-[5px] bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
              <p className="line-clamp-5 leading-relaxed min-h-[100px]">
                {project.description}
              </p>
            </div>
            <p className="max-w-[430px]">
              {project.technologies.map((tech) => ` [${tech}]`)}
            </p>
            <div className="flex gap-3 mt-2 ">
              <Github />
              <TvMinimalPlay />
            </div>
          </div>

          <img
            src={project.image}
            alt=""
            className="max-w-[761px] absolute left-0 "
          />
        </div>
      ) : (
        <div className="text-[#EDF0F7] flex mt-25 relative">
          <div className="flex flex-col gap-1 pt-5 w-full">
            <h3 className="font-semibold text-[#7E62F3]">
              Project 0{project.id}
            </h3>
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <div className="max-w-[500px] w-[500px] z-10 py-5 px-4 mt-3 rounded-[5px] bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
              <p className="line-clamp-5 leading-relaxed min-h-[100px]">
                {project.description}
              </p>
            </div>
            <p className="max-w-[430px]">
              {project.technologies.map((tech) => ` [${tech}]`)}
            </p>
            <div className="flex gap-3 mt-2 ">
              <Link to={project.github}>
                <Github />
              </Link>
              <Link to={project.liveDemo}>
                <TvMinimalPlay />
              </Link>
            </div>
          </div>

          <img
            src={project.image}
            alt=""
            className="max-w-[761px] absolute right-0"
          />
        </div>
      )}
    </>
  );
};

export default ProjectSection;

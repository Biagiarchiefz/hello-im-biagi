import { Github, TvMinimalPlay } from "lucide-react";
import type { Project } from "@/interface/projects";
import { Link } from "react-router";

const ProjectSection = ({ project }: { project: Project }) => {
  return (
    <>
      {project.id % 2 === 0 ? (
        // Desktop View
        <div className="">
          <div className="hidden text-[#EDF0F7] md:flex mt-25 relative">
            <div className="flex flex-col gap-1 pt-5 items-end w-full py-10">
              <h3 className="font-semibold text-[#7E62F3]">
                Project 0{project.id}
              </h3>
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <div className="md:max-w-[500px] md:w-[500px] z-10 py-5 px-4 mt-3 rounded-[5px] bg-[#EDF0F7]/10 backdrop-blur-lg shadow-lg border-r-4 border-r-[#7E62F3] ">
                <p className="line-clamp-5 leading-relaxed min-h-[100px]">
                  {project.description}
                </p>
              </div>
              <p className="md:max-w-[430px]">
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
              className="md:max-w-[761px] absolute left-0 "
            />
          </div>

          {/* Mobile View */}
          <div className="md:hidden text-[#EDF0F7] mt-10 group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto"
              />

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-[#141414]/80 backdrop-blur-md group-active:opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6 gap-3">
                <h3 className="font-semibold text-[#7E62F3]">
                  Project 0{project.id}
                </h3>
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <p className="text-sm line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs">
                  {project.technologies.map((tech) => ` [${tech}]`)}
                </p>
                <div className="flex gap-3 mt-2">
                  <Link to={project.github}>
                    <Github size={20} />
                  </Link>
                  <Link to={project.liveDemo}>
                    <TvMinimalPlay size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="hidden text-[#EDF0F7] md:flex mt-25 relative">
            <div className="flex flex-col gap-1 pt-5 w-full py-10 ">
              <h3 className="font-semibold text-[#7E62F3]">
                Project 0{project.id}
              </h3>
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <div className="md:max-w-[500px] md:w-[500px] z-10 py-5 px-4 mt-3 rounded-[5px] bg-[#EDF0F7]/10 backdrop-blur-lg shadow-lg border-l-4 border-l-[#7E62F3] ">
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
              className=" md:max-w-[761px] absolute right-0"
            />
          </div>

          {/* Mobile View */}
          <div className="md:hidden text-[#EDF0F7] mt-10 group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto"
              />

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-[#141414]/80 backdrop-blur-md group-active:opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6 gap-3">
                <h3 className="font-semibold text-[#7E62F3]">
                  Project 0{project.id}
                </h3>
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <p className="text-sm line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs">
                  {project.technologies.map((tech) => ` [${tech}]`)}
                </p>
                <div className="flex gap-3 mt-2">
                  <Link to={project.github}>
                    <Github size={20} />
                  </Link>
                  <Link to={project.liveDemo}>
                    <TvMinimalPlay size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default ProjectSection;

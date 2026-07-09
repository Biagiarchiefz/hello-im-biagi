
import thingDone from "../assets/img/thingsDone.webp";
import ProjectSection from "@/components/ProjectSection";
import { projects } from "@/data/projects";
import Interested from "@/components/Interested";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

const ProjectPage = () => {
  return (
    <PageTransition>
      <div className="text-white px-[20px] md:px-[160px] mt-10 md:mt-20">
        {/* Title Section */}
        <Reveal className="title relative mb-10 md:mb-0">
          <h1 className="text-[#7E62F3] font-bold text-3xl md:text-5xl relative pt-12 md:pt-25 flex justify-start md:justify-start z-10">
            VIEW ALL PROJECTS
          </h1>
          <img
            src={thingDone}
            alt=""
            className="w-[300px] md:w-[773px] absolute top-5 md:top-0 left-0 opacity-50 md:opacity-100"
          />
        </Reveal>

        {/* Projects List */}
        <div className="space-y-6 md:space-y-0">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectSection project={project} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <Interested />
      </Reveal>
    </PageTransition>
  );
};

export default ProjectPage;

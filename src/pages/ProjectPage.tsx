import React from "react";
import thingDone from "../assets/img/thingsDone.png";
import ProjectSection from "@/components/ProjectSection";
import { projects } from "@/data/projects";
import Interested from "@/components/Interested";
import PageTransition from "@/components/PageTransition";

const ProjectPage = () => {
  return (
    // <PageTransition>
    //   <div className="text-white px-[160px] mt-20">
    //     <div className="title relative">
    //       <h1 className="text-[#7E62F3] font-bold text-5xl relative pt-25 flex justify-start">
    //         VIEW ALL PROJECTS
    //       </h1>
    //       <img
    //         src={thingDone}
    //         alt=""
    //         className="w-[773px] absolute top-0 left-0"
    //       />
    //     </div>

    //     {projects.map((project) => (
    //       <ProjectSection key={project.id} project={project} />
    //     ))}
    //   </div>
    //   <Interested />
    // </PageTransition>
    <PageTransition>
      <div className="text-white px-[20px] md:px-[160px] mt-10 md:mt-20">
        {/* Title Section */}
        <div className="title relative mb-10 md:mb-0">
          <h1 className="text-[#7E62F3] font-bold text-3xl md:text-5xl relative pt-12 md:pt-25 flex justify-start md:justify-start z-10">
            VIEW ALL PROJECTS
          </h1>
          <img
            src={thingDone}
            alt=""
            className="w-[300px] md:w-[773px] absolute top-0 left-0 opacity-50 md:opacity-100"
          />
        </div>

        {/* Projects List */}
        <div className="space-y-6 md:space-y-0">
          {projects.map((project) => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </div>
      </div>

      <Interested />
    </PageTransition>
  );
};

export default ProjectPage;

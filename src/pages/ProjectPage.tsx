import React from "react";
import thingDone from "../assets/img/thingsDone.png";
import ProjectSection from "@/components/ProjectSection";
import { projects } from "@/data/projects";
import Interested from "@/components/Interested";
import PageTransition from "@/components/PageTransition";

const ProjectPage = () => {
  return (
    <PageTransition>
      <div className="text-white px-[160px] mt-20">
        <div className="title relative">
          <h1 className="text-[#7E62F3] font-bold text-5xl relative pt-25 flex justify-start">
            VIEW ALL PROJECTS
          </h1>
          <img
            src={thingDone}
            alt=""
            className="w-[773px] absolute top-0 left-0"
          />
        </div>

        {projects.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}
      </div>
      <Interested />
    </PageTransition>
  );
};

export default ProjectPage;

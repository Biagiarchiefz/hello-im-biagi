import { Link, useParams } from "react-router";
import { Github, TvMinimalPlay } from "lucide-react";
import { projects } from "@/features/projects/data/projects";
import PageTransition from "@/shared/components/PageTransition";
import Interested from "@/shared/components/Interested";
import Reveal from "@/shared/components/Reveal";
import Breadcrumbs from "@/shared/components/Breadcrumbs";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="bg-[#141414] min-h-[70vh] flex flex-col justify-center items-center text-[#EDF0F7] px-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Project tidak ditemukan</h1>
        <Link
          to="/projects"
          className="bg-[#7E62F3] text-white py-2 px-4 rounded-[5px] mt-6"
        >
          Kembali ke Projects
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="text-[#EDF0F7] px-[20px] md:px-[160px] mt-24 md:mt-32">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Projects", to: "/projects" },
            { label: project.name },
          ]}
        />

        {/* Header */}
        <div className="mt-6">
          <h3 className="font-semibold text-[#7E62F3]">
            Project 0{project.id}
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold">{project.name}</h1>
        </div>

        {/* Image */}
        <Reveal className="mt-8 overflow-hidden rounded-[8px] border border-[#EDF0F7]/10">
          <img
            src={project.image}
            alt={project.name}
            decoding="async"
            className="w-full h-auto object-cover"
          />
        </Reveal>

        {/* Description */}
        <Reveal className="mt-8 max-w-[760px]">
          <h2 className="text-xl font-bold mb-3">About this project</h2>
          <p className="leading-relaxed text-[#EDF0F7]/90">
            {project.description}
          </p>
        </Reveal>

        {/* Technologies */}
        <Reveal className="mt-8">
          <h2 className="text-xl font-bold mb-3">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm bg-[#7E62F3]/10 border border-[#7E62F3]/40 text-[#EDF0F7]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Actions */}
        <Reveal className="mt-8 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-[5px] border border-[#7E62F3] font-semibold hover:bg-[#7E62F3]/20 transition-colors"
          >
            <Github size={20} />
            Source Code
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-[5px] bg-[#7E62F3] font-semibold hover:bg-[#7E62F3]/80 transition-colors"
          >
            <TvMinimalPlay size={20} />
            Live Demo
          </a>
        </Reveal>
      </div>

      <Reveal>
        <Interested />
      </Reveal>
    </PageTransition>
  );
};

export default ProjectDetail;

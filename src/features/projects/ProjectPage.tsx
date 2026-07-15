
import thingDone from "@/assets/img/thingsDone.webp?w=900&format=webp&quality=80";
import thingDoneSrcSet from "@/assets/img/thingsDone.webp?w=400;773;900&format=webp&quality=80&as=srcset";
import ProjectSection from "@/features/projects/components/ProjectSection";
import { projects } from "@/features/projects/data/projects";
import Interested from "@/shared/components/Interested";
import PageTransition from "@/shared/components/PageTransition";
import Reveal from "@/shared/components/Reveal";
import Seo from "@/shared/components/Seo";

const ProjectPage = () => {
  return (
    <PageTransition>
      <Seo
        title="Projects"
        path="/projects"
        description="Kumpulan proyek web Biagi Archie Fais — dari e-commerce MERN, aplikasi Machine Learning, hingga platform pembelajaran. Dibangun dengan React, Tailwind, Node.js, dan lainnya."
      />
      <div className="text-white px-[20px] md:px-[160px] mt-10 md:mt-20">
        {/* Title Section */}
        <Reveal className="title relative mb-10 md:mb-0">
          <h1 className="text-[#7E62F3] font-bold text-3xl md:text-5xl relative pt-12 md:pt-25 flex justify-start md:justify-start z-10">
            VIEW ALL PROJECTS
          </h1>
          <img
            src={thingDone}
            srcSet={thingDoneSrcSet}
            sizes="(max-width: 767px) 300px, 773px"
            alt=""
            width={3724}
            height={1240}
            loading="lazy"
            decoding="async"
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

// resized at build time by vite-imagetools (sources are 2–3k px wide, shown ≤730px).
// Each image ships a single-width `src` fallback plus a multi-width `srcSet`
// so mobile downloads a small file and desktop/retina a larger one.
import myName from "@/assets/img/myName.webp?w=1000&format=webp&quality=80";
import myNameSrcSet from "@/assets/img/myName.webp?w=400;730;1000&format=webp&quality=80&as=srcset";
import aboutMe from "@/assets/img/ABOUT ME-b.webp?w=900&format=webp&quality=80";
import aboutMeSrcSet from "@/assets/img/ABOUT ME-b.webp?w=400;773;900&format=webp&quality=80&as=srcset";
import fhoto from "@/assets/img/fhoto.webp";
import myWorks from "@/assets/img/MY WORKS-b.webp?w=900&format=webp&quality=80";
import myWorksSrcSet from "@/assets/img/MY WORKS-b.webp?w=400;773;900&format=webp&quality=80&as=srcset";
import { Dribbble, Github, Instagram, Linkedin, MoveRight } from "lucide-react";
import { lazy, Suspense } from "react";
import Interested from "@/shared/components/Interested";
import ProjectSection from "@/features/projects/components/ProjectSection";
import { projects } from "@/features/projects/data/projects";
import { Link } from "react-router";
import { motion } from "motion/react";
import { fadeIn } from "@/shared/animations/variants";
import PageTransition from "@/shared/components/PageTransition";
import Reveal from "@/shared/components/Reveal";
import Seo from "@/shared/components/Seo";

// below-the-fold interactive canvas widget — split out of the initial bundle
const AsciiPortrait = lazy(
  () => import("@/features/home/components/AsciiPortrait")
);

const HomePage = () => {
  return (
    <PageTransition>
      <Seo
        title="Home"
        path="/"
        description="Portfolio Biagi Archie Fais — Front-End Developer asal Indonesia yang berfokus pada React, TypeScript, dan Tailwind CSS. Lihat proyek & pengalaman terbaru."
      />
      <div className="bg-[#141414]">
        {/* section 1 profile */}
        <div className="md:h-[100vh] flex items-center relative">
          {/* LCP candidate: paint immediately. We slide via transform only and
              keep opacity at 1 so the fade/delay never postpones the LCP paint. */}
          <motion.img
            src={myName}
            srcSet={myNameSrcSet}
            sizes="(max-width: 767px) 200px, 730px"
            alt=""
            width={2203}
            height={2239}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-[200px] md:w-[730px] absolute right-0 bottom-0 top-0"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <div className="text-[#EDF0F7] mt-25 md:mt-0 w-full px-[20px] md:px-[160px] flex justify-between">
            <div className="flex flex-col gap-2 md:gap-4">
              <motion.h1
                {...fadeIn}
                className="text-[30px] md:text-[100px] relative font-bold leading-[110.2%]"
              >
                Biagi Archie Fais, <br /> Front-End Developer
              </motion.h1>
              <p className="text-[13px] md:text-xl max-w-[547px]">
                Front-End Developer based in Indonesia, continuously learning
                and exploring front-end technologies. Open for collaboration and
                creative opportunities.
              </p>

              <div className="flex items-center gap-3 md:gap-5 mt-3 md:mt-8">
                <Link to="/contact">
                  <div className="text-[13px] md:text-lg group px-2 py-1 md:px-3 md:py-2 rounded-full flex items-center gap-1 md:gap-3 border shadow-lg hover:shadow-xl hover:icon hover:cursor-p">
                    Let`s talk
                    <div className="p-1 rounded-full border">
                      <MoveRight className="w-4 h-4 md:w-5 md:h-5 group-active:-rotate-45 md:group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
                    </div>
                  </div>
                </Link>
                <Link to="www.linkedin.com/in/biagiarchiefz">
                  <Linkedin className="text-[#7E62F3] w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                </Link>
                <Link to="https://github.com/Biagiarchiefz">
                  <Github className="text-[#7E62F3] w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                </Link>
                <Link to="https://dribbble.com/Biagii">
                  <Dribbble className="text-[#7E62F3] w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                </Link>
                <Link to="https://www.instagram.com/biagiarchiefz/">
                  <Instagram className="text-[#7E62F3] w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section  */}
        <Reveal className="px-[20px] md:px-[160px] mt-10 md:mt-20 ">
          <div className="title relative">
            <h2 className="text-[#7E62F3] font-bold text-[25px] md:text-5xl md:pt-12 pt-2 px-6 md:px-11">
              ABOUT ME
            </h2>
            <img
              src={aboutMe}
              srcSet={aboutMeSrcSet}
              sizes="(max-width: 767px) 278px, 773px"
              alt=""
              width={3094}
              height={472}
              loading="lazy"
              decoding="async"
              className="w-[278px] md:w-[773px] absolute top-0 left-0"
            />
          </div>
    
          <div className="flex flex-col items-center md:flex-row md:justify-between md:mt-15">
            <Suspense
              fallback={
                <div className="w-[250px] md:w-[375px] shrink-0 aspect-[375/408]" />
              }
            >
              <AsciiPortrait
                src={fhoto}
                className="w-[250px] md:w-[375px] shrink-0 hover:cursor-crosshair"
              />
            </Suspense>
            <div className="text-[#EDF0F7] px-[20px] w-[360px] md:w-[743px] flex flex-col gap-8 mt-5 text-[13px] md:text-lg">
              <p className="">
                I’m a Front-End Developer and an undergraduate student at
                Pasundan University, with a growing focus on becoming a
                Full-Stack Developer. I enjoy learning new things and
                continuously improving my skills in modern web development.
              </p>
              <p>
                My current tech stack includes HTML, CSS, Tailwind CSS, Figma,
                React, JavaScript, TypeScript, and Next.js. Recently, I’ve also
                expanded my expertise into backend development using Node.js and
                Express, allowing me to build and integrate RESTful APIs and
                manage server-side logic.
              </p>
              <p>
                I’m passionate about building user-friendly and visually
                appealing web interfaces while also understanding how systems
                work behind the scenes. I’m always excited to explore new
                technologies and collaborate on creative and impactful projects.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Project Section */}
        <div className="px-[20px] md:px-[160px] mt-10 md:mt-20">
          <Reveal className="title relative">
            <h2 className="text-[#7E62F3] font-bold text-[25px] md:text-5xl md:pt-5 px-5 w-full relative flex justify-end">
              MY WORKS
            </h2>
            <img
              src={myWorks}
              srcSet={myWorksSrcSet}
              sizes="(max-width: 767px) 278px, 773px"
              alt=""
              width={3308}
              height={440}
              loading="lazy"
              decoding="async"
              className="w-[278px] md:w-[773px] absolute top-0 right-0"
            />
          </Reveal>

          {projects.slice(0, 3).map((project) => (
            <Reveal key={project.id}>
              <ProjectSection project={project} />
            </Reveal>
          ))}
        </div>

        {/* Interested working */}
        <Reveal>
          <Interested />
        </Reveal>
      </div>
    </PageTransition>
  );
};

export default HomePage;

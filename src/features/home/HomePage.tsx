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
import { ClientOnly } from "vite-react-ssg";
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
        description="Portfolio Biagi Archie Fais — Software Engineer asal Indonesia yang membangun aplikasi web end-to-end dengan React, TypeScript, dan Node.js. Lihat proyek & pengalaman terbaru."
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
                Biagi Archie Fais, <br /> Software Engineer
              </motion.h1>
              <p className="text-[13px] md:text-xl max-w-[547px]">
                Software Engineer based in Indonesia, building web applications
                end-to-end — from polished interfaces to the APIs and databases
                behind them. Open for frontend, backend, and full-stack roles.
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
                <Link to="https://www.linkedin.com/in/biagiarchiefz/">
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
            {/* Canvas widget khusus browser. <ClientOnly> membuatnya TIDAK
                dirender saat pre-render (SSG) — kalau dipaksa, komponen lazy ini
                "suspend" dan menyeret seluruh halaman ke <div hidden> setelah
                footer. Saat SSG hanya placeholder yang tampil; di browser baru
                AsciiPortrait dimuat (lewat Suspense di dalam). */}
            <ClientOnly
              fallback={
                <div className="w-[250px] md:w-[375px] shrink-0 aspect-[375/408]" />
              }
            >
              {() => (
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
              )}
            </ClientOnly>
            <div className="text-[#EDF0F7] px-[20px] w-[360px] md:w-[743px] flex flex-col gap-8 mt-5 text-[13px] md:text-lg">
              <p className="">
                I’m a Software Engineer and an undergraduate student at Pasundan
                University. I build web applications end-to-end — owning a
                feature from the interface people see down to the API and data
                layer behind it.
              </p>
              <p>
                On the interface side, I work with React, Next.js, TypeScript,
                and Tailwind CSS. On the server side, I build REST APIs with
                Node.js and Express, backed by databases like PostgreSQL, MySQL,
                and Supabase with Prisma as the ORM. Git, GitHub, and Figma
                round out my day-to-day workflow, from version control to design
                handoff.
              </p>
              <p>
                I care about products that feel good to use and about the
                systems that make them work. I’m always excited to learn new
                technologies and collaborate on creative, impactful projects —
                whether the role calls for frontend, backend, or full-stack
                work.
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

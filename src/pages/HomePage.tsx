import myName from "../assets/img/myName.png";
import aboutMe from "../assets/img/ABOUT ME-b.png";
import fhoto from "../assets/img/fhoto.png";
// import project2 from "../assets/img/project 2.png";
import myWorks from "../assets/img/MY WORKS-b.png";
import { Dribbble, Github, Instagram, Linkedin, MoveRight } from "lucide-react";
import Interested from "@/components/Interested";
import ProjectSection from "@/components/ProjectSection";
import { projects } from "@/data/projects";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { fadeIn, slideLeft } from "@/animations/variants";
import PageTransition from "@/components/PageTransition";

const HomePage = () => {
  return (
    <PageTransition>
      <div className="bg-[#141414]">
        {/* section 1 profile */}
        <div className="md:h-[100vh] flex items-center relative">
          <motion.img
            src={myName}
            alt=""
            className="w-[200px] md:w-[730px] absolute right-0 bottom-0 top-0"
            {...slideLeft}
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
        <div className="px-[20px] md:px-[160px] mt-10 md:mt-20 ">
          <div className="title relative">
            <h1 className="text-[#7E62F3] font-bold text-[25px] md:text-5xl md:pt-12 pt-2 px-6 md:px-11">
              ABOUT ME
            </h1>
            <img
              src={aboutMe}
              alt=""
              className="w-[278px] md:w-[773px] absolute top-0 left-0"
            />
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between md:mt-15">
            <img
              src={fhoto}
              alt=""
              className="w-[250px] md:w-[375px] object-contain"
            />
            <div className="text-[#EDF0F7] w-[340px] md:w-[743px] flex flex-col gap-8 mt-5 text-[13px] md:text-lg">
              <p className="">
                I’m a Front-End Developer and an undergraduate student at
                Pasundan University. I enjoy learning new things and
                continuously improving my skills in modern web development.
              </p>
              <p>
                My current tech stack includes HTML, CSS, Tailwind CSS, Figma,
                React, JavaScript, TypeScript, and Next.js.
              </p>
              <p>
                I’m passionate about building user-friendly and visually
                appealing web interfaces, and I’m always excited to explore new
                technologies and collaborate on creative projects.
              </p>
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="px-[20px] md:px-[160px] mt-10 md:mt-20">
          <div className="title relative">
            <h1 className="text-[#7E62F3] font-bold text-[25px] md:text-5xl md:pt-5 px-5 w-full relative flex justify-end">
              MY WORKS
            </h1>
            <img
              src={myWorks}
              alt=""
              className="w-[278px] md:w-[773px] absolute top-0 right-0"
            />
          </div>

          {projects.slice(0, 3).map((project) => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </div>

        {/* Interested working */}
        <Interested />
      </div>
    </PageTransition>
  );
};

export default HomePage;

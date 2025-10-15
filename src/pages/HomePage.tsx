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
                Self-taught Front-End developer based in Indonesia.Currently,
                I'm focused on improving my knowledge of front-end technology
                and am open to collaboration.
              </p>

              <div className="flex items-center gap-3 md:gap-5 mt-3 md:mt-8">
                <Link to="/contact">
                  <div className="text-[13px] md:text-lg group px-2 py-1 md:px-3 md:py-2 rounded-full flex items-center gap-1 md:gap-3 border shadow-lg hover:shadow-xl hover:icon hover:cursor-p">
                    Let`s talk
                    <div className="p-1 rounded-full border">
                      <MoveRight className="w-4 h-4 md:w-5 md:h-5 group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
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
            <img src={fhoto} alt="" className="w-[250px] md:w-[375px] object-contain" />
            <div className="text-[#EDF0F7] w-[365px] md:w-[743px] flex flex-col gap-8 mt-10 text-[13px] md:text-lg ">
              <p className="">
                Hello! My name is Biagi. My interest in web development started
                in 2016 when I accidentally opened the inspect element tab on a
                site which ended up tweaking the appearance of the website and
                in the end taught me a lot about HTML and CSS.
              </p>
              <p>
                However, it was only at the end of 2020 that I began to focus on
                deepening my knowledge about web development by taking courses
                from Dicoding through a scholarship program in collaboration
                with Indosat Ooredoo (IDCamp), several classes from BuildWith
                Angga and also Udemy.
              </p>
              <p>
                My main goal is to become a reliable Front-End Developer, but it
                is also possible to become a Full-Stack JavaScript Developer
                because I also study technology in Back-End development.
              </p>
              <p>
                {" "}
                Here are some of the technologies I’ve learned: <br /> → HTML{" "}
                <br /> → CSS <br /> → JavaScript <br /> → React.js
              </p>
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="px-[20px] md:px-[160px] mt-10 md:mt-20">
          <div className="title relative">
            <h1 className="text-[#7E62F3] font-bold text-[25px] md:text-5xl pt-3 px-11 w-full relative flex justify-end">
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

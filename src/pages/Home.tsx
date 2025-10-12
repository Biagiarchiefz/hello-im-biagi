import myName from "../assets/img/myName.png";
import aboutMe from "../assets/img/ABOUT ME-b.png";
import fhoto from "../assets/img/fhoto.png";
import myWorks from "../assets/img/MY WORKS-b.png"
import { Dribbble, Github, Instagram, Linkedin, MoveRight } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-[#141414]">
      {/* section 1 profile */}
      <div className=" h-[100vh] flex items-center relative">
        <img
          src={myName}
          alt=""
          className="w-[730px] absolute right-0 bottom-0"
        />
        <div className="text-[#EDF0F7] w-full px-[160px] flex justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-[100px] relative font-bold leading-[110.2%]">
              Biagi Archie Fais, <br /> Front-End Developer
            </h1>
            <p className="text-xl w-[547px]">
              Self-taught Front-End developer based in Indonesia.Currently, I'm
              focused on improving my knowledge of front-end technology and am
              open to collaboration.
            </p>

            <div className="flex items-center gap-5 mt-8">
              <div className="group px-3 py-2 rounded-full flex items-center gap-5 border shadow-lg hover:shadow-xl hover:icon hover:cursor-p">
                Let`s talk
                <div className="p-1 rounded-full border">
                  <MoveRight className="w-5 h-5 group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
                </div>
              </div>
              <Linkedin className="text-[#7E62F3]" />
              <Github className="text-[#7E62F3]" />
              <Dribbble className="text-[#7E62F3]" />
              <Instagram className="text-[#7E62F3]" />
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section  */}
      <div className="px-[160px] mt-20">
        <div className="title relative">
          <h1 className="text-[#7E62F3] font-bold text-5xl pt-12 px-11">
            ABOUT ME
          </h1>
          <img
            src={aboutMe}
            alt=""
            className="w-[773px] absolute top-0 left-0"
          />
        </div>

        <div className="flex justify-between mt-25">
          <img src={fhoto} alt="" className="w-[375px] object-contain" />
          <div className="text-[#EDF0F7] w-[700px] flex flex-col gap-8 mt-10 ">
            <p className="">
              Hello! My name is Biagi. My interest in web development started in
              2016 when I accidentally opened the inspect element tab on a site
              which ended up tweaking the appearance of the website and in the
              end taught me a lot about HTML and CSS.
            </p>
            <p>
              However, it was only at the end of 2020 that I began to focus on
              deepening my knowledge about web development by taking courses
              from Dicoding through a scholarship program in collaboration with
              Indosat Ooredoo (IDCamp), several classes from BuildWith Angga and
              also Udemy.
            </p>
            <p>
              My main goal is to become a reliable Front-End Developer, but it
              is also possible to become a Full-Stack JavaScript Developer
              because I also study technology in Back-End development.
            </p>
            <p>
              {" "}
              Here are some of the technologies I’ve learned: <br /> → HTML <br /> → CSS <br /> →
              JavaScript <br /> → React.js
            </p>
          </div>
        </div>
      </div>



      {/* Project Section */}
      <div className="h-[50vh] px-[160px] mt-20">

         <div className="title relative">
          <h1 className="text-[#7E62F3] font-bold text-5xl pt-3 px-11 w-full relative flex justify-end">
            MY WORKS
          </h1>
          <img
            src={myWorks}
            alt=""
            className="w-[773px] absolute top-0 right-0"
          />
        </div>

        <div className="">
          <div className="">
            <h3>Project 01</h3>
            <h1></h1>
          </div>

          <img src="" alt="" />

        </div>

      </div>
    </div>
  );
};

export default Home;

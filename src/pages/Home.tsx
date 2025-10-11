import React from "react";
import fhoto from "../assets/img/fhoto.png";
import aboutMe from "../assets/img/ABOUT ME-b.png";

const Home = () => {
  return (
    <div className="bg-black h-[100vh] flex items-center relative">
      <img src={aboutMe} alt="" className="w-[730px] absolute right-0 bottom-0" />
      <div className="text-white w-full px-[150px] border-white flex justify-between">
        <div className="border mt-20 flex flex-col gap-2">
          <h3>Hello, i`m</h3>
          <h1 className="text-2xl font-bold">Biagi Archie Fais</h1>
          <p>
            Junior Web Developer <br />
            Based in Indonesia
          </p>
        </div>
        <div className="w-[30%] object-contain mb-20">
          <img src={fhoto} alt="" className="z-10 relative"/>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#7E62F3] mt-[150px] text-[#EDF0F7] px-[50px] py-[50px]">
      <div className="flex flex-col gap-8">
        <div className="flex gap-5 text-xl">
          <Link to="https://www.linkedin.com/in/biagiarchiefz/">Linkedin</Link>
          <Link to="https://github.com/Biagiarchiefz">Github</Link>
          <Link to="https://www.instagram.com/biagiarchiefz/">Instagram</Link>
          <Link to="https://dribbble.com/Biagii">Dribble</Link>
        </div>
        <h1 className="text-5xl font-bold max-w-[579px]">
          Get in Touch with Me biagiiarchie@gmail.com
        </h1>
        <p>Biagi Archie Fais © 2025</p>
      </div>
    </div>
  );
};

export default Footer;

import { Link } from "react-router";

const Footer = () => {
  return (
    // <div className="bg-[#7E62F3] text-[#EDF0F7] p-[50px]">
    //   <div className="flex flex-col gap-8">
    //     <div className="flex gap-5 text-xl">
    //       <Link to="https://www.linkedin.com/in/biagiarchiefz/">Linkedin</Link>
    //       <Link to="https://github.com/Biagiarchiefz">Github</Link>
    //       <Link to="https://www.instagram.com/biagiarchiefz/">Instagram</Link>
    //       <Link to="https://dribbble.com/Biagii">Dribble</Link>
    //     </div>
    //     <h1 className="text-5xl font-bold max-w-[579px]">
    //       Get in Touch with Me biagiiarchie@gmail.com
    //     </h1>
    //     <p>Biagi Archie Fais © 2025</p>
    //   </div>
    // </div>
    <div className="bg-[#7E62F3] text-[#EDF0F7] p-[20px] md:p-[50px]">
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Social Links */}
        <div className="flex flex-wrap gap-3 md:gap-5 text-base md:text-xl">
          <Link
            to="https://www.linkedin.com/in/biagiarchiefz/"
            className="hover:underline underline-offset-4 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
          <Link
            to="https://github.com/Biagiarchiefz"
            className="hover:underline underline-offset-4 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            to="https://www.instagram.com/biagiarchiefz/"
            className="hover:underline underline-offset-4 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link
            to="https://dribbble.com/Biagii"
            className="hover:underline underline-offset-4 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </Link>
        </div>

        {/* Email Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-full md:max-w-[579px] leading-tight">
          Get in Touch with Me{" "}
          <a
            href="mailto:biagiiarchie@gmail.com"
            className=""
          >
            biagiiarchie@gmail.com
          </a>
        </h1>

        {/* Copyright */}
        <p className="text-sm md:text-base">Biagi Archie Fais © 2025</p>
      </div>
    </div>
  );
};

export default Footer;

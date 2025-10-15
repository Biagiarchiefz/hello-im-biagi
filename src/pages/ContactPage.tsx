import contactMe from "../assets/img/contactMe-b.png";
import { Mail, MapPinned, PhoneCall } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const ContactPage = () => {
  return (
    // <PageTransition>
    //   <div className="text-white px-[160px] mt-20">
    //     <div className="title relative">
    //       <h1 className="text-[#7E62F3] font-bold text-5xl relative pt-15 px-11 flex justify-center">
    //         CONTACT ME
    //       </h1>
    //       <img
    //         src={contactMe}
    //         alt=""
    //         className="w-[773px] absolute top-0 left-1/2 -translate-x-1/2"
    //       />
    //     </div>

    //     <div className="flex justify-around mt-20">
    //       <div className="flex flex-col gap-2 items-center p-8 flex-1">
    //         <PhoneCall size={35} className="text-[#7E62F3]" />
    //         <h3 className="text-2xl font-xl">Call or Message</h3>
    //         <p className="text-xl font-xl">081249746332</p>
    //       </div>

    //       <div className="flex flex-col gap-2 items-center p-8 flex-1">
    //         <Mail size={35} className="text-[#7E62F3]" />
    //         <h3 className="text-2xl font-xl">Email</h3>
    //         <p className="text-xl font-xl">biagiiarchie@gmail.com</p>
    //       </div>

    //       <div className="flex flex-col gap-2 items-center p-8 flex-1">
    //         <MapPinned size={35} className="text-[#7E62F3]" />
    //         <h3 className="text-2xl font-xl">Location</h3>
    //         <p className="text-xl font-xl">Bandung, Indonesia</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="text-[#7E62F3] mt-40 mb-[25px] px-[50px]">
    //     <h1 className="text-5xl font-semibold">Let`s work together!</h1>
    //   </div>
    // </PageTransition>
     <PageTransition>
      <div className="text-white px-[20px] md:px-[160px] mt-10 md:mt-20">
        {/* Title Section */}
        <div className="title relative mb-10 md:mb-0">
          <h1 className="text-[#7E62F3] font-bold text-3xl md:text-5xl relative pt-12 md:pt-15 px-4 md:px-11 flex justify-center z-10">
            CONTACT ME
          </h1>
          <img
            src={contactMe}
            alt=""
            className="w-[300px] md:w-[773px] absolute top-0 left-1/2 -translate-x-1/2 opacity-50 md:opacity-100"
          />
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col md:flex-row justify-around mt-10 md:mt-20 gap-6 md:gap-0">
          {/* Phone */}
          <div className="flex flex-col gap-2 items-center p-6 md:p-8 flex-1 bg-white/5 md:bg-transparent rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
            <PhoneCall size={30} className="text-[#7E62F3] md:size-[35px]" />
            <h3 className="text-xl md:text-2xl font-semibold">Call or Message</h3>
            <a 
              href="tel:+62812497463332"
              className="text-lg md:text-xl hover:text-[#7E62F3] transition-colors"
            >
              081249746332
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 items-center p-6 md:p-8 flex-1 bg-white/5 md:bg-transparent rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
            <Mail size={30} className="text-[#7E62F3] md:size-[35px]" />
            <h3 className="text-xl md:text-2xl font-semibold">Email</h3>
            <a 
              href="mailto:biagiiarchie@gmail.com"
              className="text-lg md:text-xl hover:text-[#7E62F3] transition-colors break-all text-center"
            >
              biagiiarchie@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2 items-center p-6 md:p-8 flex-1 bg-white/5 md:bg-transparent rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
            <MapPinned size={30} className="text-[#7E62F3] md:size-[35px]" />
            <h3 className="text-xl md:text-2xl font-semibold">Location</h3>
            <p className="text-lg md:text-xl">Bandung, Indonesia</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-[#7E62F3] mt-20 md:mt-40 mb-[25px] px-[20px] md:px-[50px]">
        <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-left">
          Let's work together!
        </h1>
      </div>
    </PageTransition>
  );
};

export default ContactPage;

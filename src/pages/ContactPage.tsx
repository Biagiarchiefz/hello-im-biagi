import React from "react";
import contactMe from "../assets/img/Contact Me-b (1).png";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <div className="text-white px-[160px] mt-20">
        <div className="title relative">
          <h1 className="text-[#7E62F3] font-bold text-5xl relative pt-16 px-11 flex justify-center">
            CONTACT ME
          </h1>
          <img
            src={contactMe}
            alt=""
            className="w-[773px] absolute top-0 left-1/2 -translate-x-1/2"
          />
        </div>

        <div className="flex justify-around mt-30">
          <div className="flex flex-col gap-2 items-center">
            <PhoneCall size={35} className="text-[#7E62F3]" />
            <h3 className="text-2xl font-xl">Call or Message</h3>
            <p className="text-xl font-xl">081249746332</p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <Mail size={35} className="text-[#7E62F3]" />
            <h3 className="text-2xl font-xl">Email</h3>
            <p className="text-xl font-xl">example@mail.com</p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <MapPin size={35} className="text-[#7E62F3]" />
            <h3 className="text-2xl font-xl">Location</h3>
            <p className="text-xl font-xl">123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>

      <div className="text-[#7E62F3] mt-40 mb-[25px] px-[50px]">
        <h1 className="text-5xl font-semibold">Let`s work together!</h1>
      </div>
    </>
  );
};

export default ContactPage;

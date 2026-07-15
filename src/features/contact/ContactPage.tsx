import contactMe from "@/assets/img/contactMe-b.webp?w=900&format=webp&quality=80";
import contactMeSrcSet from "@/assets/img/contactMe-b.webp?w=400;773;900&format=webp&quality=80&as=srcset";
import { Mail, MapPinned, PhoneCall } from "lucide-react";
import PageTransition from "@/shared/components/PageTransition";
import Reveal from "@/shared/components/Reveal";

const ContactPage = () => {
  return (

    <PageTransition>
      <div className="text-white px-[20px] md:px-[160px] mt-10 md:mt-20">
        {/* Title Section */}
        <Reveal className="title relative mb-10 md:mb-0">
          <h1 className="text-[#7E62F3] font-bold text-3xl md:text-5xl relative pt-12 md:pt-15 px-4 md:px-11 flex justify-center z-10">
            CONTACT ME
          </h1>
          <img
            src={contactMe}
            srcSet={contactMeSrcSet}
            sizes="(max-width: 767px) 300px, 773px"
            alt=""
            width={3951}
            height={440}
            loading="lazy"
            decoding="async"
            className="w-[300px] md:w-[773px] absolute top-10 left-1/2 -translate-x-1/2 opacity-50 md:opacity-100"
          />
        </Reveal>

        {/* Contact Info Cards */}
        <div className="flex flex-col md:flex-row justify-around mt-10 md:mt-20 gap-6 md:gap-0">
          {/* Phone */}
          <Reveal className="flex-1" delay={0}>
            <div className="flex flex-col gap-2 items-center p-6 md:p-8 w-full bg-white/5 md:bg-transparent rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              <PhoneCall size={30} className="text-[#7E62F3] md:size-[35px]" />
              <h3 className="text-xl md:text-2xl font-semibold">
                <a
                  href="tel:+62812497463332"
                  className="text-lg md:text-xl active:text-[#7E62F3] transition-colors"
                >
                  Call or Message
                </a>
              </h3>
              081249746332
            </div>
          </Reveal>

          {/* Email */}
          <Reveal className="flex-1" delay={0.1}>
            <div className="flex flex-col gap-2 items-center p-6 md:p-8 w-full bg-white/5 md:bg-transparent rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              <Mail size={30} className="text-[#7E62F3] md:size-[35px]" />
              <h3 className="text-xl md:text-2xl font-semibold">Email</h3>
              <a
                href="mailto:biagiiarchie@gmail.com"
                className="text-lg md:text-xl active:text-[#7E62F3] transition-colors break-all text-center"
              >
                biagiiarchie@gmail.com
              </a>
            </div>
          </Reveal>

          {/* Location */}
          <Reveal className="flex-1" delay={0.2}>
            <div className="flex flex-col gap-2 items-center p-6 md:p-8 w-full bg-white/5 md:bg-transparent rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              <MapPinned size={30} className="text-[#7E62F3] md:size-[35px]" />
              <h3 className="text-xl md:text-2xl font-semibold">Location</h3>
              <p className="text-lg md:text-xl">Bandung, Indonesia</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* CTA Section */}
      <Reveal className="text-[#7E62F3] mt-20 md:mt-40 mb-[25px] px-[20px] md:px-[50px]">
        <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-left">
          Let's work together!
        </h1>
      </Reveal>
    </PageTransition>
  );
};

export default ContactPage;

import { motion } from "motion/react";

/** Intro block that frames the page as an interactive journey, not a CV list. */
const JourneyHeader = () => {
  return (
    <div className="relative z-10 text-center">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7E62F3]"
      >
        <span aria-hidden className="h-px w-8 bg-[#7E62F3]/40" />
        My Journey
        <span aria-hidden className="h-px w-8 bg-[#7E62F3]/40" />
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-5 text-3xl font-bold text-[#EDF0F7] md:text-6xl"
      >
        The Path So Far
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-4 max-w-xl text-sm text-[#EDF0F7]/70 md:text-base"
      >
        Follow the path to explore my journey as a software developer. Tap any
        milestone to see the story behind it — what I built, learned and became.
      </motion.p>
    </div>
  );
};

export default JourneyHeader;

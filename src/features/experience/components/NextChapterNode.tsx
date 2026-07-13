import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { nodeReveal } from "@/features/experience/animations/journey";

/**
 * A teaser, not a milestone — a dashed border sets it apart from real
 * `ExperienceNode`s so it reads as "the story isn't over yet" rather than
 * another chapter to click into.
 */
const NextChapterNode = () => (
  <motion.div
    className="flex flex-col items-center text-center"
    variants={nodeReveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
  >
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-[#7E62F3]/50 bg-[#1c1c1c]/60 md:h-20 md:w-20">
      <Rocket className="relative h-6 w-6 text-[#7E62F3] md:h-8 md:w-8" />
    </div>

    <p className="mt-3 text-sm font-bold text-[#EDF0F7] md:text-base">
      Next Chapter
    </p>
    <p className="mt-1 max-w-[220px] text-xs leading-relaxed text-[#EDF0F7]/60 md:max-w-[260px]">
      The journey continues. I'm always looking for opportunities to learn,
      build meaningful products, and grow as a software engineer.
    </p>
  </motion.div>
);

export default NextChapterNode;

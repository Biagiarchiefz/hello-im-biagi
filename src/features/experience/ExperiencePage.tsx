import PageTransition from "@/shared/components/PageTransition";
import JourneyBackground from "@/features/experience/components/JourneyBackground";
import JourneyHeader from "@/features/experience/components/JourneyHeader";
import JourneyProgress from "@/features/experience/components/JourneyProgress";
import ExperiencePath from "@/features/experience/components/ExperiencePath";
import Interested from "@/shared/components/Interested";
import { experiences } from "@/features/experience/data/experiences";

const ExperiencePage = () => {
  return (
    <PageTransition>
      <section className="relative overflow-hidden px-[20px] pt-28 pb-10 md:px-[160px] md:pt-36">
        <JourneyBackground />

        <div className="relative z-10 flex flex-col gap-12 md:gap-16">
          <JourneyHeader />
          <JourneyProgress experiences={experiences} />
          <ExperiencePath experiences={experiences} />
        </div>
      </section>

      <Interested />
    </PageTransition>
  );
};

export default ExperiencePage;

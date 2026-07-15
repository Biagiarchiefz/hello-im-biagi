import PageTransition from "@/shared/components/PageTransition";
import JourneyBackground from "@/features/experience/components/JourneyBackground";
import JourneyHeader from "@/features/experience/components/JourneyHeader";
import JourneyProgress from "@/features/experience/components/JourneyProgress";
import ExperiencePath from "@/features/experience/components/ExperiencePath";
import { experiences } from "@/features/experience/data/experiences";
import Seo from "@/shared/components/Seo";

const ExperiencePage = () => {
  return (
    <PageTransition>
      <Seo
        title="Experience"
        path="/experience"
        description="Perjalanan dan pengalaman Biagi Archie Fais sebagai Front-End Developer — proyek, teknologi yang dikuasai, keterampilan, dan pencapaian sepanjang karier."
      />
      <section className="relative overflow-hidden px-[20px] pt-28 pb-50 md:px-[160px] md:pt-36">
        <JourneyBackground />

        <div className="relative z-10 flex flex-col gap-12 md:gap-16">
          <JourneyHeader />
          <JourneyProgress experiences={experiences} />
          <ExperiencePath experiences={experiences} />
        </div>
      </section>

    </PageTransition>
  );
};

export default ExperiencePage;

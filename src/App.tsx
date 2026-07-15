import { Route, Routes, useLocation } from "react-router";
// import "./App.css";
import { lazy, Suspense } from "react";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import { AnimatePresence, MotionConfig } from "motion/react";
import HomePage from "@/features/home/HomePage";
import PageLoader from "@/shared/components/PageLoader";
import { useIsMobile } from "@/shared/lib/useIsMobile";

// route-level code splitting: each page loads its chunk on first visit
const ProjectPage = lazy(() => import("@/features/projects/ProjectPage"));
const ProjectDetail = lazy(() => import("@/features/projects/ProjectDetail"));
const ExperiencePage = lazy(() => import("@/features/experience/ExperiencePage"));
const ContactPage = lazy(() => import("@/features/contact/ContactPage"));
const LiveDemo = lazy(() => import("@/features/live-demo/LiveDemo"));

function App() {
  const location = useLocation();
  const isMobile = useIsMobile();
  return (
    // On mobile, `reducedMotion="always"` makes motion skip transform/spring/
    // layout animations (keeping only cheap opacity/colour fades); on desktop,
    // `"user"` honours the OS "reduce motion" accessibility setting.
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <div className=" bg-[#141414]">
        {location.pathname !== "/livedemonotfound" && <Navbar />}

        <main className="min-h-[70vh]">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/livedemonotfound" element={<LiveDemo />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        {location.pathname !== "/livedemonotfound" && <Footer />}
      </div>
    </MotionConfig>
  );
}

export default App;

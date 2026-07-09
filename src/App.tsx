import { Route, Routes, useLocation } from "react-router";
// import "./App.css";
import { lazy, Suspense } from "react";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import { AnimatePresence } from "motion/react";
import HomePage from "@/features/home/HomePage";

// route-level code splitting: each page loads its chunk on first visit
const ProjectPage = lazy(() => import("@/features/projects/ProjectPage"));
const ProjectDetail = lazy(() => import("@/features/projects/ProjectDetail"));
const ExperiencePage = lazy(() => import("@/features/experience/ExperiencePage"));
const ContactPage = lazy(() => import("@/features/contact/ContactPage"));
const LiveDemo = lazy(() => import("@/features/live-demo/LiveDemo"));

function App() {
  const location = useLocation();
  return (
    <div className=" bg-[#141414]">
      {location.pathname !== "/livedemonotfound" && <Navbar />}

      <div className="md:min-h-[70vh] ">
        <Suspense fallback={null}>
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
      </div>
      {location.pathname !== "/livedemonotfound" && <Footer />}
    </div>
  );
}

export default App;

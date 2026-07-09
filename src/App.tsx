import { Route, Routes, useLocation } from "react-router";
// import "./App.css";
import HomePage from "@/features/home/HomePage";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import ContactPage from "@/features/contact/ContactPage";
import ProjectPage from "@/features/projects/ProjectPage";
import ProjectDetail from "@/features/projects/ProjectDetail";
import ExperiencePage from "@/features/experience/ExperiencePage";
import { AnimatePresence } from "motion/react";
import LiveDemo from "@/features/live-demo/LiveDemo";

function App() {
  const location = useLocation();
  return (
    <div className=" bg-[#141414]">
      {location.pathname !== "/livedemonotfound" && <Navbar />}

      <div className="md:min-h-[70vh] ">
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
      </div>
      {location.pathname !== "/livedemonotfound" && <Footer />}
    </div>
  );
}

export default App;

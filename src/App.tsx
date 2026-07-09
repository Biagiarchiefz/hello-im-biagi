import { Route, Routes, useLocation } from "react-router";
// import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetail from "./pages/ProjectDetail";
import ExperiencePage from "./pages/ExperiencePage";
import { AnimatePresence } from "motion/react";
import LiveDemo from "./pages/LiveDemo";

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

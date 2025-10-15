import { Route, Routes, useLocation } from "react-router";
// import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import { AnimatePresence } from "motion/react";
import LiveDemo from "./pages/LiveDemo";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div className=" bg-[#141414]">
        {location.pathname !== "/livedemonotfound" && <Navbar />}

        <div className="md:min-h-[70vh] ">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/livedemonotfound" element={<LiveDemo />} />
          </Routes>
        </div>
        {location.pathname !== "/livedemonotfound" && <Footer />}
      </div>
    </AnimatePresence>
  );
}

export default App;

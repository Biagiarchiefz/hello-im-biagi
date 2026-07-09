import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ScrollToTop from "@/shared/components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ScrollToTop />
      <App />
    </StrictMode>
  </BrowserRouter>
);

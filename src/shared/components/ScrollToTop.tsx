import { useEffect } from "react";
import { useLocation } from "react-router";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // jump instantly on route change even though html has smooth-scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
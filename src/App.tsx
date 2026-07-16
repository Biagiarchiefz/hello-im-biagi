import { useLocation, Outlet } from "react-router";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import { MotionConfig } from "motion/react";
import ScrollToTop from "@/shared/components/ScrollToTop";
import { useIsMobile } from "@/shared/lib/useIsMobile";

/**
 * Root layout. Route dideklarasikan sebagai data di `src/routes.tsx`
 * (dibutuhkan vite-react-ssg untuk pre-render); halaman yang cocok dirender
 * lewat <Outlet />.
 *
 * CATATAN SSG: sengaja memakai <Outlet /> POLOS — tanpa <AnimatePresence> +
 * cloneElement(useOutlet()). Pola itu tidak hydration-safe di sini dan membuat
 * konten ter-render DUA KALI setelah hydrate (halaman muncul lagi di bawah
 * footer). Transisi antar-halaman dikorbankan demi render yang benar; animasi
 * scroll per-seksi tetap ada lewat <Reveal>.
 */
function Layout() {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    // On mobile, `reducedMotion="always"` makes motion skip transform/spring/
    // layout animations (keeping only cheap opacity/colour fades); on desktop,
    // `"user"` honours the OS "reduce motion" accessibility setting.
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <ScrollToTop />
      <div className=" bg-[#141414]">
        {location.pathname !== "/livedemonotfound" && <Navbar />}

        <main className="min-h-[70vh]">
          <Outlet />
        </main>
        {location.pathname !== "/livedemonotfound" && <Footer />}
      </div>
    </MotionConfig>
  );
}

export default Layout;

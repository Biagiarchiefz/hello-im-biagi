import { motion } from "motion/react";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Pembungkus halaman. `initial={false}` membuat motion me-render LANGSUNG di
 * state akhir (terlihat) tanpa animasi mount.
 *
 * Ini WAJIB untuk SSG: kalau animasi dari `opacity:0`, HTML hasil pre-render
 * ikut ter-render `opacity:0` → halaman tampak hitam sampai JS memuat &
 * menganimasikannya. Dengan `initial={false}`, konten pre-render langsung
 * tampil dan hydration cocok (tak ada kedip / mismatch). Animasi scroll
 * per-seksi ditangani oleh <Reveal>.
 */
const PageTransition = ({ children }: PageTransitionProps) => {
  return <motion.div initial={false}>{children}</motion.div>;
};

export default PageTransition;

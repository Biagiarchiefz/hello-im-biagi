/**
 * Single source of truth for site-wide SEO metadata.
 *
 * ⚠️ GANTI `url` dengan domain production Anda yang sebenarnya (tanpa trailing
 * slash). Nilai ini dipakai untuk canonical URL, Open Graph, dan sitemap —
 * kalau salah, Google & preview sosmed akan menunjuk ke alamat yang keliru.
 * Kalau Anda mengubahnya di sini, ubah juga URL absolut di `index.html`.
 */
export const siteConfig = {
  name: "Biagi Archie Fais",
  /** domain utama (kanonik). Domain kedua (vercel.app) di-301-redirect ke sini via vercel.json */
  url: "https://biagi.kodingin.id",
  description:
    "Portfolio Biagi Archie Fais — Front-End Developer asal Indonesia yang berfokus pada React, TypeScript, dan Tailwind CSS. Lihat proyek, pengalaman, dan hubungi saya untuk kolaborasi.",
  keywords:
    "Biagi Archie Fais, Front-End Developer, React Developer, Web Developer Indonesia, TypeScript, Tailwind CSS, Portfolio, UI Developer",
  /** taruh gambar 1200×630 px di folder public/ dengan nama ini */
  ogImage: "/og-image.jpg",
  locale: "id_ID",
} as const;

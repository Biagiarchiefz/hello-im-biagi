import { Head } from "vite-react-ssg";
import { siteConfig } from "@/shared/config/site";

interface SeoProps {
  /** judul unik halaman; otomatis diberi suffix nama situs */
  title: string;
  /** deskripsi unik 120–160 karakter untuk halaman ini */
  description?: string;
  /** path halaman diawali "/" (mis. "/projects") untuk canonical & og:url */
  path: string;
  /** URL gambar absolut/relatif untuk share; default pakai og-image situs */
  image?: string;
  keywords?: string;
  /** set true untuk halaman yang TIDAK ingin diindeks (mis. halaman utilitas) */
  noindex?: boolean;
}

/**
 * Menyuntikkan meta tag per halaman lewat <Head> (react-helmet-async) dari
 * vite-react-ssg. Karena situs ini di-pre-render (SSG), tag di dalam <Head>
 * ikut ditulis ke <head> file HTML statis saat build — jadi Googlebot MAUPUN
 * scraper sosmed (WhatsApp/FB/LinkedIn) yang tidak menjalankan JS tetap membaca
 * judul & Open Graph yang benar per halaman. Di browser, helmet mengambil alih
 * dan memperbarui <head> saat navigasi antar-halaman.
 */
const Seo = ({
  title,
  description = siteConfig.description,
  path,
  image,
  keywords = siteConfig.keywords,
  noindex = false,
}: SeoProps) => {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "/" ? `${siteConfig.name} — Software Engineer` : `${title} | ${siteConfig.name}`;
  const ogImage = (image ?? siteConfig.ogImage).startsWith("http")
    ? (image ?? siteConfig.ogImage)
    : `${siteConfig.url}${image ?? siteConfig.ogImage}`;

  /**
   * Structured data (JSON-LD) schema.org `Person` — hanya di homepage agar
   * tidak terduplikasi di tiap halaman. Membantu Google menampilkan info
   * profil (nama, jabatan, akun sosial) di hasil pencarian.
   */
  const personJsonLd =
    path === "/"
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
          image: ogImage,
          jobTitle: "Software Engineer",
          sameAs: [
            "https://www.linkedin.com/in/biagiarchiefz",
            "https://github.com/Biagiarchiefz",
            "https://dribbble.com/Biagii",
            "https://www.instagram.com/biagiarchiefz/",
          ],
        })
      : null;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {personJsonLd && (
        <script type="application/ld+json">{personJsonLd}</script>
      )}
    </Head>
  );
};

export default Seo;

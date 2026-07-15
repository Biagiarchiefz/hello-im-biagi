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
 * Menyuntikkan meta tag per halaman. React 19 otomatis meng-hoist elemen
 * <title>/<meta>/<link> ini ke <head>, jadi tidak perlu react-helmet.
 *
 * Catatan: tag ini dirender oleh JS, jadi terbaca oleh Googlebot (yang
 * merender JS) — bukan oleh scraper sosmed. Untuk preview share, default OG
 * tetap disediakan secara statis di index.html.
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
    path === "/" ? `${siteConfig.name} — Front-End Developer` : `${title} | ${siteConfig.name}`;
  const ogImage = (image ?? siteConfig.ogImage).startsWith("http")
    ? (image ?? siteConfig.ogImage)
    : `${siteConfig.url}${image ?? siteConfig.ogImage}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

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
    </>
  );
};

export default Seo;

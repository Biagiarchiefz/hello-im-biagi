// Generates public/sitemap.xml before every build (wired via the "prebuild"
// npm script). Static-route site, so we list routes explicitly.
//
// ⚠️ SITE_URL harus sama dengan `url` di src/shared/config/site.ts.
// Kalau menambah proyek baru, tambahkan id-nya ke PROJECT_IDS.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const SITE_URL = "https://biagi.kodingin.id";
const PROJECT_IDS = [1, 2, 3, 4, 5];

// [path, changefreq, priority]
const staticRoutes = [
  ["/", "monthly", "1.0"],
  ["/projects", "monthly", "0.9"],
  ["/experience", "monthly", "0.8"],
  ["/contact", "yearly", "0.7"],
];

const today = new Date().toISOString().split("T")[0];

const urls = [
  ...staticRoutes.map(([path, changefreq, priority]) => ({
    path,
    changefreq,
    priority,
  })),
  ...PROJECT_IDS.map((id) => ({
    path: `/projects/${id}`,
    changefreq: "yearly",
    priority: "0.6",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../public");
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "sitemap.xml"), xml, "utf8");
console.log(`✓ sitemap.xml generated with ${urls.length} URLs`);

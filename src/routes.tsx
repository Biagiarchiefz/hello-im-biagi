import type { RouteRecord } from "vite-react-ssg";
import Layout from "./App";
import HomePage from "@/features/home/HomePage";

// Route sebagai DATA (array), bukan JSX <Route>. Inilah bentuk yang bisa
// "dijelajahi" vite-react-ssg untuk tahu halaman apa saja yang harus dibuat.
//
// Code splitting pakai `lazy` bawaan REACT ROUTER (bukan React.lazy). Bedanya
// penting untuk SSG: react-router menyelesaikan modul SEBELUM render, jadi saat
// pre-render tidak ada <Suspense> yang "menggantung". Kalau pakai React.lazy,
// komponen suspend SAAT render → React menaruh fallback (spinner) di posisinya
// dan konten asli di <div hidden> setelah footer (bug "konten di bawah footer").
//
// HomePage TIDAK di-lazy karena itu halaman pertama (harus tampil instan).
// Child path relatif terhadap parent "/" (tanpa slash depan).
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "projects",
        lazy: () =>
          import("@/features/projects/ProjectPage").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "projects/:id",
        lazy: () =>
          import("@/features/projects/ProjectDetail").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "experience",
        lazy: () =>
          import("@/features/experience/ExperiencePage").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "contact",
        lazy: () =>
          import("@/features/contact/ContactPage").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "livedemonotfound",
        lazy: () =>
          import("@/features/live-demo/LiveDemo").then((m) => ({
            Component: m.default,
          })),
      },
    ],
  },
];
import "./index.css";
import { ViteReactSSG } from "vite-react-ssg";
import { createBrowserRouter, type RouteObject } from "react-router";
import { routes } from "./routes";

/**
 * Saat hydration, vite-react-ssg menyuntikkan `loader` async ke SETIAP route
 * (mekanisme static-loader-data miliknya). Proyek ini tidak memakai route
 * loader sama sekali, tetapi loader suntikan itu membuat router
 * berinisialisasi ASYNC saat hydrate: react-router merender HydrateFallback
 * (null) lebih dulu (console warning "No HydrateFallback element provided"),
 * sehingga render pertama client TIDAK cocok dengan HTML pre-render → React
 * menggandakan konten (halaman muncul lagi di bawah footer).
 *
 * `stripInjectedLoaders` membuang loader suntikan itu sehingga router
 * initialized secara sinkron dan hydration cocok 1:1. JANGAN dihapus.
 */
function stripInjectedLoaders(rs: RouteObject[]): RouteObject[] {
  return rs.map(
    (r) =>
      ({
        ...r,
        loader: undefined,
        children: r.children ? stripInjectedLoaders(r.children) : undefined,
      }) as RouteObject,
  );
}

const customCreateRouter: typeof createBrowserRouter = (rs, opts) =>
  createBrowserRouter(stripInjectedLoaders(rs), opts);

// Menggantikan createRoot(...).render(<BrowserRouter><App/></BrowserRouter>).
// Saat `npm run build`, ViteReactSSG mem-pre-render tiap route jadi HTML statis;
// di browser ia meng-hydrate dan berjalan seperti SPA biasa.
//
// PENTING: nama export harus `createRoot` — vite-react-ssg mencarinya by name.
export const createRoot = ViteReactSSG({ routes, customCreateRouter });

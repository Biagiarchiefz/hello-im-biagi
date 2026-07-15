import { useSyncExternalStore } from "react";

// Phones / small screens (Tailwind's `md` breakpoint is 768px). We treat these
// as reduced-motion surfaces: heavy transform/spring animations are skipped in
// favour of cheap opacity fades to cut main-thread work on weaker mobile CPUs.
const MOBILE_QUERY = "(max-width: 767px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

/** `true` when the viewport is below Tailwind's `md` breakpoint. */
export function useIsMobile() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false, // no SSR in this SPA; assume desktop before hydration
  );
}

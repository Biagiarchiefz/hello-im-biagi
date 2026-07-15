/**
 * Suspense fallback shown while a lazy-loaded route chunk is fetching. It fills
 * the content area (min-h-[70vh]) so the Footer stays put instead of jumping up
 * under the Navbar during the brief load. Pure CSS spinner — no JS animation.
 */
const PageLoader = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#141414]">
      <div
        role="status"
        aria-label="Loading"
        className="h-10 w-10 animate-spin rounded-full border-2 border-[#7E62F3]/25 border-t-[#7E62F3]"
      />
    </div>
  );
};

export default PageLoader;

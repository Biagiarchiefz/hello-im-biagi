/// <reference types="vite/client" />

// vite-imagetools query imports (no `as` directive) resolve to the built asset
// URL string. v10 ships no client types, so declare the shape ourselves; the
// wildcard matches any image imported with our `…&format=webp&quality=80` query.
declare module "*&format=webp&quality=80" {
  const src: string;
  export default src;
}

// vite-imagetools `as=srcset` returns a ready-to-use srcset string
// ("/img-400.webp 400w, /img-800.webp 800w, …").
declare module "*&as=srcset" {
  const srcset: string;
  export default srcset;
}

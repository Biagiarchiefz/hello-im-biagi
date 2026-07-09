import type { Variants } from "motion/react";

/** A milestone node popping into place when scrolled into view. */
export const nodeReveal: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

/** Floating modal — spring in, fade out. */
export const modalMotion: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 26 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 8,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
};

/** Backdrop dim behind the modal. */
export const backdropMotion: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

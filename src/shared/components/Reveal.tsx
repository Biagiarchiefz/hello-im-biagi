import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** delay in seconds, useful for staggering sibling elements */
  delay?: number;
  /** vertical offset the element animates up from */
  y?: number;
}

/**
 * Wraps content so it fades + slides into view the first time it is
 * scrolled into the viewport. Uses motion's `whileInView` (Intersection
 * Observer under the hood) so there is no extra dependency.
 */
const Reveal = ({ children, className, delay = 0, y = 40 }: RevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

import { motion } from "motion/react";

interface PathConnectorProps {
  /** SVG cubic-bezier path string in a 0-100 viewBox */
  d: string;
}

/**
 * Draws the winding journey path. A faint static "track" sits underneath a
 * primary-coloured line that draws itself in as the section scrolls into view.
 * `preserveAspectRatio="none"` lets the 0-100 coordinate space stretch to fill
 * the container, while `vector-effect="non-scaling-stroke"` keeps the stroke
 * crisp and even.
 */
const PathConnector = ({ d }: PathConnectorProps) => {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* faint full track */}
      <path
        d={d}
        stroke="#EDF0F7"
        strokeOpacity={0.08}
        strokeWidth={4}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="0.1 6"
      />

      {/* animated drawn line */}
      <motion.path
        d={d}
        stroke="#7E62F3"
        strokeWidth={3}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 0 6px rgba(126,98,243,0.5))" }}
      />
    </svg>
  );
};

export default PathConnector;

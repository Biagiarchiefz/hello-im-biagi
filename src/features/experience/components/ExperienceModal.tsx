import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import type { Experience } from "@/features/experience/types/experience";
import { backdropMotion, modalMotion } from "@/features/experience/animations/journey";
import { useFocusTrap } from "@/features/experience/lib/useFocusTrap";
import ExperienceModalHeader from "./ExperienceModalHeader";
import ExperienceModalBody from "./ExperienceModalBody";
import ExperienceModalFooter from "./ExperienceModalFooter";

interface ExperienceModalProps {
  experience: Experience;
  /** screen rect of the node that opened the modal, for popover placement */
  anchorRect: DOMRect | null;
  onClose: () => void;
}

const MODAL_WIDTH = 460;
const MARGIN = 16;

function useViewport() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1280,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  useEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

/**
 * Places the popover beside the node (flipping sides + clamping to screen) and
 * computes a maxHeight so the panel always fits the viewport — the body scrolls
 * within it, the panel itself never does.
 */
function getDesktopPosition(rect: DOMRect | null, vw: number, vh: number) {
  const maxHeight = Math.min(vh * 0.82, 560);

  if (!rect) {
    return { left: vw / 2 - MODAL_WIDTH / 2, top: MARGIN + 64, maxHeight };
  }

  const nodeCenterX = rect.left + rect.width / 2;
  const placeRight = nodeCenterX < vw / 2;

  let left = placeRight ? rect.right + MARGIN : rect.left - MARGIN - MODAL_WIDTH;
  left = Math.max(MARGIN, Math.min(left, vw - MODAL_WIDTH - MARGIN));

  let top = rect.top + rect.height / 2 - maxHeight / 2;
  top = Math.max(MARGIN + 64, Math.min(top, vh - maxHeight - MARGIN));
  top = Math.max(top, MARGIN);

  return { left, top, maxHeight };
}

const ExperienceModal = ({
  experience,
  anchorRect,
  onClose,
}: ExperienceModalProps) => {
  const { width: vw, height: vh } = useViewport();
  const isDesktop = vw >= 768;
  const panelRef = useFocusTrap<HTMLDivElement>(true, onClose);

  // lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const pos = getDesktopPosition(anchorRect, vw, vh);
  const titleId = `experience-modal-title-${experience.id}`;

  return createPortal(
    <div className="fixed inset-0 z-[200]">
      {/* backdrop / click-outside */}
      <motion.div
        className={`absolute inset-0 ${
          isDesktop ? "bg-[#141414]/30" : "bg-[#141414]/70"
        } backdrop-blur-[2px]`}
        variants={backdropMotion}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />

      {/* panel — flex column: header (fixed) / body (scroll) / footer (fixed) */}
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        variants={modalMotion}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={
          isDesktop
            ? {
                position: "absolute",
                left: pos.left,
                top: pos.top,
                width: MODAL_WIDTH,
                maxHeight: pos.maxHeight,
              }
            : undefined
        }
        className={`flex flex-col overflow-hidden rounded-[3px] border border-[#EDF0F7]/10 border-t-2 border-t-[#7E62F3] bg-[#181818] shadow-2xl outline-none ${
          isDesktop
            ? ""
            : "absolute bottom-0 left-0 right-0 max-h-[90vh] rounded-b-none border-x-0 border-b-0"
        }`}
      >
        <ExperienceModalHeader
          experience={experience}
          titleId={titleId}
          onClose={onClose}
        />
        <ExperienceModalBody experience={experience} />
        <ExperienceModalFooter experience={experience} />
      </motion.div>
    </div>,
    document.body,
  );
};

export default ExperienceModal;

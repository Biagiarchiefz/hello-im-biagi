import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AsciiPortraitProps {
  src: string;
  className?: string;
  /** fraction of the image height to render (0–1); the rest is cropped from the bottom */
  cropBottom?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  char: string;
  color: string;
}

const CHARS = ".:-=+*#%@";
// site accent (#7E62F3), used to lift near-black pixels so they stay visible on the dark page background
const ACCENT = { r: 126, g: 98, b: 243 };

const AsciiPortrait = ({ src, className, cropBottom = 1 }: AsciiPortraitProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!container || !canvas || !ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    let fontSize = 7;
    let startTime = 0;
    const mouse = { x: -9999, y: -9999 };
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const img = new Image();
    img.src = src;

    const build = () => {
      width = container.clientWidth;
      if (!width || !img.naturalWidth) return;
      const srcHeight = img.naturalHeight * cropBottom;
      height = Math.round((srcHeight / img.naturalWidth) * width);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      fontSize = width < 300 ? 5 : 7;
      const gapX = fontSize * 0.8;
      const gapY = fontSize * 1.05;
      const cols = Math.floor(width / gapX);
      const rows = Math.floor(height / gapY);

      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const offCtx = off.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;
      offCtx.drawImage(img, 0, 0, img.naturalWidth, srcHeight, 0, 0, cols, rows);
      const data = offCtx.getImageData(0, 0, cols, rows).data;

      particles = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const i = (row * cols + col) * 4;
          if (data[i + 3] < 40) continue; // skip transparent pixels

          let r = data[i];
          let g = data[i + 1];
          let b = data[i + 2];
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          if (lum < 70) {
            const t = ((70 - lum) / 70) * 0.8;
            r += (ACCENT.r - r) * t;
            g += (ACCENT.g - g) * t;
            b += (ACCENT.b - b) * t;
          }

          const char =
            CHARS[
              Math.min(CHARS.length - 1, Math.floor((lum / 255) * CHARS.length))
            ];
          const tx = col * gapX + gapX / 2;
          const ty = row * gapY + gapY / 2;
          const angle = Math.random() * Math.PI * 2;
          const dist = reducedMotion ? 0 : 150 + Math.random() * 350;

          particles.push({
            x: tx + Math.cos(angle) * dist,
            y: ty + Math.sin(angle) * dist,
            vx: 0,
            vy: 0,
            tx,
            ty,
            char,
            color: `rgb(${r | 0},${g | 0},${b | 0})`,
          });
        }
      }
      startTime = performance.now();
    };

    const tick = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.globalAlpha = Math.min(1, (now - startTime) / 1200);

      const repelRadius = Math.max(width, height) * 0.18;
      for (const p of particles) {
        p.vx += (p.tx - p.x) * 0.045;
        p.vy += (p.ty - p.y) * 0.045;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < repelRadius * repelRadius) {
          const dist = Math.sqrt(distSq) || 1;
          const force = ((repelRadius - dist) / repelRadius) * 2.2;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillText(p.char, p.x, p.y);
      }
      raf = requestAnimationFrame(tick);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    const observer = new ResizeObserver(() => {
      if (img.naturalWidth && container.clientWidth !== width) build();
    });
    observer.observe(container);

    img
      .decode()
      .then(() => {
        build();
        raf = requestAnimationFrame(tick);
      })
      .catch(() => {});

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [src, cropBottom]);

  return (
    <div ref={containerRef} className={cn("touch-none", className)}>
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default AsciiPortrait;

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  /** single-width fallback URL (used as `src`) */
  image: string;
  /** multi-width srcset string for responsive resolution switching */
  imageSrcSet: string;
  /** intrinsic pixel dimensions of `image`, used for width/height attrs to reserve layout space (prevents CLS) */
  imageWidth: number;
  imageHeight: number;
}

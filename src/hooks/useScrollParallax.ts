import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Lightweight scroll-parallax hook. Calls the provided callback with the
 * element's progress through the viewport (0 = just entered at bottom,
 * 1 = just leaving at top). Uses a single rAF-batched scroll listener and
 * respects prefers-reduced-motion (no updates when reduced).
 */
export function useScrollParallax<T extends HTMLElement>(
  onProgress: (progress: number) => void
) {
  const ref = useRef<T | null>(null);
  const cbRef = useRef(onProgress);
  const reduced = usePrefersReducedMotion();
  cbRef.current = onProgress;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      cbRef.current(0.5);
      return;
    }

    let frame = 0;
    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Progress: 0 when element top is at viewport bottom, 1 when bottom at viewport top.
      const raw = (vh - rect.top) / (vh + rect.height);
      const progress = Math.max(0, Math.min(1, raw));
      cbRef.current(progress);
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return ref;
}

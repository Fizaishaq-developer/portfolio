import { useEffect, useRef } from "react";

/**
 * Tracks the pointer position relative to a target element, normalized to
 * the range [-1, 1] on both axes. Returns a ref to attach to the target,
 * and a ref holding the latest normalized values { x, y }.
 *
 * Uses a non-reactive ref + rAF so we never re-render on pointer move.
 * On touch devices the values stay at {0,0} (no hover tilt) which is the
 * intended graceful fallback.
 */
export function useMouseTilt<T extends HTMLElement>() {
  const targetRef = useRef<T | null>(null);
  const valueRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    if (typeof window === "undefined") return;

    // Skip on touch-primary devices — hover tilt is meaningless there.
    const isTouchPrimary =
      window.matchMedia?.("(hover: none)")?.matches ?? false;
    if (isTouchPrimary) return;

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const x = Math.max(-1, Math.min(1, (px - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, (py - 0.5) * 2));
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        valueRef.current = { x, y };
        el.style.setProperty("--tilt-x", x.toFixed(3));
        el.style.setProperty("--tilt-y", y.toFixed(3));
      });
    };

    const handleLeave = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        valueRef.current = { x: 0, y: 0 };
        el.style.setProperty("--tilt-x", "0");
        el.style.setProperty("--tilt-y", "0");
      });
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    el.addEventListener("pointerdown", handleMove);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
      el.removeEventListener("pointerdown", handleMove);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { targetRef, valueRef };
}

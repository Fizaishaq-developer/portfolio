import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver. Adds a
 * translate + opacity transition only when the element enters view.
 * Respects prefers-reduced-motion (renders children visible immediately).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown
          ? "translate3d(0,0,0)"
          : `translate3d(0, ${y}px, 0)`,
        transition: reduced
          ? undefined
          : `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: shown ? undefined : "transform, opacity",
      }}
    >
      {children}
    </Tag>
  );
}

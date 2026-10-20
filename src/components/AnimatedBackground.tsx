import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * Cinematic animated background: layered radial glows + a faint moving grid.
 * Purely visual, pointer-events-none, sits behind everything. Animation is
 * paused when reduced motion is requested.
 */
export function AnimatedBackground() {
  const reduced = usePrefersReducedMotion();
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const el = blobRef.current;
    if (!el) return;
    let raf = 0;
    let t = 0;
    const tick = () => {
      t += 0.004;
      const x = Math.sin(t) * 30;
      const y = Math.cos(t * 0.8) * 20;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base gradient */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-radial-glow" />

      {/* faint grid */}
      <div
        className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          transform: reduced ? undefined : "perspective(800px) rotateX(60deg) scale(1.4)",
          transformOrigin: "center 30%",
        }}
      />

      {/* drifting glows */}
      <div
        ref={blobRef}
        className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-teal-glow/10 blur-[120px]"
      />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-violet-glow/10 blur-[120px]" />
      <div className="absolute bottom-0 -left-24 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* noise overlay */}
      <div className="absolute inset-0 noise opacity-[0.025] mix-blend-soft-light" />

      {/* vignette */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.6))]" />
    </div>
  );
}

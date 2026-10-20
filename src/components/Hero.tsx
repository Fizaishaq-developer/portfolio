import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, FolderOpen } from "lucide-react";
import { profile, resume } from "../data/config";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const techStack = [
  {
    label: "React",
    logo: (
      <svg viewBox="-11.5 -10.2 23 20.4" className="h-6 w-6" aria-hidden="true">
        <circle r="2" fill="#61dafb" />
        <g stroke="#61dafb" fill="none" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    label: "JavaScript",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <rect width="24" height="24" rx="2" fill="#f7df1e" />
        <text x="22" y="22" textAnchor="end" fontSize="12" fontWeight="800" fill="#111" fontFamily="Arial, sans-serif">JS</text>
      </svg>
    ),
  },
  {
    label: "Tailwind CSS",
    logo: (
      <svg viewBox="0 0 54 33" className="h-5 w-7" aria-hidden="true">
        <path
          fill="#38bdf8"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
        />
      </svg>
    ),
  },
  {
    label: "WordPress",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="none" stroke="#3b9ddd" strokeWidth="1.6" />
        <text x="12" y="17.5" textAnchor="middle" fontSize="15" fontWeight="700" fill="#3b9ddd" fontFamily="Georgia, serif">W</text>
      </svg>
    ),
  },
];

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse-driven 3D tilt. Disabled on touch + reduced motion.
  useEffect(() => {
    if (reduced) return;
    const el = stageRef.current;
    if (!el || window.matchMedia?.("(hover: none)")?.matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setTilt({ x, y }));
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setTilt({ x: 0, y: 0 }));
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  // Scroll parallax: exposes --sy (0..1 over the first 700px) to the stage layers
  useEffect(() => {
    if (reduced) return;
    const el = stageRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.setProperty("--sy", Math.min(1, window.scrollY / 700).toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    }
  };

  const stageTransform = reduced
    ? "none"
    : `perspective(1400px) rotateX(${(-tilt.y * 7).toFixed(2)}deg) rotateY(${(tilt.x * 10).toFixed(2)}deg)`;
  // Each layer shifts at its own depth -> real parallax / 3D feel
  const shift = (d: number, sc = 0) =>
    reduced
      ? undefined
      : `translate3d(${(tilt.x * d).toFixed(1)}px, calc(${(tilt.y * d).toFixed(1)}px + var(--sy, 0) * ${sc}px), 0)`;

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden pt-28 pb-14 lg:pt-32"
      aria-label="Introduction"
    >
      <div className="container-x px-5 sm:px-8 lg:px-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-6 items-center">
        {/* Left: copy */}
        <div className="relative z-10 max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white"
          >
            Hi, I’m{" "}
            <span className="text-gradient">
              Fiza Ishaq
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-3 font-display text-xl sm:text-2xl font-medium text-slate-200"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            {profile.introduction}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary"
            >
              <FolderOpen className="h-4 w-4" />
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={resume.url}
              download={resume.fileName}
              className="btn-ghost"
            >
              <Download className="h-4 w-4" />
              Download Résumé
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            {techStack.map((t) => (
              <li key={t.label} className="flex items-center gap-2.5 text-sm text-slate-300">
                {t.logo}
                {t.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: portrait in a 3D card */}
        <div ref={stageRef} className="relative mx-auto w-full max-w-[30rem] lg:ml-auto">
          <div
            className="pointer-events-none absolute inset-x-6 inset-y-10 rounded-full bg-gradient-to-br from-teal-glow/15 to-violet-glow/25 blur-3xl"
            style={{ transform: shift(-20, 60) }}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="relative transition-transform duration-200 ease-out"
            style={{ transform: stageTransform }}
          >
            <div style={{ transform: shift(12, -40) }}>
            <div
              className="relative aspect-[1/1.05]"
              style={{ animation: reduced ? undefined : "portraitFloat 7s ease-in-out infinite" }}
            >
              <img
                src="/portrait.png"
                alt="Fiza Ishaq"
                draggable={false}
                className="h-full w-full select-none object-cover object-top"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 16%, #000 76%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 16%, #000 76%, transparent 100%)",
                  maskComposite: "intersect",
                }}
              />
            </div>
            </div>

            {/* floating depth chips (different scroll/mouse speeds) */}
            <div
              className="absolute left-[2%] top-[14%] rounded-xl border border-teal-glow/30 bg-ink-900/70 px-3 py-2 font-mono text-xs text-teal-glow shadow-card backdrop-blur"
              style={{ transform: shift(30, -90) }}
            >
              React
            </div>
            <div
              className="absolute right-[2%] top-[48%] rounded-xl border border-violet-glow/30 bg-ink-900/70 px-3 py-2 font-mono text-xs text-violet-glow shadow-card backdrop-blur"
              style={{ transform: shift(38, -120) }}
            >
              TypeScript
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes portraitFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      `}</style>
    </section>
  );
}

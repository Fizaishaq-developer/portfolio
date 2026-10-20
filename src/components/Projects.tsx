import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "../data/config";
import type { Project } from "../data/config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useMouseTilt } from "../hooks/useMouseTilt";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const accentMap = {
  teal: {
    border: "hover:border-teal-glow/40",
    text: "text-teal-glow",
    bg: "from-teal-glow/20 via-teal-glow/5 to-transparent",
    glow: "hover:shadow-glow",
    tag: "border-teal-glow/20 bg-teal-glow/10 text-teal-glow",
  },
  violet: {
    border: "hover:border-violet-glow/40",
    text: "text-violet-glow",
    bg: "from-violet-glow/20 via-violet-glow/5 to-transparent",
    glow: "hover:shadow-violetglow",
    tag: "border-violet-glow/20 bg-violet-glow/10 text-violet-glow",
  },
  sky: {
    border: "hover:border-sky-400/40",
    text: "text-sky-300",
    bg: "from-sky-400/20 via-sky-400/5 to-transparent",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.45)]",
    tag: "border-sky-400/20 bg-sky-400/10 text-sky-300",
  },
} as const;

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Projects"
            title="Featured projects"
            description="Agency websites, AI-powered tools, and full-stack WordPress tooling I have built."
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const reduced = usePrefersReducedMotion();
  const { targetRef } = useMouseTilt<HTMLDivElement>();
  const a = accentMap[project.accent];
  const Icon = project.icon;

  const tiltStyle = reduced
    ? undefined
    : {
        transform:
          "perspective(1000px) rotateX(calc(var(--tilt-y, 0) * -6deg)) rotateY(calc(var(--tilt-x, 0) * 7deg))",
      };

  const hasLinks = Boolean(project.liveUrl);

  return (
    <article
      ref={targetRef}
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-all duration-300 preserve-3d ${a.border} ${a.glow}`}
      style={tiltStyle}
    >
      {/* accent glow */}
      <div
        className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${a.bg} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex flex-col h-full" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-start justify-between">
          <div
            className={`grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 ${a.text}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight
            className={`h-5 w-5 text-slate-600 transition-all duration-300 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
          />
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className={`mt-1 text-sm font-medium ${a.text}`}>
          {project.tagline}
        </p>
        <p className="mt-4 text-sm text-slate-400 leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium ${a.tag}`}
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:text-white link-underline"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live demo
            </a>
          )}
          {!hasLinks && (
            <span className="font-mono text-[10px] text-slate-600">
              Links coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

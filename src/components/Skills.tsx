import { skillGroups } from "../data/config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useMouseTilt } from "../hooks/useMouseTilt";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import type { SkillGroup } from "../data/config";

const accentMap = {
  teal: {
    border: "hover:border-teal-glow/50",
    glow: "group-hover:shadow-glow",
    text: "text-teal-glow",
    bg: "from-teal-glow/15 to-transparent",
    ring: "ring-teal-glow/30",
  },
  violet: {
    border: "hover:border-violet-glow/50",
    glow: "group-hover:shadow-violetglow",
    text: "text-violet-glow",
    bg: "from-violet-glow/15 to-transparent",
    ring: "ring-violet-glow/30",
  },
  sky: {
    border: "hover:border-sky-400/50",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.45)]",
    text: "text-sky-300",
    bg: "from-sky-400/15 to-transparent",
    ring: "ring-sky-400/30",
  },
  amber: {
    border: "hover:border-amber-400/50",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.45)]",
    text: "text-amber-300",
    bg: "from-amber-400/15 to-transparent",
    ring: "ring-amber-400/30",
  },
} as const;

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="03 — Skills"
            title="Technical skills"
            description="The languages, frameworks, and tools I use to design, build, and ship projects."
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  const reduced = usePrefersReducedMotion();
  const { targetRef } = useMouseTilt<HTMLDivElement>();
  const a = accentMap[group.accent];
  const Icon = group.icon;

  // Tilt transform via CSS vars set by the hook (--tilt-x / --tilt-y)
  const tiltStyle = reduced
    ? undefined
    : {
        transform:
          "perspective(800px) rotateX(calc(var(--tilt-y, 0) * -5deg)) rotateY(calc(var(--tilt-x, 0) * 6deg)) translateZ(0)",
      };

  return (
    <div
      ref={targetRef}
      className={`group relative h-full rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-all duration-300 ${a.border} ${a.glow} preserve-3d`}
      style={tiltStyle}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b ${a.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative flex flex-col h-full">
        <div
          className={`grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 ${a.text}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-display text-base font-semibold text-white">
          {group.title}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {group.skills.map((s) => (
            <li
              key={s}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:border-white/20"
              style={{ transform: "translateZ(30px)" }}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

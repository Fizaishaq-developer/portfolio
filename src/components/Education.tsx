import { CalendarDays, BookOpen } from "lucide-react";
import { education } from "../data/config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useScrollParallax } from "../hooks/useScrollParallax";

export function Education() {
  const orbRef = useScrollParallax<HTMLDivElement>((p) => {
    const el = document.getElementById("edu-decor");
    if (el) el.style.transform = `translate3d(0, ${(0.5 - p) * 60}px, 0)`;
  });

  const Icon = education.icon;

  return (
    <section id="education" className="section-pad relative" ref={orbRef}>
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="04 — Education"
            title="Education"
            description="My degree, expected graduation, and relevant coursework."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 relative">
            <div
              id="edu-decor"
              className="absolute -top-12 left-1/3 h-44 w-44 rounded-full bg-teal-glow/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="glass-strong rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              {/* timeline rail */}
              <div className="absolute left-8 sm:left-10 top-10 bottom-10 w-px bg-gradient-to-b from-teal-glow/60 via-white/10 to-transparent" />

              <div className="relative pl-14 sm:pl-20">
                <div className="absolute left-0 top-0 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-2xl border border-teal-glow/30 bg-teal-glow/10 text-teal-glow">
                  <Icon className="h-7 w-7" />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="chip">
                    <CalendarDays className="h-3.5 w-3.5 text-teal-glow" />
                    {education.period}
                  </span>
                  <span className="chip border-amber-400/30 bg-amber-400/10 text-amber-300">
                    {education.status}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-semibold text-white">
                  {education.degree}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-slate-300">
                  <BookOpen className="h-4 w-4 text-violet-glow" />
                  {education.institution}
                </p>

                <p className="mt-5 max-w-2xl text-slate-400 leading-relaxed">
                  {education.note}
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl">
                  <Pill label="Graduation" value={education.expectedGraduation} />
                  <Pill label="GPA" value={education.gpa} />
                  <Pill label="Focus" value="Frontend / Web" />
                </div>

                <h4 className="mt-8 font-display text-sm font-semibold text-slate-200">
                  Relevant coursework
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {education.coursework.map((c) => (
                    <li key={c} className="chip">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-100">{value}</p>
    </div>
  );
}

import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { aboutBlocks, profile } from "../data/config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useScrollParallax } from "../hooks/useScrollParallax";

export function About() {
  const parallaxRef = useScrollParallax<HTMLDivElement>((p) => {
    const el = document.getElementById("about-orb");
    if (el) el.style.transform = `translate3d(0, ${(0.5 - p) * 40}px, 0)`;
  });

  return (
    <section id="about" className="section-pad relative">
      <div ref={parallaxRef} className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="01 — About"
            title="A bit about me"
          />
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          <div className="space-y-5">
            {aboutBlocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div>
                  <h3 className="font-display text-sm font-semibold text-teal-glow">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-slate-300 leading-[1.75] text-[15px] sm:text-base">
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={260}>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="chip">
                  <MapPin className="h-3.5 w-3.5 text-teal-glow" />
                  {profile.location}
                </span>
                <span className="chip">
                  <Sparkles className="h-3.5 w-3.5 text-violet-glow" />
                  Frontend focused
                </span>
                <span className="chip">
                  <GraduationCap className="h-3.5 w-3.5 text-sky-300" />
                  Final-year CS student
                </span>
              </div>
            </Reveal>
          </div>

          {/* Side panel with quick facts */}
          <Reveal delay={180}>
            <div className="relative">
              <div
                id="about-orb"
                className="absolute -top-10 -right-8 h-40 w-40 rounded-full bg-violet-glow/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="glass-strong rounded-3xl p-6 sm:p-7">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Quick facts
                </h3>
                <dl className="mt-5 space-y-4">
                  <Fact label="Focus" value="Frontend Development" />
                  <Fact label="Degree" value="BS Computer Science" />
                  <Fact label="University" value={profile.universityShort} />
                  <Fact label="Graduating" value="Expected 2027" />
                  <Fact label="Open to" value="Frontend roles" />
                </dl>
                <div className="mt-6 rounded-2xl border border-teal-glow/20 bg-teal-glow/5 p-4">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <span className="text-teal-glow font-medium">
                      Currently:
                    </span>{" "}
                    Building responsive React interfaces and exploring
                    Generative AI and agentic AI web tools.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="text-sm font-medium text-slate-100 text-right">{value}</dd>
    </div>
  );
}

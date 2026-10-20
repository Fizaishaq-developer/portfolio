import { experience, certifications } from "../data/config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accent = {
  teal: "border-teal-glow/30 bg-teal-glow/10 text-teal-glow",
  violet: "border-violet-glow/30 bg-violet-glow/10 text-violet-glow",
  sky: "border-sky-400/30 bg-sky-400/10 text-sky-300",
} as const;

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="05 — Experience"
            title="Experience & activities"
            description="Internships, professional work, and certifications."
          />
        </Reveal>

        <ol className="mt-12 space-y-5">
          {experience.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={item.role}>
                <Reveal delay={i * 90}>
                  <article className="glass rounded-2xl p-6 sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                      <div
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${accent[item.accent]}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                            {item.role}
                          </h3>
                          <span className="font-mono text-xs text-slate-400">
                            {item.period}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-300">
                          {item.org} · {item.place}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                          {item.points.map((pt) => (
                            <li key={pt} className="flex gap-2.5">
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-glow"
                                aria-hidden="true"
                              />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal delay={120}>
          <h3 className="mt-14 font-display text-lg font-semibold text-white">
            Certifications
          </h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-4">
            {certifications.map((c) => {
              const Icon = c.icon;
              return (
                <li
                  key={c.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/60 p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-100">
                      {c.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import {
  profile,
  socials,
  mailtoUrl,
  gmailComposeUrl,
} from "../data/config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const cardCls =
  "group flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-left transition-all hover:border-teal-glow/40 hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-glow";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="06 — Contact"
            title="Let's get in touch"
            description="Have an opportunity, a project idea, or a question? Send me an email and I'll get back to you."
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 mx-auto max-w-3xl">
            <div className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-10 text-center">
              <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-teal-glow/15 blur-3xl" />

              <div className="relative">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-teal-glow/30 bg-teal-glow/10 text-teal-glow">
                  <Mail className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl sm:text-3xl font-semibold text-white">
                  Email me
                </h3>

                {/* Opens the visitor's default mail app with To/Subject filled in */}
                <a
                  href={mailtoUrl}
                  className="btn-primary mt-6 w-full sm:w-auto max-w-full !px-4 sm:!px-6 !text-[13px] sm:!text-sm"
                  aria-label={`Send an email to ${profile.email}`}
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="min-w-0 break-all">{profile.email}</span>
                </a>

                <p className="mt-3 text-xs text-slate-500">
                  Tap to open your mail app.{" "}
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-glow hover:text-white link-underline"
                  >
                    Use Gmail in the browser instead
                  </a>
                </p>

                <div className="mt-8 grid gap-3 border-t border-white/5 pt-8 sm:grid-cols-2 text-left">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardCls}
                        aria-label={`${s.label} (opens in a new tab)`}
                      >
                        <Icon className="h-5 w-5 shrink-0 text-teal-glow" />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-slate-100">
                            {s.label}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>

                <p className="mt-8 inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-teal-glow" />
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

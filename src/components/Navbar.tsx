import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile, sectionIds } from "../data/config";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-x flex h-16 items-center justify-between px-5 sm:px-8 lg:px-16"
        aria-label="Primary"
      >
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-glow rounded-lg"
          aria-label="Go to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-teal-glow to-violet-glow font-display text-sm font-bold text-ink-950">
            FI
          </span>
          <span className="hidden sm:block font-display text-sm font-semibold tracking-wide text-slate-100">
            {profile.name}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-glow ${
                  active === link.id
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
                aria-current={active === link.id ? "page" : undefined}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-teal-glow to-transparent" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button onClick={() => go("contact")} className="btn-primary">
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-glow"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-16 z-40 bg-ink-950/95 backdrop-blur-xl"
        >
          <ul className="flex flex-col gap-1 px-5 py-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                    active === link.id
                      ? "bg-white/5 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </button>
              </li>
            ))}
            <li className="mt-3">
              <button
                onClick={() => go("contact")}
                className="btn-primary w-full"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

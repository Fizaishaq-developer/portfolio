import { ArrowUp } from "lucide-react";

export function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-ink-950/60">
      <div className="container-x flex flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8 lg:px-16">
        <span aria-hidden="true" />
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <button
          onClick={toTop}
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-teal-glow/40 hover:text-teal-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-glow"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}

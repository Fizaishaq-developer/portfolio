type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <div
        className={`flex items-center gap-2.5 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-teal-glow" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-glow">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-teal-glow" />
      </div>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

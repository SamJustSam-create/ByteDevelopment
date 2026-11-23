import { cn } from "@/lib/utils";

export default function CaseStudyCard({ project }) {
  const { name, status, built, tagline, summary, highlights, stack } = project;

  return (
    <article className="mt-6 border border-border bg-background">
      <div className="grid gap-8 p-7 md:grid-cols-[1fr_1.4fr] md:p-8">
        <div>
          <span className="inline-flex items-center gap-2 border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span
              aria-hidden="true"
              className={cn("h-1.5 w-1.5 rounded-full", built ? "bg-primary" : "bg-muted-foreground")}
            />
            {status}
          </span>

          <h3 className="mt-6 font-heading text-2xl font-semibold tracking-tight">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-base leading-relaxed text-muted-foreground">{summary}</p>

          <h4 className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Notable decisions
          </h4>
          <ul className="mt-4 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
                <span className="mt-1.5 h-px w-3 shrink-0 bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
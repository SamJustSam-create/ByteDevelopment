import Section from "./Section";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    n: "01",
    title: "A short call",
    body: "Twenty minutes on the problem. You don't need a spec, a brief or the right vocabulary — most people start with what's annoying them every week.",
  },
  {
    n: "02",
    title: "A written scope",
    body: "A document you can read in five minutes: what gets built, what it costs, what isn't included, and when it lands. You sign off before any code is written.",
  },
  {
    n: "03",
    title: "Short build slices",
    body: "You see working software every week, not a status report. Anything that changes mid-project gets a new number before it starts.",
  },
  {
    n: "04",
    title: "Handover",
    body: "The code and the accounts are yours, documented well enough that another developer could pick it up. No lock-in, no retainer unless you want one.",
  },
];

const guarantees = [
  "A price agreed before any work starts",
  "You own the code and the accounts",
  "Written handover documentation",
  "A reply within one business day",
];

export default function Process() {
  return (
    <Section id="process">
      <SectionLabel index="03">How it works</SectionLabel>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <h2 className="max-w-xl font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Small scopes. Written down. Priced before we start.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          No open-ended hourly work and no surprises on an invoice. If the job turns out
          to be bigger than we thought, you hear it before it costs you anything.
        </p>
      </div>

      <ol className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
        {steps.map((step) => (
          <li key={step.n} className="bg-background p-7 md:p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] tracking-[0.2em] text-primary">
                {step.n}
              </span>
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-10 border border-border bg-card p-6 md:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Every engagement
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {guarantees.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
              <span className="mt-1 font-mono text-xs text-primary" aria-hidden="true">
                +
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
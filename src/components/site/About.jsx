import Section from "./Section";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <Section id="about">
      <SectionLabel index="04">About</SectionLabel>

      <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          One person, no account manager.
        </h2>

        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Byte Development is a one-person software studio run out of Bendigo, Victoria.
            I work with small businesses, agencies and growing teams across regional
            Victoria, building the software they need without the bloat, the retainers or
            the jargon.
          </p>
          <p>
            A lot of the people I work with have been burned before &mdash; by agencies
            that over-quoted, or freelancers who never finished. My approach is the
            opposite: small scopes, honest timelines, and code that someone else can
            maintain after I&apos;ve moved on.
          </p>
          <p>
            You deal with the person writing the code. There&apos;s no account manager in
            between, no handoff to a junior team, and no sales pitch at the end of the
            call.
          </p>
        </div>
      </div>

      <dl className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
        {[
          ["Based in", "Bendigo, Victoria"],
          ["Working hours", "Melbourne time (AEST/AEDT)"],
          ["Engagements", "Written scope, then a stage price or a capped estimate"],
        ].map(([label, value]) => (
          <div key={label} className="bg-background p-6">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
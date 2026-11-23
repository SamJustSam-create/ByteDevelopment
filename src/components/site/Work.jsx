import { Link } from "@tanstack/react-router";
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import CaseStudyDispatch from "./CaseStudyDispatch";
import CaseStudyCard from "./CaseStudyCard";
import { projects } from "./projects";
import Cta from "./Cta";

export default function Work() {
  return (
    <Section id="work">
      <SectionLabel index="02">Selected work</SectionLabel>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <h2 className="max-w-xl font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Real builds, with the details you&apos;d actually want to see.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Real projects, described honestly — including what&apos;s finished and what
          isn&apos;t. Ask about any of them and I&apos;ll walk you through the decisions, the
          trade-offs and what I&apos;d do differently.
        </p>
      </div>

      <CaseStudyDispatch />

      {projects.map((project) => (
        <CaseStudyCard key={project.name} project={project} />
      ))}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border border-border bg-card p-6 md:p-7">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Working on something in the same shape? The first conversation costs nothing and
          usually tells you whether it&apos;s worth building.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            to="/sample-scope"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            Read a sample scope
          </Link>
          <Cta href="#contact" variant="secondary">
            Talk about your project
          </Cta>
        </div>
      </div>
    </Section>
  );
}
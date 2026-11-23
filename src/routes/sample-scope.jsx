import { createFileRoute } from "@tanstack/react-router";
import BlueprintGrid from "@/components/site/BlueprintGrid";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Cta from "@/components/site/Cta";
import ScopeSection from "@/components/scope/ScopeSection";
import ScopeClauses from "@/components/scope/ScopeClauses";
import { scopeSections, scopeNotes } from "@/components/scope/scopeContent";

export const Route = createFileRoute("/sample-scope")({
  head: () => ({
    meta: [
      { title: "Sample scope — how Byte Development quotes a project" },
      {
        name: "description",
        content:
          "An anonymised, real development proposal: what's included, what's excluded, the assumptions, the payment stages and the terms. Written for a regional web platform pilot.",
      },
      { property: "og:title", content: "A sample scope, in full — Byte Development" },
      {
        property: "og:description",
        content:
          "A real proposal with the client removed. Inclusions, exclusions, assumptions, payment stages and terms, exactly as issued.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: SampleScopePage,
});

const meta = [
  ["Type", "Staged web platform"],
  ["Issued", "October 2026"],
  ["Basis", "A$85 per project hour"],
];

function SampleScopePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BlueprintGrid />
      <div className="relative z-10">
        <SiteHeader />

        <main>
          <div className="mx-auto w-full max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Sample scope
            </p>

            <h1 className="mt-6 max-w-3xl font-heading text-[2.4rem] font-semibold leading-[1.02] tracking-tight sm:text-5xl">
              How I scope a project, in full.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A real proposal, anonymised. The client&apos;s name, contact details, project
              totals and the documents they supplied have been removed. Everything else is
              as it was issued.
            </p>

            <dl className="mt-10 grid gap-5 border-y border-border py-5 sm:grid-cols-3">
              {meta.map(([label, value]) => (
                <div key={label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1.5 text-sm text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10 md:pb-24">
            <div className="mt-12 border border-border bg-card/40 p-6 md:p-10">
              {scopeSections.map((section) => (
                <ScopeSection key={section.index} index={section.index} title={section.title}>
                  <ScopeClauses clauses={section.clauses} bullets={section.bullets} />
                </ScopeSection>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {scopeNotes.map((note) => (
                <div key={note.title} className="border border-border p-6">
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {note.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border border-border bg-card p-6 md:p-7">
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                Every project gets one of these before any code is written. Tell me what
                you&apos;re trying to build and I&apos;ll write the same document for it.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Cta href="/#contact">Start a project</Cta>
                <Cta href="/#work" variant="secondary">
                  See the work
                </Cta>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
import Section from "./Section";
import SectionLabel from "./SectionLabel";

const services = [
  {
    n: "01",
    title: "Web apps and websites",
    body: "Marketing sites, booking and ordering systems, customer portals and internal dashboards. Built to load quickly, work properly on a phone, and be updated without calling me.",
    jobs: ["Marketing and portfolio sites", "Booking and ordering systems", "Customer dashboards and portals"],
  },
  {
    n: "02",
    title: "Automation and integrations",
    body: "If your week includes copying figures between Xero, a spreadsheet and your inbox, that's a job for a script. I connect the tools you already pay for so the repetitive work runs itself.",
    jobs: ["Xero and MYOB integrations", "Email and SMS workflows", "Scheduled scripts and reports"],
  },
  {
    n: "03",
    title: "Reviews and rescues",
    body: "Inherited a half-finished build? Want someone to read a quote before you sign it? I take on short engagements too, with a written outcome at the end.",
    jobs: ["Code and architecture reviews", "Getting stuck projects moving", "Tech stack advice"],
  },
];

export default function Services() {
  return (
    <Section id="services">
      <SectionLabel index="01">What I do</SectionLabel>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <h2 className="max-w-xl font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Most projects pull from two of these.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Pick the one that sounds closest, or just tell me the problem and I&apos;ll
          suggest where to start. Every engagement begins with a written scope and a
          price agreed before any work starts.
        </p>
      </div>

      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.n}
            className="group bg-background p-7 transition-colors duration-300 hover:bg-card md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.2em] text-primary">
                {service.n}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors duration-300 group-hover:bg-primary" aria-hidden="true" />
            </div>

            <h3 className="mt-6 font-heading text-xl font-semibold leading-snug tracking-tight">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.body}
            </p>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Typical jobs
            </p>
            <ul className="mt-3 space-y-2">
              {service.jobs.map((job) => (
                <li key={job} className="flex gap-2.5 text-sm text-foreground/90">
                  <span className="mt-2 h-px w-3 shrink-0 bg-primary" aria-hidden="true" />
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
import DispatchGallery from "./DispatchGallery";

const stack = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Fastify",
  "Drizzle ORM",
  "PostgreSQL",
  "PostGIS",
  "MapLibre GL",
  "OSRM",
  "Stripe",
  "Discord",
];

const included = [
  "Accounts with Argon2id password hashing, rate limits and a ban-evasion check",
  "A credit economy with a full ledger, and leaderboards kept clean of scripted play",
  "Optional Stripe tips and a Premium subscription, both running in production",
  "A Discord bot that links accounts and pays out bug bounties",
  "A suggestion box where players get a reply, plus station icon uploads",
  "Self-serve account deletion and 14-day database backups",
];

export default function CaseStudyDispatch() {
  return (
    <article className="mt-14 border border-border bg-card">
      <div className="grid lg:grid-cols-[300px_1fr]">
        <div className="border-b border-border p-7 md:p-8 lg:border-b-0 lg:border-r">
          <span className="inline-flex items-center gap-2 border border-primary/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Live
          </span>

          <h3 className="mt-6 font-heading text-2xl font-semibold tracking-tight">
            000 Dispatch
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            An emergency services dispatch game set in Victoria, Australia.
          </p>

          <dl className="mt-8 space-y-4">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Platform
              </dt>
              <dd className="mt-2 text-sm leading-relaxed">Free browser game</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                My role
              </dt>
              <dd className="mt-2 text-sm leading-relaxed">
                Product, architecture, build and hosting
              </dd>
            </div>
          </dl>

          <a
            href="https://000dispatch.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
          >
            Play 000 Dispatch
            <span aria-hidden="true">&nearr;</span>
          </a>
        </div>

        <div className="p-7 md:p-8">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            What it is
          </h4>
          <p className="mt-3 text-base leading-relaxed">
            Players run their own fire service: build stations where they choose, buy and
            crew appliances, and dispatch them to incidents across the state. Appliances
            are judged by what they can do rather than what they are called, so a call for
            water is met by whatever actually carries water.
          </p>

          <h4 className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            The hard part
          </h4>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Everything runs on the real road network. Routes come from a routing engine
            over an OpenStreetMap extract of Victoria, so an appliance&apos;s arrival time
            reflects actual roads, posted speed limits and live road disruptions instead of
            a straight line. Geospatial work sits in PostGIS, and when the router is
            unavailable the game falls back to a dashed straight-line estimate rather than
            breaking mid-incident.
          </p>

          <h4 className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            What&apos;s in the build
          </h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
                <span className="mt-1.5 h-px w-3 shrink-0 bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-l-2 border-primary pl-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Where it landed
            </p>
            <p className="mt-2 text-base leading-relaxed">
              Shipped and live at 000dispatch.com &mdash; playable in the browser, with
              payments, subscriptions, a community bot and player feedback all running in
              production.
            </p>
          </div>
        </div>
      </div>
      <DispatchGallery />
    </article>
  );
}
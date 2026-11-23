import { motion } from "framer-motion";
import Cta from "./Cta";

const facts = [
  ["Based in", "Bendigo, Victoria"],
  ["Working with", "Small businesses, agencies, growing teams"],
  ["Latest release", "000 Dispatch — live at 000dispatch.com"],
  ["Availability", "Taking on new projects"],
  ["Replies", "Within one business day"],
  ["Engagement", "Written scope, price agreed up front"],
];

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Freelance software development
            </p>

            <h1 className="mt-6 font-heading text-[2.6rem] font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Web apps, automations and internal tools for{" "}
              <span className="text-primary">regional Victorian businesses.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Byte Development is a one-person software studio in Bendigo. I keep scopes
              small, quote honestly, and write code that someone else can maintain after
              I&apos;ve handed it over. No agency overhead, no retainers, no jargon.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Cta href="#contact">Start a project</Cta>
              <Cta href="#work" variant="secondary">
                See recent work
              </Cta>
            </div>

            <p className="mt-10 max-w-xl border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">
              If your week includes copying figures between Xero, a spreadsheet and your
              inbox &mdash; or a build that stalled halfway &mdash; that&apos;s the work I
              take on.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Studio status
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  Open
                </span>
              </div>

              <dl>
                {facts.map(([label, value], i) => (
                  <div
                    key={label}
                    className={`grid grid-cols-[104px_1fr] gap-4 px-5 py-4 ${
                      i !== facts.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <dt className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import Section from "./Section";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    q: "How much will my project cost?",
    a: "Most engagements are fixed-price and quoted before any work starts. You get the number in the written scope, and if a change pushes it, you hear about it before it happens — not on the invoice.",
  },
  {
    q: "How long does a project take?",
    a: "Small scopes land in weeks, not months. The scope document gives you a date, and you see working software each week so you always know where things stand.",
  },
  {
    q: "I don't have a technical brief. Is that a problem?",
    a: "No. Most people start with a problem — 'I'm copying invoices into a spreadsheet every Friday' or 'nobody can find the right document'. That's plenty for a first conversation.",
  },
  {
    q: "Can you take over a project someone else started?",
    a: "Yes. Reviews and rescues are a regular job. I'll read what's there, tell you honestly whether it's worth keeping, and put the finding in writing so you can act on it.",
  },
  {
    q: "Who owns the code?",
    a: "You do. It lives in your accounts, and the handover documentation is written so another developer could pick it up without me.",
  },
  {
    q: "Do you work outside Bendigo?",
    a: "Yes. Most of my work is remote across regional Victoria and Melbourne. I'm on Melbourne time and happy to meet in person if you're nearby.",
  },
  {
    q: "What happens after launch?",
    a: "Nothing you didn't agree to. Some clients want an ongoing support arrangement; plenty don't, and just email when something needs changing.",
  },
];

export default function Faq() {
  return (
    <Section id="faq">
      <SectionLabel index="05">Questions</SectionLabel>

      <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            The things people ask before they email.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            If yours isn&apos;t here, ask it directly &mdash; you&apos;ll get a straight
            answer, even if the answer is that I&apos;m not the right fit.
          </p>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-base font-medium leading-snug transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 font-mono text-lg leading-none text-primary transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pr-8 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
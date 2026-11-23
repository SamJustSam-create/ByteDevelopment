import Section from "./Section";
import SectionLabel from "./SectionLabel";
import EnquiryForm from "./EnquiryForm";

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionLabel index="06">Get in touch</SectionLabel>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="max-w-xl font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Tell me what you&apos;re trying to build, fix or automate.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            I&apos;ll reply within a business day with a couple of questions and a straight
            answer on whether it&apos;s worth building. No sales pitch, no discovery-call
            funnel.
          </p>

          <a
            href="mailto:hello@bytedevelopment.com.au"
            className="mt-8 inline-block font-heading text-xl font-medium tracking-tight text-primary underline decoration-primary/30 underline-offset-8 transition-colors hover:decoration-primary sm:text-2xl"
          >
            hello@bytedevelopment.com.au
          </a>

          <a
            href="tel:+61493222932"
            className="mt-3 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
          >
            0493 222 932
          </a>

          <dl className="mt-10 border-t border-border">
            {[
              ["Timezone", "Melbourne (AEST/AEDT)"],
              ["Availability", "Taking on new projects"],
              ["Replies", "Within one business day"],
              ["Where", "Bendigo, Victoria — working across regional Victoria"],
              ["ABN", "89 255 891 882"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[92px_1fr] gap-4 border-b border-border py-4"
              >
                <dt className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="text-sm leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <EnquiryForm />
      </div>
    </Section>
  );
}
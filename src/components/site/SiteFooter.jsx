const links = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Sample scope", href: "/sample-scope" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-sm text-primary">&lt;/&gt;</span>
              <span className="font-heading text-base font-semibold tracking-tight">
                Byte Development
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A one-person software studio in Bendigo, Victoria. Web apps, automations and
              internal tools for businesses across regional Victoria.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:text-right">
            <a
              href="mailto:hello@bytedevelopment.com.au"
              className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              hello@bytedevelopment.com.au
            </a>
            <a
              href="tel:+61493222932"
              className="mt-2 block text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              0493 222 932
            </a>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Melbourne time · AEST/AEDT
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Byte Development · ABN 89 255 891 882</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href="https://github.com/SamJustSam-create/ByteDevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Source code <span aria-hidden="true">&nearr;</span>
            </a>
            <span>Built in Bendigo, Victoria</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
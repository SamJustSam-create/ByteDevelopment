import { Phone } from "lucide-react";

export default function StickyMobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-4 py-3">
        <a
          href="tel:+61493222932"
          className="inline-flex items-center justify-center gap-2 border border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          Call
        </a>
        <a
          href="/#contact"
          className="inline-flex items-center justify-center bg-primary px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/85"
        >
          Start a project
        </a>
      </div>
    </div>
  );
}
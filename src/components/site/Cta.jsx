import { cn } from "@/lib/utils";

export default function Cta({ href, children, variant = "primary", className, ...props }) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-none px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/85"
      : "border border-border text-foreground hover:border-primary hover:text-primary";

  return (
    <a href={href} className={cn(base, styles, className)} {...props}>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </a>
  );
}
export default function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="text-primary">{index}</span>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
export default function ScopeSection({ index, title, children }) {
  return (
    <section className="border-t border-border py-9 first:border-t-0 first:pt-0 md:py-11">
      <div className="grid gap-4 md:grid-cols-[164px_1fr] md:gap-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{index}</p>
          <p className="mt-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
            {title}
          </p>
        </div>
        <div className="min-w-0 max-w-2xl">{children}</div>
      </div>
    </section>
  );
}
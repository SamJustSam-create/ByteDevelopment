export default function ScopeClauses({ clauses = [], bullets = [] }) {
  return (
    <>
      {bullets.length > 0 && (
        <ul className="mb-6 flex flex-wrap gap-2">
          {bullets.map((item) => (
            <li
              key={item}
              className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <dl className="space-y-6">
        {clauses.map((clause) => (
          <div key={clause.title}>
            <dt className="font-heading text-sm font-semibold tracking-tight text-foreground">
              {clause.title}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {clause.body}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
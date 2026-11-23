import { useState } from "react";
import { base44 } from "@/api/base44Client";

const statuses = ["new", "contacted", "won", "closed"];

export function EnquiryRow({ enquiry, onStatusChange }) {
  const [status, setStatus] = useState(enquiry.status || "new");

  async function change(next) {
    setStatus(next);
    onStatusChange(enquiry.id, next);
    await base44.entities.Enquiry.update(enquiry.id, { status: next });
  }

  const date = enquiry.created_date
    ? new Date(enquiry.created_date).toLocaleString("en-AU", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Australia/Melbourne",
      })
    : "";

  return (
    <article className="border border-border bg-card p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-lg font-semibold tracking-tight">{enquiry.name}</h2>
          <a
            href={`mailto:${enquiry.email}`}
            className="mt-1 inline-block text-sm text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            {enquiry.email}
          </a>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            {date}
          </span>
          <div className="flex gap-1">
            {statuses.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => change(key)}
                className={`border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${
                  status === key
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {enquiry.message}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        <span>Need: {enquiry.service || "Not specified"}</span>
        <span>Budget: {enquiry.budget || "Not specified"}</span>
      </div>
    </article>
  );
}
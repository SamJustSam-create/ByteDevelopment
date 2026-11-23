import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";

const services = ["Web app or website", "Automation or integration", "Review or rescue"];
const budgets = ["Under $2k", "$2k - $5k", "$5k - $15k", "$15k or more"];

const field =
  "w-full rounded-none border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none";
const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground";

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (key) => (event) => setForm((f) => ({ ...f, [key]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Name, email and a line about the project are all I need.");
      return;
    }

    setSending(true);
    try {
      await base44.entities.Enquiry.create({
        name: form.name.trim(),
        email: form.email.trim(),
        service: form.service || "Not sure yet",
        budget: form.budget || "Not sure yet",
        message: form.message.trim(),
        status: "new",
      });
      setSent(true);
    } catch {
      setError("That didn't send. Email hello@bytedevelopment.com.au and I'll pick it up from there.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-primary/40 bg-card p-8">
        <div className="flex h-10 w-10 items-center justify-center border border-primary text-primary">
          <Check className="h-5 w-5" />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-semibold tracking-tight">
          Enquiry received.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          I&apos;ll read it properly and reply within one business day — usually with a
          couple of questions and a rough idea of what it would take.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={set("name")}
            className={field}
            placeholder="Jane Smith"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={set("email")}
            className={field}
            placeholder="jane@business.com.au"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            What you need
          </label>
          <select id="service" value={form.service} onChange={set("service")} className={field}>
            <option value="">Not sure yet</option>
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget (optional)
          </label>
          <select id="budget" value={form.budget} onChange={set("budget")} className={field}>
            <option value="">Not sure yet</option>
            {budgets.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          What are you trying to build, fix or automate?
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={set("message")}
          rows={5}
          className={field}
          placeholder="The thing that's eating your week, in plain language."
        />
      </div>

      {error && (
        <p className="mt-4 border-l-2 border-destructive pl-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          No pitch, no mailing list
        </p>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2.5 rounded-none bg-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60"
        >
          {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {sending ? "Sending" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
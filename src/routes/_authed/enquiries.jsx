import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { EnquiryRow } from "@/components/inbox/EnquiryRow";

export const Route = createFileRoute("/_authed/enquiries")({
  head: () => ({ meta: [{ title: "Enquiries — Byte Development" }] }),
  component: EnquiriesPage,
});

function EnquiriesPage() {
  const { user } = Route.useRouteContext();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let active = true;
    base44.entities.Enquiry.list({ sort: "-created_date", limit: 100 })
      .then((res) => {
        if (active) setEnquiries(res.items ?? res);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  function handleStatusChange(id, status) {
    setEnquiries((list) => list.map((item) => (item.id === id ? { ...item, status } : item)));
  }

  const shown = filter === "all" ? enquiries : enquiries.filter((e) => e.status === filter);
  const counts = enquiries.reduce((acc, e) => ({ ...acc, [e.status]: (acc[e.status] || 0) + 1 }), {});

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-4xl px-6 py-14 md:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Byte Development
        </p>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight">Enquiries</h1>

        {user?.role !== "admin" ? (
          <p className="mt-8 border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            Only an admin of this app can read enquiries. Ask the app owner to give your
            account the admin role.
          </p>
        ) : (
          <>
            <div className="mt-8 flex flex-wrap gap-2">
              {["all", "new", "contacted", "won", "closed"].map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                    filter === key
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {key}
                  {key !== "all" && counts[key] ? ` (${counts[key]})` : ""}
                </button>
              ))}
            </div>

            {loading ? (
              <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Loading…
              </p>
            ) : shown.length === 0 ? (
              <p className="mt-10 border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
                Nothing here yet. New enquiries from the site will appear in this list.
              </p>
            ) : (
              <div className="mt-8 space-y-4">
                {shown.map((enquiry) => (
                  <EnquiryRow
                    key={enquiry.id}
                    enquiry={enquiry}
                    onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
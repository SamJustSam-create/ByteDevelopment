import { cn } from "@/lib/utils";

export default function Section({ id, children, className }) {
  return (
    <section id={id} className={cn("border-t border-border", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        {children}
      </div>
    </section>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import BlueprintGrid from "@/components/site/BlueprintGrid";
import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Work from "@/components/site/Work";
import Process from "@/components/site/Process";
import About from "@/components/site/About";
import Faq from "@/components/site/Faq";
import ContactSection from "@/components/site/ContactSection";
import SiteFooter from "@/components/site/SiteFooter";
import StickyMobileCta from "@/components/site/StickyMobileCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Byte Development — Web apps, automations and internal tools for regional Victorian businesses",
      },
      {
        name: "description",
        content:
          "Byte Development is a one-person software studio in Bendigo, Victoria. Web apps, booking systems, dashboards and automations — small scopes, honest quotes, fixed prices, and code you can maintain after handover.",
      },
      { property: "og:title", content: "Byte Development — Freelance software development, Bendigo" },
      {
        property: "og:description",
        content:
          "Web apps, automations and internal tools for regional Victorian businesses. One developer, small scopes, fixed prices, no retainers.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen bg-background pb-20 text-foreground md:pb-0">
      <BlueprintGrid />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <Hero />
          <Services />
          <Work />
          <Process />
          <About />
          <Faq />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
      <StickyMobileCta />
    </div>
  );
}
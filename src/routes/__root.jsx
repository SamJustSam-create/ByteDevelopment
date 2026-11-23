import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/lib/AuthContext";
import { Base44Scripts } from "base44:document";
import appCss from "@/index.css?url";

export const Route = createRootRoute({
  // Per-page <title>/meta come from each route's head(); this is the shared base.
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Byte Development — Freelance software development, Bendigo" },
      {
        name: "description",
        content:
          "Web apps, automations and internal tools for regional Victorian businesses. One developer, small scopes, fixed prices, no retainers.",
      },
      {
        property: "og:image",
        content:
          "https://media.base44.com/images/public/6b0430f23ec3ead02bfa9aa1/de168420a9e66c5d8af5ea0dab859f0e_generated_image.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Byte Development — web apps, automations and internal tools for regional Victorian businesses",
      },
      { property: "og:site_name", content: "Byte Development" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://media.base44.com/images/public/6b0430f23ec3ead02bfa9aa1/de168420a9e66c5d8af5ea0dab859f0e_generated_image.png",
      },
    ],
    // No icon link: the platform adds the app's logo when serving.
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootComponent() {
  return (
    <AuthProvider>
      <Outlet />
      <Toaster />
    </AuthProvider>
  );
}

// The document. There is no index.html: the server renders <html> from here.
function RootDocument({ children }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      {/* data-react-root: the builder's preview bridge looks for #root and falls back to this. */}
      <body data-react-root="true">
        {children}
        <Base44Scripts />
        <Scripts />
      </body>
    </html>
  );
}
import { Image } from "@/components/ui/image";

const shots = [
  {
    src: "https://media.base44.com/images/public/6b0430f23ec3ead02bfa9aa1/c012e5ca54565c815d859951e2b23149_generated_image.png",
    alt: "000 Dispatch map view showing incidents, appliances and towns across regional Victoria",
    caption: "Dispatch map — incidents, units and real roads",
  },
  {
    src: "https://media.base44.com/images/public/6b0430f23ec3ead02bfa9aa1/e0786ba6e21e5c220754473173987a1a_generated_image.png",
    alt: "000 Dispatch appliance roster showing crew counts, capability tags and station stats",
    caption: "Appliance roster — crew, capabilities and station stats",
  },
];

export default function DispatchGallery() {
  return (
    <div className="border-t border-border p-4 md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {shots.map((shot) => (
          <figure key={shot.src} className="border border-border bg-background">
            <Image
              src={shot.src}
              alt={shot.alt}
              className="aspect-[16/10] w-full"
              fittingType="fill"
            />
            <figcaption className="border-t border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        Interface renders of the game dashboard
      </p>
    </div>
  );
}
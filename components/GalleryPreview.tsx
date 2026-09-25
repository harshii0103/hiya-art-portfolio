import Link from "next/link";
import { artworks } from "@/data/artworks";

export default function GalleryPreview() {
  const preview = artworks.slice(0, 3);

  return (
    <section className="bg-white">
      <Link
        href="/gallery"
        className="group block max-w-5xl mx-auto px-6 py-20"
      >
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform">
            Gallery
          </h2>
          <span className="text-sm text-neutral-400 group-hover:text-terracotta transition-colors">
            View →
          </span>
        </div>
        <p className="text-neutral-500 mb-8 max-w-md">
          A curated collection of artwork — mythology, portraits, skulls &amp;
          pencil studies.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {preview.map((art) => (
            <div key={art.id} className="aspect-square bg-neutral-100" data-cursor-text="View">
              <img
                src={art.image}
                alt={art.title}
                className="jharokha-frame w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}

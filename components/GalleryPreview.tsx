import Link from "next/link";
import { artworks } from "@/data/artworks";

export default function GalleryPreview() {
  const preview = artworks.slice(0, 3);

  return (
    <Link
      href="/gallery"
      className="group block border-b border-neutral-200 pb-16"
    >
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform">
          Gallery
        </h2>
        <span className="text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
          View →
        </span>
      </div>
      <p className="text-neutral-500 mb-6">
        A curated collection of artwork — mythology, portraits, skulls &amp;
        pencil studies.
      </p>
      <div className="grid grid-cols-3 gap-3">
        {preview.map((art) => (
          <div
            key={art.id}
            className="aspect-square rounded-lg overflow-hidden bg-neutral-100"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </Link>
  );
}

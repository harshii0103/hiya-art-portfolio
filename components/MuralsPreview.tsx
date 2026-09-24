import Link from "next/link";
import { murals } from "@/data/murals";

export default function MuralsPreview() {
  const preview = murals.slice(0, 2);

  return (
    <Link
      href="/murals"
      className="group block border-b border-neutral-200 pb-16"
    >
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform">
          Murals
        </h2>
        <span className="text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
          View →
        </span>
      </div>
      <p className="text-neutral-500 mb-6">Large-scale wall art.</p>
      <div className="grid grid-cols-2 gap-4">
        {preview.map((mural) => (
          <div key={mural.id} className="relative rounded-lg overflow-hidden">
            <div className="aspect-video bg-neutral-100">
              <img
                src={mural.image}
                alt={mural.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">{mural.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
}

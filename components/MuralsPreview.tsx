import Link from "next/link";
import { murals } from "@/data/murals";

export default function MuralsPreview() {
  const preview = murals.slice(0, 2);

  return (
    <section className="bg-[#19140f] text-white">
      <Link
        href="/murals"
        className="group block max-w-5xl mx-auto px-6 py-20"
      >
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform">
            Murals
          </h2>
          <span className="text-sm text-white/40 group-hover:text-terracotta transition-colors">
            View →
          </span>
        </div>
        <p className="text-white/60 mb-8">Large-scale wall art.</p>
        <div className="grid grid-cols-2 gap-4">
          {preview.map((mural) => (
            <div
              key={mural.id}
              className="relative rounded-lg overflow-hidden"
            >
              <div className="aspect-video bg-neutral-800">
                <img
                  src={mural.image}
                  alt={mural.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm font-medium">
                  {mural.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}

import { murals } from "@/data/murals";

export default function MuralsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-24">
      <p className="text-orange-500 text-sm tracking-widest uppercase mb-4">
        At Scale
      </p>
      <h1 className="text-4xl md:text-6xl font-serif mb-16">
        Wall Art &amp; Murals
      </h1>

      <div className="space-y-16">
        {murals.map((mural) => (
          <div key={mural.id}>
            {/* Photo with overlaid badges */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={mural.image}
                alt={mural.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-orange-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {mural.year}
                </span>
                <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {mural.location}
                </span>
              </div>
            </div>

            {/* Details card */}
            <div className="bg-neutral-900 rounded-b-lg p-8 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-serif mb-4">
                  {mural.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {mural.description}
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Client
                  </p>
                  <p className="text-white">{mural.client}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Format
                  </p>
                  <p className="text-white">{mural.format}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Medium
                  </p>
                  <p className="text-white">{mural.medium}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
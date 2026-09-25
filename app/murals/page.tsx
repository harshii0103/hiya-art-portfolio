"use client";

import { motion } from "framer-motion";
import { murals } from "@/data/murals";

export default function MuralsPage() {
  return (
    <div className="bg-black text-white">
      <div className="px-6 md:px-16 pt-24 pb-4">
        <p className="text-accent text-sm tracking-widest uppercase mb-4">
          At Scale
        </p>
        <h1 className="text-4xl md:text-6xl font-serif">
          Wall Art &amp; Murals
        </h1>
      </div>

      {murals.map((mural, i) => (
        <section
          key={mural.id}
          className="relative min-h-screen flex items-center px-6 md:px-16 py-20"
        >
          {/* Giant faint index number, behind everything */}
          <span
            aria-hidden
            className="pointer-events-none select-none absolute -top-4 md:top-0 right-4 md:right-16 font-serif text-[7rem] md:text-[14rem] leading-none text-white/5"
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          <div className="relative w-full grid md:grid-cols-5 gap-10 items-center">
            {/* Photo with overlaid badges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-lg overflow-hidden md:col-span-3"
            >
              <img
                src={mural.image}
                alt={mural.title}
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {mural.year}
                </span>
                <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {mural.location}
                </span>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-2"
            >
              <p className="font-serif text-accent text-xl mb-2">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="text-2xl md:text-4xl font-serif mb-4">
                {mural.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {mural.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
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
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
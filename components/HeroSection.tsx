"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// TODO: replace with Hiya's real artwork once she sends them
const bgImages = [
  "/placeholders/hero-1.jpeg",
  "/placeholders/hero-2.jpeg",
  "/placeholders/hero-3.jpeg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {/* Cross-fading background images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImages[current]})` }}
        />
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-7xl md:text-8xl text-white"
        >
          Hiya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl italic text-accent"
        >
          Once upon a brushstroke...
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <span className="text-lg">⌄</span>
        </motion.div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-10 right-10 flex gap-2 z-10">
        {bgImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-6 bg-accent" : "w-1.5 bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
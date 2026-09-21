"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { artworks, Artwork } from "@/data/artworks";

const categories = ["All", "Mythology", "Portraits", "Skulls", "Pencil Studies", "Misc", "Canvas"];

const sizeClasses: Record<Artwork["size"], string> = {
    large: "col-span-2 row-span-2",
    medium: "col-span-1 row-span-2",
    small: "col-span-1 row-span-1",
};

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selected, setSelected] = useState<Artwork | null>(null);

    const filtered =
        activeCategory === "All"
            ? artworks
            : artworks.filter((a) => a.category === activeCategory);

    return (
        <div className="min-h-screen bg-black text-white px-6 md:px-16 py-24">
            <h1 className="text-4xl md:text-5xl font-serif mb-8">Gallery</h1>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 text-sm uppercase tracking-wide border-b-2 transition-colors ${activeCategory === cat
                            ? "border-orange-500 text-orange-500"
                            : "border-transparent text-gray-400 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Bento grid */}
            <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-4 auto-rows-45 gap-4 grid-flow-dense"
            >
                <AnimatePresence>
                    {filtered.map((art) => (
                        <motion.div
                            layout
                            key={art.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelected(art)}
                            className={`relative overflow-hidden rounded-lg cursor-pointer group ${sizeClasses[art.size]}`}
                        >
                            <img
                                src={art.image}
                                alt={art.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                                <p className="text-sm">{art.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
                        onClick={() => setSelected(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            src={selected.image}
                            alt={selected.title}
                            className="max-h-[85vh] max-w-[90vw] rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
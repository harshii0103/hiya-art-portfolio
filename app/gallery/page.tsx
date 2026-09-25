"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { artworks, Artwork } from "@/data/artworks";

const categories = ["All", "Mythology", "Portraits", "Skulls", "Pencil Studies", "Misc", "Canvas"];

const sizeClasses: Record<Artwork["size"], string> = {
    large: "col-span-2 row-span-2",
    medium: "col-span-1 row-span-2",
    small: "col-span-1 row-span-1",
};

// Parent grid: controls the stagger timing for all children
const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
};

// Each card: only needs hidden/show states, parent handles the delay
const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

function TiltCard({
    art,
    sizeClass,
    onClick,
}: {
    art: Artwork;
    sizeClass: string;
    onClick: () => void;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-50, 50], [8, -8]);
    const rotateY = useTransform(x, [-50, 50], [-8, 8]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            layout
            variants={cardVariants}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={`relative overflow-hidden rounded-lg cursor-pointer group ${sizeClass}`}
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
    );
}

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

            {/* Category tabs with sliding underline */}
            <div className="relative flex flex-wrap gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`relative px-4 py-2 text-sm uppercase tracking-wide transition-colors ${activeCategory === cat
                            ? "text-accent"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {cat}
                        {activeCategory === cat && (
                            <motion.div
                                layoutId="tab-underline"
                                className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-accent"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Bento grid with stagger + 3D tilt cards */}
            <motion.div
                layout
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-4 auto-rows-45 gap-4 grid-flow-dense"
            >
                <AnimatePresence>
                    {filtered.map((art) => (
                        <TiltCard
                            key={art.id}
                            art={art}
                            sizeClass={sizeClasses[art.size]}
                            onClick={() => setSelected(art)}
                        />
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
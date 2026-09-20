"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "50+", label: "Commissions", color: "text-terracotta" },
    { value: "3+", label: "Murals", color: "text-[#d4a017]" },
    { value: "∞", label: "Brushstrokes", color: "text-[#3d5a99]" },
];

export default function AboutPage() {
    return (
        <section className="min-h-screen bg-[#19140f] text-white pt-32 pb-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                {/* Portrait image + role tag */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-4/5 w-full bg-neutral-800 rounded-lg overflow-hidden">
                        <img
                            src="/placeholders/portrait.jpeg"
                            alt="Hiya"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-md p-4">
                        <p className="text-xs tracking-widest uppercase text-white/50 mb-1">
                            Role
                        </p>
                        <p className="font-medium">President · The Fine Arts Society Of Maitreyi College</p>
                        <p className="text-sm text-white/60">University of Delhi</p>
                    </div>
                </motion.div>

                {/* Bio + stats */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    
                    <h1 className="font-serif text-4xl md:text-5xl mb-8">About the Artist</h1>

                    <div className="space-y-5 text-white/80 leading-relaxed">
                        <p>
                            I&apos;m Himanshi Bisht, an artist based in Delhi, and my
                            brushstrokes carry the weight of mythology and the lightness of
                            devotion. Known on Instagram as{" "}
                            <span className="text-terracotta">@arts.hiyaa</span>, I create
                            paintings that breathe — mythological figures, devotional
                            portraits, and raw pencil studies that feel both ancient and
                            alive.
                        </p>
                        <p>
                            As President of{" "}
                            <span className="font-medium text-white">The Fine Arts Society Of Maitreyi College</span>,
                            I balance leadership with my creative practice — channelling the
                            same energy that drives the college&apos;s cultural spirit into
                            large-scale murals, intimate canvas commissions, and handcrafted
                            crochet creations.
                        </p>
                        <p>
                            My past collaborations include a large-scale mural for{" "}
                            <span className="font-medium text-[#d4a017]">Colgate India</span>,
                            and my work spans gods, portraits, skulls, and a yin-yang cat —
                            because art, I believe, should feel like everything at once.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className={`font-serif text-3xl md:text-4xl ${stat.color}`}>
                                    {stat.value}
                                </p>
                                <p className="text-xs tracking-widest uppercase text-white/50 mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
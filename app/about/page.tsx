"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
    { value: "50+", label: "Commissions", color: "text-accent" },
    { value: "3+", label: "Murals", color: "text-[#D9A441]" },
    { value: "∞", label: "Brushstrokes", color: "text-[#F2EDE4]" },
];

export default function AboutPage() {
    return (
        <>
        <section className="min-h-screen bg-[#161616] text-white pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                {/* Portrait image + role tag */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-4/5 w-full bg-neutral-800">
                        <img
                            src="/placeholders/portrait.jpeg"
                            alt="Hiya"
                            className="jharokha-frame w-full h-full object-cover"
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
                            <span className="text-accent">@arts.hiyaa</span>, I create
                            paintings that breathe — mythological figures, devotional
                            portraits, and raw pencil studies that feel both ancient and
                            alive.
                        </p>
                        <p>
                            As President of{" "}
                            <span className="font-medium text-white">The Fine Arts Society Of Maitreyi College</span>,
                            I balance leadership with my creative practice — channelling the
                            same energy that drives the college&apos;s cultural spirit into
                            large-scale murals and intimate canvas commissions.
                        </p>
                        <p>
                            My past collaborations include a large-scale mural for{" "}
                            <span className="font-medium text-[#D9A441]">Colgate India</span>,
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
                                <p className="text-sm tracking-wide text-white/60 mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link
                            href="/gallery"
                            className="px-6 py-3 bg-accent text-white text-sm uppercase tracking-wide rounded-md hover:bg-accent/90 transition-colors"
                        >
                            View Gallery
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 border border-white/30 text-white text-sm uppercase tracking-wide rounded-md hover:bg-white/10 transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Philosophy statement — full-screen, bold typographic reveal */}
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-24">
            <div className="max-w-4xl text-center">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-8"
                >
                    The Philosophy
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight"
                >
                    I worship <span className="text-accent italic">through</span>{" "}
                    creation.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-10 text-white/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
                >
                    Every brushstroke carries the weight of mythology and the
                    lightness of devotion — art, for me, isn&apos;t separate from
                    prayer. It&apos;s the same act, held in different hands.
                </motion.p>
            </div>
        </section>
        </>
    );
}
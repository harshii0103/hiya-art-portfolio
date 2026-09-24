import Link from "next/link";
import GradientText from "./GradientText";

export default function AboutPreview() {
  return (
    <section className="bg-[#faf6f0]">
      <Link
        href="/about"
        className="group block max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="aspect-4/5 w-full max-w-sm mx-auto md:mx-0 bg-neutral-200">
          <img
            src="/placeholders/portrait.jpeg"
            alt="Hiya"
            className="jharokha-frame w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform">
              About
            </h2>
            <span className="text-sm text-neutral-400 group-hover:text-terracotta transition-colors">
              View →
            </span>
          </div>
          <p className="text-neutral-500 leading-relaxed">
            President of{" "}
            <GradientText colors={["#D4622B", "#f2a365", "#D4622B"]} animationSpeed={4}>
              The Fine Arts Society of Maitreyi College
            </GradientText>
            , University of Delhi. My work spans gods, portraits, skulls, and
            a yin-yang cat — because art should feel like everything at once.
          </p>
          <div className="flex gap-8 mt-6">
            <div>
              <p className="font-serif text-2xl text-terracotta">50+</p>
              <p className="text-xs text-neutral-400 uppercase tracking-wide">
                Commissions
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-terracotta">3+</p>
              <p className="text-xs text-neutral-400 uppercase tracking-wide">
                Murals
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

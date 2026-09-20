import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const sections = [
  { name: "About", href: "/about", desc: "Get to know Hiya" },
  { name: "Gallery", href: "/gallery", desc: "A curated collection of artwork" },
  { name: "Murals", href: "/murals", desc: "Large-scale wall art" },
  { name: "Crochet", href: "/crochet", desc: "Handmade crochet pieces" },
  { name: "Commissions", href: "/commissions", desc: "Custom work, made for you" },
  { name: "Contact", href: "/contact", desc: "Let's create something" },
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Section previews */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group block border-b border-neutral-200 pb-8"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform">
                {section.name}
              </h2>
              <span className="text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
                View →
              </span>
            </div>
            <p className="text-neutral-500 mt-2">{section.desc}</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-neutral-100 rounded-lg" />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
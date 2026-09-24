import Link from "next/link";
import { pricingTiers } from "@/data/commissions";

export default function CommissionsPreview() {
  return (
    <Link
      href="/commissions"
      className="group grid md:grid-cols-2 gap-8 items-center border-b border-neutral-200 pb-16"
    >
      <div>
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform">
            Commissions
          </h2>
          <span className="text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
            View →
          </span>
        </div>
        <p className="text-neutral-500 leading-relaxed mb-6">
          Custom work, made for you. Share a reference or a feeling, and
          Hiya translates it into a hand-painted canvas you&apos;ll keep
          forever.
        </p>
        <div className="space-y-2">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex justify-between text-sm border-b border-neutral-100 pb-2"
            >
              <span className="text-neutral-600">{tier.name}</span>
              <span className="text-terracotta font-medium">
                {tier.price}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-neutral-100">
        <img
          src="/placeholders/commission-painting.jpeg"
          alt="Commission example"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}

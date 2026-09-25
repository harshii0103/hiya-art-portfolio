"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CommissionBuilder from "@/components/CommissionBuilder";
import { pricingTiers, processSteps } from "@/data/commissions";

export default function CommissionsPage() {
  const [showBuilder, setShowBuilder] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-24">
      <p className="text-accent text-sm tracking-widest uppercase mb-4">
        Custom Work
      </p>
      <h1 className="text-4xl md:text-6xl font-serif mb-16">
        Commissions &amp; Orders
      </h1>

      <div className="grid md:grid-cols-2 gap-16">
        <BeforeAfterSlider
          beforeImage="/placeholders/commission-sketch.jpeg"
          afterImage="/placeholders/commission-painting.jpeg"
          beforeLabel="Sketch"
          afterLabel="Painting"
        />

        <div>
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            From sketch to soul
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10">
            Every commission begins with a conversation. Share a reference, a
            feeling, an idea — and Hiya translates it into a hand-painted
            canvas that you&apos;ll keep forever. Whether it&apos;s a family
            portrait, a deity painting, or something entirely personal.
          </p>

          <div className="space-y-8 mb-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <span className="text-accent font-serif text-4xl md:text-5xl leading-none">
                  {step.number}
                </span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-neutral-900 rounded-lg p-6 mb-8">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
              Starting Prices
            </p>
            <div className="space-y-4">
              {pricingTiers.map((tier) => (
                <div key={tier.name} className="flex justify-between">
                  <span>{tier.name}</span>
                  <span className="text-accent font-medium">
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowBuilder(true)}
            className="bg-accent hover:bg-accent/90 transition-colors text-white px-6 py-3 rounded-full"
          >
            Start Your Commission →
          </button>
        </div>
      </div>

      {showBuilder && (
        <CommissionBuilder onClose={() => setShowBuilder(false)} />
      )}
    </div>
  );
}
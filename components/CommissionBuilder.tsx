"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919013241865"; // ⚠️ Replace with Hiya's actual number (country code + number, no + or spaces)

const commissionTypes = [
  { id: "portrait", label: "Portrait (A4)", price: "₹800+" },
  { id: "devotional", label: "Devotional Painting (Canvas)", price: "₹1,500+" },
  { id: "large", label: "Large Canvas (2×3 ft)", price: "₹3,000+" },
  { id: "mural", label: "Mural Inquiry", price: "Custom Quote" },
];

type Props = {
  onClose: () => void;
};

export default function CommissionBuilder({ onClose }: Props) {
  const [step, setStep] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [name, setName] = useState("");

  const totalSteps = 3;

  const selectedTypeLabel = commissionTypes.find(
    (t) => t.id === selectedType
  )?.label;

  const handleNext = () => setStep((s) => Math.min(s + 1, totalSteps));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const buildMessage = () => {
    return encodeURIComponent(
      `Hi Hiya! I'd like to commission: ${selectedTypeLabel}\n\n` +
        `My vision: ${details || "Not specified yet"}\n` +
        `Preferred deadline: ${deadline || "Flexible"}\n` +
        `Name: ${name || "Not shared"}`
    );
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage()}`;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-neutral-900 text-white rounded-2xl w-full max-w-lg p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          {Array.from({ length: totalSteps + 1 }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i <= step ? "bg-accent" : "bg-neutral-700"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-2xl font-serif mb-6">
                What are you looking for?
              </h3>
              <div className="space-y-3">
                {commissionTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full flex justify-between items-center px-4 py-3 rounded-lg border transition-colors ${
                      selectedType === type.id
                        ? "border-accent bg-accent/10"
                        : "border-neutral-700 hover:border-neutral-500"
                    }`}
                  >
                    <span>{type.label}</span>
                    <span className="text-accent text-sm">
                      {type.price}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-2xl font-serif mb-6">Tell us your vision</h3>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe what you have in mind — a reference photo, a feeling, a style..."
                rows={4}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 mb-4 focus:outline-none focus:border-accent"
              />
              <label className="text-sm text-gray-400 mb-1 block">
                Preferred deadline (optional)
              </label>
              <input
                type="text"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="e.g. within 2 weeks"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 focus:outline-none focus:border-accent"
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-2xl font-serif mb-6">
                What should Hiya call you?
              </h3>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 focus:outline-none focus:border-accent"
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-2xl font-serif mb-4">Ready to send!</h3>
              <div className="bg-neutral-800 rounded-lg p-4 mb-6 text-sm text-gray-300 space-y-1">
                <p>
                  <span className="text-gray-500">Type:</span>{" "}
                  {selectedTypeLabel}
                </p>
                <p>
                  <span className="text-gray-500">Vision:</span>{" "}
                  {details || "—"}
                </p>
                <p>
                  <span className="text-gray-500">Deadline:</span>{" "}
                  {deadline || "Flexible"}
                </p>
                <p>
                  <span className="text-gray-500">Name:</span> {name || "—"}
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-3 rounded-full mb-3"
              >
                💬 Send via WhatsApp
              </a>
              <a
                href="https://instagram.com/arts.hiyaa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border border-neutral-600 hover:border-white transition-colors text-white px-6 py-3 rounded-full"
              >
                📷 Send via Instagram DM instead
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {step < 3 && (
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="text-gray-400 hover:text-white disabled:opacity-0"
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={step === 0 && !selectedType}
              className="bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-white px-6 py-2 rounded-full"
            >
              Next →
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
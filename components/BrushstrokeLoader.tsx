"use client";

import React, { useEffect, useState } from "react";

export default function BrushstrokeLoader() {
  const [visible, setVisible] = useState(true);
  const [wipe, setWipe] = useState(false);

  useEffect(() => {
    const wipeTimer = setTimeout(() => setWipe(true), 1300);
    const removeTimer = setTimeout(() => setVisible(false), 2300);

    return () => {
      clearTimeout(wipeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  const stripeCount = 6;
  const name = "Hiya";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        pointerEvents: wipe ? "none" : "auto",
      }}
    >
      {/* Google Font - brush-script style */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@400&family=Caveat:wght@600&display=swap');

        @keyframes letterIn {
          from { opacity: 0; transform: translateY(20px) rotate(-3deg); }
          to { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
      `}</style>

      {Array.from({ length: stripeCount }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            background: "#161616",
            transform: wipe ? "translateY(-100%)" : "translateY(0%)",
            transition: `transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)`,
            transitionDelay: `${i * 0.06}s`,
          }}
        />
      ))}

      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          opacity: wipe ? 0 : 1,
          transform: wipe ? "scale(0.95)" : "scale(1)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <span style={{ display: "inline-flex" }}>
          {name.split("").map((letter, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Caveat', cursive",
                fontWeight: 600,
                fontSize: "5rem",
                color: "#D4622B",
                display: "inline-block",
                opacity: 0,
                animation: `letterIn 0.4s ease forwards`,
                animationDelay: `${0.15 + i * 0.12}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
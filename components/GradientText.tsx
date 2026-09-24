import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  animationSpeed?: number;
}

export default function GradientText({
  children,
  colors = ["#D4622B", "#f2a365", "#D4622B"],
  animationSpeed = 4,
}: GradientTextProps) {
  return (
    <span
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: `gradientShift ${animationSpeed}s linear infinite`,
      }}
    >
      {children}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </span>
  );
}
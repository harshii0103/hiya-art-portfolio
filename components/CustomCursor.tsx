"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // touch devices (mobile) pe custom cursor nahi chahiye
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // check karo mouse kisi "data-cursor-text" wale element ke upar hai kya
      const target = e.target as HTMLElement;
      const hoverEl = target.closest("[data-cursor-text]") as HTMLElement | null;

      if (hoverEl) {
        setText(hoverEl.getAttribute("data-cursor-text") || "");
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
        width: visible ? "90px" : "0px",
        height: visible ? "90px" : "0px",
        borderRadius: "50%",
        background: "#D4622B",
        color: "#161616",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.8rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        pointerEvents: "none",
        zIndex: 10000,
        opacity: visible ? 1 : 0,
        transition: "width 0.25s ease, height 0.25s ease, opacity 0.25s ease",
        mixBlendMode: "difference",
      }}
    >
      {text}
    </div>
  );
}
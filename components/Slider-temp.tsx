"use client";

import { useState, useRef, useCallback } from "react";

type Props = {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
}: Props) {
  const [position, setPosition] = useState(50); // % from left
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setPosition(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) updatePosition(e.touches[0].clientX);
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative w-full aspect-4/3 rounded-lg overflow-hidden select-none cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Base layer: "after" image, full width */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <span className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
          {afterLabel}
        </span>

        {/* Top layer: "before" image, clipped to slider position */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 h-full object-cover"
            style={{ width: containerRef.current?.offsetWidth || "100%" }}
            draggable={false}
          />
          <span className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
            {beforeLabel}
          </span>
        </div>

        {/* Drag handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span>↔</span>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-3">
        Drag the handle to reveal the transformation
      </p>
    </div>
  );
}
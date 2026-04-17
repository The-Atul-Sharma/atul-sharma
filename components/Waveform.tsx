"use client";

import { useEffect, useState } from "react";

export function Waveform({
  bars = 14,
  className = "",
}: {
  bars?: number;
  className?: string;
}) {
  const [heights, setHeights] = useState<number[]>(() =>
    Array.from({ length: bars }, (_, i) => 30 + ((i * 37) % 60)),
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return;

    setHeights(Array.from({ length: bars }, () => 30 + Math.random() * 60));

    const id = setInterval(() => {
      setHeights((prev) =>
        prev.map((h) => {
          const drift = (Math.random() - 0.5) * 55;
          const next = h + drift;
          return Math.max(18, Math.min(100, next));
        }),
      );
    }, 180);

    return () => clearInterval(id);
  }, []);

  return (
    <span
      aria-hidden
      className={`inline-flex items-center gap-[2px] ${className}`}
    >
      {heights.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%` }}
          className="w-[2px] rounded-full bg-gradient-to-t from-[var(--color-accent-strong)] via-[var(--color-accent)] to-[var(--color-accent-violet)] transition-[height] duration-200 ease-out"
        />
      ))}
    </span>
  );
}

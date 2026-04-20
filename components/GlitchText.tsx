"use client";

import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*<>/\\|";

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export function GlitchText({
  text,
  className = "",
  durationMs = 900,
  tickMs = 40,
}: {
  text: string;
  className?: string;
  durationMs?: number;
  tickMs?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const run = () => {
      if (cancelled) return;
      if (prefersReduced) {
        setDisplay(text);
        return;
      }

      setDisplay(
        text
          .split("")
          .map((c) => (c === " " ? " " : randomGlyph()))
          .join(""),
      );

      const start = performance.now();

      const tick = () => {
        if (cancelled) return;
        const elapsed = performance.now() - start;
        const progress = Math.min(elapsed / durationMs, 1);
        const settled = Math.floor(text.length * progress);

        const next = text
          .split("")
          .map((c, i) => {
            if (c === " ") return " ";
            if (i < settled) return c;
            return randomGlyph();
          })
          .join("");

        setDisplay(next);

        if (progress < 1) {
          timer = setTimeout(tick, tickMs);
        } else {
          setDisplay(text);
        }
      };

      timer = setTimeout(tick, tickMs);
    };

    queueMicrotask(run);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [text, durationMs, tickMs]);

  return (
    <span
      aria-label={text}
      className={className}
      style={{ fontVariantLigatures: "none" }}
    >
      {display}
    </span>
  );
}

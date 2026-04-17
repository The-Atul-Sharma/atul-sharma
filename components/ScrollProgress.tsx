"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    mass: 0.3,
  });

  const percent = useTransform(scaleX, (v) =>
    Math.round(Math.max(0, Math.min(1, v)) * 100),
  );

  const [label, setLabel] = useState("00");
  useEffect(() => {
    return percent.on("change", (v) => {
      setLabel(String(v).padStart(2, "0"));
    });
  }, [percent]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--color-accent-strong)] via-[var(--color-accent-violet)] to-[var(--color-accent-pink)]"
      />
      <div
        aria-hidden
        className="fixed right-4 top-20 z-[59] hidden select-none rounded-md border border-[var(--color-border)] bg-[var(--color-surface)]/75 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] backdrop-blur md:block"
      >
        <span className="text-[var(--color-accent)]">{label}</span>
        <span className="mx-1 text-[var(--color-fg-subtle)]">/</span>
        <span>100</span>
      </div>
    </>
  );
}

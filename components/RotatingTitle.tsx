"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function RotatingTitle({
  items,
  intervalMs = 2600,
  className = "",
}: {
  items: string[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  return (
    <span
      className={`relative inline-flex h-[1.2em] overflow-hidden align-bottom ${className}`}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

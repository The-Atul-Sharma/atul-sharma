"use client";

import { motion } from "motion/react";

type SectionDividerProps = {
  chapter: string;
  label: string;
};

export function SectionDivider({ chapter, label }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className="relative mx-auto my-0 w-full max-w-5xl px-6"
    >
      <div className="relative flex items-center gap-4">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-px flex-1 origin-right bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-[var(--color-accent)]/60"
        />
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] backdrop-blur"
        >
          <span className="h-1 w-1 rounded-full bg-[var(--color-accent)] shadow-[0_0_6px_var(--color-accent)]" />
          <span className="text-[var(--color-accent)]">ch.{chapter}</span>
          <span className="text-[var(--color-fg-subtle)]">/</span>
          <span>{label}</span>
        </motion.span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-px flex-1 origin-left bg-gradient-to-l from-transparent via-[var(--color-border-strong)] to-[var(--color-accent-violet)]/60"
        />
      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  command: string;
  title: string;
  description?: ReactNode;
  id?: string;
};

export function SectionHeading({
  command,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <motion.header
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 md:mb-14"
    >
      <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
        <span className="h-px w-6 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
        <span>
          <span className="text-[var(--color-accent)]">$</span> {command}
        </span>
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)] md:text-4xl">
        <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
          {description}
        </p>
      ) : null}
    </motion.header>
  );
}

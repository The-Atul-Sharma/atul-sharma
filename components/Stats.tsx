"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/siteConfig";

export function Stats() {
  return (
    <motion.dl
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4"
    >
      {siteConfig.stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-1 bg-[var(--color-bg)] px-4 py-4"
        >
          <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
            {stat.label}
          </dt>
          <dd className="text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
            {stat.value}
          </dd>
        </div>
      ))}
    </motion.dl>
  );
}

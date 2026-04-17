"use client";

import { motion } from "motion/react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";

export function About() {
  return (
    <Section id="intro">
      <SectionHeading command="cat about.md" title="A short introduction." />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-10 md:grid-cols-[1.6fr_1fr]"
      >
        <div className="space-y-5 text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]">
          <p>{siteConfig.bio.long}</p>
        </div>

        <aside className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
            &gt; profile
          </p>
          <dl className="mt-4 space-y-3 text-sm">
            <Row label="Location" value={siteConfig.location} />
            <Row label="Role" value={siteConfig.title} />
            <Row label="Status" value={siteConfig.availability} />
            <Row
              label="Email"
              value={
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[var(--color-fg)] hover:text-[var(--color-accent)]"
                >
                  {siteConfig.email}
                </a>
              }
            />
          </dl>
        </aside>
      </motion.div>
    </Section>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-dashed border-[var(--color-border)] pb-3 last:border-none last:pb-0">
      <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]">
        {label}
      </dt>
      <dd className="text-right text-[var(--color-fg)]">{value}</dd>
    </div>
  );
}

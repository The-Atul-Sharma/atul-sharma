"use client";

import { motion } from "motion/react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        command="cat skills.yml"
        title="Tools I reach for."
        description="The stack I use day-to-day, plus the practices I bring to a team."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {siteConfig.skills.map((group, idx) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
              &gt; {group.label.toLowerCase()}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-1 text-[13px] text-[var(--color-fg)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

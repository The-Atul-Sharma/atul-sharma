"use client";

import { motion } from "motion/react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";

export function Experience() {
  return (
    <Section id="work">
      <SectionHeading
        command="git log --experience"
        title="The journey so far."
        description="A timeline of the places I've worked and the problems I've worked on. Most recent first."
      />

      <ol className="relative border-l border-[var(--color-border)] pl-6 md:pl-10">
        {siteConfig.experience.map((item, idx) => (
          <motion.li
            key={`${item.company}-${item.year}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative pb-12 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center md:-left-[49px]"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />
            </span>

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
              {item.year}
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              {item.role}{" "}
              <span className="text-[var(--color-fg-muted)]">
                · {item.company}
              </span>
            </h3>

            {item.location ? (
              <p className="mt-1 font-mono text-xs text-[var(--color-fg-subtle)]">
                {item.location}
              </p>
            ) : null}

            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              {item.description}
            </p>

            {item.impact && item.impact.length > 0 ? (
              <ul className="mt-4 space-y-1.5 text-[14px] text-[var(--color-fg-muted)]">
                {item.impact.map((line) => (
                  <li
                    key={line}
                    className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-px before:w-3 before:bg-[var(--color-border-strong)]"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            ) : null}

            {item.stack && item.stack.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-fg-muted)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

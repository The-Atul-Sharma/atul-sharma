"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/siteConfig";

export function SideRail() {
  const [active, setActive] = useState(siteConfig.nav[0]?.href ?? "#top");

  useEffect(() => {
    const ids = siteConfig.nav.map((n) => n.href.replace(/^#/, ""));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.target.getBoundingClientRect().top -
                b.target.getBoundingClientRect().top,
          );
        const top = visible[0];
        if (top) setActive(`#${top.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Section index"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 lg:flex"
    >
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-2 backdrop-blur-md">
        <div className="mb-2 flex items-center gap-1.5 px-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
          <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--color-accent)] shadow-[0_0_6px_var(--color-accent)]" />
          idx
        </div>
        <ol className="flex flex-col gap-0.5">
          {siteConfig.nav.map((item, i) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`group relative flex items-center gap-2 rounded-md px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                    isActive
                      ? "bg-[var(--color-bg-elevated)] text-[var(--color-fg)]"
                      : "text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]"
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-sm border text-[9px] ${
                      isActive
                        ? "border-[var(--color-accent)] text-[var(--color-accent)] shadow-[0_0_8px_color-mix(in_oklab,var(--color-accent)_50%,transparent)]"
                        : "border-[var(--color-border)] text-[var(--color-fg-subtle)]"
                    }`}
                  >
                    {String(i).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="side-rail-indicator"
                      aria-hidden
                      className="absolute right-1 h-1 w-1 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </motion.aside>
  );
}

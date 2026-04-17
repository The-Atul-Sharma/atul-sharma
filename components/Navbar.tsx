"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg)_80%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm text-[var(--color-fg)]"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[11px] font-semibold tracking-wide text-[var(--color-accent)]">
            {siteConfig.initials}
          </span>
          <span className="hidden text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-fg)] sm:inline">
            {siteConfig.name.toLowerCase().replace(" ", "_")}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.resumeUrl}
            className="hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-border-strong)] sm:inline-flex"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--color-fg)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-fg)] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-[var(--color-fg-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2 border-t border-[var(--color-border)] pt-3">
                <a
                  href={siteConfig.resumeUrl}
                  className="flex-1 rounded-md border border-[var(--color-border)] px-3 py-2 text-center text-sm text-[var(--color-fg)]"
                >
                  Résumé
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-md bg-[var(--color-fg)] px-3 py-2 text-center text-sm text-[var(--color-bg)]"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}

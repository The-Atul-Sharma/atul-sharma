"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Search, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { openCommandPalette } from "./CommandPalette";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [clock, setClock] = useState<string>("--:--:--");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setClock(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg)_78%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group relative flex items-center gap-2 font-mono text-sm text-[var(--color-fg)]"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[11px] font-semibold tracking-wide text-[var(--color-accent)]">
            <span
              aria-hidden
              className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_50%_120%,color-mix(in_oklab,var(--color-accent)_60%,transparent),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative">{siteConfig.initials}</span>
          </span>
          <span className="hidden items-center gap-2 sm:flex">
            <span className="text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-fg)]">
              {siteConfig.name.toLowerCase().replace(" ", "_")}
            </span>
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
          <span
            aria-hidden
            className="hidden select-none items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] backdrop-blur lg:inline-flex"
          >
            <span className="h-1 w-1 rounded-full bg-[var(--color-accent)] shadow-[0_0_6px_var(--color-accent)]" />
            <span>{clock}</span>
            <span className="text-[var(--color-fg-subtle)]">utc</span>
          </span>

          <button
            type="button"
            onClick={openCommandPalette}
            className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)] sm:inline-flex"
            aria-label="Open command palette"
          >
            <Search size={13} />
            <span>Search</span>
            <span className="ml-1 inline-flex items-center gap-0.5 font-mono text-[10px] text-[var(--color-fg-subtle)]">
              <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-1 py-0.5">
                ⌘
              </kbd>
              <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-1 py-0.5">
                K
              </kbd>
            </span>
          </button>
          <a
            href="#contact"
            className="relative hidden overflow-hidden rounded-full bg-[var(--color-fg)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 hover:translate-x-full" />
            <span className="relative">Get in touch</span>
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

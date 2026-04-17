import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
            &gt; eof
          </p>
          <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
            Built by {siteConfig.name}. © {year}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {siteConfig.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

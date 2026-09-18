"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Toolkit", href: "/#toolkit" },
  { label: "Journey", href: "/#journey" },
  { label: "Bench", href: "/#bench" },
  { label: "Record", href: "/#record" },
  { label: "Résumé", href: "/resume" },
];

function isCurrent(pathname: string, href: string) {
  if (href.includes("#")) return false;
  const clean = href.endsWith("/") ? href : `${href}/`;
  return pathname === href || pathname === clean;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="focus-on-light no-print sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 text-sm font-medium tracking-tight text-ink"
        >
          Husnain Mustafa
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {links.map((l) => {
            const active = isCurrent(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className="group relative py-2"
              >
                <span
                  className={`transition-opacity duration-500 ${
                    active ? "text-ink opacity-100" : "text-muted opacity-80 group-hover:opacity-100"
                  }`}
                >
                  {l.label}
                </span>
                <span
                  className={`absolute inset-x-0 bottom-0.5 h-px origin-left bg-accent transition-transform duration-700 ease-out ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-px active:translate-y-0 md:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:border-line-strong md:hidden"
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-sm text-ink last:border-b-0"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-sm font-medium text-paper"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </nav>
      )}
    </header>
  );
}

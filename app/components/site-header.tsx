"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Method", href: "/#method" },
  { label: "Record", href: "/record" },
  { label: "Bench", href: "/bench" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 px-6">
        <Link href="/" className="shrink-0 text-sm font-medium tracking-tight text-ink">
          Husnain Mustafa
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => {
            const isRoute = !l.href.includes("#");
            const active = isRoute && pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-sm font-medium text-bg transition-transform hover:-translate-y-px active:translate-y-0"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </header>
  );
}

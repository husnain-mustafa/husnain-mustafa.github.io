import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: "Page not found | Husnain Mustafa",
  description:
    "That address does not match anything on this site. Selected work, the toolkit, and the resume are one click away.",
  robots: { index: false, follow: true },
};

const routes = [
  {
    href: "/#work",
    label: "Selected work",
    detail: "The Report Valuation Workspace and three earlier builds.",
  },
  {
    href: "/#toolkit",
    label: "Toolkit",
    detail: "What I use to model, ship, build, and report.",
  },
  {
    href: "/resume",
    label: "Resume",
    detail: "The printable, complete version of everything here.",
  },
];

export default function NotFound() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-bg text-ink antialiased">
      <SiteHeader />

      <main
        id="main"
        className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col justify-center px-6 pb-24 pt-16 sm:pt-20 lg:pt-24"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-terra-deep">
          404
        </span>
        <h1 className="mt-5 max-w-[20ch] text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
          That page is not here.
        </h1>
        <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted">
          The link may be out of date, or the address may have a typo in it. One of
          these three is usually what people were after.
        </p>

        <Link
          href="/"
          className="group mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-px active:translate-y-0"
        >
          Back to the deck
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        </Link>

        <ul className="mt-12 grid grid-cols-1 gap-x-10 border-t border-line sm:grid-cols-3">
          {routes.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="group flex h-full flex-col border-b border-line py-5 sm:border-b-0"
              >
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-terra">
                  {r.label}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
                <span className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {r.detail}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}

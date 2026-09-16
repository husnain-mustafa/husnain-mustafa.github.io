import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { RecordThread } from "./record-thread";
import { RouteMap } from "./route-map";

export const metadata: Metadata = {
  title: "Record | Husnain Mustafa",
  description:
    "A short record of the moves, the work, and the things outside it — from Lahore to Warsaw, from network dashboards to production AI agents.",
};

export default function RecordPage() {
  return (
    <div className="relative min-h-screen bg-bg text-ink antialiased">
      <SiteHeader />

      <main className="mx-auto max-w-[1120px] px-6 pb-24 pt-20 lg:pt-24">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] text-faint">01</span>
          <h1 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">Record</h1>
        </div>
        <p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-muted">
          A short thread of the moves and the work. The rest — music, games, the kitchen, and a
          camera — sits underneath it and is updated when there is something worth saying.
        </p>

        <div className="mt-10">
          <RouteMap />
        </div>

        <div className="mt-14">
          <RecordThread />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

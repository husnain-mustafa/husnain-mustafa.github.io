import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-7">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-faint">01</span>
              <h1 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">Record</h1>
            </div>
            <p className="mt-6 max-w-[58ch] text-sm leading-relaxed text-muted">
              A short thread of the moves and the work. The rest — music, games, the kitchen, and a
              camera — sits underneath it and is updated when there is something worth saying.
            </p>
            <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-muted">
              Born in Lahore, working in Warsaw. The line below is the whole of it.
            </p>
          </div>

          <figure className="lg:col-span-5">
            <Image
              src="/portrait.jpg"
              alt="Husnain Mustafa"
              width={1367}
              height={2048}
              priority
              sizes="(min-width: 1024px) 440px, 100vw"
              className="aspect-[4/5] w-full rounded-lg border border-line object-cover object-top"
            />
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              Warsaw, Poland
            </figcaption>
          </figure>
        </div>

        <div className="mt-14">
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

import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Bench | Husnain Mustafa",
  description:
    "Side projects and experiments — clustering, NLP, time-series forecasting, Spark, and dashboards.",
};

const GITHUB = "https://github.com/husnain-mustafa";

const experiments = [
  {
    name: "Clustering Spotify Liked Songs",
    kind: "Unsupervised learning",
    about:
      "Clustering techniques applied to my own Spotify liked-songs library, with diagnostic tests and visualisations to judge how well the clusters actually hold up.",
    stack: ["Python", "scikit-learn", "Jupyter"],
    repo: `${GITHUB}/Clustering_Spotify_Liked_Songs`,
  },
  {
    name: "Sentiments of Friends",
    kind: "Sentiment analysis",
    about:
      "A sentiment analysis across the FRIENDS transcripts using several R text libraries, with ggplot2 doing the explaining.",
    stack: ["R", "ggplot2"],
    repo: `${GITHUB}/Sentiments_of_Friends`,
  },
  {
    name: "Oscars Acceptance Speech Analysis",
    kind: "Text mining",
    about:
      "Text mining across every recorded Academy Awards acceptance speech, looking at what winners actually say when they get there.",
    stack: ["Python", "NLP", "Jupyter"],
    repo: `${GITHUB}/Oscars_Acceptance_Speech_Analysis`,
  },
  {
    name: "Avocado Price Forecasting",
    kind: "Time series",
    about:
      "Translated a published Python price-forecasting study into R, reproduced it, then extended the ARIMA and SARIMA models to see what changed.",
    stack: ["R", "ARIMA", "SARIMA"],
    repo: `${GITHUB}/Avocado-Picing-Foecast-in-R`,
  },
  {
    name: "Wearable Data Dashboard",
    kind: "Dashboard",
    about:
      "A Shiny dashboard in R that handles the preliminary analysis of wearable-device data before anyone opens a notebook.",
    stack: ["R", "Shiny"],
    repo: `${GITHUB}/Wearable_Data_Dashboard`,
  },
  {
    name: "SUPPORT2 Classification",
    kind: "Supervised learning",
    about:
      "Classification on the SUPPORT2 dataset, using physiological, demographic, and disease-severity data to estimate 2- and 6-month survival outcomes.",
    stack: ["Python", "scikit-learn", "Jupyter"],
    repo: `${GITHUB}/SUPPORT2_Classification`,
  },
];

export default function BenchPage() {
  return (
    <div className="relative min-h-screen bg-bg text-ink antialiased">
      <SiteHeader />

      <main className="mx-auto max-w-[1120px] px-6 pb-24 pt-20 lg:pt-24">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] text-faint">02</span>
          <h1 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">Bench</h1>
        </div>
        <p className="mt-6 max-w-[64ch] text-sm leading-relaxed text-muted">
          Small things built for the sake of a question. Most of them start as curiosity and end as
          a lesson in something adjacent — and a few of them turned into the work.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((e) => (
            <article key={e.name} className="flex flex-col border-t border-line pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                {e.kind}
              </span>
              <h2 className="mt-4 text-base font-medium leading-snug tracking-tight text-ink">
                {e.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{e.about}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] text-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={e.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
              >
                Repository
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="max-w-[56ch] text-sm text-muted">
            More half-finished ideas and coursework live on GitHub.
          </p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/[0.06]"
          >
            All repositories
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

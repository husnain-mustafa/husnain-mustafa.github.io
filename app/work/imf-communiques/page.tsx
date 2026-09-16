import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import {
  AuthorityComparison,
  DictionaryBars,
  SentimentTimeline,
  TopicTimeline,
} from "./charts";

export const metadata: Metadata = {
  title: "IMF Text Analysis — the effect of dictionary balance | Husnain Mustafa",
  description:
    "Master's thesis finding: how dictionary balance decides which topics text analysis can detect — across 173 IMF communiqués and 564 constituency statements.",
};

const meta = [
  ["Role", "Master's thesis"],
  ["Institution", "University of Warsaw"],
  ["Supervisor", "Dr. Karolina Kuligowska"],
  ["Year", "April 2025"],
  ["Corpus", "173 communiqués · 564 constituency statements · 25 constituencies"],
];

export default function ImfCaseStudy() {
  return (
    <div className="relative min-h-screen bg-bg text-ink antialiased">
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-[1120px] px-6 pb-24 pt-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
          Work
        </Link>

        <header className="mt-10 border-t border-line pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            Case study
          </span>
          <h1 className="mt-5 max-w-[22ch] text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
            What text analysis can see depends on the dictionary you hand it
          </h1>
          <p className="mt-6 max-w-[72ch] text-base leading-relaxed text-muted">
            Two decades of IMF communication, scored twice with the same pipeline. One variable
            changed: dictionary balance. Under the unbalanced dictionary, Debt scored{" "}
            <span className="text-ink">exactly zero for every single country</span>, and every
            nation collapsed into the same crisis-and-risk signature. The balanced dictionary is
            what makes them distinguishable at all.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-7 lg:grid-cols-5">
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{k}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            Python · dictionary-based topic scoring · VADER · scikit-learn LDA
          </p>
        </header>

        <section className="mt-16">
          <h2 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">The question</h2>
          <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-muted">
            Named-entity and topical dictionaries are rarely balanced. A lexicon of finance terms
            carries far more words for crisis and risk than for reform or climate, and term counts
            per topic run into the hundreds versus a handful. The thesis asks an uncomfortable
            question of a method that economists increasingly rely on: if the dictionary is skewed,
            is the model describing the world, or describing the dictionary?
          </p>
          <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-muted">
            It builds directly on the IMF working paper{" "}
            <span className="text-ink">How Have IMF Priorities Evolved? A Text Mining Approach</span>{" "}
            (Medina, Gamba, Anderson et al., 2021), replicates that work with its unbalanced
            lexicons, and then re-scores the same corpus with newly constructed balanced
            dictionaries: <span className="text-ink">25 terms per topic</span>, drawn from recent IMF
            language.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
            Finding 1 — the collapse
          </h2>
          <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-muted">
            Across all 173 communiqués, the balanced dictionary produces a plausible spread of
            topics. The unbalanced one does not narrow so much as collapse: Crisis and Risk absorb
            88.5% of all topic assignments, Economic Growth falls from 47.8% to 4.4%, and Debt goes
            to zero. The unbalanced model is not wrong about the communiqués. It is blind to most of
            them.
          </p>
          <DictionaryBars />
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
            Finding 2 — the unbalanced dictionary erases every country
          </h2>
          <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-muted">
            This is where it stops being abstract. Scored with the balanced dictionary, each
            authority has a recognisable profile: OPEC is 71% Economic Growth, China 51%, India 55%,
            Germany splits evenly between Growth and Debt, Japan carries the highest Crisis
            attention of the group at 25%. Scored with the unbalanced dictionary, all six become the
            same country. Crisis lands between 38% and 57% for every one of them, Risk between 32%
            and 42%, and Debt is <span className="text-ink">0.00 across the board</span>. A method in
            this state cannot support cross-country comparison at all — it will find a crisis
            everywhere it looks.
          </p>
          <AuthorityComparison />
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
            Finding 3 — what the balanced dictionary reveals
          </h2>
          <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-muted">
            With the dictionary balanced, the corpus reads like an economic history. Crisis spikes to
            34% in 2009, exactly where the financial crisis sits. Debt collapses to 3% during the
            same window, then climbs to 41% in 2020 and stays near 40% into 2024. Economic Growth
            dominates the calm years — 2012 and 2023 in particular. None of this is visible under the
            unbalanced dictionary, which reports a flat crisis narrative through the entire period.
          </p>
          <TopicTimeline />
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
            Finding 4 — sentiment agrees, weakly
          </h2>
          <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-muted">
            Supplemental VADER sentiment moves with the same crises — dips in 2008–09 (0.84, 0.83),
            2015–16 (0.93, 0.94), 2020 (0.83) and 2022 (0.79), recovering to 0.99 in calm years. The
            direction is consistent with the topic findings; the magnitude is not trustworthy, since
            VADER saturates on long formal text. It is a useful corroborating signal and a poor
            primary one.
          </p>
          <SentimentTimeline />
        </section>

        <section className="mt-16 border-t border-line pt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            Limitations, stated plainly
          </h2>
          <ul className="mt-5 max-w-[72ch] space-y-3">
            {[
              "The balanced dictionaries were built by manual term selection guided by frequency analysis. That is a judgement call, and it introduces subjectivity even as it removes another kind.",
              "Communiqués span 1997–2024; constituency statements span 2004–2024. Coverage thins after 2017 — fewer than five statements per year in places — so those points are noisy, and the thin-coverage band is drawn where that begins.",
              "Topic shares are means of per-document normalised assignments, not raw counts, so they describe emphasis rather than volume.",
              "VADER compound saturates near 1.0 on long documents; the relative dips are more informative than the absolute values.",
              "The LDA pass is unsupervised and supplementary. It surfaced broader themes (IMF Governance & Reform; Climate & Pandemic) but lacks the dictionary method's transparency, so the two are complementary rather than equivalent.",
              "The design isolates dictionary balance but does not prove it is the only driver of topic instability.",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-line pt-8">
          <a
            href="https://github.com/husnain-mustafa/IMF-Comuniques-Analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/[0.06]"
          >
            Notebooks &amp; data
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-2 py-2 text-sm text-muted transition-colors hover:text-ink"
          >
            Back to all work
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

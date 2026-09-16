"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { SectionLabel } from "./components/section-label";
import { TheLoop } from "./components/the-loop";

type WorkItem = {
  title: string;
  org: string;
  year: string;
  category: string;
  detail: string;
  tags: string[];
  href?: string;
};

const work: WorkItem[] = [
  {
    title: "QA Checker for Valuation",
    org: "Cushman & Wakefield",
    year: "2024",
    category: "Applied AI",
    detail:
      "A Copilot Studio agent shipped EMEA-wide for quality assurance across valuation reports — automating proofreading, validation, and fact-checking before a report leaves the team.",
    tags: ["Copilot Studio", "AI Agents", "Power Platform"],
  },
  {
    title: "Databricks Genie Agent",
    org: "Cushman & Wakefield",
    year: "2024",
    category: "Cloud Data",
    detail:
      "Built data pipelines spanning several business functions, then built and tested Genie agents on top of that foundation for quick data answers, analysis, visualisation, and lead generation.",
    tags: ["Azure Databricks", "Genie", "Delta Lake", "PySpark"],
  },
  {
    title: "IMF Text Analysis",
    org: "University of Warsaw — Master's thesis",
    year: "2025",
    category: "Data Science",
    detail:
      "173 communiqués and 564 constituency statements scored twice with one variable changed: dictionary balance. Under the unbalanced dictionary, Debt scored exactly zero for every country and every nation collapsed into the same crisis signal. The balanced dictionary is what makes them distinguishable at all.",
    tags: ["Text Analysis", "Topic Scoring", "VADER", "LDA"],
    href: "/work/imf-communiques",
  },
];

const flagship = {
  title: "Report Valuation Workspace",
  org: "Cushman & Wakefield",
  period: "2026 — Now",
  summary:
    "An application built from the ground up to make valuation report writing effortless. It parses evidence documents automatically, fact-checks them against source, automates the GIS analysis, drafts the report with AI, and runs QA checks before anything reaches a client. Built so the valuers are the pilots, not the passengers.",
  capabilities: [
    {
      k: "Evidence parsing",
      v: "Parses both structured and unstructured evidence documents automatically.",
    },
    { k: "Fact checking", v: "Cross-checks every claim against the source evidence." },
    { k: "GIS automation", v: "Runs the spatial and location analysis without manual steps." },
    { k: "AI drafting", v: "Writes the report from validated, structured inputs." },
    { k: "QA checks", v: "Validates output before it reaches a client." },
    { k: "Valuer-led UX", v: "Designed around the valuer's judgement, not around the model." },
  ],
  tags: ["React", "Databricks", "GenAI", "Document Parsing", "GIS"],
};

const experience = [
  {
    period: "2024 — Present",
    role: "Analytics Engineer",
    org: "Cushman & Wakefield",
    place: "Warsaw",
    note: "Report Valuation Workspace (React, Databricks), semantic models and curated Databricks assets for EMEA & APAC, and agentic AI delivery. Joined as Junior BI Analyst, then BI Analyst, AI & ML.",
  },
  {
    period: "2023 — 2024",
    role: "Working Student, Business Applications",
    org: "Nokia Solutions and Networks",
    place: "Warsaw",
    note: "Deep learning temporal clustering on production time-series, and an in-house Python visualisation library for time-series data.",
  },
  {
    period: "2022",
    role: "Junior Analyst, eMobility",
    org: "Power Technology Research",
    place: "Lahore",
    note: "EV market and charging-infrastructure research consolidated into databases, reports, and presentations.",
  },
  {
    period: "2021 — 2022",
    role: "Executive, RF Optimisation",
    org: "Ufone",
    place: "Lahore",
    note: "Power BI dashboards for network KPI monitoring, worst-cell analysis, and GIS site databases. Joined as Management Trainee.",
  },
  {
    period: "2021",
    role: "Technical Support Specialist",
    org: "Integriti",
    place: "Lahore",
    note: "IT services and consulting support across client environments.",
  },
  {
    period: "2021",
    role: "Automation Engineer Trainee",
    org: "foodpanda",
    place: "Lahore",
    note: "Automation engineering internship on marketplace operations.",
  },
];

const education = [
  {
    period: "2024",
    degree: "MA Data Science & Business Analytics",
    org: "University of Warsaw",
  },
  {
    period: "2021",
    degree: "BS Electrical Engineering",
    org: "Lahore University of Management Sciences",
  },
];

const capabilities = [
  {
    group: "Machine Learning & AI",
    items: ["AI Agents", "Predictive Modelling", "Clustering", "Time-Series", "NLP", "Model Evaluation"],
  },
  {
    group: "Cloud, MLOps & DevOps",
    items: ["Azure AI Foundry", "Azure ML", "Databricks", "DevOps Pipelines", "Automation"],
  },
  { group: "Programming", items: ["Python", "R", "SQL", "C++", "PyTorch", "Pandas", "scikit-learn"] },
  {
    group: "BI & Data Tools",
    items: ["Power BI", "Tableau", "SharePoint APIs", "CRM Integrations", "Power Automate", "Copilot Studio"],
  },
];

const now = [
  { k: "Building", v: "Production AI agents and Databricks pipelines at Cushman & Wakefield" },
  { k: "Learning", v: "Agent evaluation, and where LLM output stops being trustworthy" },
  { k: "Based", v: "Warsaw, Poland" },
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  const copyEmail = () => {
    navigator.clipboard.writeText("husnainchnaz@outlook.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-bg text-ink antialiased">
      <div aria-hidden className="engineering-grid pointer-events-none fixed inset-0 z-0 opacity-50" />

      <SiteHeader />

      {/* HERO */}
      <section id="top" className="relative z-10">
        <div className="mx-auto max-w-[1120px] px-6 pb-20 pt-24 lg:pb-28">
          <motion.h1
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 18 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                })}
            className="max-w-[22ch] text-4xl font-medium leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl"
          >
            Analytics, AI, and the systems around them.
          </motion.h1>

          <motion.p
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 14 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
                })}
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted"
          >
            I&rsquo;m Husnain Mustafa — an analytics engineer in Warsaw. I ship agents, pipelines,
            and dashboards for enterprise teams.
          </motion.p>

          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] },
                })}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg border border-line-strong bg-ink/[0.04] px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink/[0.08]"
            >
              View work
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-2 py-2.5 text-sm text-muted transition-colors hover:text-ink"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.dl
            {...(reduce
              ? {}
              : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.35 } })}
            className="mt-16 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-7 sm:grid-cols-3"
          >
            {[
              ["Role", "Analytics Engineer"],
              ["Base", "Warsaw, Poland"],
              ["Focus", "Agents · Cloud data"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{k}</dt>
                <dd className="mt-1.5 text-sm text-ink">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* 01 — WORK */}
      <section id="work" className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:py-24">
          <motion.div {...reveal()}>
            <SectionLabel index="01">Selected work</SectionLabel>
          </motion.div>

          {/* Flagship */}
          <motion.div {...reveal(0.05)} className="mt-10 border-t border-line pt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Flagship
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                {flagship.org} · {flagship.period}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              {flagship.title}
            </h3>
            <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">
              {flagship.summary}
            </p>

            <div className="mt-9 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {flagship.capabilities.map((c) => (
                <div key={c.k} className="border-t border-line pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                    {c.k}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{c.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-1.5">
              {flagship.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.p
            {...reveal(0.05)}
            className="mt-16 font-mono text-[10px] uppercase tracking-[0.16em] text-faint"
          >
            Earlier
          </motion.p>

          <div className="mt-4 border-t border-line">
            {work.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div {...reveal(i * 0.05)} key={item.title} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <div className="flex items-start gap-5">
                      <span className="mt-1 font-mono text-[11px] text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3
                          className={`text-lg font-medium tracking-tight transition-colors sm:text-xl ${
                            isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          {item.org} · {item.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      <span className="hidden font-mono text-xs text-faint sm:block">{item.year}</span>
                      <Plus
                        className={`h-4 w-4 text-muted transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={1.75}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-6 pb-7 md:grid-cols-12">
                          <div className="md:col-span-7 md:col-start-2">
                            <p className="max-w-[62ch] text-sm leading-relaxed text-muted">
                              {item.detail}
                            </p>
                          </div>
                          <div className="md:col-span-4">
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                              Stack
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {item.tags.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            {item.href && (
                              <Link
                                href={item.href}
                                className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-accent"
                              >
                                Read the case study
                                <ArrowUpRight className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
                              </Link>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 02 — METHOD */}
      <section id="method" className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:py-24">
          <motion.div {...reveal()}>
            <SectionLabel index="02">How the work runs</SectionLabel>
          </motion.div>
          <motion.p {...reveal(0.05)} className="mt-5 max-w-[62ch] text-sm leading-relaxed text-muted">
            Broad problems are usually vague problems. The method is the same whether it is a
            pipeline, an agent, or a dashboard: find the real question, make it concrete, ship it,
            then measure whether anything actually moved.
          </motion.p>
          <TheLoop />
        </div>
      </section>

      {/* 03 — EXPERIENCE + EDUCATION */}
      <section id="experience" className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <motion.div {...reveal()} className="lg:col-span-8">
              <SectionLabel index="03">Experience</SectionLabel>
              <div className="mt-10">
                {experience.map((e) => (
                  <div
                    key={e.org + e.role}
                    className="grid grid-cols-1 gap-2 border-t border-line py-5 sm:grid-cols-12 sm:gap-4"
                  >
                    <span className="font-mono text-xs text-faint sm:col-span-3 sm:pt-0.5">
                      {e.period}
                    </span>
                    <div className="sm:col-span-9">
                      <p className="text-sm font-medium text-ink">{e.role}</p>
                      <p className="mt-1 text-sm text-muted">
                        {e.org} · {e.place}
                      </p>
                      <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-muted">{e.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)} className="lg:col-span-4">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Education
              </h3>
              <div className="mt-8 space-y-5">
                {education.map((e) => (
                  <div key={e.degree} className="border-t border-line pt-5">
                    <span className="font-mono text-xs text-faint">{e.period}</span>
                    <p className="mt-2 text-sm font-medium text-ink">{e.degree}</p>
                    <p className="mt-1 text-sm text-muted">{e.org}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04 — CAPABILITIES */}
      <section id="capabilities" className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:py-24">
          <motion.div {...reveal()}>
            <SectionLabel index="04">Capabilities</SectionLabel>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <motion.div {...reveal(i * 0.05)} key={c.group}>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {c.group}
                </p>
                <ul className="mt-4 space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...reveal(0.1)}
            className="mt-12 border-t border-line pt-6 text-sm text-muted"
          >
            English C2 · Urdu native · Punjabi native · Polish elementary
          </motion.p>
        </div>
      </section>

      {/* 05 — NOW */}
      <section id="now" className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:py-24">
          <motion.div {...reveal()}>
            <SectionLabel index="05">Now</SectionLabel>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-px sm:grid-cols-3">
            {now.map((n, i) => (
              <motion.div
                {...reveal(i * 0.05)}
                key={n.k}
                className="border-t border-line pt-5 sm:pr-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{n.k}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink">{n.v}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...reveal(0.1)} className="mt-10 text-sm text-muted">
            <a
              href="/record"
              className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
            >
              Off the clock
              <ArrowUpRight className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
            </a>
          </motion.p>
        </div>
      </section>

      {/* 06 — CONTACT */}
      <section id="contact" className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-[1120px] px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <motion.div {...reveal()} className="lg:col-span-7">
              <SectionLabel index="06">Contact</SectionLabel>
              <h3 className="mt-8 max-w-[20ch] text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-ink sm:text-3xl">
                Open to senior BI, applied AI, and data engineering roles.
              </h3>
              <a
                href="mailto:husnainchnaz@outlook.com"
                className="group mt-8 inline-flex items-center gap-2 text-lg text-ink sm:text-xl"
              >
                <span className="border-b border-line-strong pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                  husnainchnaz@outlook.com
                </span>
                <ArrowUpRight className="h-4 w-4 text-accent" strokeWidth={1.75} />
              </a>
            </motion.div>

            <motion.div {...reveal(0.1)} className="space-y-px lg:col-span-5">
              <button
                onClick={copyEmail}
                className="flex w-full items-center justify-between border-t border-line py-4 text-left text-sm text-ink transition-colors hover:text-accent"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted" strokeWidth={1.75} />
                  Copy email
                </span>
                {copied ? (
                  <Check className="h-4 w-4 text-accent" strokeWidth={2} />
                ) : (
                  <Copy className="h-4 w-4 text-faint" strokeWidth={1.75} />
                )}
              </button>
              <a
                href="tel:+48666022047"
                className="flex items-center justify-between border-t border-line py-4 text-sm text-ink transition-colors hover:text-accent"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted" strokeWidth={1.75} />
                  +48 666 022 047
                </span>
                <ArrowUpRight className="h-4 w-4 text-faint" strokeWidth={1.75} />
              </a>
              <div className="flex items-center border-y border-line py-4 text-sm text-ink">
                <span className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted" strokeWidth={1.75} />
                  Warsaw, Poland
                </span>
              </div>

              <div className="flex gap-3 pt-5">
                <a
                  href="https://github.com/husnain-mustafa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg border border-line px-4 py-2.5 text-center text-sm text-ink transition-colors hover:border-line-strong"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/husnain-mustafa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg border border-line px-4 py-2.5 text-center text-sm text-ink transition-colors hover:border-line-strong"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

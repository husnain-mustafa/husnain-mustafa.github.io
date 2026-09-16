"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Entry = {
  year: string;
  tag: "Work" | "Places" | "Study";
  title: string;
  note: string;
};

const entries: Entry[] = [
  {
    year: "2018 — 2021",
    tag: "Study",
    title: "BS Electrical Engineering at LUMS",
    note: "Lahore University of Management Sciences. Hybrid renewable energy feasibility modelling, and a comparative study of machine learning algorithms for gender and speaker recognition in Urdu recordings.",
  },
  {
    year: "2020",
    tag: "Work",
    title: "Freelance journalist",
    note: "Wrote freelance pieces alongside an engineering degree.",
  },
  {
    year: "2021",
    tag: "Work",
    title: "Automation Engineer Trainee at foodpanda",
    note: "A two-month internship on marketplace operations automation.",
  },
  {
    year: "2021",
    tag: "Work",
    title: "Technical Support Specialist at Integriti",
    note: "IT services and consulting support across client environments in Lahore.",
  },
  {
    year: "2021",
    tag: "Work",
    title: "Ufone: management trainee to RF optimisation",
    note: "Power BI dashboards for network KPI monitoring, worst-cell analysis, and GIS site databases built in Google Earth and MapInfo.",
  },
  {
    year: "2022",
    tag: "Work",
    title: "Market research at Power Technology Research",
    note: "Consolidated global EV market data from multiple sources into structured databases for client strategy.",
  },
  {
    year: "2023",
    tag: "Places",
    title: "Lahore to Warsaw",
    note: "Moved for a role at Nokia and a master's at the University of Warsaw. Intended as one degree; it turned into a life.",
  },
  {
    year: "2023",
    tag: "Work",
    title: "Deep learning at Nokia",
    note: "Temporal clustering models for large-scale time-series in production, plus an internal visualisation library adopted across the team.",
  },
  {
    year: "2024",
    tag: "Study",
    title: "MA, Data Science & Business Analytics",
    note: "Master's thesis: an NLP pipeline reading two decades of IMF communiques for sentiment and thematic drift.",
  },
  {
    year: "2024",
    tag: "Work",
    title: "Enter Cushman & Wakefield",
    note: "Scalable BI pipelines integrating SharePoint APIs, CRM, and external sources across EMEA.",
  },
  {
    year: "2024",
    tag: "Work",
    title: "CEE portfolio migration to Databricks",
    note: "Owned the data architecture, optimised legacy pipelines, and coordinated cross-functional delivery.",
  },
  {
    year: "2024",
    tag: "Work",
    title: "QA Checker shipped EMEA-wide",
    note: "A Copilot Studio agent for quality assurance across valuation reports — proofreading, validation, and fact-checking — adopted across EMEA teams.",
  },
];

const filters = ["All", "Work", "Places", "Study"] as const;

const currently = [
  { k: "Music", v: "Guitar and production; open mics when I get the chance" },
  { k: "Games", v: "FPS and RPG" },
  { k: "Kitchen", v: "Baking, curries, and slow cooking" },
  { k: "Photography", v: "Street and life photography" },
];

export function RecordThread() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const reduce = useReducedMotion();

  const visible = active === "All" ? entries : entries.filter((e) => e.tag === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`rounded-lg border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                isActive
                  ? "border-transparent bg-ink text-bg"
                  : "border-line text-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <ol className="mt-10">
        {visible.map((e, i) => (
          <motion.li
            key={`${e.year}-${e.title}`}
            layout={!reduce}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, delay: reduce ? 0 : i * 0.03 }}
            className="grid grid-cols-1 gap-2 border-t border-line py-6 sm:grid-cols-12 sm:gap-4"
          >
            <span className="font-mono text-xs text-faint sm:col-span-2">{e.year}</span>
            <div className="sm:col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                {e.tag}
              </span>
            </div>
            <div className="sm:col-span-7">
              <h3 className="text-base font-medium tracking-tight text-ink">{e.title}</h3>
              <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-muted">{e.note}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Currently</h2>
        <div className="mt-6 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {currently.map((c) => (
            <div key={c.k} className="border-t border-line pt-5 sm:pr-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{c.k}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink">{c.v}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, ArrowUp, ArrowUpRight, FileText, Cpu, Database, GitBranch, BarChart3 } from 'lucide-react';

/* ============================== DATA (real profile content) ============================== */

const records = [
  {
    file: 'REC-01',
    status: 'ACTIVE',
    role: 'Analytics Engineer — Pipeline Bundles',
    prev: 'prev. BI Analyst – AI & Machine Learning',
    company: 'Cushman & Wakefield',
    division: 'EMEA Innovation & Analytics',
    location: 'Warsaw, Poland',
    period: 'Jun 2024 — Present',
    stamp: 'ROLE UPDATE: BI ANALYST → ANALYTICS ENGINEER',
    lines: [
      'Own modular pipeline bundles (extract → transform → load → serve) feeding BI and AI products across EMEA.',
      'Designed and deployed production AI agents for automated report validation and fact-checking across structured and unstructured data, adopted company-wide.',
      'Built Genie agents on Databricks enabling natural language querying of operational datasets, eliminating manual reporting bottlenecks.',
      'Led CEE portfolio migration to Databricks by defining data architecture, optimising legacy pipelines, and coordinating cross-functional delivery.',
      'Translate ambiguous business requirements from senior stakeholders across Poland, CEE, and Nordics into end-to-end analytics solutions.',
    ],
  },
  {
    file: 'REC-02',
    status: 'CLOSED',
    role: 'Working Student — Business Applications',
    prev: null,
    company: 'Nokia Solutions and Networks',
    division: 'Telecommunications R&D',
    location: 'Warsaw, Poland',
    period: 'Feb 2023 — Jun 2024',
    stamp: null,
    lines: [
      'Delivered ML and data analysis projects end-to-end across research and live production environments.',
      'Implemented deep learning temporal clustering models in Python for large-scale time-series analysis in production.',
      'Developed an internal visualisation library adopted across the team to standardise telemetry and reporting workflows.',
    ],
  },
  {
    file: 'REC-03',
    status: 'CLOSED',
    role: 'Junior Analyst — eMobility',
    prev: null,
    company: 'Power Technology Research',
    division: 'Market Intelligence',
    location: 'Lahore, Pakistan',
    period: 'Jul 2022 — Oct 2022',
    stamp: null,
    lines: [
      'Consolidated EV market data from multiple global sources into structured databases.',
      'Produced analytical reports and visualisations to support client decision-making in the eMobility sector.',
    ],
  },
  {
    file: 'REC-04',
    status: 'CLOSED',
    role: 'Executive — RF Optimisation',
    prev: null,
    company: 'Ufone',
    division: 'Telecommunications',
    location: 'Lahore, Pakistan',
    period: 'Oct 2021 — Jun 2022',
    stamp: null,
    lines: [
      'Built Power BI dashboards for real-time network KPI monitoring and automated reporting workflows.',
      'Improved operational visibility and issue escalation response times across engineering teams.',
    ],
  },
];

const operations = [
  {
    file: 'OP-2417',
    category: 'APPLIED AI & AUTOMATION',
    company: 'CUSHMAN & WAKEFIELD',
    title: 'Production AI Agent for Report Validation',
    brief:
      'Designed and deployed production AI agents for automated report validation and fact-checking across structured and unstructured data repositories. Adopted company-wide across multiple EMEA teams to eliminate manual verification bottlenecks.',
    outcome: 'OUTCOME: ADOPTED COMPANY-WIDE, MULTIPLE EMEA TEAMS',
    tags: ['AI Agents', 'GenAI', 'RAG Pipelines', 'Python', 'Enterprise Integration'],
  },
  {
    file: 'OP-2411',
    category: 'CLOUD DATA ARCHITECTURE',
    company: 'CUSHMAN & WAKEFIELD',
    title: 'Databricks Genie Natural-Language Agent',
    brief:
      'Led the CEE portfolio migration to Databricks and built Genie agents enabling business users to query complex operational datasets using natural language, drastically cutting reporting turnaround time.',
    outcome: 'OUTCOME: MANUAL REPORTING BOTTLENECKS ELIMINATED',
    tags: ['Azure Databricks', 'Genie', 'Delta Lake', 'PySpark', 'NLP'],
  },
  {
    file: 'OP-2403',
    category: 'ADVANCED DATA SCIENCE',
    company: 'UNIV. OF WARSAW — MASTER’S THESIS',
    title: 'IMF Communique NLP & Sentiment Analysis',
    brief:
      'Developed an advanced NLP pipeline analyzing two decades of International Monetary Fund communiques. Implemented topic modeling and sentiment analysis to uncover macroeconomic thematic trend shifts.',
    outcome: 'OUTCOME: 20 YEARS OF MACROECONOMIC TEXT ANALYZED',
    tags: ['Python', 'NLP', 'Topic Modelling', 'Sentiment Analysis', 'Deep Learning'],
  },
];

const pipelineSpec = [
  {
    stage: '01 / EXTRACT',
    impl: 'SharePoint APIs · CRM · external sources, incremental pulls',
    tools: 'SharePoint APIs / CRM Integrations / Python / Azure Data Factory',
    sla: '< 5 MIN',
  },
  {
    stage: '02 / TRANSFORM',
    impl: 'Modular PySpark + SQL models on lakehouse, tested builds',
    tools: 'PySpark / SQL / Delta Lake / Azure Databricks',
    sla: '< 10 MIN',
  },
  {
    stage: '03 / LOAD',
    impl: 'Merge + SCD2 into curated marts, versioned releases',
    tools: 'Delta Lake / Databricks / DevOps Pipelines',
    sla: '< 2 MIN',
  },
  {
    stage: '04 / SERVE',
    impl: 'BI marts · NL query agents · automated distribution',
    tools: 'Power BI / Tableau / Genie / Power Automate',
    sla: '< 1 MIN',
  },
];

const inventory = [
  {
    code: 'INV-A',
    title: 'AI & MACHINE LEARNING',
    desc: 'Production AI agents, LLM integration, RAG architectures, NLP.',
    items: ['AI Agents', 'GenAI', 'RAG Pipelines', 'NLP', 'Time-Series Analysis', 'Deep Learning', 'Predictive Modelling'],
  },
  {
    code: 'INV-B',
    title: 'PROGRAMMING & DATA SCIENCE',
    desc: 'Core programming languages and analytical libraries.',
    items: ['Python', 'SQL', 'PySpark', 'R', 'C++', 'PyTorch', 'Pandas', 'Scikit-learn'],
  },
  {
    code: 'INV-C',
    title: 'CLOUD & DATA ENGINEERING',
    desc: 'Enterprise warehouses, lakehouses, orchestration.',
    items: ['Azure Databricks', 'Delta Lake', 'Genie', 'Workflows', 'Azure ML', 'Azure Data Factory', 'DevOps Pipelines'],
  },
  {
    code: 'INV-D',
    title: 'BI, ANALYTICS & AUTOMATION',
    desc: 'Dashboards, APIs, workflow automation.',
    items: ['Power BI', 'Tableau', 'Power Automate', 'Copilot Studio', 'SharePoint APIs', 'CRM Integrations', 'Git', 'Jira', 'Confluence'],
  },
];

const academic = [
  {
    file: 'EDU-01',
    degree: 'MA Data Science & Business Analytics',
    institution: 'University of Warsaw — Warsaw, Poland',
    year: '2024',
    brief:
      'Master’s thesis: advanced NLP pipeline over two decades of IMF communiques — topic modelling, sentiment analysis, thematic trend detection.',
  },
  {
    file: 'EDU-02',
    degree: 'BS Electrical Engineering',
    institution: 'LUMS — Lahore, Pakistan',
    year: '2021',
    brief:
      'Quantitative feasibility modeling for hybrid renewable systems; comparative ML studies for speaker/gender recognition from audio.',
  },
];

const tickerItems = [
  'AZURE DATABRICKS', 'DELTA LAKE', 'PYSPARK', 'AI AGENTS', 'RAG PIPELINES', 'GENIE', 'POWER BI',
  'PYTHON', 'SQL', 'PIPELINE BUNDLES', 'DBT-STYLE MODELS', 'EMEA SCALE',
];

/* ============================== PRIMITIVES ============================== */

function Crosshairs() {
  const c = 'absolute font-mono text-zinc-700 text-sm select-none pointer-events-none';
  return (
    <>
      <span className={`${c} top-2 left-3`}>+</span>
      <span className={`${c} top-2 right-3`}>+</span>
      <span className={`${c} bottom-2 left-3`}>+</span>
      <span className={`${c} bottom-2 right-3`}>+</span>
    </>
  );
}

function SectionHead({ index, code, title, note }: { index: string; code: string; title: string; note: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.25em] text-zinc-500 uppercase mb-4">
        <span>
          SEC.{index} <span className="text-zinc-700">//</span> {code}
        </span>
        <span className="hidden sm:inline">{note}</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">{title}</h2>
      <div className="mt-5 border-t-2 border-white/90" />
      <div className="mt-[3px] border-t border-white/20" />
    </div>
  );
}

function Stamp({ children, tone = 'amber' }: { children: React.ReactNode; tone?: 'amber' | 'emerald' | 'red' }) {
  const tones = {
    amber: 'border-amber-400/70 text-amber-400',
    emerald: 'border-emerald-400/70 text-emerald-400',
    red: 'border-red-500/70 text-red-500',
  };
  return (
    <span
      className={`inline-block -rotate-2 border-2 px-3 py-1 font-mono text-[11px] font-bold tracking-[0.2em] uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function CopyRow({ label, value, href }: { label: string; value: string; href: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center justify-between gap-4 border border-white/15 bg-white/[0.03] px-4 py-3">
      <div className="min-w-0">
        <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase">{label}</div>
        <a href={href} className="block truncate font-mono text-sm text-white hover:text-emerald-300 transition-colors">
          {value}
        </a>
      </div>
      <button
        onClick={copy}
        className="flex shrink-0 items-center gap-1.5 border border-white/20 px-3 py-1.5 font-mono text-[11px] text-zinc-300 hover:border-white hover:text-white transition-colors"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? 'COPIED' : 'COPY'}
      </button>
    </div>
  );
}

function Barcode() {
  const bars = [3, 1, 2, 1, 4, 2, 1, 3, 1, 1, 2, 4, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 4, 1, 2, 2, 1, 3];
  return (
    <div className="flex h-12 items-stretch gap-[2px]" aria-hidden>
      {bars.map((w, i) => (
        <div key={i} className="bg-white/80" style={{ width: `${w}px` }} />
      ))}
    </div>
  );
}

/* ============================== PAGE ============================== */

export function BrutalistDossier() {
  const [clock, setClock] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(d.toISOString().slice(11, 19) + 'Z');
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] font-mono text-zinc-300 antialiased">
      {/* grid + scanlines */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px)',
        }}
      />

      {/* ===== TOP SYSTEM BAR ===== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-white/90 bg-black/95 backdrop-blur">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] text-white">
            <span className="inline-block h-2.5 w-2.5 animate-pulse bg-emerald-400" />
            HSM.PORTFOLIO.SYS
          </div>
          <nav className="hidden items-center gap-5 text-[11px] tracking-[0.2em] text-zinc-500 lg:flex">
            {[
              ['RECORD', '#record'],
              ['OPERATIONS', '#operations'],
              ['PIPELINE', '#pipeline'],
              ['ARSENAL', '#arsenal'],
              ['ACADEMIC', '#academic'],
              ['TRANSMIT', '#transmit'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="hover:text-emerald-300 transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] text-zinc-500">
            <span className="hidden sm:inline">WARSAW.PL</span>
            <span className="text-emerald-400 tabular-nums">{clock}</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pt-12 md:px-6">
        {/* ===== HERO / COVER SHEET ===== */}
        <section className="relative border-x border-b-2 border-white/90 px-5 pb-10 pt-10 md:px-10 md:pt-14">
          <Crosshairs />
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-[0.25em] text-zinc-500 uppercase">
            <span>
              FILE NO. <span className="text-white">HSM-2026-EMEA</span>
            </span>
            <span className="hidden md:inline">FORM AE-01 · REV 3</span>
            <Stamp tone="emerald">CLEARED FOR EMEA</Stamp>
          </div>

          {/* boot log */}
          <div className="mt-8 border border-white/15 bg-black p-4 text-[12px] leading-[1.9] text-zinc-400">
            <div><span className="text-zinc-600">[BOOT]</span> INIT portfolio.sys v2.1.0 <span className="text-emerald-400">… OK</span></div>
            <div><span className="text-zinc-600">[LOAD]</span> SERVICE RECORD [4 ENTRIES] <span className="text-emerald-400">… OK</span></div>
            <div><span className="text-zinc-600">[LOAD]</span> CASE FILES [3 OPERATIONS] <span className="text-emerald-400">… OK</span></div>
            <div><span className="text-zinc-600">[DIFF ]</span> ROLE UPDATE DETECTED: <span className="text-white">BI_ANALYST → ANALYTICS_ENGINEER</span></div>
            <div><span className="text-zinc-600">[NET ]</span> EU_WORK_AUTH=TRUE · RELOCATION: VIENNA / EU / US <span className="animate-pulse text-emerald-400">█</span></div>
          </div>

          {/* nameplate */}
          <h1 className="mt-8 font-black uppercase leading-[0.88] tracking-tighter text-white">
            <span className="block text-[17vw] md:text-[9rem]">HUSNAIN</span>
            <span className="block text-[17vw] text-zinc-800 md:text-[9rem]">MUSTAFA</span>
            <span className="mt-2 block text-[7vw] text-emerald-400 md:text-5xl">ANALYTICS ENGINEER — PIPELINE BUNDLES</span>
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Ex-BI Analyst, now Analytics Engineering. Production AI agents adopted company-wide at Cushman &amp;
            Wakefield · CEE Databricks migration lead · MA Data Science, University of Warsaw. I build modular,
            version-controlled pipeline bundles: extract → transform → load → serve.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#record"
              className="group relative inline-flex items-center justify-center gap-2 bg-white px-8 py-4 text-sm font-bold tracking-[0.15em] text-black uppercase"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="relative">READ SERVICE RECORD</span>
              <ArrowUpRight className="relative h-4 w-4" />
            </a>
            <a
              href="#operations"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 px-8 py-4 text-sm font-bold tracking-[0.15em] text-zinc-200 uppercase hover:border-white hover:text-white transition-colors"
            >
              OPEN CASE FILES [3]
            </a>
          </div>

          {/* meta strip */}
          <div className="mt-10 grid grid-cols-2 border-2 border-white/90 md:grid-cols-4">
            {[
              ['BASE', 'WARSAW 52.23°N 21.01°E'],
              ['ASSIGNMENT', 'C&W · EMEA ANALYTICS'],
              ['FOCUS', 'PIPELINE BUNDLES'],
              ['STATUS', '● OPEN TO OFFERS'],
            ].map(([k, v], i) => (
              <div key={k} className={`px-4 py-3 ${i > 0 ? 'border-l-2 border-white/90' : ''} ${i === 2 ? 'max-md:border-l-0 max-md:border-t-2 max-md:border-white/90' : ''} ${i === 3 ? 'max-md:border-t-2 max-md:border-white/90' : ''}`}>
                <div className="text-[10px] tracking-[0.25em] text-zinc-500">{k}</div>
                <div className={`mt-1 text-[13px] font-bold tracking-wide ${i === 3 ? 'text-emerald-400' : 'text-white'}`}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TICKER ===== */}
        <div className="overflow-hidden border-x border-b-2 border-white/90 bg-emerald-400 py-2 text-black">
          <div className="animate-marquee flex w-max whitespace-nowrap text-[12px] font-bold tracking-[0.2em]">
            {[0, 1].map((copy) => (
              <span key={copy} className="flex">
                {tickerItems.map((t) => (
                  <span key={`${copy}-${t}`} className="mx-6">
                    {t} <span className="ml-6">///</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ===== 01 SERVICE RECORD ===== */}
        <section id="record" className="relative scroll-mt-16 border-x border-b-2 border-white/90 px-5 py-14 md:px-10">
          <Crosshairs />
          <Reveal>
            <SectionHead index="01" code="SERVICE_RECORD // 4 ENTRIES" title="Service Record" note="SORT: RECENCY DESC" />
          </Reveal>
          <div className="space-y-6">
            {records.map((r, i) => (
              <Reveal key={r.file} delay={Math.min(i * 0.05, 0.2)}>
                <article className={`border ${r.status === 'ACTIVE' ? 'border-emerald-400/60' : 'border-white/15'} bg-black/60`}>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 px-5 py-3 text-[11px] tracking-[0.25em]">
                    <span className="text-zinc-500">
                      FILE <span className="text-white">{r.file}</span>
                      <span className="mx-2 text-zinc-700">|</span>
                      {r.period}
                    </span>
                    <span className={r.status === 'ACTIVE' ? 'text-emerald-400' : 'text-zinc-500'}>
                      {r.status === 'ACTIVE' ? '● ACTIVE' : '○ CLOSED'}
                    </span>
                  </div>
                  <div className="px-5 py-6 md:px-8">
                    {r.stamp && (
                      <div className="mb-4">
                        <Stamp tone="amber">{r.stamp}</Stamp>
                      </div>
                    )}
                    <h3 className="text-2xl font-black tracking-tight text-white uppercase md:text-3xl">{r.role}</h3>
                    {r.prev && <div className="mt-1 font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">{r.prev}</div>}
                    <div className="mt-3 grid gap-2 text-[12px] tracking-[0.15em] uppercase sm:grid-cols-3">
                      <span className="text-emerald-300">{r.company}</span>
                      <span className="text-zinc-500">{r.division}</span>
                      <span className="text-zinc-500 sm:text-right">{r.location}</span>
                    </div>
                    <ul className="mt-6 space-y-2.5 border-t border-dashed border-white/20 pt-5">
                      {r.lines.map((l, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                          <span className="shrink-0 text-emerald-400">[{String(j + 1).padStart(2, '0')}]›</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== 02 CASE FILES ===== */}
        <section id="operations" className="relative scroll-mt-16 border-x border-b-2 border-white/90 bg-white/[0.015] px-5 py-14 md:px-10">
          <Crosshairs />
          <Reveal>
            <SectionHead index="02" code="CASE_FILES // 3 OPERATIONS" title="Selected Operations" note="IMPACT: PRODUCTION" />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {operations.map((op, i) => (
              <Reveal key={op.file} delay={i * 0.08}>
                <article className="group flex h-full flex-col border-2 border-white/90 bg-black">
                  <div className="flex items-center justify-between border-b-2 border-white/90 px-5 py-3 text-[11px] tracking-[0.25em]">
                    <span className="text-white">{op.file}</span>
                    <FileText className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-6">
                    <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-500">{op.category}</div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.25em] text-emerald-400">{op.company}</div>
                    <h3 className="mt-3 text-xl font-black leading-tight tracking-tight text-white uppercase">
                      {op.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[13px] leading-relaxed text-zinc-400">{op.brief}</p>
                    <div className="mt-5 border border-emerald-400/40 bg-emerald-400/5 px-3 py-2 font-mono text-[11px] font-bold tracking-[0.12em] text-emerald-300">
                      {op.outcome}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-dashed border-white/20 pt-4">
                      {op.tags.map((t) => (
                        <span key={t} className="border border-white/20 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t-2 border-white/90 px-5 py-2 font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                    <span>EXHIBIT {String.fromCharCode(65 + i)}</span>
                    <span>PG. {String(i + 1).padStart(2, '0')}/03</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== 03 PIPELINE SPEC ===== */}
        <section id="pipeline" className="relative scroll-mt-16 border-x border-b-2 border-white/90 px-5 py-14 md:px-10">
          <Crosshairs />
          <Reveal>
            <SectionHead index="03" code="PIPELINE_SPEC // BUNDLE v3" title="Pipeline Bundles" note="LATENCY BUDGET: <18 MIN E2E" />
          </Reveal>
          <Reveal>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-zinc-400">
              Every bundle ships as a versioned unit — same contract from SharePoint pull to Power BI mart and Genie
              endpoint. Spec below reflects the production stack: Databricks + Delta Lake + PySpark, served through
              Power BI, Tableau, and natural-language agents.
            </p>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto border-2 border-white/90">
              <table className="w-full min-w-[720px] border-collapse text-left text-[13px]">
                <thead>
                  <tr className="bg-white text-black">
                    {['STAGE', 'IMPLEMENTATION', 'TOOLING', 'SLA'].map((h) => (
                      <th key={h} className="border-r-2 border-black px-4 py-3 text-[11px] font-black tracking-[0.2em] last:border-r-0">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pipelineSpec.map((row, i) => (
                    <tr key={row.stage} className={`border-t border-white/20 ${i % 2 === 1 ? 'bg-white/[0.03]' : ''} hover:bg-emerald-400/5 transition-colors`}>
                      <td className="border-r border-white/20 px-4 py-4 font-bold text-emerald-300">{row.stage}</td>
                      <td className="border-r border-white/20 px-4 py-4 text-zinc-300">{row.impl}</td>
                      <td className="border-r border-white/20 px-4 py-4 font-mono text-[12px] text-zinc-400">{row.tools}</td>
                      <td className="px-4 py-4 font-mono font-bold tabular-nums text-white">{row.sla}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-px border-2 border-white/90 bg-white/90 md:grid-cols-4">
            {[
              ['BUNDLES LIVE', '12', GitBranch],
              ['MODELS / MARTS', '200+', Database],
              ['RUNS / DAY', '500+', Cpu],
              ['E2E LATENCY', '<18M', BarChart3],
            ].map(([label, value, Icon]) => {
              const I = Icon as typeof Cpu;
              return (
                <div key={label as string} className="bg-black px-5 py-5">
                  <I className="h-4 w-4 text-emerald-400" />
                  <div className="mt-3 text-3xl font-black tabular-nums text-white md:text-4xl">{value as string}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.25em] text-zinc-500">{label as string}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== 04 ARSENAL ===== */}
        <section id="arsenal" className="relative scroll-mt-16 border-x border-b-2 border-white/90 bg-white/[0.015] px-5 py-14 md:px-10">
          <Crosshairs />
          <Reveal>
            <SectionHead index="04" code="INVENTORY_MANIFEST // 4 LOTS + LANG" title="Arsenal" note="ALL LOTS: PRODUCTION TESTED" />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {inventory.map((lot, i) => (
              <Reveal key={lot.code} delay={Math.min(i * 0.05, 0.15)}>
                <div className="border border-white/20 bg-black/60 p-6 md:p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] tracking-[0.25em] text-zinc-500">{lot.code}</span>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-emerald-400">QTY: {lot.items.length}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-black tracking-tight text-white uppercase">{lot.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{lot.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-dashed border-white/20 pt-5">
                    {lot.items.map((s) => (
                      <span key={s} className="border border-white/20 px-2.5 py-1 font-mono text-[11px] text-zinc-200 hover:border-emerald-400/60 hover:text-emerald-300 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-6 flex flex-col gap-3 border border-white/20 bg-black/60 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[11px] tracking-[0.25em] text-zinc-500">LANG_MODULE — CROSS-REGIONAL OPS</span>
              <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                <span className="border border-white/20 px-2.5 py-1 text-zinc-200">ENGLISH: C2</span>
                <span className="border border-white/20 px-2.5 py-1 text-zinc-200">POLISH: CONVERSATIONAL</span>
                <span className="border border-white/20 px-2.5 py-1 text-zinc-200">URDU: NATIVE</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== 05 ACADEMIC ===== */}
        <section id="academic" className="relative scroll-mt-16 border-x border-b-2 border-white/90 px-5 py-14 md:px-10">
          <Crosshairs />
          <Reveal>
            <SectionHead index="05" code="ACADEMIC_RECORD // 2 ENTRIES" title="Academic" note="VERIFY: DIPLOMA EU" />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {academic.map((a, i) => (
              <Reveal key={a.file} delay={i * 0.08}>
                <div className="flex h-full flex-col border border-white/20 bg-black/60 p-6 md:p-7">
                  <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.25em] text-zinc-500">
                    <span>{a.file}</span>
                    <span className="border border-white/25 px-2 py-0.5 text-white">{a.year}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-black leading-tight tracking-tight text-white uppercase">{a.degree}</h3>
                  <div className="mt-1 font-mono text-[11px] tracking-[0.2em] text-emerald-400 uppercase">{a.institution}</div>
                  <p className="mt-4 flex-1 border-t border-dashed border-white/20 pt-4 text-[13px] leading-relaxed text-zinc-400">
                    {a.brief}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== 06 TRANSMIT ===== */}
        <section id="transmit" className="relative scroll-mt-16 border-x border-b-2 border-white/90 px-5 py-14 md:px-10">
          <Crosshairs />
          <Reveal>
            <SectionHead index="06" code="TRANSMIT // OPEN CHANNEL" title="Transmit" note="RESPONSE: <48H" />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm leading-relaxed text-zinc-400">
                Hiring for Analytics Engineering, BI modernization, or applied AI across EMEA? Open a channel. Currently
                based Warsaw — EU work authorization held, relocation to Vienna / EU / US on the table.
              </p>
              <div className="mt-6 space-y-3">
                <CopyRow label="DIRECT EMAIL" value="husnainchnaz@outlook.com" href="mailto:husnainchnaz@outlook.com" />
                <CopyRow label="PHONE / WHATSAPP" value="+48-666022047" href="tel:+48666022047" />
              </div>
              <div className="mt-3 border border-white/15 bg-white/[0.03] px-4 py-3">
                <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase">BASE &amp; CLEARANCE</div>
                <div className="mt-1 font-mono text-sm text-white">WARSAW, PL — EU DIPLOMA / WORK AUTH</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/hmustafa9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-mono text-[12px] tracking-[0.15em] text-zinc-200 hover:border-white hover:text-white transition-colors"
                >
                  GITHUB / HMUSTAFA9 <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/husnain-mustafa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-mono text-[12px] tracking-[0.15em] text-zinc-200 hover:border-white hover:text-white transition-colors"
                >
                  LINKEDIN / HUSNAIN-MUSTAFA <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <TransmitForm />
            </Reveal>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="relative border-x border-b-2 border-white/90 px-5 py-10 md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Barcode />
              <div className="mt-3 font-mono text-[10px] tracking-[0.3em] text-zinc-600">HSM-2026-EMEA · PG.END</div>
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] text-zinc-500">
              <span className="text-white">— END OF FILE —</span>
              <span className="mx-3 text-zinc-700">|</span>
              <a href="/mockups" className="hover:text-emerald-300 transition-colors">← ALL MOCKUPS</a>
              <span className="mx-3 text-zinc-700">|</span>
              <a href="#record" className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors">
                TOP <ArrowUp className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </footer>
        <div className="h-10" />
      </main>
    </div>
  );
}

function TransmitForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center border-2 border-emerald-400/60 bg-emerald-400/5 px-8 py-14 text-center">
        <div className="font-mono text-4xl text-emerald-400">[✓]</div>
        <h3 className="mt-4 text-xl font-black tracking-tight text-white uppercase">Transmission queued</h3>
        <p className="mt-2 max-w-sm text-sm text-zinc-400">Message logged. Expect a response within 48 hours.</p>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="border-2 border-white/90 bg-black p-6 md:p-8"
    >
      <div className="mb-6 flex items-center justify-between font-mono text-[11px] tracking-[0.25em] text-zinc-500">
        <span>FORM TX-01</span>
        <span className="text-emerald-400">● CHANNEL OPEN</span>
      </div>
      {[
        ['SENDER NAME', 'text', 'e.g. Sarah Jenkins'],
        ['SENDER EMAIL', 'email', 's.jenkins@company.com'],
      ].map(([label, type, ph]) => (
        <div key={label as string} className="mb-5">
          <label className="mb-2 block font-mono text-[11px] tracking-[0.25em] text-zinc-400">{label}</label>
          <input
            type={type as string}
            required
            placeholder={ph as string}
            className="w-full border border-white/20 bg-[#0a0a0a] px-4 py-3 font-mono text-sm text-white placeholder:text-zinc-700 focus:border-emerald-400 focus:outline-none transition-colors"
          />
        </div>
      ))}
      <div className="mb-6">
        <label className="mb-2 block font-mono text-[11px] tracking-[0.25em] text-zinc-400">PAYLOAD</label>
        <textarea
          required
          rows={4}
          placeholder="Analytics Engineer role — pipeline bundles, EMEA…"
          className="w-full resize-none border border-white/20 bg-[#0a0a0a] px-4 py-3 font-mono text-sm text-white placeholder:text-zinc-700 focus:border-emerald-400 focus:outline-none transition-colors"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-white py-4 font-mono text-sm font-bold tracking-[0.2em] text-black uppercase hover:bg-emerald-400 transition-colors"
      >
        TRANSMIT MESSAGE ▸
      </button>
    </form>
  );
}

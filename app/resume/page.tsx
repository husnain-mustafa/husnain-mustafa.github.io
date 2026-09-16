import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { PrintButton } from "../components/print-button";

export const metadata: Metadata = {
  title: "Résumé | Husnain Mustafa",
  description:
    "Résumé of Husnain Mustafa — Analytics Engineer working across applied AI, Databricks, and enterprise analytics.",
};

type Job = {
  org: string;
  sector: string;
  place: string;
  period: string;
  role: string;
  progression?: string;
  bullets: string[];
};

const experience: Job[] = [
  {
    org: "Cushman & Wakefield",
    sector: "Real Estate",
    place: "Warsaw, PL",
    period: "Jun 2024 — Present",
    role: "Analytics Engineer",
    progression:
      "Previously Business Intelligence Analyst, AI & ML (2025–2026) · Junior BI Analyst (2024–2025)",
    bullets: [
      "Designed, built, and shipped the Report Valuation Workspace from the ground up: automated evidence-document parsing, fact-checking, GIS analysis, AI report drafting, and QA checks — built so the valuers stay the pilots rather than the passengers. (React, Databricks)",
      "Shipped a Copilot Studio QA agent EMEA-wide for quality assurance across valuation reports, automating proofreading, validation, and fact-checking before release.",
      "Built data pipelines across several business functions, then built and tested Genie agents on top for quick data answers, analysis, visualisation, and lead generation.",
      "Leading proof-of-concept work on predictive modelling for capital markets, experimenting with targets, features, and modelling approaches to evaluate feasibility and impact.",
      "Prototyping AI agents for scalable, company-wide deployment using Azure AI Foundry.",
      "Built semantic models and curated datasets on Databricks for EMEA and APAC, structured for reuse, governance, and AI / agentic delivery.",
      "Developed and maintained BI dashboards integrating SharePoint, APIs, CRM, and other internal and external sources across Poland, CEE, and Nordic regions.",
      "Built internal applications to automate business processes and improve data accessibility, and contributed to an in-house BI platform consolidating regional analytics.",
    ],
  },
  {
    org: "Nokia Solutions and Networks",
    sector: "Telecommunications",
    place: "Warsaw, PL",
    period: "Feb 2023 — Jun 2024",
    role: "Working Student, Business Applications",
    bullets: [
      "Worked on machine learning and data analysis projects within the Business Applications team, supporting production and research use cases.",
      "Developed an in-house Python visualisation library for time-series data, inspired by Plotly, giving the team a friendly way to visualise and analyse their data.",
      "Implemented deep learning-based temporal clustering models in Python for Nokia-specific time-series use cases.",
    ],
  },
  {
    org: "Power Technology Research",
    sector: "Market Research",
    place: "Lahore, PK",
    period: "Jul 2022 — Oct 2022",
    role: "Junior Analyst, eMobility",
    bullets: [
      "Collected data on EV users, EVSE competitors, and the marketplace, consolidating it into databases, reports, and presentations.",
      "Compiled and analysed statistical data on EV charging infrastructure using primary and secondary research methods.",
    ],
  },
  {
    org: "Ufone",
    sector: "Telecommunications",
    place: "Lahore, PK",
    period: "Oct 2021 — Jul 2022",
    role: "Executive, RF Optimisation",
    progression: "Previously Management Trainee (Oct 2021 — Apr 2022)",
    bullets: [
      "Developed Power BI dashboards to improve network KPI monitoring and analysis.",
      "Improved daily worst-cell analysis to escalate issues with the vendor in good time.",
      "Developed site databases using GIS tools including Google Earth and MapInfo.",
    ],
  },
  {
    org: "Integriti",
    sector: "IT Services & Consulting",
    place: "Lahore, PK",
    period: "May 2021 — Oct 2021",
    role: "Technical Support Specialist",
    bullets: [],
  },
  {
    org: "foodpanda",
    sector: "Internet Marketplace",
    place: "Lahore, PK",
    period: "Feb 2021 — Mar 2021",
    role: "Automation Engineer Trainee",
    bullets: [],
  },
  {
    org: "Freelance",
    sector: "Editorial",
    place: "Lahore, PK",
    period: "Jun 2020 — May 2021",
    role: "Freelance Journalist",
    bullets: [],
  },
];

const education = [
  {
    degree: "MA Data Science & Business Analytics",
    org: "University of Warsaw",
    place: "Warsaw, PL",
    period: "2022 — 2024",
    notes: [
      "Thesis: NLP-driven text analytics on IMF statements and communiqués, evaluating how dictionary balance influences topic modelling, sentiment analysis, and long-term thematic trends across two decades.",
    ],
  },
  {
    degree: "BS Electrical Engineering",
    org: "Lahore University of Management Sciences",
    place: "Lahore, PK",
    period: "2018 — 2021",
    notes: [
      "Hybrid Renewable Energy Systems: developed an index for the economic and environmental feasibility of deploying a hybrid electric power system across locations in Pakistan.",
      "Gender and Speaker Recognition: compared machine learning algorithms for gender and speaker recognition in Urdu recordings.",
    ],
  },
  {
    degree: "FSc, Engineering",
    org: "Forman Christian College (A Chartered University)",
    place: "Lahore, PK",
    period: "2015 — 2017",
    notes: [],
  },
  {
    degree: "Matric, Sciences",
    org: "The Punjab School",
    place: "Lahore, PK",
    period: "2011 — 2014",
    notes: [],
  },
];

const skills = [
  {
    group: "Machine Learning & AI",
    items:
      "Clustering · Predictive Modelling · Time-Series Analysis · NLP · AI Agents · Proof-of-Concept Development · Model Evaluation",
  },
  {
    group: "Cloud, MLOps & DevOps",
    items:
      "Azure AI Foundry · Azure Machine Learning · Databricks · DevOps Pipelines · Model Prototyping · Automation Pipelines",
  },
  { group: "Programming", items: "Python · R · SQL · C++" },
  {
    group: "BI & Data Tools",
    items:
      "Power BI · Tableau · SharePoint APIs · CRM Integrations · Power Automate · Copilot Studio",
  },
  {
    group: "Python Libraries",
    items:
      "PyTorch · Pandas · NumPy · SciPy · scikit-learn · Matplotlib · Beautiful Soup · Selenium · Scrapy · Tslearn",
  },
];

const certifications = [
  "Quantum Computing and Data Sciences",
  "4G LTE Wireless Cellular Technology",
  "Tableau 2020 A-Z",
  "SIP Protocols",
  "Information Security Awareness",
];

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-bg text-ink antialiased">
      <SiteHeader />

      <main className="mx-auto max-w-[820px] px-6 pb-24 pt-16">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <h1 className="text-3xl font-medium tracking-[-0.03em] text-ink">Husnain Mustafa</h1>
            <p className="mt-2 text-sm text-muted">
              Analytics Engineer · Applied AI &amp; Data Engineering
            </p>
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-faint">
              husnainchnaz@outlook.com · +48 666 022 047 · Warsaw, Poland
              <br />
              linkedin.com/in/husnain-mustafa · github.com/husnain-mustafa
            </p>
          </div>
          <div className="shrink-0">
            <PrintButton />
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Summary</h2>
          <p className="mt-4 max-w-[74ch] text-sm leading-relaxed text-muted">
            Electrical engineer with a master&rsquo;s in Data Science and a broad analytical
            background across telecommunications, renewable energy markets, and real estate. I work
            between data engineering and the business — building production AI agents, Databricks
            semantic models, and the internal applications around them.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Experience</h2>
          <div className="mt-6">
            {experience.map((e) => (
              <div key={e.org + e.role} className="border-t border-line py-6 first:border-t-0 first:pt-0">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-sm font-medium text-ink">
                    {e.org}
                    <span className="font-normal text-muted"> · {e.sector}</span>
                  </h3>
                  <span className="font-mono text-xs text-faint">{e.period}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink">{e.role}</p>
                {e.progression && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    {e.progression}
                  </p>
                )}
                <p className="mt-1 text-sm text-muted">{e.place}</p>
                {e.bullets.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Education</h2>
          <div className="mt-6 space-y-6">
            {education.map((e) => (
              <div key={e.degree} className="border-t border-line pt-5">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-sm font-medium text-ink">{e.degree}</h3>
                  <span className="font-mono text-xs text-faint">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {e.org} · {e.place}
                </p>
                {e.notes.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {e.notes.map((n) => (
                      <li key={n} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {n}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            Skills, Libraries &amp; Tools
          </h2>
          <div className="mt-6 space-y-4">
            {skills.map((s) => (
              <div key={s.group} className="border-t border-line pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {s.group}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">{s.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              Certifications
            </h2>
            <ul className="mt-5 space-y-2">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              Languages
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>English — C2</li>
              <li>Urdu — native</li>
              <li>Punjabi — native</li>
              <li>Polish — elementary</li>
            </ul>
            <p className="mt-5 text-sm text-muted">
              <span className="text-ink">Honours:</span> Talent Award
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

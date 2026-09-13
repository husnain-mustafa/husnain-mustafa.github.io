"use client";
import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const experiences = [
  {
    company: "Cushman & Wakefield",
    role: "Business Intelligence Analyst - AI & Machine Learning",
    division: "EMEA Innovation & Analytics",
    location: "Warsaw, Poland",
    period: "Jun 2024 - Present",
    bullets: [
      "Developed and maintained scalable BI pipelines and dashboards integrating SharePoint APIs, CRM, and external data sources, delivering operational insights across EMEA.",
      "Translated complex, ambiguous business requirements from senior stakeholders across Poland, CEE, and Nordic regions into end-to-end data science and analytics solutions.",
      "Led CEE portfolio migration to Databricks by defining data architecture, optimising legacy pipelines, and coordinating cross-functional delivery.",
      "Designed and deployed production AI agents for automated report validation and fact-checking across structured and unstructured data, adopted company-wide.",
      "Built Genie agents on Databricks enabling natural language querying of operational datasets, eliminating manual reporting bottlenecks."
    ]
  },
  {
    company: "Nokia Solutions and Networks",
    role: "Working Student - Business Applications",
    division: "Telecommunications R&D",
    location: "Warsaw, Poland",
    period: "Feb 2023 - Jun 2024",
    bullets: [
      "Delivered ML and data analysis projects end-to-end across research and live production environments.",
      "Implemented deep learning temporal clustering models in Python for large-scale time-series analysis in production.",
      "Developed an internal visualisation library adopted across the team to standardise telemetry and reporting workflows."
    ]
  },
  {
    company: "Power Technology Research",
    role: "Junior Analyst - eMobility",
    division: "Market Intelligence",
    location: "Lahore, Pakistan",
    period: "Jul 2022 - Oct 2022",
    bullets: [
      "Consolidated EV market data from multiple global sources into structured databases.",
      "Produced analytical reports and visualisations to support client decision-making in the eMobility sector."
    ]
  },
  {
    company: "Ufone",
    role: "Executive - RF Optimisation",
    division: "Telecommunications",
    location: "Lahore, Pakistan",
    period: "Oct 2021 - Jun 2022",
    bullets: [
      "Built Power BI dashboards for real-time network KPI monitoring and automated reporting workflows.",
      "Improved operational visibility and issue escalation response times across engineering teams."
    ]
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Professional Career
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Where I&apos;ve Delivered Value
          </h2>
          <p className="text-zinc-400 text-base">
            From telecommunications RF optimization to enterprise AI agents at Cushman &amp; Wakefield across EMEA.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-zinc-950 group-hover:scale-125 transition-transform" />

              {/* Period badge (Desktop side) */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24 text-xs font-mono text-zinc-400 font-semibold">
                {exp.period}
              </div>

              {/* Card content */}
              <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <p className="text-sm font-semibold text-indigo-400">{exp.company} <span className="text-zinc-500 font-normal">({exp.division})</span></p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-zinc-400">
                    <span className="md:hidden inline-flex items-center gap-1 font-mono text-indigo-300">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

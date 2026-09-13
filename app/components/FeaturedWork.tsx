"use client";
import React from 'react';
import { Bot, Database, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Production AI Agent for Report Validation",
    company: "Cushman & Wakefield",
    category: "Applied AI & Automation",
    description: "Designed and deployed production AI agents for automated report validation and fact-checking across structured and unstructured data repositories. Adopted company-wide across multiple EMEA teams to eliminate manual verification bottlenecks.",
    tags: ["AI Agents", "GenAI", "RAG Pipelines", "Python", "Enterprise Integration"],
    icon: Bot,
    metric: "Adopted company-wide across multiple teams",
    gradient: "from-indigo-500/10 via-purple-500/10 to-transparent",
    borderHover: "hover:border-indigo-500/50",
  },
  {
    title: "Databricks Genie Natural-Language Agent",
    company: "Cushman & Wakefield",
    category: "Cloud Data Architecture",
    description: "Led the CEE portfolio migration to Databricks and built Genie agents enabling business users to query complex operational datasets using natural language, drastically cutting reporting turnaround time.",
    tags: ["Azure Databricks", "Genie", "Delta Lake", "PySpark", "NLP"],
    icon: Database,
    metric: "Eliminated manual reporting bottlenecks",
    gradient: "from-emerald-500/10 via-teal-500/10 to-transparent",
    borderHover: "hover:border-emerald-500/50",
  },
  {
    title: "IMF Communique NLP & Sentiment Analysis",
    company: "University of Warsaw (Master's Thesis)",
    category: "Advanced Data Science",
    description: "Developed an advanced NLP pipeline analyzing two decades of International Monetary Fund communiques. Implemented topic modeling and sentiment analysis to uncover macroeconomic thematic trend shifts.",
    tags: ["Python", "NLP", "Topic Modelling", "Sentiment Analysis", "Deep Learning"],
    icon: FileText,
    metric: "20 years of macroeconomic text analyzed",
    gradient: "from-sky-500/10 via-blue-500/10 to-transparent",
    borderHover: "hover:border-sky-500/50",
  },
];

export function FeaturedWork() {
  return (
    <section id="projects" className="py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Featured Case Studies
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Production AI &amp; Data Impact
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-zinc-400 max-w-md text-sm md:text-base">
            Real-world deployments bridging enterprise business intelligence, cloud architecture, and applied agentic AI.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 flex flex-col justify-between transition-all duration-300 ${p.borderHover} hover:shadow-2xl hover:shadow-indigo-500/5 group`}
              >
                {/* Background ambient gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${p.gradient} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-zinc-200 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700">
                      {p.category}
                    </span>
                  </div>

                  {/* Company & Title */}
                  <span className="text-xs font-medium text-indigo-400 block mb-1">{p.company}</span>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-zinc-800/80">
                  {/* Key Metric highlight */}
                  <div className="mb-4 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {p.metric}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-950/60 text-zinc-300 border border-zinc-800/80 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";
import React from 'react';
import { Cpu, Code2, Cloud, BarChart3, Globe2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    description: "Production AI agents, LLM integration, RAG architectures, and NLP.",
    skills: ["AI Agents", "GenAI", "RAG Pipelines", "NLP", "Time-Series Analysis", "Deep Learning", "Predictive Modelling"],
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
    textColor: "text-indigo-400"
  },
  {
    title: "Programming & Data Science",
    icon: Code2,
    description: "Core programming languages and analytical libraries.",
    skills: ["Python", "SQL", "PySpark", "R", "C++", "PyTorch", "Pandas", "Scikit-learn"],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    textColor: "text-emerald-400"
  },
  {
    title: "Cloud & Data Engineering",
    icon: Cloud,
    description: "Enterprise data warehouses, lakehouses, and orchestration.",
    skills: ["Azure Databricks", "Delta Lake", "Genie", "Workflows", "Azure ML", "Azure Data Factory", "DevOps Pipelines"],
    color: "from-sky-500/20 to-blue-500/20",
    border: "border-sky-500/30",
    textColor: "text-sky-400"
  },
  {
    title: "BI, Analytics & Automation",
    icon: BarChart3,
    description: "Business intelligence dashboards, APIs, and workflow automation.",
    skills: ["Power BI", "Tableau", "Power Automate", "Copilot Studio", "SharePoint APIs", "CRM Integrations", "Git", "Jira", "Confluence"],
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    textColor: "text-amber-400"
  },
];

export function SkillsStack() {
  return (
    <section id="skills" className="py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-zinc-400 text-base">
            Comprehensive tooling stack mastered through enterprise deployments and advanced academic research.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur hover:border-zinc-700 transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} flex items-center justify-center ${cat.textColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
                      <p className="text-xs text-zinc-400">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-200 text-xs font-mono font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
                  <span>Production Tested</span>
                  <span className="font-mono text-zinc-400">EMEA Scale</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages strip */}
        <div className="mt-8 p-6 rounded-3xl bg-zinc-950 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Languages</h4>
              <p className="text-xs text-zinc-400">Multilingual cross-regional collaboration</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200">English: C2 (Native/Fluent)</span>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200">Polish: Conversational</span>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200">Urdu: Native</span>
          </div>
        </div>

      </div>
    </section>
  );
}

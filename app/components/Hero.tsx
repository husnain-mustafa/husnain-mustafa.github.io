"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Database, Bot, Cpu, MapPin, Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[92dvh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs md:text-sm font-medium mb-6 shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>BI Analyst Turned Applied AI Consultant</span>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Warsaw, Poland (EU Work Auth)
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6"
          >
            Building production-grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">agentic AI &amp; BI solutions</span> across EMEA.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Deploying company-wide AI agents, leading regional Databricks migrations at Cushman &amp; Wakefield, and translating complex operational data into actionable enterprise intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-zinc-950 font-semibold text-base hover:bg-zinc-200 transition-all shadow-xl shadow-white/10 group"
            >
              Explore Featured Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold text-base hover:bg-zinc-800 hover:text-white transition-all"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          {/* Quick Metrics / Proof Points Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-zinc-800/80 text-left"
          >
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur">
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <Bot className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">AI Deployment</span>
              </div>
              <p className="text-sm font-medium text-zinc-200">Company-wide AI Agents at C&amp;W</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Database className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Cloud Migration</span>
              </div>
              <p className="text-sm font-medium text-zinc-200">CEE Portfolio Databricks Lead</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur">
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <Cpu className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Analytics &amp; BI</span>
              </div>
              <p className="text-sm font-medium text-zinc-200">SharePoint, CRM &amp; Power BI</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Education</span>
              </div>
              <p className="text-sm font-medium text-zinc-200">MA Data Science (Univ. Warsaw)</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

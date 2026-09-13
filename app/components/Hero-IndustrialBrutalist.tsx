"use client";
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronRight, Database, GitBranch, ArrowUpRight, Sparkles, Terminal, Code2 } from 'lucide-react';

export function HeroIndustrialBrutalist() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-black">
      {/* Brutalist grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
      </div>

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 px-4 py-2 bg-zinc-950 border border-white/10 mb-8 font-mono text-xs text-zinc-500"
        >
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-amber-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-2">portfolio.main // v2.1.0 // PROD</span>
          <span className="ml-auto text-green-400/50">█</span>
        </motion.div>

        {/* Eyebrow - brutalist style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 mb-6"
        >
          <Terminal className="w-4 h-4 text-white/60" />
          <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase">ANALYTICS ENGINEER</span>
          <span className="w-px h-4 bg-white/10" />
          <span className="font-mono text-xs tracking-widest text-zinc-600">BI → PIPELINE BUNDLES</span>
          <span className="w-px h-4 bg-white/10" />
          <span className="font-mono text-xs tracking-widest text-emerald-400">WARSAW // EU_AUTH</span>
        </motion.div>

        {/* Main Headline - Extreme scale contrast */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-9xl lg:text-[12rem] font-black tracking-tighter text-white leading-[0.95] mb-4 overflow-hidden"
        >
          <span className="block">BUILDING</span>
          <span className="block text-zinc-800 -mt-4 relative z-10" style={{ textShadow: '4px 4px 0px rgba(255,255,255,0.05)' }}>
            PIPELINE
          </span>
          <span className="block text-emerald-400 -mt-4">
            BUNDLES
          </span>
        </motion.h1>

        {/* Subtext - small, mono */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-base lg:text-lg text-zinc-500 leading-relaxed max-w-xl mb-12 tracking-wide"
        >
          BI Analyst → Analytics Engineer. Modular, version-controlled data pipelines. dbt + SQLMesh + DuckDB. Orchestrating extract → transform → load → serve across EMEA.
        </motion.p>

        {/* Brutalist CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start justify-start gap-4 mb-16"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-none bg-white text-black font-bold font-mono text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-emerald-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-none bg-transparent border-2 border-white/20 text-zinc-300 font-bold font-mono text-sm uppercase tracking-wider hover:border-white hover:text-white transition-colors"
          >
            CONNECT
          </a>
        </motion.div>

        {/* Pipeline Specification Table - Brutalist */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">PIPELINE SPECIFICATION</div>
          
          <div className="overflow-hidden border-t-2 border-white/10 border-b-2 border-white/10">
            <div className="grid grid-cols-[1fr_2fr_1fr_1fr] text-sm">
              {/* Header */}
              <div className="bg-white/5 px-4 py-3 border-r border-white/10 font-bold text-zinc-300">STAGE</div>
              <div className="bg-white/5 px-4 py-3 border-r border-white/10 font-bold text-zinc-300">IMPLEMENTATION</div>
              <div className="bg-white/5 px-4 py-3 border-r border-white/10 font-bold text-zinc-300">TOOLING</div>
              <div className="bg-white/5 px-4 py-3 font-bold text-zinc-300">SLA</div>
              
              {/* Rows */}
              {[
                { stage: 'EXTRACT', impl: 'Incremental CDC / Batch API', tools: 'Airbyte, Fivetran, Custom', sla: '< 5 min' },
                { stage: 'TRANSFORM', impl: 'Modular dbt models / SQLMesh', tools: 'dbt Core, SQLMesh, DuckDB', sla: '< 10 min' },
                { stage: 'LOAD', impl: 'Merge / Append / SCD2', tools: 'Snowflake, BigQuery, ClickHouse', sla: '< 2 min' },
                { stage: 'SERVE', impl: 'BI / API / ML Features', tools: 'Looker, Evidence, GraphQL', sla: '< 1 min' },
              ].map((row, i) => (
                <motion.div
                  key={row.stage}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className={`${i % 2 === 0 ? 'bg-white/3' : ''} border-t border-white/5`}
                >
                  <div className="px-4 py-3 border-r border-white/10 font-medium text-emerald-400">{row.stage}</div>
                  <div className="px-4 py-3 border-r border-white/10 text-zinc-400 font-mono">{row.impl}</div>
                  <div className="px-4 py-3 border-r border-white/10 text-zinc-500">{row.tools}</div>
                  <div className="px-4 py-3 text-zinc-600 font-mono tabular-nums">{row.sla}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer metrics */}
          <div className="mt-8 grid grid-cols-4 gap-4 text-center">
            {[
              { label: 'PIPELINES', value: '12', unit: 'PROD' },
              { label: 'MODELS', value: '200+', unit: 'DBT' },
              { label: 'RUNS/DAY', value: '500+', unit: 'EXEC' },
              { label: 'LATENCY', value: '<15', unit: 'MIN' },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.05 }}
                className="py-4 border-l border-white/5 first:border-none"
              >
                <div className="text-3xl lg:text-4xl font-black text-white tabular-nums">{m.value}</div>
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">{m.label}</div>
                <div className="font-mono text-xs text-emerald-400 uppercase">{m.unit}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}